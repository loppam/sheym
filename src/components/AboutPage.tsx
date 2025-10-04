import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Heart,
  Eye,
  Target,
  Users,
  Award,
  Clock,
  Shield,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const team = [
    {
      name: "Fatimah Hammed O.",
      role: "Founder & Creative Director",
      bio: "Sheytimah leads our creative vision and strategic direction.",
      image:
        "/shey.jpg",
      expertise: ["Brand Strategy", "Creative Direction", "Account Recovery", "Founder"],
    },
    {
      name: "Babatunde Halimat",
      role: "UGC CREATOR",
      bio: "Halimat is a UGC creator who specializes in creating data-driven social media strategies that convert followers into loyal customers.",
      image:
        "/halimat.jpg",
      expertise: ["UGC Creator", "Social Media Management", "Content Creation"],
    },
    {
      name: "Bakre Jaafar",
      role: "Operations Manager",
      bio: "Jaafar brings brands to life through stunning visuals and compelling content that resonates with audiences.",
      image:
        "/bakre.jpg",
      expertise: ["Operations Manager", "Social Media Management"],
    },
    {
      name: "Mustapha Oluwadarasimi Peter",
      role: "Technical Director",
      bio: "Mustapha is a technical director who specializes in creating data-driven social media strategies that convert followers into loyal customers.",
      image:
        "/mustapha.jpg",
      expertise: ["Social Media Manager ", "Website Lead Developer", "UiUx Product Designer"],
    },
  ];

  const values = [
    {
      icon: Shield,
      title: "Transparency",
      description:
        "We believe in honest communication and clear reporting. You'll always know exactly what we're doing and why.",
    },
    {
      icon: Award,
      title: "Professionalism",
      description:
        "Our team maintains the highest standards in everything we do, from strategy development to client communication.",
    },
    {
      icon: Clock,
      title: "Patience",
      description:
        "Great results take time. We work patiently and persistently to achieve sustainable, long-term success for our clients.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We stay ahead of digital marketing trends and continuously innovate to keep our clients competitive.",
    },
  ];

  const achievements = [
    { number: "500+", label: "Brands Served", icon: Users },
    { number: "100+", label: "Accounts Recovered", icon: Shield },
    { number: "2M+", label: "Content Views Generated", icon: Eye },
    { number: "95%", label: "Client Success Rate", icon: Target },
  ];

  const timeline = [
    { year: "2019", milestone: "Founded Sheytimah Media" },
    {
      year: "2020",
      milestone: "Expanded to include account recovery services",
    },
    { year: "2021", milestone: "Reached 100+ successful recoveries" },
    {
      year: "2022",
      milestone: "Launched comprehensive digital marketing packages",
    },
    { year: "2023", milestone: "Served 300+ brands across Nigeria and beyond" },
    {
      year: "2024",
      milestone: "Achieved 500+ client milestone with 95% success rate",
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero gradient-primary">
        <div className="page-container">
          <div className="page-hero-content">
            <Badge className="about-hero-badge">About Sheytimah Media</Badge>
            <h1 className="about-hero-title">
              Building Digital Success Stories
            </h1>
            <p className="about-hero-description">
              We're more than just a digital marketing agency. We're your
              partners in building a strong online presence that drives real
              business results.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="about-mission">
        <div className="page-container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="about-mission-title">Our Mission</h2>
            <div className="about-mission-quote">
              <p className="about-mission-text">
                "Combining creative strategy, compelling content, and
                result-driven digital marketing to boost visibility, drive
                engagement, and convert followers into loyal customers."
              </p>
            </div>
          </div>

          <div className="about-mission-cards">
            <div className="about-mission-card hover-lift">
              <Heart className="about-mission-card-icon" />
              <h3 className="about-mission-card-title">Creative Strategy</h3>
              <p className="about-mission-card-text">
                Every brand has a unique story. We craft creative strategies
                that authentically represent your brand and connect with your
                audience.
              </p>
            </div>
            <div className="about-mission-card hover-lift">
              <Eye className="about-mission-card-icon" />
              <h3 className="about-mission-card-title">Compelling Content</h3>
              <p className="about-mission-card-text">
                Content that stops the scroll and starts conversations. We
                create visuals and copy that engage and inspire action.
              </p>
            </div>
            <div className="about-mission-card hover-lift">
              <Target className="about-mission-card-icon" />
              <h3 className="about-mission-card-title">
                Result-Driven Marketing
              </h3>
              <p className="about-mission-card-text">
                Everything we do is measured and optimized for results. From
                awareness to conversion, we track what matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <div className="page-container">
          <div className="text-center mb-16">
            <h2 className="about-team-title">Meet Our Team</h2>
            <p className="about-team-description">
              Our diverse team of experts brings together creativity, strategy,
              and technical expertise to deliver exceptional results.
            </p>
          </div>

          <div className="about-team-grid">
            {team.map((member, index) => (
              <div key={index} className="about-team-card hover-lift">
                <div className="text-center mb-6">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="about-team-avatar"
                  />
                  <h3 className="about-team-name">{member.name}</h3>
                  <p className="about-team-role">{member.role}</p>
                  <p className="about-team-bio">{member.bio}</p>
                </div>

                <div className="about-team-expertise">
                  {member.expertise.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="about-team-skill"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="page-container">
          <div className="text-center mb-16">
            <h2 className="about-values-title">Our Values</h2>
            <p className="about-values-description">
              These core values guide everything we do and ensure we deliver
              exceptional service to every client.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="about-values-card hover-lift">
                  <div className="about-values-icon-wrapper">
                    <Icon className="about-values-icon" />
                  </div>
                  <h3 className="about-values-card-title">{value.title}</h3>
                  <p className="about-values-card-text">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="about-achievements gradient-accent">
        <div className="page-container">
          <div className="text-center mb-16">
            <h2 className="about-achievements-title">Our Achievements</h2>
            <p className="about-achievements-description">
              Numbers that reflect our commitment to excellence and our clients'
              success.
            </p>
          </div>

          <div className="about-achievements-grid">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="about-achievement-item">
                  <Icon className="about-achievement-icon" />
                  <div className="about-achievement-number">
                    {achievement.number}
                  </div>
                  <div className="about-achievement-label">
                    {achievement.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="about-timeline">
        <div className="page-container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="about-timeline-title">Our Journey</h2>
            <p className="about-timeline-description">
              From a small startup to a leading digital marketing agency, here's
              how we've grown.
            </p>
          </div>

          <div className="about-timeline-container">
            {/* Timeline line */}
            <div className="about-timeline-line"></div>

            <div className="about-timeline-items">
              {timeline.map((item, index) => (
                <div key={index} className="about-timeline-item">
                  <div className="about-timeline-content">
                    <div className="about-timeline-card hover-lift">
                      <div className="about-timeline-year">{item.year}</div>
                      <div className="about-timeline-milestone">
                        {item.milestone}
                      </div>
                    </div>
                  </div>
                  <div className="about-timeline-dot"></div>
                  <div className="about-timeline-spacer"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="about-cta-content">
          <h2 className="about-cta-title">Ready to Work Together?</h2>
          <p className="about-cta-description">
            Let's discuss how our expertise can help your brand achieve its
            digital marketing goals.
          </p>
          <div className="about-cta-buttons">
            <button
              className="about-cta-btn-primary hover-lift"
              onClick={() => onNavigate("booking")}
            >
              Book a Consultation
              <ArrowRight style={{ width: "1.25rem", height: "1.25rem" }} />
            </button>
            <button
              className="about-cta-btn-secondary"
              onClick={() => onNavigate("portfolio")}
            >
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
