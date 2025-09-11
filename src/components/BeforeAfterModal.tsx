import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface BeforeAfterModalProps {
  isOpen: boolean;
  onClose: () => void;
  beforeImage: string;
  afterImage: string;
  title: string;
  client: string;
}

export default function BeforeAfterModal({
  isOpen,
  onClose,
  beforeImage,
  afterImage,
  title,
  client,
}: BeforeAfterModalProps) {
  const [currentImage, setCurrentImage] = useState<"before" | "after">(
    "before"
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleNext = () => {
    setCurrentImage(currentImage === "before" ? "after" : "before");
  };

  const handlePrevious = () => {
    setCurrentImage(currentImage === "before" ? "after" : "before");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowLeft") {
      handlePrevious();
    } else if (e.key === "ArrowRight") {
      handleNext();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div>
            <h2 className="modal-title">{title}</h2>
            <p className="modal-client">{client}</p>
          </div>
          <button onClick={onClose} className="modal-close-btn">
            <X className="modal-close-icon" />
          </button>
        </div>

        {/* Content */}
        <div className="modal-content-body">
          {/* Universal Slider View for all screen sizes */}
          <div className="modal-slider">
            {/* Image Container */}
            <div className="modal-image-container">
              <div className="modal-image-wrapper">
                <div className="modal-image-inner">
                  <ImageWithFallback
                    src={currentImage === "before" ? beforeImage : afterImage}
                    alt={`${title} - ${currentImage}`}
                    className="modal-image"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      width: "auto",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />

                  {/* Overlay Text */}
                  <div className="modal-image-label">
                    {currentImage === "before" ? "Before" : "After"}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls - Below Image */}
            <div className="modal-controls">
              <div className="modal-controls-content">
                <button
                  onClick={handlePrevious}
                  className="modal-nav-btn"
                  disabled={currentImage === "before"}
                >
                  <ChevronLeft className="modal-nav-icon" />
                  <span className="modal-nav-text">Previous</span>
                </button>

                <div className="modal-toggle-buttons">
                  <button
                    onClick={() => setCurrentImage("before")}
                    className={`modal-toggle-btn ${
                      currentImage === "before" ? "active" : ""
                    }`}
                  >
                    Before
                  </button>
                  <button
                    onClick={() => setCurrentImage("after")}
                    className={`modal-toggle-btn ${
                      currentImage === "after" ? "active" : ""
                    }`}
                  >
                    After
                  </button>
                </div>

                <button
                  onClick={handleNext}
                  className="modal-nav-btn"
                  disabled={currentImage === "after"}
                >
                  <span className="modal-nav-text">Next</span>
                  <ChevronRight className="modal-nav-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
