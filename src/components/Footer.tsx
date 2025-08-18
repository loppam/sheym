import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter/X', icon: Twitter, href: '#' },
  ];

  const quickLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Services', href: 'services' },
    { name: 'Portfolio', href: 'portfolio' },
    { name: 'Booking', href: 'booking' },
    { name: 'Shop', href: 'shop' },
  ];

  const services = [
    'Social Media Management',
    'Content Creation',
    'Paid Advertising',
    'Account Recovery',
    'Brand Development',
    'Influencer Marketing',
  ];

  return (
    <footer className="footer gradient-hero">
      <div className="page-container py-12">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section space-y-4">
            <h3 className="footer-logo">
              Sheytimah Media
            </h3>
            <p className="footer-description">
              Helping brands grow online with creative strategy and result-driven marketing.
            </p>
            <div className="footer-contact-info">
              <p className="footer-contact-item">
                <span className="footer-contact-label">Email:</span> sheytimahmedia@gmail.com
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
                    onClick={() => onNavigate('services')}
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
                    <Icon style={{ width: '1.25rem', height: '1.25rem' }} />
                  </a>
                );
              })}
            </div>
            <div className="space-y-2">
              <p className="footer-additional-note">
                Also find us on TikTok, Snapchat & Telegram
              </p>
              <div
                className="footer-contact-btn"
                onClick={() => onNavigate('booking')}
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
            <span className="footer-bottom-link">
              Privacy Policy
            </span>
            <span className="footer-bottom-link">
              Terms of Service
            </span>
            <span className="footer-bottom-link">
              Refund Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}