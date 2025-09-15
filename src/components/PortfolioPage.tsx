import { useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import BeforeAfterImage from "./BeforeAfterImage";
import BeforeAfterModal from "./BeforeAfterModal";
import { Filter, ArrowRight, Eye } from "lucide-react";

interface PortfolioPageProps {
  onNavigate: (page: string) => void;
}

export default function PortfolioPage({ onNavigate }: PortfolioPageProps) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      title: "Social Media Management",
      client: "Social Media Management",
      category: "social-media",
      image: "Social Media Management",
      beforeImage: "/mbobefore.jpeg",
      afterImage: "/mboafter.png",
    },
    {
      id: 2,
      title: "Brand Development",
      client: "Brand Development",
      category: "brand-development",
      image: "brand development",
      beforeImage: "/prof.jpeg",
      afterImage: "/proft.jpeg",
    },
    {
      id: 3,
      title: "Paid Advertising",
      client: "Paid Advertising",
      category: "paid-advertising",
      image: "paid advertising",
      beforeImage: "/hokbefore.jpeg",
      afterImage: "/hokafter.jpeg",
    },
    {
      id: 4,
      title: "Content Creation",
      client: "Content Creation",
      category: "content-creation",
      image: "content creation",
      beforeImage: "/cc.jpeg",
      afterImage: "/cct.jpeg",
    },
    {
      id: 5,
      title: "Account Recovery",
      client: "Account Recovery",
      category: "account-recovery",
      image: "account recovery",
      beforeImage: "/recoverybefore.png",
      afterImage: "/recoveryafter.png",
    },
    // {
    //   id: 6,
    //   title: "Fitness Studio Growth",
    //   client: "FitLife Studios",
    //   category: "social-media",
    //   image: "fitness gym social media content",
    //   beforeImage: "/social-media.jpg",
    //   afterImage: "/social-media.jpg",
    // },
    // {
    //   id: 7,
    //   title: "Fashion Event Campaign",
    //   client: "Lagos Fashion Week",
    //   category: "paid-advertising",
    //   image: "fashion event marketing campaign",
    //   beforeImage: "/paid-advertising.jpg",
    //   afterImage: "/paid-advertising.jpg",
    // },
    // {
    //   id: 8,
    //   title: "Corporate LinkedIn",
    //   client: "TechCorp Nigeria",
    //   category: "social-media",
    //   image: "corporate business linkedin content",
    //   beforeImage: "/social-media.jpg",
    //   afterImage: "/social-media.jpg",
    // }
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const handleProjectClick = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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
              <Card
                key={project.id}
                className="portfolio-card hover-lift cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <div className="portfolio-card-image-wrapper">
                  <BeforeAfterImage
                    beforeImage={project.beforeImage}
                    afterImage={project.afterImage}
                    alt={project.title}
                    className="portfolio-card-image"
                  />
                  <div className="portfolio-card-overlay">
                    <div className="portfolio-card-overlay-content">
                      <Eye className="portfolio-card-overlay-icon" />
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

      {/* Before/After Modal */}
      {selectedProject && (
        <BeforeAfterModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          beforeImage={selectedProject.beforeImage}
          afterImage={selectedProject.afterImage}
          title={selectedProject.title}
          client={selectedProject.client}
        />
      )}
    </div>
  );
}
