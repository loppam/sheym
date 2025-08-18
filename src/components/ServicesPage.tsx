import { useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { servicesData, specialtyPackages, addOns } from "./data/servicesData";
import {
  Smartphone,
  Camera,
  Target,
  Users,
  Palette,
  ShieldCheck,
  CheckCircle,
  Star,
  ArrowRight,
  AlertTriangle,
} from "lucide-react";

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  const [activeTab, setActiveTab] = useState("social-media");

  const serviceIcons = {
    "social-media": Smartphone,
    "content-creation": Camera,
    "paid-advertising": Target,
    "account-recovery": ShieldCheck,
    "brand-development": Palette,
    "influencer-marketing": Users,
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="page-container">
          <div className="page-hero-content">
            <Badge className="mb-6 bg-white-20 text-white border-white-30">
              Our Services
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white font-montserrat">
              Digital Marketing Solutions
            </h1>
            <p className="text-xl text-sheytimah-light max-w-3xl mx-auto leading-relaxed">
              From social media management to account recovery, we provide
              comprehensive digital marketing services designed to grow your
              brand and drive results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-12 bg-white border-b border-sheytimah-light">
        <div className="page-container">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="services-tabs-list">
              {Object.entries(servicesData).map(([key, service]) => {
                const Icon = serviceIcons[key as keyof typeof serviceIcons];
                return (
                  <TabsTrigger
                    key={key}
                    value={key}
                    className="services-tab-trigger"
                  >
                    <Icon
                      style={{
                        width: "1.5rem",
                        height: "1.5rem",
                        marginBottom: "0.5rem",
                      }}
                    />
                    <span className="text-sm font-medium text-center leading-tight">
                      {service.title}
                    </span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="page-container">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            {Object.entries(servicesData).map(([key, service]) => {
              const Icon = serviceIcons[key as keyof typeof serviceIcons];
              return (
                <TabsContent key={key} value={key} className="space-y-12">
                  {/* Service Header */}
                  <div className="text-center">
                    <div className="w-20 h-20 sheytimah-highlight rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon
                        style={{
                          width: "2.5rem",
                          height: "2.5rem",
                          color: "white",
                        }}
                      />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-sheytimah-dark mb-6 font-montserrat">
                      {service.title}
                    </h2>
                    <p className="text-xl text-sheytimah-primary max-w-3xl mx-auto">
                      {service.description}
                    </p>
                  </div>

                  {/* Pricing Packages */}
                  <div className="grid-3">
                    {service.packages.map((pkg, index) => (
                      <Card
                        key={index}
                        className={`p-8 relative border-2 hover-lift ${
                          pkg.popular
                            ? "border-sheytimah-accent"
                            : "border-sheytimah-light"
                        }`}
                      >
                        {pkg.popular && (
                          <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-sheytimah-accent text-white px-4 py-1">
                            <Star
                              style={{
                                width: "1rem",
                                height: "1rem",
                                marginRight: "0.25rem",
                              }}
                            />
                            Most Popular
                          </Badge>
                        )}

                        <div className="text-center mb-6">
                          <h3 className="text-2xl font-bold text-sheytimah-dark mb-2">
                            {pkg.name}
                          </h3>
                          <div className="text-3xl font-bold text-sheytimah-accent mb-1">
                            {pkg.price}
                          </div>
                          <div className="text-sm text-sheytimah-secondary">
                            {pkg.duration}
                          </div>
                        </div>

                        <ul className="space-y-3 mb-8">
                          {pkg.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-3"
                            >
                              <CheckCircle
                                style={{
                                  width: "1.25rem",
                                  height: "1.25rem",
                                  color: "var(--sheytimah-highlight)",
                                  marginTop: "0.125rem",
                                  flexShrink: 0,
                                }}
                              />
                              <span className="text-sheytimah-dark text-sm">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>

                        <button
                          className={`w-full p-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                            pkg.popular
                              ? "sheytimah-accent text-white hover-bg-opacity-90"
                              : "border border-sheytimah-accent text-sheytimah-accent hover:bg-sheytimah-accent hover:text-white"
                          }`}
                          onClick={() => onNavigate("booking")}
                        >
                          Get Started
                          <ArrowRight
                            style={{ width: "1rem", height: "1rem" }}
                          />
                        </button>
                      </Card>
                    ))}
                  </div>

                  {/* Account Recovery Policies */}
                  {key === "account-recovery" &&
                    "policies" in service &&
                    service.policies && (
                      <Card className="p-6 bg-yellow-50 border-yellow-200">
                        <div className="flex items-start space-x-3">
                          <AlertTriangle
                            style={{
                              width: "1.5rem",
                              height: "1.5rem",
                              color: "var(--text-yellow-600)",
                              marginTop: "0.25rem",
                              flexShrink: 0,
                            }}
                          />
                          <div>
                            <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                              Important Recovery Policies
                            </h3>
                            <ul className="space-y-2">
                              {service.policies.map((policy, idx) => (
                                <li
                                  key={idx}
                                  className="text-yellow-700 text-sm flex items-start space-x-2"
                                >
                                  <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></span>
                                  <span>{policy}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="mt-4">
                              <button
                                className="border border-yellow-600 text-yellow-700 hover:bg-yellow-600 hover:text-white px-4 py-2 rounded-lg transition-all duration-300"
                                onClick={() => onNavigate("booking")}
                              >
                                Start Recovery Process
                              </button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    )}

                  {/* Add-ons */}
                  {"addOns" in service && service.addOns && (
                    <div>
                      <h3 className="text-2xl font-bold text-sheytimah-dark mb-6 text-center">
                        Available Add-ons
                      </h3>
                      <div className="grid-3">
                        {service.addOns.map((addon, idx) => (
                          <Card
                            key={idx}
                            className="p-4 border-sheytimah-light"
                          >
                            <div className="flex justify-between items-center">
                              <span className="text-sheytimah-dark font-medium">
                                {addon.name}
                              </span>
                              <span className="text-sheytimah-accent font-bold">
                                {addon.price}
                              </span>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      {/* Specialty Packages */}
      <section className="py-20 sheytimah-light">
        <div className="page-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-sheytimah-dark mb-6 font-montserrat">
              Industry-Specific Packages
            </h2>
            <p className="text-xl text-sheytimah-primary max-w-3xl mx-auto">
              Specialized packages tailored for specific industries with unique
              marketing needs.
            </p>
          </div>

          <div className="grid-2">
            {specialtyPackages.map((category, index) => (
              <Card
                key={index}
                className="p-8 bg-white border-sheytimah-secondary"
              >
                <h3 className="text-2xl font-bold text-sheytimah-dark mb-6">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.packages.map((pkg, idx) => (
                    <div
                      key={idx}
                      className="p-4 border border-sheytimah-light rounded-lg"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-sheytimah-dark">
                          {pkg.name}
                        </h4>
                        <span className="text-sheytimah-accent font-bold">
                          {pkg.price}
                        </span>
                      </div>
                      <ul className="space-y-1">
                        {pkg.features.map((feature, featIdx) => (
                          <li
                            key={featIdx}
                            className="text-sm text-sheytimah-primary flex items-center space-x-2"
                          >
                            <CheckCircle
                              style={{
                                width: "1rem",
                                height: "1rem",
                                color: "var(--sheytimah-highlight)",
                              }}
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <button
                  className="w-full mt-6 border border-sheytimah-accent text-sheytimah-accent hover:bg-sheytimah-accent hover:text-white p-3 rounded-lg transition-all duration-300"
                  onClick={() => onNavigate("booking")}
                >
                  Inquire About Package
                </button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-white">
        <div className="page-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-sheytimah-dark mb-6 font-montserrat">
              Service Add-ons
            </h2>
            <p className="text-xl text-sheytimah-primary max-w-3xl mx-auto">
              Enhance your package with additional services and features.
            </p>
          </div>

          <div className="grid-4">
            {addOns.map((addon, index) => (
              <Card
                key={index}
                className="p-6 border-sheytimah-light hover-lift text-center"
              >
                <h3 className="text-lg font-semibold text-sheytimah-dark mb-2">
                  {addon.name}
                </h3>
                <div className="text-2xl font-bold text-sheytimah-accent mb-4">
                  {addon.price}
                </div>
                <button
                  className="border border-sheytimah-accent text-sheytimah-accent hover:bg-sheytimah-accent hover:text-white px-4 py-2 rounded-lg text-sm transition-all duration-300"
                  onClick={() => onNavigate("booking")}
                >
                  Add to Package
                </button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-accent text-white">
        <div className="page-container max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-sheytimah-light mb-8 max-w-2xl mx-auto">
            Choose your perfect package or let us create a custom solution for
            your unique needs.
          </p>
          <div className="flex-responsive">
            <button
              className="bg-white text-sheytimah-accent hover:bg-gray-100 px-8 py-4 text-lg hover-lift rounded-lg font-medium inline-flex items-center gap-2 transition-all duration-300"
              onClick={() => onNavigate("booking")}
            >
              Book Consultation
              <ArrowRight style={{ width: "1.25rem", height: "1.25rem" }} />
            </button>
            <button
              className="border-white text-white hover:bg-white hover:text-sheytimah-accent px-8 py-4 text-lg border-2 rounded-lg font-medium transition-all duration-300"
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
