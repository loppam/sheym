import { Instagram, Linkedin, Twitter } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/sheytimahmedia_",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sheytimah-media-b86622386",
    },
    { name: "Twitter/X", icon: Twitter, href: "https://x.com/sheytimahm11838" },
  ];

  const quickLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Services", href: "services" },
    { name: "Portfolio", href: "portfolio" },
    { name: "Booking", href: "booking" },
    // { name: "Shop", href: "shop" },
  ];

  const services = [
    "Social Media Management",
    "Content Creation",
    "Paid Advertising",
    "Account Recovery",
    "Brand Development",
    "Influencer Marketing",
  ];

  const privacyContent = (
    <div className="space-y-4 max-h-60 overflow-y-auto text-sm leading-relaxed">
      <p className="text-sheytimah-dark">Effective Date: [Insert Date]</p>
      <p className="text-sheytimah-dark">
        At Sheytimah Media, we respect and protect the privacy of our clients,
        partners, and users. This Privacy Policy explains how we collect, use,
        and safeguard your information.
      </p>
      <div className="space-y-2">
        <h4 className="font-semibold text-sheytimah-dark">
          1. Information We Collect
        </h4>
        <ul className="list-disc pl-5 space-y-1 text-sheytimah-dark">
          <li>Personal details (name, email, phone number, address)</li>
          <li>
            Business details (brand name, social media handles, project
            requirements)
          </li>
          <li>Payment details (billing info, transaction data)</li>
          <li>
            Analytics and technical data (website cookies, engagement metrics,
            ad performance data)
          </li>
        </ul>
      </div>
      <div className="space-y-2">
        <h4 className="font-semibold text-sheytimah-dark">
          2. How We Use Your Information
        </h4>
        <ul className="list-disc pl-5 space-y-1 text-sheytimah-dark">
          <li>To provide and manage our services</li>
          <li>To process payments and invoices</li>
          <li>To communicate updates, offers, and service changes</li>
          <li>To improve our marketing and business strategies</li>
          <li>To comply with legal obligations</li>
        </ul>
      </div>
      <div className="space-y-2">
        <h4 className="font-semibold text-sheytimah-dark">
          3. Data Sharing & Disclosure
        </h4>
        <ul className="list-disc pl-5 space-y-1 text-sheytimah-dark">
          <li>We do not sell your information to third parties.</li>
          <li>
            We may share data with trusted partners (e.g., payment processors,
            ad platforms, subcontractors) solely to provide services.
          </li>
          <li>
            We may disclose information if required by law or to protect our
            rights.
          </li>
        </ul>
      </div>
      <div className="space-y-2">
        <h4 className="font-semibold text-sheytimah-dark">4. Data Security</h4>
        <ul className="list-disc pl-5 space-y-1 text-sheytimah-dark">
          <li>We use industry-standard measures to protect client data.</li>
          <li>Access is restricted to authorized team members only.</li>
        </ul>
      </div>
      <div className="space-y-2">
        <h4 className="font-semibold text-sheytimah-dark">
          5. International Clients
        </h4>
        <p className="text-sheytimah-dark">
          Since Sheytimah Media works with clients globally, your data may be
          transferred and stored in different locations, but always safeguarded
          under this policy.
        </p>
      </div>
      <div className="space-y-2">
        <h4 className="font-semibold text-sheytimah-dark">6. Your Rights</h4>
        <ul className="list-disc pl-5 space-y-1 text-sheytimah-dark">
          <li>You can request access, correction, or deletion of your data.</li>
          <li>You can opt-out of marketing communications anytime.</li>
        </ul>
      </div>
      <div className="space-y-2">
        <h4 className="font-semibold text-sheytimah-dark">7. Contact Us</h4>
        <p className="text-sheytimah-dark">
          For questions about privacy, contact us at: sheytimahmedia@gmail.com
        </p>
      </div>
    </div>
  );

  const termsContent = (
    <div className="space-y-4 max-h-60 overflow-y-auto text-sm leading-relaxed">
      <p className="text-sheytimah-dark">Effective Date: [Insert Date]</p>
      <p className="text-sheytimah-dark">
        Welcome to Sheytimah Media. By using our services, you agree to the
        following Terms of Service.
      </p>
      <div className="space-y-2">
        <h4 className="font-semibold text-sheytimah-dark">1. Services</h4>
        <ul className="list-disc pl-5 space-y-1 text-sheytimah-dark">
          <li>Social media management & content creation</li>
          <li>Digital marketing & ad campaigns</li>
          <li>Business consulting & training courses</li>
          <li>Brand growth strategies</li>
          <li>Account recovery support</li>
        </ul>
      </div>
      <div className="space-y-2">
        <h4 className="font-semibold text-sheytimah-dark">
          2. Payments & Refunds
        </h4>
        <ul className="list-disc pl-5 space-y-1 text-sheytimah-dark">
          <li>All payments must be made upfront or as agreed in contract.</li>
          <li>
            Refunds are only available if services have not been initiated.
          </li>
          <li>
            Once work has begun, payments are non-refundable unless otherwise
            stated in writing.
          </li>
        </ul>
      </div>
      <div className="space-y-2">
        <h4 className="font-semibold text-sheytimah-dark">
          3. Client Responsibilities
        </h4>
        <ul className="list-disc pl-5 space-y-1 text-sheytimah-dark">
          <li>
            Provide accurate information, access credentials, and timely
            feedback.
          </li>
          <li>
            Ensure content provided does not violate third-party rights or laws.
          </li>
        </ul>
      </div>
      <div className="space-y-2">
        <h4 className="font-semibold text-sheytimah-dark">
          4. Confidentiality
        </h4>
        <p className="text-sheytimah-dark">
          We maintain confidentiality of all client information. Both parties
          agree not to disclose sensitive data to unauthorized parties.
        </p>
      </div>
      <div className="space-y-2">
        <h4 className="font-semibold text-sheytimah-dark">
          5. Limitation of Liability
        </h4>
        <p className="text-sheytimah-dark">
          Sheytimah Media is not liable for indirect damages, loss of revenue,
          or third-party platform restrictions (e.g., account suspension by
          Instagram, Meta, TikTok, etc.). Our responsibility is limited to the
          value of the service contract.
        </p>
      </div>
      <div className="space-y-2">
        <h4 className="font-semibold text-sheytimah-dark">
          6. Dispute Resolution
        </h4>
        <p className="text-sheytimah-dark">
          Any disputes will first be attempted to be resolved amicably. If
          unresolved, disputes shall be governed under Nigerian law.
        </p>
      </div>
      <div className="space-y-2">
        <h4 className="font-semibold text-sheytimah-dark">7. Amendments</h4>
        <p className="text-sheytimah-dark">
          We reserve the right to update these Terms and Privacy Policy at any
          time. Clients will be notified of significant changes.
        </p>
      </div>
    </div>
  );

  return (
    <footer className="footer gradient-hero">
      <div className="page-container py-12">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section space-y-4">
            <h3 className="footer-logo">Sheytimah Media</h3>
            <p className="footer-description">
              Helping brands grow online with creative strategy and
              result-driven marketing.
            </p>
            <div className="footer-contact-info">
              <p className="footer-contact-item">
                <span className="footer-contact-label">Email:</span>{" "}
                <a
                  href="mailto:sheytimahmedia@gmail.com"
                  className="footer-email-link"
                >
                  sheytimahmedia@gmail.com
                </a>
              </p>
              <p className="footer-contact-item">
                <span className="footer-contact-label">Location:</span> Nigeria
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section space-y-4">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <div
                    className="footer-link"
                    onClick={() => onNavigate(link.href)}
                  >
                    {link.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section space-y-4">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <div
                    className="footer-link"
                    onClick={() => onNavigate("services")}
                  >
                    {service}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links & Contact */}
          <div className="footer-section space-y-4">
            <h4 className="footer-title">Connect With Us</h4>
            <div className="footer-social">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link hover-lift"
                    aria-label={social.name}
                  >
                    <Icon style={{ width: "1.25rem", height: "1.25rem" }} />
                  </a>
                );
              })}
            </div>
            <div className="space-y-2">
              <p className="footer-additional-note">Also find us on TikTok</p>
              <div
                className="footer-contact-btn"
                onClick={() => onNavigate("booking")}
              >
                Book Free Consultation
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-bottom-text">
            © 2024 Sheytimah Media. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <span className="footer-bottom-link">Privacy Policy</span>
              </AlertDialogTrigger>
              <AlertDialogContent className="max-w-2xl mx-4">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-sheytimah-dark">
                    Sheytimah Media – Privacy Policy
                  </AlertDialogTitle>
                  <AlertDialogDescription asChild>
                    {privacyContent}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction className="bg-sheytimah-accent hover:bg-sheytimah-highlight text-white">
                    Close
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <span className="footer-bottom-link">Terms of Service</span>
              </AlertDialogTrigger>
              <AlertDialogContent className="max-w-2xl mx-4">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-sheytimah-dark">
                    📜 Sheytimah Media – Terms of Service
                  </AlertDialogTitle>
                  <AlertDialogDescription asChild>
                    {termsContent}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction className="bg-sheytimah-accent hover:bg-sheytimah-highlight text-white">
                    Close
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <span className="footer-bottom-link">Refund Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
