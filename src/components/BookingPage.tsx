import { useState } from "react";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
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
import {
  Calendar,
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  FileText,
} from "lucide-react";

export default function BookingPage() {
  const [activeTab, setActiveTab] = useState("consultation");
  const [formData, setFormData] = useState({
    // General consultation form
    name: "",
    email: "",
    phone: "",
    serviceType: [] as string[], // Changed to array for multiple selections
    message: "",
    preferredContact: "",

    // Account recovery form
    platform: [] as string[],
    issue: "",
    username: "",
    fullName: "",
    linkedEmail: "",
    linkedPhone: "",
    altEmail: "",
    disableDate: "",
    appealedBefore: "",
    appealDetails: "",
    accountType: "",
    country: "",
    contactHandle: "",
    paymentTier: "",
    paymentMethod: "",
    agreeToPolicy: false,
  });

  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleInputChange = (
    field: string,
    value: string | boolean | string[]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (formType: string) => {
    // Simulate form submission
    setSubmitStatus({
      type: "success",
      message: `${
        formType === "consultation"
          ? "Consultation request"
          : "Recovery request"
      } submitted successfully! We'll contact you within 24 hours.`,
    });
  };

  const serviceOptions = [
    { value: "social-media", label: "Social Media Management" },
    { value: "content-creation", label: "Content Creation" },
    { value: "paid-advertising", label: "Paid Advertising" },
    { value: "influencer-marketing", label: "Influencer Marketing" },
    { value: "brand-development", label: "Brand Development" },
    { value: "account-recovery", label: "Account Recovery" },
    { value: "digital-products", label: "Digital Product Marketing" },
    { value: "crisis-management", label: "Crisis Management" },
    { value: "event-promotion", label: "Event Promotion" },
    { value: "custom", label: "Custom Package" },
  ];

  // const recoveryTiers = [
  //   { label: 'Instagram 0-10k followers', price: '₦150,000' },
  //   { label: 'Instagram 10k-100k followers', price: '₦250,000' },
  //   { label: 'Instagram 100k+ followers', price: '₦350,000' },
  //   { label: 'Facebook Personal', price: '₦200,000' },
  //   { label: 'Facebook Business Page', price: '₦300,000' },
  //   { label: 'Both Instagram + Facebook', price: '₦400,000' }
  // ];

  const recoveryPolicies = [
    "No refunds if Meta case is already open by client",
    "Recovery timeline: 5 days to 5 months (patience required)",
    "We are not affiliated with Meta/Instagram/Facebook",
    "10% refund if recovery fails after 6+ months",
    "No refunds for delays, impatience, or client dissatisfaction",
    "Payment required upfront before starting recovery process",
  ];

  return (
    <div className="booking-page">
      {/* Hero Section */}
      <section className="booking-hero gradient-primary">
        <div className="page-container">
          <div className="page-hero-content">
            <Badge className="booking-hero-badge">Book Your Service</Badge>
            <h1 className="booking-hero-title">Let's Get Started</h1>
            <p className="booking-hero-description">
              Ready to grow your brand or recover your account? Choose the
              service you need and fill out the appropriate form below.
            </p>
          </div>
        </div>
      </section>

      {/* Success Message */}
      {submitStatus.type && (
        <section className="booking-success">
          <div className="page-container container-pad max-w-4xl">
            <div className="booking-success-content">
              <CheckCircle className="booking-success-icon" />
              <span className="booking-success-text">
                {submitStatus.message}
              </span>
            </div>
          </div>
        </section>
      )}

      {/* Booking Forms */}
      <section className="booking-forms">
        <div className="page-container max-w-4xl">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="booking-tabs"
          >
            <TabsList className="booking-tabs-list">
              <TabsTrigger value="consultation" className="booking-tab-trigger">
                <Calendar className="booking-tab-icon" />
                <span className="booking-tab-text-full">
                  General Consultation
                </span>
                <span className="booking-tab-text-short">Consultation</span>
              </TabsTrigger>
              <TabsTrigger value="recovery" className="booking-tab-trigger">
                <ShieldCheck className="booking-tab-icon" />
                <span className="booking-tab-text-full">Account Recovery</span>
                <span className="booking-tab-text-short">Recovery</span>
              </TabsTrigger>
            </TabsList>

            {/* General Consultation Form */}
            <TabsContent value="consultation" className="space-y-6 sm:space-y-8">
              <div className="booking-form-card">
                <div className="booking-form-header">
                  <h2 className="booking-form-title">
                    Book a Free Consultation
                  </h2>
                  <p className="booking-form-description">
                    Tell us about your project and let's discuss how we can help
                    you achieve your digital marketing goals.
                  </p>
                </div>

                <div className="booking-form-grid">
                  <div className="booking-form-field">
                    <Label htmlFor="name" className="booking-form-label">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className="booking-form-input"
                    />
                  </div>

                  <div className="booking-form-field">
                    <Label htmlFor="email" className="booking-form-label">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="booking-form-input"
                    />
                  </div>

                  <div className="booking-form-field">
                    <Label htmlFor="phone" className="booking-form-label">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      placeholder="+234 xxx xxx xxxx"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="booking-form-input"
                    />
                  </div>

                  <div className="booking-form-field">
                    <Label className="booking-form-label">
                      Service Interest *
                    </Label>
                    <div className="booking-checkbox-grid">
                      {serviceOptions.map((service) => (
                        <div
                          key={service.value}
                          className="booking-checkbox-item"
                        >
                          <Checkbox
                            id={service.value}
                            checked={formData.serviceType.includes(
                              service.value
                            )}
                            onCheckedChange={(checked) => {
                              const newServices = checked
                                ? [...formData.serviceType, service.value]
                                : formData.serviceType.filter(
                                    (s) => s !== service.value
                                  );
                              handleInputChange("serviceType", newServices);
                            }}
                            className="border-sheytimah-secondary data-[state=checked]:bg-sheytimah-accent data-[state=checked]:border-sheytimah-accent"
                          />
                          <Label
                            htmlFor={service.value}
                            className="booking-checkbox-label"
                          >
                            {service.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                    {formData.serviceType.length > 0 && (
                      <div className="booking-selected-services">
                        {formData.serviceType.map((serviceValue) => {
                          const service = serviceOptions.find(
                            (s) => s.value === serviceValue
                          );
                          return service ? (
                            <Badge
                              key={serviceValue}
                              className="booking-service-badge"
                            >
                              {service.label}
                            </Badge>
                          ) : null;
                        })}
                      </div>
                    )}
                  </div>
                </div>

                <div className="booking-form-field mb-4">
                  <Label htmlFor="message" className="booking-form-label">
                    Project Details *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your business, goals, and what you'd like to achieve..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    className="booking-form-textarea"
                  />
                </div>

                <div className="booking-form-field mb-6">
                  <Label
                    htmlFor="preferredContact"
                    className="booking-form-label"
                  >
                    Preferred Contact Method
                  </Label>
                  <Select
                    value={formData.preferredContact}
                    onValueChange={(value) =>
                      handleInputChange("preferredContact", value)
                    }
                  >
                    <SelectTrigger className="booking-form-input">
                      <SelectValue placeholder="How would you like us to contact you?" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-sheytimah-secondary">
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                      <SelectItem value="telegram">Telegram</SelectItem>
                      <SelectItem value="phone">Phone Call</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-start space-x-3 mb-6">
                  <Checkbox
                    id="newsletter"
                    className="checkbox-sheytimah mt-1"
                  />
                  <Label
                    htmlFor="newsletter"
                    className="text-xs text-sheytimah-dark leading-relaxed"
                  >
                    Subscribe to our newsletter for digital marketing tips and
                    updates
                  </Label>
                </div>

                <button
                  className="booking-submit-btn hover-lift"
                  onClick={() => handleSubmit("consultation")}
                >
                  <Calendar className="booking-submit-icon" />
                  Book Free Consultation
                </button>
              </div>
            </TabsContent>

            {/* Account Recovery Form */}
            <TabsContent value="recovery" className="space-y-6">
              <div className="booking-form-card">
                <div className="booking-form-header">
                  <h2 className="booking-form-title">
                    Account Recovery Request
                  </h2>
                  <p className="booking-form-description">
                    Fill out this detailed form to start the recovery process
                    for your disabled, suspended, or hacked account.
                  </p>
                </div>

                {/* Policy Warning */}
                <div className="booking-policy-warning">
                  <div className="booking-policy-content">
                    <AlertTriangle className="booking-policy-icon" />
                    <div className="flex-1">
                      <h3 className="booking-policy-title">
                        Important: Please Read Recovery Policies
                      </h3>
                      <ul className="booking-policy-list">
                        {recoveryPolicies.slice(0, 3).map((policy, idx) => (
                          <li key={idx} className="booking-policy-item">
                            <span className="booking-policy-dot"></span>
                            <span>{policy}</span>
                          </li>
                        ))}
                      </ul>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <button className="booking-policy-btn">
                            <FileText className="booking-policy-btn-icon" />
                            View All Policies
                          </button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="max-w-2xl mx-4">
                          <AlertDialogHeader>
                            <AlertDialogTitle className="text-sheytimah-dark">
                              Account Recovery Policies
                            </AlertDialogTitle>
                            <AlertDialogDescription asChild>
                              <div className="space-y-3 max-h-60 overflow-y-auto">
                                {recoveryPolicies.map((policy, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-start space-x-2"
                                  >
                                    <span className="w-1.5 h-1.5 bg-sheytimah-accent rounded-full mt-2 flex-shrink-0"></span>
                                    <span className="text-sm text-sheytimah-dark leading-relaxed">
                                      {policy}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogAction className="bg-sheytimah-accent hover:bg-sheytimah-highlight text-white">
                              I Understand
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                </div>

                {/* Basic Information */}
                <div className="booking-form-grid">
                  <div className="booking-form-field">
                    <Label htmlFor="fullName" className="booking-form-label">
                      Full Name (as on account) *
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="Exact name on your account"
                      value={formData.fullName}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
                      }
                      className="booking-form-input"
                    />
                  </div>

                  <div className="booking-form-field">
                    <Label htmlFor="username" className="booking-form-label">
                      Username/Handle *
                    </Label>
                    <Input
                      id="username"
                      placeholder="@yourusername"
                      value={formData.username}
                      onChange={(e) =>
                        handleInputChange("username", e.target.value)
                      }
                      className="booking-form-input"
                    />
                  </div>

                  <div className="booking-form-field">
                    <Label htmlFor="linkedEmail" className="booking-form-label">
                      Linked Email Address *
                    </Label>
                    <Input
                      id="linkedEmail"
                      type="email"
                      placeholder="Email linked to the account"
                      value={formData.linkedEmail}
                      onChange={(e) =>
                        handleInputChange("linkedEmail", e.target.value)
                      }
                      className="booking-form-input"
                    />
                  </div>

                  <div className="booking-form-field">
                    <Label htmlFor="linkedPhone" className="booking-form-label">
                      Linked Phone Number
                    </Label>
                    <Input
                      id="linkedPhone"
                      placeholder="Phone linked to the account"
                      value={formData.linkedPhone}
                      onChange={(e) =>
                        handleInputChange("linkedPhone", e.target.value)
                      }
                      className="booking-form-input"
                    />
                  </div>
                </div>

                {/* Account Details */}
                <div className="booking-form-grid">
                  <div className="booking-form-field">
                    <Label className="booking-form-label">
                      Platform(s) Affected *
                    </Label>
                    <div className="space-y-2">
                      {["Instagram", "Facebook", "Both"].map((platform) => (
                        <div key={platform} className="booking-checkbox-item">
                          <Checkbox
                            id={platform}
                            checked={formData.platform.includes(platform)}
                            onCheckedChange={(checked) => {
                              const newPlatforms = checked
                                ? [...formData.platform, platform]
                                : formData.platform.filter(
                                    (p) => p !== platform
                                  );
                              handleInputChange("platform", newPlatforms);
                            }}
                            className="border-sheytimah-secondary data-[state=checked]:bg-sheytimah-accent data-[state=checked]:border-sheytimah-accent"
                          />
                          <Label
                            htmlFor={platform}
                            className="booking-checkbox-label"
                          >
                            {platform}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="booking-form-field">
                    <Label htmlFor="issue" className="booking-form-label">
                      Type of Issue *
                    </Label>
                    <Select
                      value={formData.issue}
                      onValueChange={(value) =>
                        handleInputChange("issue", value)
                      }
                    >
                      <SelectTrigger className="booking-form-input">
                        <SelectValue placeholder="Select the issue" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-sheytimah-secondary">
                        <SelectItem value="disabled">
                          Account Disabled
                        </SelectItem>
                        <SelectItem value="suspended">
                          Account Suspended
                        </SelectItem>
                        <SelectItem value="hacked">Account Hacked</SelectItem>
                        <SelectItem value="restricted">
                          Account Restricted
                        </SelectItem>
                        <SelectItem value="other">Other Issue</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="booking-form-field">
                    <Label htmlFor="accountType" className="booking-form-label">
                      Account Type *
                    </Label>
                    <Select
                      value={formData.accountType}
                      onValueChange={(value) =>
                        handleInputChange("accountType", value)
                      }
                    >
                      <SelectTrigger className="booking-form-input">
                        <SelectValue placeholder="Select account type" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-sheytimah-secondary">
                        <SelectItem value="personal">Personal</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="creator">Creator</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="booking-form-field">
                    <Label htmlFor="disableDate" className="booking-form-label">
                      When was it disabled/hacked?
                    </Label>
                    <Input
                      id="disableDate"
                      type="date"
                      value={formData.disableDate}
                      onChange={(e) =>
                        handleInputChange("disableDate", e.target.value)
                      }
                      className="booking-form-input"
                    />
                  </div>
                </div>

                {/* Recovery History */}
                <div className="space-y-4 mb-4">
                  <div className="booking-form-field">
                    <Label
                      htmlFor="appealedBefore"
                      className="booking-form-label"
                    >
                      Have you appealed before? *
                    </Label>
                    <Select
                      value={formData.appealedBefore}
                      onValueChange={(value) =>
                        handleInputChange("appealedBefore", value)
                      }
                    >
                      <SelectTrigger className="booking-form-input">
                        <SelectValue placeholder="Select yes or no" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-sheytimah-secondary">
                        <SelectItem value="no">No, first time</SelectItem>
                        <SelectItem value="yes">
                          Yes, I have appealed
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {formData.appealedBefore === "yes" && (
                    <div className="booking-form-field">
                      <Label
                        htmlFor="appealDetails"
                        className="booking-form-label"
                      >
                        Previous Appeal Details
                      </Label>
                      <Textarea
                        id="appealDetails"
                        placeholder="Describe your previous appeal attempts and responses..."
                        rows={3}
                        value={formData.appealDetails}
                        onChange={(e) =>
                          handleInputChange("appealDetails", e.target.value)
                        }
                        className="booking-form-textarea"
                      />
                    </div>
                  )}
                </div>

                {/* Contact & Payment */}
                <div className="booking-form-grid mb-6">
                  <div className="booking-form-field">
                    <Label
                      htmlFor="contactHandle"
                      className="booking-form-label"
                    >
                      Your Contact Handle
                    </Label>
                    <Input
                      id="contactHandle"
                      placeholder="@yourcontacthandle"
                      value={formData.contactHandle}
                      onChange={(e) =>
                        handleInputChange("contactHandle", e.target.value)
                      }
                      className="booking-form-input"
                    />
                  </div>

                  <div className="booking-form-field">
                    <Label htmlFor="country" className="booking-form-label">
                      Country/Location
                    </Label>
                    <Input
                      id="country"
                      placeholder="Nigeria"
                      value={formData.country}
                      onChange={(e) =>
                        handleInputChange("country", e.target.value)
                      }
                      className="booking-form-input"
                    />
                  </div>
                </div>

                <div className="flex items-start space-x-3 mb-6">
                  <Checkbox
                    id="agreeToPolicy"
                    checked={formData.agreeToPolicy}
                    onCheckedChange={(checked) =>
                      handleInputChange("agreeToPolicy", checked)
                    }
                    className="checkbox-sheytimah mt-1"
                  />
                  <Label
                    htmlFor="agreeToPolicy"
                    className="text-xs text-sheytimah-dark leading-relaxed"
                  >
                    I have read and agree to the recovery policies and
                    understand the timeline and payment requirements *
                  </Label>
                </div>

                <button
                  className="booking-submit-btn hover-lift"
                  onClick={() => handleSubmit("recovery")}
                  disabled={!formData.agreeToPolicy}
                >
                  <ShieldCheck className="booking-submit-icon" />
                  Submit Recovery Request
                </button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
