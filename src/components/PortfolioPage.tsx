import { useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Filter, ArrowRight, Eye, ExternalLink } from "lucide-react";

interface PortfolioPageProps {
  onNavigate: (page: string) => void;
}

export default function PortfolioPage({ onNavigate }: PortfolioPageProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "social-media", name: "Social Media" },
    { id: "content-creation", name: "Content Creation" },
    { id: "account-recovery", name: "Account Recovery" },
    { id: "brand-development", name: "Brand Development" },
    { id: "paid-advertising", name: "Paid Advertising" },
  ];

  const projects = [
    {
      id: 1,
      title: "Luxury Fashion Brand",
      client: "Elite Couture",
      category: "social-media",
      image: "fashion luxury brand social media",
    },
    {
      id: 2,
      title: "Restaurant Chain",
      client: "Taste Haven",
      category: "content-creation",
      image: "restaurant food photography social media",
    },
    {
      id: 3,
      title: "Beauty Brand Campaign",
      client: "Glow Cosmetics",
      category: "paid-advertising",
      image: "beauty brand marketing campaign",
    },
    {
      id: 4,
      title: "Account Recovery Success",
      client: "Tech Startup CEO",
      category: "account-recovery",
      image: "social media content creation professional",
    },
    {
      id: 5,
      title: "E-commerce Branding",
      client: "Urban Lifestyle",
      category: "brand-development",
      image: "ecommerce brand development design",
    },
    {
      id: 6,
      title: "Fitness Studio Growth",
      client: "FitLife Studios",
      category: "social-media",
      image: "fitness gym social media content",
    },
    {
      id: 7,
      title: "Fashion Event Campaign",
      client: "Lagos Fashion Week",
      category: "paid-advertising",
      image: "fashion event marketing campaign",
    },
    {
      id: 8,
      title: "Corporate LinkedIn",
      client: "TechCorp Nigeria",
      category: "social-media",
      image: "corporate business linkedin content",
    },
    {
      id: 9,
      title: "Hotel Brand Photography",
      client: "Royal Suites",
      category: "content-creation",
      image: "luxury hotel photography marketing",
    },
    {
      id: 10,
      title: "Tech Product Launch",
      client: "InnovateTech",
      category: "paid-advertising",
      image: "tech product launch marketing",
    },
    {
      id: 11,
      title: "Food Brand Identity",
      client: "Fresh Harvest",
      category: "brand-development",
      image: "food brand identity design",
    },
    {
      id: 12,
      title: "Wellness Brand Recovery",
      client: "Zen Wellness",
      category: "account-recovery",
      image: "wellness brand social media",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <section className="portfolio-hero gradient-primary">
        <div className="portfolio-container">
          <div className="portfolio-hero-content">
            <Badge className="portfolio-badge">Our Portfolio</Badge>
            <h1 className="portfolio-title">Our Work</h1>
            <p className="portfolio-description">
              Explore our portfolio of successful campaigns, brand
              transformations, and digital marketing achievements.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="portfolio-stats">
        <div className="portfolio-container">
          <div className="portfolio-stats-grid">
            <div>
              <div className="portfolio-stat-number">500+</div>
              <div className="portfolio-stat-label">Projects Completed</div>
            </div>
            <div>
              <div className="portfolio-stat-number">100+</div>
              <div className="portfolio-stat-label">Accounts Recovered</div>
            </div>
            <div>
              <div className="portfolio-stat-number">95%</div>
              <div className="portfolio-stat-label">Success Rate</div>
            </div>
            <div>
              <div className="portfolio-stat-number">25M+</div>
              <div className="portfolio-stat-label">Total Reach</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="portfolio-filters">
        <div className="portfolio-container">
          <div className="portfolio-filter-buttons">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`portfolio-filter-btn ${
                  activeFilter === category.id ? "active" : ""
                } hover-lift`}
                onClick={() => setActiveFilter(category.id)}
              >
                <Filter className="portfolio-filter-icon" />
                <span className="portfolio-filter-text-lg">
                  {category.name}
                </span>
                <span className="portfolio-filter-text-sm">
                  {category.name.split(" ")[0]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="portfolio-projects">
        <div className="portfolio-container">
          <div className="portfolio-grid">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="portfolio-card hover-lift">
                <div className="portfolio-card-image-wrapper">
                  <ImageWithFallback
                    src=""
                    alt={project.title}
                    className="portfolio-card-image"
                  />
                  <div className="portfolio-card-overlay">
                    <div className="portfolio-card-overlay-content">
                      <Eye className="portfolio-card-overlay-icon" />
                      <ExternalLink className="portfolio-card-overlay-icon" />
                    </div>
                  </div>
                  <div className="portfolio-card-category">
                    {
                      categories
                        .find((cat) => cat.id === project.category)
                        ?.name.split(" ")[0]
                    }
                  </div>
                </div>

                <div className="portfolio-card-content">
                  <h3 className="portfolio-card-title">{project.title}</h3>
                  <p className="portfolio-card-client">{project.client}</p>
                </div>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="portfolio-empty">
              <p className="portfolio-empty-text">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="portfolio-cta gradient-accent">
        <div className="portfolio-container">
          <div className="portfolio-cta-content">
            <h2 className="portfolio-cta-title">
              Ready to Join Our Success Stories?
            </h2>
            <p className="portfolio-cta-description">
              Let's create a digital marketing success story for your brand.
              Book a consultation to get started.
            </p>
            <div className="portfolio-cta-buttons">
              <button
                className="portfolio-cta-btn-primary hover-lift"
                onClick={() => onNavigate("booking")}
              >
                Start Your Project
                <ArrowRight className="portfolio-btn-icon" />
              </button>
              <button
                className="portfolio-cta-btn-secondary"
                onClick={() => onNavigate("services")}
              >
                View Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
