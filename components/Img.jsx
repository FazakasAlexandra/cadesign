import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import ReactImageFallback from "react-image-fallback";

export const Img = ({ src, alt, className, onClick, key }) => {
  return (
    <ReactImageFallback
      key={key}
      className={`image ${className}`}
      src={src}
      alt={alt}
      loading="lazy"
      fallbackImage="/assets/placeholder.png"
      onClick={onClick}
    />
  );
};
