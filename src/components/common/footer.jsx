import { Mail, MapPin, Phone, Instagram, MailIcon, MessageCircle } from "lucide-react";
import "../../App.css"; // Import CSS for animation styles

function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white border-t border-gray-700 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div className="animate-fade-in-left">
          <h3 className="text-2xl font-extrabold mb-4 glow-text">
            <span className="flicker-text">The</span>
            <span className="ml-1">Lospollo</span>
          </h3>
          <p className="text-sm text-gray-400">
            Your trusted destination for fashion and lifestyle essentials. We
            bring quality and style right to your doorstep.
          </p>
          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.instagram.com/lospollos.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors duration-200"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/918858815858"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 transition-colors duration-200"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="mailto:lospollos1618@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              <MailIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="animate-fade-in-bottom">
          <h3 className="text-xl font-bold text-red-500 mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-red-500" />
              +91 88588 15858
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-red-500" />
              support@shopease.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-red-500" />
              123, MG Road, Bengaluru, India
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="animate-fade-in-right">
          <h3 className="text-xl font-bold text-red-500 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/about" className="hover:text-red-500">About Us</a></li>
            <li><a href="/faq" className="hover:text-red-500">FAQs</a></li>
            <li><a href="/returns" className="hover:text-red-500">Returns & Refunds</a></li>
            <li><a href="/privacy" className="hover:text-red-500">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4 animate-fade-in-center">
        &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
