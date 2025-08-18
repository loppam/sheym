import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  Smartphone, 
  Camera, 
  Target, 
  Users, 
  Palette, 
  ShieldCheck,
  Star,
  ArrowRight,
  PlayCircle,
  CheckCircle
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const services = [
    {
      icon: Smartphone,
      title: 'Social Media Management',
      description: 'Complete social media strategy, content planning, and community engagement across all platforms.',
      price: 'From ₦150,000',
      features: ['Content Calendar', 'Daily Posting', 'Community Management', 'Analytics']
    },
    {
      icon: Camera,
      title: 'Content Creation',
      description: 'Professional photos, videos, and graphics that tell your brand story and engage your audience.',
      price: 'From ₦250,000',
      features: ['Photo Shoots', 'Video Production', 'Graphic Design', 'Brand Assets']
    },
    {
      icon: Target,
      title: 'Paid Advertising',
      description: 'Strategic ad campaigns on Meta, TikTok, and Google that convert followers into customers.',
      price: 'From ₦100,000',
      features: ['Ad Strategy', 'Campaign Setup', 'Optimization', 'Reporting']
    },
    {
      icon: Users,
      title: 'Influencer Marketing',
      description: 'Connect with the right influencers to amplify your brand message and reach new audiences.',
      price: 'Custom Pricing',
      features: ['Influencer Sourcing', 'Campaign Management', 'Performance Tracking', 'ROI Analysis']
    },
    {
      icon: Palette,
      title: 'Brand Development',
      description: 'Build a cohesive brand identity that resonates with your target audience and stands out.',
      price: 'From ₦300,000',
      features: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines', 'Market Positioning']
    },
    {
      icon: ShieldCheck,
      title: 'Account Recovery',
      description: 'Get your hacked, disabled, or suspended social media accounts back with our proven methods.',
      price: 'From ₦150,000',
      features: ['Instagram Recovery', 'Facebook Recovery', '24/7 Support', 'Success Guarantee']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      business: 'Fashion Boutique Owner',
      content: 'Sheytimah Media transformed our Instagram presence. Our engagement increased by 300% in just 3 months!',
      rating: 5,
      image: 'professional woman fashion'
    },
    {
      name: 'David Chen',
      business: 'Restaurant Chain',
      content: 'The team helped us recover our disabled Instagram account and built an amazing content strategy. Highly recommended!',
      rating: 5,
      image: 'professional man restaurant'
    },
    {
      name: 'Maria Santos',
      business: 'Beauty Brand',
      content: 'Their influencer marketing campaigns delivered incredible results. We saw a 250% increase in brand awareness.',
      rating: 5,
      image: 'professional woman beauty'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '100+', label: 'Accounts Recovered' },
    { number: '2M+', label: 'Content Views' },
    { number: '95%', label: 'Success Rate' }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="home-hero">
        {/* Background Video Placeholder */}
        <div className="home-hero-bg gradient-hero">
          <div className="absolute inset-0 bg-black-40"></div>
        </div>
        
        {/* Video Overlay Effect */}
        <div className="home-hero-overlay"></div>
        
        <div className="home-hero-content">
          <div className="home-hero-badge fade-in-up">
            <PlayCircle style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} />
            Creative Strategy • Result-Driven Marketing
          </div>
          
          <h1 className="home-hero-title fade-in-up">
            Sheytimah Media
          </h1>
          
          <p className="home-hero-description fade-in-up">
            Helping brands grow online with creative strategy and result-driven marketing
          </p>
          
          <div className="home-hero-buttons fade-in-up">
            <button 
              className="home-hero-btn-primary hover-lift"
              onClick={() => onNavigate('booking')}
            >
              Book a Consultation
              <ArrowRight style={{ width: '1.25rem', height: '1.25rem' }} />
            </button>
            <button 
              className="home-hero-btn-secondary"
              onClick={() => onNavigate('portfolio')}
            >
              View Our Work
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="home-scroll-indicator">
          <div className="home-scroll-mouse">
            <div className="home-scroll-dot"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="home-stats">
        <div className="page-container">
          <div className="home-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="text-center fade-in">
                <div className="home-stat-number">
                  {stat.number}
                </div>
                <div className="home-stat-label">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="home-services">
        <div className="page-container">
          <div className="home-services-header">
            <h2 className="home-services-title">
              Our Services
            </h2>
            <p className="home-services-description">
              From social media management to account recovery, we provide comprehensive digital marketing solutions that drive results.
            </p>
          </div>

          <div className="home-services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="home-service-card hover-lift"
                  onClick={() => onNavigate('services')}
                >
                  <div className="home-service-card-header">
                    <div className="home-service-icon">
                      <Icon style={{ width: '1.25rem', height: '1.25rem', color: 'white' }} />
                    </div>
                    <h3 className="home-service-title">
                      {service.title}
                    </h3>
                    <p className="home-service-description">
                      {service.description}
                    </p>
                  </div>

                  <div className="home-service-footer">
                    <div className="home-service-price-row">
                      <span className="home-service-price">{service.price}</span>
                      <ArrowRight className="home-service-arrow" />
                    </div>
                    
                    <div className="home-service-features">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="home-service-feature">
                          <CheckCircle className="home-service-feature-icon" />
                          <span className="home-service-feature-text">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="home-services-cta">
            <button 
              className="home-services-btn hover-lift"
              onClick={() => onNavigate('services')}
            >
              View All Services
              <ArrowRight style={{ width: '1.25rem', height: '1.25rem' }} />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="home-testimonials">
        <div className="page-container">
          <div className="home-testimonials-header">
            <h2 className="home-testimonials-title">
              What Our Clients Say
            </h2>
            <p className="home-testimonials-description">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
            </p>
          </div>

          <div className="home-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="home-testimonial-card hover-lift">
                <div className="home-testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="home-testimonial-star" />
                  ))}
                </div>
                
                <p className="home-testimonial-content">
                  "{testimonial.content}"
                </p>
                
                <div className="home-testimonial-author">
                  <ImageWithFallback
                    src=""
                    alt={testimonial.name}
                    className="home-testimonial-avatar"
                  />
                  <div className="home-testimonial-info">
                    <div className="home-testimonial-name">{testimonial.name}</div>
                    <div className="home-testimonial-role">{testimonial.business}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta">
        <div className="home-cta-content">
          <h2 className="home-cta-title">
            Ready to Grow Your Brand?
          </h2>
          <p className="home-cta-description">
            Let's discuss how we can help you achieve your digital marketing goals. Book a free consultation today.
          </p>
          <div className="home-cta-buttons">
            <button 
              className="home-cta-btn-primary hover-lift"
              onClick={() => onNavigate('booking')}
            >
              Book Free Consultation
              <ArrowRight style={{ width: '1.25rem', height: '1.25rem' }} />
            </button>
            <button 
              className="home-cta-btn-secondary"
              onClick={() => onNavigate('services')}
            >
              Browse Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}