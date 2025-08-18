import { useState } from "react";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  ShoppingCart,
  Download,
  Star,
  Filter,
  Search,
  CreditCard,
  FileText,
  Palette,
  Camera,
  Shield,
  BookOpen,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface ShopPageProps {
  onNavigate: (page: string) => void;
}

export default function ShopPage({ onNavigate }: ShopPageProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState<string[]>([]);

  const categories = [
    { id: "all", name: "All Products" },
    { id: "templates", name: "Content Templates" },
    { id: "courses", name: "Digital Courses" },
    { id: "graphics", name: "Graphics & Logos" },
    { id: "recovery", name: "Account Security" },
    { id: "addons", name: "Service Add-ons" },
  ];

  const products = [
    {
      id: "social-media-templates",
      title: "Social Media Content Templates Pack",
      category: "templates",
      price: "₦25,000",
      originalPrice: "₦35,000",
      image: "social media templates design",
      description:
        "Professional social media templates for Instagram, Facebook, and TikTok. Includes 50+ customizable designs.",
      rating: 4.8,
      reviews: 124,
      features: [
        "50+ Templates",
        "Editable in Canva",
        "Instagram Stories",
        "Feed Posts",
        "Reels Covers",
      ],
      isDigital: true,
      bestSeller: true,
    },
    {
      id: "brand-identity-course",
      title: "Complete Brand Identity Masterclass",
      category: "courses",
      price: "₦75,000",
      originalPrice: "₦100,000",
      image: "brand identity course online",
      description:
        "Learn how to build a complete brand identity from scratch. 8-hour comprehensive course with resources.",
      rating: 4.9,
      reviews: 89,
      features: [
        "8+ Hours Video",
        "Brand Guidelines Template",
        "Logo Design Process",
        "Color Psychology",
        "Lifetime Access",
      ],
      isDigital: true,
      popular: true,
    },
    {
      id: "logo-design-service",
      title: "Professional Logo Design",
      category: "graphics",
      price: "₦50,000",
      originalPrice: "₦75,000",
      image: "professional logo design service",
      description:
        "Custom logo design with 3 concepts, unlimited revisions, and full brand package including style guide.",
      rating: 4.9,
      reviews: 156,
      features: [
        "3 Logo Concepts",
        "Unlimited Revisions",
        "Vector Files",
        "Brand Guidelines",
        "7-Day Delivery",
      ],
      isDigital: false,
    },
    {
      id: "account-security-guide",
      title: "Social Media Account Security Bundle",
      category: "recovery",
      price: "₦15,000",
      originalPrice: "₦25,000",
      image: "social media security guide",
      description:
        "Complete guide to protecting your social media accounts and preventing hacks. Includes recovery checklist.",
      rating: 4.7,
      reviews: 203,
      features: [
        "Security Checklist",
        "Prevention Guide",
        "Recovery Steps",
        "Email Templates",
        "Video Tutorials",
      ],
      isDigital: true,
    },
    {
      id: "content-calendar-template",
      title: "Annual Content Calendar Template",
      category: "templates",
      price: "₦20,000",
      originalPrice: "₦30,000",
      image: "content calendar planning template",
      description:
        "Pre-planned content calendar with 365 days of post ideas, holidays, and trending topics for your niche.",
      rating: 4.6,
      reviews: 78,
      features: [
        "365 Post Ideas",
        "Holiday Calendar",
        "Trending Topics",
        "Caption Templates",
        "Hashtag Lists",
      ],
      isDigital: true,
    },
    {
      id: "video-editing-addon",
      title: "Premium Video Editing Service",
      category: "addons",
      price: "₦35,000",
      originalPrice: null,
      image: "video editing service professional",
      description:
        "Professional video editing for your social media content. Includes motion graphics and sound design.",
      rating: 4.9,
      reviews: 67,
      features: [
        "Professional Editing",
        "Motion Graphics",
        "Sound Design",
        "Color Grading",
        "48-Hour Delivery",
      ],
      isDigital: false,
    },
    {
      id: "social-media-audit",
      title: "Complete Social Media Audit",
      category: "addons",
      price: "₦40,000",
      originalPrice: "₦60,000",
      image: "social media audit analysis",
      description:
        "Comprehensive audit of your social media presence with actionable recommendations and strategy.",
      rating: 4.8,
      reviews: 92,
      features: [
        "Full Account Analysis",
        "Competitor Research",
        "Growth Strategy",
        "Content Recommendations",
        "Performance Report",
      ],
      isDigital: true,
    },
    {
      id: "instagram-growth-course",
      title: "Instagram Growth Secrets Course",
      category: "courses",
      price: "₦60,000",
      originalPrice: "₦85,000",
      image: "instagram growth course online",
      description:
        "Learn the exact strategies we use to grow Instagram accounts organically. 6+ hours of content.",
      rating: 4.9,
      reviews: 145,
      features: [
        "6+ Hours Content",
        "Growth Templates",
        "Engagement Strategies",
        "Algorithm Insights",
        "Community Access",
      ],
      isDigital: true,
      popular: true,
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (productId: string) => {
    setCart((prev) => [...prev, productId]);
  };

  const getIcon = (category: string) => {
    switch (category) {
      case "templates":
        return FileText;
      case "courses":
        return BookOpen;
      case "graphics":
        return Palette;
      case "recovery":
        return Shield;
      case "addons":
        return Camera;
      default:
        return FileText;
    }
  };

  return (
    <div className="shop-page">
      {/* Hero Section */}
      <section className="shop-hero gradient-primary">
        <div className="page-container">
          <div className="page-hero-content">
            <Badge className="shop-hero-badge">
              <ShoppingCart
                style={{ width: "1rem", height: "1rem", marginRight: "0.5rem" }}
              />
              Digital Products & Services
            </Badge>
            <h1 className="shop-hero-title">Shop Our Collection</h1>
            <p className="shop-hero-description">
              Get instant access to professional templates, courses, and
              services to boost your digital marketing efforts.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="shop-search-filter">
        <div className="page-container">
          <div className="shop-search-content">
            <div className="shop-search-wrapper">
              <Search className="shop-search-icon" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="shop-search-input"
              />
            </div>

            <div className="shop-search-controls">
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="shop-filter-select">
                  <Filter
                    style={{
                      width: "1rem",
                      height: "1rem",
                      marginRight: "0.5rem",
                    }}
                  />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {cart.length > 0 && (
                <button className="shop-cart-btn">
                  <ShoppingCart style={{ width: "1rem", height: "1rem" }} />
                  Cart ({cart.length})
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="shop-products">
        <div className="page-container">
          <div className="shop-products-grid">
            {filteredProducts.map((product) => {
              const Icon = getIcon(product.category);
              return (
                <div key={product.id} className="shop-product-card">
                  <div className="shop-product-image-wrapper">
                    <ImageWithFallback
                      src=""
                      alt={product.title}
                      className="shop-product-image"
                    />

                    {/* Badges */}
                    <div className="shop-product-badges">
                      {product.bestSeller && (
                        <Badge className="shop-product-badge-bestseller">
                          Best Seller
                        </Badge>
                      )}
                      {product.popular && (
                        <Badge className="shop-product-badge-popular">
                          Popular
                        </Badge>
                      )}
                      {product.isDigital && (
                        <Badge
                          variant="secondary"
                          className="shop-product-badge-digital"
                        >
                          <Download
                            style={{
                              width: "0.75rem",
                              height: "0.75rem",
                              marginRight: "0.25rem",
                            }}
                          />
                          Digital
                        </Badge>
                      )}
                    </div>

                    {/* Category Icon */}
                    <div className="shop-product-category-icon">
                      <Icon
                        style={{
                          width: "1rem",
                          height: "1rem",
                          color: "var(--sheytimah-accent)",
                        }}
                      />
                    </div>
                  </div>

                  <div className="shop-product-content">
                    <div className="shop-product-rating">
                      <div className="shop-product-stars">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`shop-product-star ${
                              i < Math.floor(product.rating)
                                ? "shop-product-star-filled"
                                : "shop-product-star-empty"
                            }`}
                          />
                        ))}
                        <span className="shop-product-reviews">
                          ({product.reviews})
                        </span>
                      </div>
                    </div>

                    <h3 className="shop-product-title">{product.title}</h3>

                    <p className="shop-product-description">
                      {product.description}
                    </p>

                    {/* Features */}
                    <ul className="shop-product-features">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="shop-product-feature">
                          <CheckCircle className="shop-product-feature-icon" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {product.features.length > 3 && (
                        <li className="shop-product-more-features">
                          +{product.features.length - 3} more features
                        </li>
                      )}
                    </ul>

                    {/* Price */}
                    <div className="shop-product-pricing">
                      <div>
                        <span className="shop-product-price">
                          {product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="shop-product-original-price">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                      {product.originalPrice && (
                        <Badge
                          variant="destructive"
                          className="shop-product-save-badge"
                        >
                          Save{" "}
                          {Math.round(
                            (1 -
                              parseInt(product.price.replace(/[₦,]/g, "")) /
                                parseInt(
                                  product.originalPrice.replace(/[₦,]/g, "")
                                )) *
                              100
                          )}
                          %
                        </Badge>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="shop-product-actions">
                      <button
                        className="shop-product-add-btn"
                        onClick={() => addToCart(product.id)}
                      >
                        <ShoppingCart
                          style={{ width: "1rem", height: "1rem" }}
                        />
                        Add to Cart
                      </button>
                      <button className="shop-product-details-btn">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredProducts.length === 0 && (
            <div className="shop-no-products">
              <div className="shop-no-products-emoji">🔍</div>
              <h3 className="shop-no-products-title">No products found</h3>
              <p className="shop-no-products-text">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="shop-categories">
        <div className="page-container">
          <div className="shop-categories-header">
            <h2 className="shop-categories-title">Shop by Category</h2>
            <p className="shop-categories-description">
              Find exactly what you need to enhance your digital marketing
              efforts.
            </p>
          </div>

          <div className="shop-categories-grid">
            {categories.slice(1).map((category) => {
              const Icon = getIcon(category.id);
              const categoryProducts = products.filter(
                (p) => p.category === category.id
              );
              return (
                <div
                  key={category.id}
                  className="shop-category-card"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className="shop-category-icon">
                    <Icon
                      style={{ width: "2rem", height: "2rem", color: "white" }}
                    />
                  </div>
                  <h3 className="shop-category-name">{category.name}</h3>
                  <p className="shop-category-count">
                    {categoryProducts.length} products
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="shop-payment">
        <div className="page-container max-w-6xl">
          <div className="shop-payment-header">
            <h3 className="shop-payment-title">Secure Payment Methods</h3>
            <p className="shop-payment-description">
              We accept various payment methods for your convenience and
              security.
            </p>
          </div>

          <div className="shop-payment-grid">
            <div className="shop-payment-card">
              <CreditCard className="shop-payment-icon" />
              <h4 className="shop-payment-method">Bank Transfer</h4>
              <p className="shop-payment-text">
                Direct bank transfer with instant confirmation
              </p>
            </div>

            <div className="shop-payment-card">
              <CreditCard className="shop-payment-icon" />
              <h4 className="shop-payment-method">PayPal</h4>
              <p className="shop-payment-text">
                International payments via PayPal
              </p>
            </div>

            <div className="shop-payment-card">
              <CreditCard className="shop-payment-icon" />
              <h4 className="shop-payment-method">Cryptocurrency</h4>
              <p className="shop-payment-text">
                Bitcoin, USDT, and other cryptocurrencies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="shop-cta gradient-accent">
        <div className="shop-cta-content">
          <h2 className="shop-cta-title">Need a Custom Solution?</h2>
          <p className="shop-cta-description">
            Don't see what you're looking for? We create custom digital products
            and services tailored to your specific needs.
          </p>
          <div className="shop-cta-buttons">
            <button
              className="shop-cta-btn-primary hover-lift"
              onClick={() => onNavigate("booking")}
            >
              Request Custom Product
              <ArrowRight style={{ width: "1.25rem", height: "1.25rem" }} />
            </button>
            <button
              className="shop-cta-btn-secondary"
              onClick={() => onNavigate("services")}
            >
              View Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
