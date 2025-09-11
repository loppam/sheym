import { ImageWithFallback } from "./figma/ImageWithFallback";

interface BeforeAfterImageProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
  className?: string;
}

export default function BeforeAfterImage({
  beforeImage,
  afterImage,
  alt,
  className = "",
}: BeforeAfterImageProps) {
  // Always show side-by-side for portfolio cards
  return (
    <div className={`grid grid-cols-2 gap-4 ${className}`}>
      <div className="relative">
        <ImageWithFallback
          src={beforeImage}
          alt={`${alt} - Before`}
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-medium">
          Before
        </div>
      </div>

      <div className="relative">
        <ImageWithFallback
          src={afterImage}
          alt={`${alt} - After`}
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-medium">
          After
        </div>
      </div>
    </div>
  );
}
