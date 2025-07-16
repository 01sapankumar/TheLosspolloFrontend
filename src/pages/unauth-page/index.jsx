import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";
import "../../App.css"; // make sure you have animation CSS

function UnauthPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-4">
      {/* Icon with animation */}
      <div className="animate-bounce mb-6 text-red-500">
        <AlertTriangle className="w-16 h-16" />
      </div>

      {/* Main Message */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-red-600 animate-fade-in-down">
        Access Denied
      </h1>
      <p className="text-gray-400 mb-6 max-w-md animate-fade-in-up">
        You don't have permission to view this page. Please go back or return to the homepage.
      </p>

      {/* Optional Image */}
      <img
        src="https://i.imgur.com/OyQOyoU.png" // You can replace this with your own 403 image
        alt="Access Denied"
        className="w-72 md:w-96 mb-6 rounded-md shadow-lg animate-fade-in-up"
      />

      {/* Go to Home Button */}
      <Link
        to="/"
        className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition duration-300 animate-fade-in-up"
      >
        Go to Home
      </Link>
    </div>
  );
}

export default UnauthPage;
