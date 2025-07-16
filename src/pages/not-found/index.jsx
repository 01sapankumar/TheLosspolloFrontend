import { Link } from "react-router-dom";
import { Ghost } from "lucide-react";
import "./NotFound.css"; // your custom CSS

function NotFound() {
  return (
    <div className="not-found-container">
      {/* Animated Icon */}
      <div className="icon-bounce">
        <Ghost className="icon" />
      </div>

      {/* Heading */}
      <h1 className="heading">404 - Page Not Found</h1>

      {/* Description */}
      <p className="description">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>

      {/* Optional Image */}
      <img
        src="https://i.imgur.com/qIufhof.png"
        alt="Not Found"
        className="not-found-image"
      />

      {/* Home Button */}
      <Link to="/" className="home-button">
        Go to Home
      </Link>
    </div>
  );
}

export default NotFound;
