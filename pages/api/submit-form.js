import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    console.log("API function called with method:", req.method);
    console.log("Request body:", req.body);

    const { formType, formData } = req.body;

    // Validate required fields
    if (!formType || !formData) {
      console.log("Missing required fields:", { formType, formData });
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log("Missing email environment variables");
      return res.status(500).json({
        error: "Email configuration not set up. Please contact support.",
      });
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // sheytimahmedia@gmail.com
        pass: process.env.EMAIL_PASS, // App password
      },
    });

    // Format email content based on form type
    let emailSubject, emailContent;

    if (formType === "consultation") {
      emailSubject = `New Consultation Request from ${formData.name}`;
      emailContent = `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone || "Not provided"}</p>
        <p><strong>Services Interested In:</strong></p>
        <ul>
          ${formData.serviceType
            .map((service) => `<li>${service}</li>`)
            .join("")}
        </ul>
        <p><strong>Project Details:</strong></p>
        <p>${formData.message}</p>
        <p><strong>Preferred Contact Method:</strong> ${
          formData.preferredContact || "Not specified"
        }</p>
        <p><strong>Newsletter Subscription:</strong> ${
          formData.newsletter ? "Yes" : "No"
        }</p>
      `;
    } else if (formType === "recovery") {
      emailSubject = `New Account Recovery Request from ${formData.fullName}`;
      emailContent = `
        <h2>New Account Recovery Request</h2>
        <p><strong>Full Name:</strong> ${formData.fullName}</p>
        <p><strong>Username/Handle:</strong> ${formData.username}</p>
        <p><strong>Linked Email:</strong> ${formData.linkedEmail}</p>
        <p><strong>Linked Phone:</strong> ${
          formData.linkedPhone || "Not provided"
        }</p>
        <p><strong>Platforms Affected:</strong> ${formData.platform.join(
          ", "
        )}</p>
        <p><strong>Issue Type:</strong> ${formData.issue}</p>
        <p><strong>Account Type:</strong> ${formData.accountType}</p>
        <p><strong>Disabled/Hacked Date:</strong> ${
          formData.disableDate || "Not provided"
        }</p>
        <p><strong>Appealed Before:</strong> ${formData.appealedBefore}</p>
        ${
          formData.appealDetails
            ? `<p><strong>Previous Appeal Details:</strong> ${formData.appealDetails}</p>`
            : ""
        }
        <p><strong>Contact Handle:</strong> ${
          formData.contactHandle || "Not provided"
        }</p>
        <p><strong>Country/Location:</strong> ${
          formData.country || "Not provided"
        }</p>
        <p><strong>Agreed to Policy:</strong> ${
          formData.agreeToPolicy ? "Yes" : "No"
        }</p>
      `;
    } else {
      return res.status(400).json({ error: "Invalid form type" });
    }

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "sheytimahmedia@gmail.com",
      subject: emailSubject,
      html: emailContent,
      replyTo: formData.email || formData.linkedEmail,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to user
    const userConfirmationSubject = `Thank you for contacting Sheytimah Media`;
    const userConfirmationContent = `
      <h2>Thank you for your ${
        formType === "consultation"
          ? "consultation request"
          : "recovery request"
      }!</h2>
      <p>We have received your message and will get back to you within 24 hours.</p>
      <p>If you have any urgent questions, please contact us directly at sheytimahmedia@gmail.com</p>
      <br>
      <p>Best regards,<br>Sheytimah Media Team</p>
    `;

    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: formData.email || formData.linkedEmail,
      subject: userConfirmationSubject,
      html: userConfirmationContent,
    };

    await transporter.sendMail(userMailOptions);

    res.status(200).json({
      success: true,
      message: `${
        formType === "consultation"
          ? "Consultation request"
          : "Recovery request"
      } submitted successfully!`,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      error: "Failed to send email",
      details: error.message,
    });
  }
}
