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
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; border-bottom: 3px solid #e91e63; padding-bottom: 10px;">New Consultation Request</h2>
            
            <div style="margin: 20px 0;">
              <p><strong style="color: #555;">Name:</strong> ${
                formData.name
              }</p>
              <p><strong style="color: #555;">Email:</strong> ${
                formData.email
              }</p>
              <p><strong style="color: #555;">Phone:</strong> ${
                formData.phone || "Not provided"
              }</p>
            </div>

            <div style="margin: 20px 0;">
              <p><strong style="color: #555;">Services Interested In:</strong></p>
              <ul style="margin: 10px 0; padding-left: 20px;">
                ${formData.serviceType
                  .map((service) => {
                    const serviceLabels = {
                      "social-media": "Social Media Management",
                      "content-creation": "Content Creation",
                      "paid-advertising": "Paid Advertising",
                      "influencer-marketing": "Influencer Marketing",
                      "brand-development": "Brand Development",
                      "account-recovery": "Account Recovery",
                      "digital-products": "Digital Product Marketing",
                      "crisis-management": "Crisis Management",
                      "event-promotion": "Event Promotion",
                      custom: "Custom Package",
                    };
                    return `<li style="margin: 5px 0;">${
                      serviceLabels[service] || service
                    }</li>`;
                  })
                  .join("")}
              </ul>
            </div>

            <div style="margin: 20px 0;">
              <p><strong style="color: #555;">Project Details:</strong></p>
              <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
                <p style="margin: 0; line-height: 1.6;">${formData.message}</p>
              </div>
            </div>

            <div style="margin: 20px 0;">
              <p><strong style="color: #555;">Preferred Contact Method:</strong> ${
                formData.preferredContact || "Not specified"
              }</p>
            </div>

            <div style="margin: 20px 0; padding: 15px; background-color: #e8f5e8; border-radius: 5px; border-left: 4px solid #4caf50;">
              <p style="margin: 0; color: #2e7d32;"><strong>Action Required:</strong> Please respond to this consultation request within 24 hours.</p>
            </div>
          </div>
        </div>
      `;
    } else if (formType === "recovery") {
      emailSubject = `New Account Recovery Request from ${formData.fullName}`;
      emailContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; border-bottom: 3px solid #e91e63; padding-bottom: 10px;">New Account Recovery Request</h2>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #555; margin-bottom: 15px;">Account Information</h3>
              <p><strong style="color: #555;">Full Name:</strong> ${
                formData.fullName
              }</p>
              <p><strong style="color: #555;">Username/Handle:</strong> ${
                formData.username
              }</p>
              <p><strong style="color: #555;">Linked Email:</strong> ${
                formData.linkedEmail
              }</p>
              <p><strong style="color: #555;">Linked Phone:</strong> ${
                formData.linkedPhone || "Not provided"
              }</p>
            </div>

            <div style="margin: 20px 0;">
              <h3 style="color: #555; margin-bottom: 15px;">Issue Details</h3>
              <p><strong style="color: #555;">Platforms Affected:</strong> ${formData.platform.join(
                ", "
              )}</p>
              <p><strong style="color: #555;">Issue Type:</strong> ${
                formData.issue
              }</p>
              <p><strong style="color: #555;">Account Type:</strong> ${
                formData.accountType
              }</p>
              <p><strong style="color: #555;">Disabled/Hacked Date:</strong> ${
                formData.disableDate || "Not provided"
              }</p>
            </div>

            <div style="margin: 20px 0;">
              <h3 style="color: #555; margin-bottom: 15px;">Recovery History</h3>
              <p><strong style="color: #555;">Appealed Before:</strong> ${
                formData.appealedBefore
              }</p>
              ${
                formData.appealDetails
                  ? `<div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
                       <p style="margin: 0 0 10px 0;"><strong style="color: #555;">Previous Appeal Details:</strong></p>
                       <p style="margin: 0; line-height: 1.6;">${formData.appealDetails}</p>
                     </div>`
                  : ""
              }
            </div>

            <div style="margin: 20px 0;">
              <h3 style="color: #555; margin-bottom: 15px;">Contact Information</h3>
              <p><strong style="color: #555;">Contact Handle:</strong> ${
                formData.contactHandle || "Not provided"
              }</p>
              <p><strong style="color: #555;">Country/Location:</strong> ${
                formData.country || "Not provided"
              }</p>
            </div>

            <div style="margin: 20px 0; padding: 15px; background-color: #fff3cd; border-radius: 5px; border-left: 4px solid #ffc107;">
              <p style="margin: 0; color: #856404;"><strong>Policy Agreement:</strong> ${
                formData.agreeToPolicy
                  ? "✅ Agreed to recovery policies"
                  : "❌ Not agreed to policies"
              }</p>
            </div>

            <div style="margin: 20px 0; padding: 15px; background-color: #e8f5e8; border-radius: 5px; border-left: 4px solid #4caf50;">
              <p style="margin: 0; color: #2e7d32;"><strong>Action Required:</strong> Please review this recovery request and respond within 24 hours.</p>
            </div>
          </div>
        </div>
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
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #333; border-bottom: 3px solid #e91e63; padding-bottom: 10px;">
            Thank you for your ${
              formType === "consultation"
                ? "consultation request"
                : "recovery request"
            }!
          </h2>
          
          <div style="margin: 20px 0;">
            <p style="font-size: 16px; line-height: 1.6; color: #555;">
              We have received your message and will get back to you within 24 hours.
            </p>
            <p style="font-size: 16px; line-height: 1.6; color: #555;">
              If you have any urgent questions, please contact us directly at 
              <a href="mailto:sheytimahmedia@gmail.com" style="color: #e91e63; text-decoration: none;">
                sheytimahmedia@gmail.com
              </a>
            </p>
          </div>

          <div style="margin: 30px 0; padding: 20px; background-color: #f8f9fa; border-radius: 5px;">
            <h3 style="color: #333; margin-bottom: 15px;">What happens next?</h3>
            <ul style="color: #555; line-height: 1.8; padding-left: 20px;">
              <li>We'll review your request within 24 hours</li>
              <li>Our team will contact you via your preferred method</li>
              <li>We'll discuss your project requirements in detail</li>
              <li>We'll provide a customized proposal for your needs</li>
            </ul>
          </div>

          <div style="margin: 30px 0; text-align: center;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              Best regards,<br>
              <strong style="color: #333;">Sheytimah Media Team</strong>
            </p>
          </div>
        </div>
      </div>
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
