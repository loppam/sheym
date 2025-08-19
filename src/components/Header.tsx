import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Services', href: 'services', hasDropdown: true },
    { name: 'Portfolio', href: 'portfolio' },
    { name: 'Booking', href: 'booking' },
    { name: 'Shop', href: 'shop' },
  ];

  const serviceLinks = [
    'Social Media Management',
    'Content Creation', 
    'Paid Advertising',
    'Influencer Marketing',
    'Account Recovery',
    'Brand Development'
  ];

  return (
    <header className="header">
      <nav className="header-nav">
        <div className="header-content">
          {/* Logo */}
          <div 
            className="header-logo"
            onClick={() => onNavigate('home')}
          >
            <div className="header-logo-text">
              <img src="/logo.png" alt="Sheytimah Media" style={{ width: '30px', height: '30px' }} />
              <span className="header-logo-text-desktop">Sheytimah Media</span>
              <span className="header-logo-text-mobile">Sheytimah</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="header-nav-desktop">
            {navigation.map((item) => (
              <div key={item.name} className="header-nav-dropdown">
                {item.hasDropdown ? (
                  <div
                    className="header-dropdown-content"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <span 
                      className={`header-nav-link ${currentPage === item.href ? 'active' : ''}`}
                      onClick={() => onNavigate(item.href)}
                    >
                      {item.name}
                    </span>
                    <ChevronDown style={{ width: '1rem', height: '1rem' }} />
                    
                    {servicesDropdownOpen && (
                      <div className="header-dropdown-menu">
                        {serviceLinks.map((service, index) => (
                          <div
                            key={index}
                            className="header-dropdown-item"
                            onClick={() => onNavigate('services')}
                          >
                            {service}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div
                    className={`header-nav-link ${currentPage === item.href ? 'active' : ''}`}
                    onClick={() => onNavigate(item.href)}
                  >
                    {item.name}
                  </div>
                )}
              </div>
            ))}
            <button 
              onClick={() => onNavigate('booking')}
              className="header-cta-btn hover-lift"
            >
              Book Consultation
            </button>
          </div>

          {/* Tablet Navigation */}
          <div className="header-nav-tablet">
            {navigation.slice(0, 4).map((item) => (
              <div
                key={item.name}
                className={`header-nav-link ${currentPage === item.href ? 'active' : ''}`}
                onClick={() => onNavigate(item.href)}
              >
                {item.name}
              </div>
            ))}
          </div>

          {/* Mobile menu button - shows on mobile and tablet when not desktop */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="header-mobile-btn"
          >
            {mobileMenuOpen ? (
              <X style={{ width: '1.25rem', height: '1.25rem' }} />
            ) : (
              <Menu style={{ width: '1.25rem', height: '1.25rem' }} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="header-mobile-menu">
            <div className="header-mobile-menu-content">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className={`header-mobile-menu-item ${currentPage === item.href ? 'active' : ''}`}
                  onClick={() => {
                    onNavigate(item.href);
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.name}
                </div>
              ))}
              <div className="header-mobile-cta">
                <button
                  onClick={() => {
                    onNavigate('booking');
                    setMobileMenuOpen(false);
                  }}
                  className="header-mobile-cta-btn"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}