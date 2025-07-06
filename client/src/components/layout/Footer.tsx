import React from 'react';
import { ArrowUp, Leaf, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-blue-900 text-white">
      {/* Back to Top */}
      <div className="bg-blue-800 hover:bg-blue-700 transition-colors">
        <button
          onClick={scrollToTop}
          className="w-full py-3 text-center font-medium flex items-center justify-center text-sm sm:text-base"
        >
          <ArrowUp className="w-4 h-4 mr-2" />
          Back to top
        </button>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Get to Know Us */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-yellow-300">Get to Know Us</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-blue-100 text-sm sm:text-base">
              <li><a href="/about" className="hover:text-yellow-300 transition-colors">About Walmart</a></li>
              <li><a href="/careers" className="hover:text-yellow-300 transition-colors">Careers</a></li>
              <li><a href="/press" className="hover:text-yellow-300 transition-colors">Press Releases</a></li>
              <li><a href="/sustainability" className="hover:text-yellow-300 transition-colors">
                <span className="flex items-center">
                  <Leaf className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-green-400" />
                  Sustainability
                </span>
              </a></li>
              <li><a href="/Walmart-cares" className="hover:text-yellow-300 transition-colors">Walmart Cares</a></li>
              <li><a href="/gift-card" className="hover:text-yellow-300 transition-colors">Gift a Smile</a></li>
            </ul>
          </div>

          {/* Make Money with Us */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-yellow-300">Make Money with Us</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-blue-100 text-sm sm:text-base">
              <li><a href="/sell" className="hover:text-yellow-300 transition-colors">Sell on Walmart</a></li>
              <li><a href="/greenbridge" className="hover:text-yellow-300 transition-colors">
                <span className="flex items-center">
                  <Leaf className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-green-400" />
                  GreenBridge for Sellers
                </span>
              </a></li>
              <li><a href="/Walmart-business" className="hover:text-yellow-300 transition-colors">Sell on Walmart Business</a></li>
              <li><a href="/Walmart-global" className="hover:text-yellow-300 transition-colors">Sell apps on Walmart</a></li>
              <li><a href="/advertise" className="hover:text-yellow-300 transition-colors">Advertise Your Products</a></li>
              <li><a href="/self-publish" className="hover:text-yellow-300 transition-colors">Self-Publish with Us</a></li>
              <li><a href="/host-hub" className="hover:text-yellow-300 transition-colors">Host an Walmart Hub</a></li>
            </ul>
          </div>

          {/* Walmart Payment Products */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-yellow-300">Walmart Payment Products</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-blue-100 text-sm sm:text-base">
              <li><a href="/Walmart-business-card" className="hover:text-yellow-300 transition-colors">Walmart Business Card</a></li>
              <li><a href="/shop-points" className="hover:text-yellow-300 transition-colors">Shop with Points</a></li>
              <li><a href="/reload-balance" className="hover:text-yellow-300 transition-colors">Reload Your Balance</a></li>
              <li><a href="/currency-converter" className="hover:text-yellow-300 transition-colors">Walmart Currency Converter</a></li>
              <li><a href="/green-rewards" className="hover:text-yellow-300 transition-colors">
                <span className="flex items-center">
                  <Leaf className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-green-400" />
                  Green Rewards Program
                </span>
              </a></li>
            </ul>
          </div>

          {/* Let Us Help You */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-yellow-300">Let Us Help You</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-blue-100 text-sm sm:text-base">
              <li><a href="/your-account" className="hover:text-yellow-300 transition-colors">Your Account</a></li>
              <li><a href="/orders" className="hover:text-yellow-300 transition-colors">Your Orders</a></li>
              <li><a href="/shipping" className="hover:text-yellow-300 transition-colors">Shipping Rates & Policies</a></li>
              <li><a href="/returns" className="hover:text-yellow-300 transition-colors">Returns & Replacements</a></li>
              <li><a href="/assistant" className="hover:text-yellow-300 transition-colors">Manage Your Content and Devices</a></li>
              <li><a href="/help" className="hover:text-yellow-300 transition-colors">Walmart Assistant</a></li>
              <li><a href="/carbon-calculator" className="hover:text-yellow-300 transition-colors">
                <span className="flex items-center">
                  <Leaf className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-green-400" />
                  Carbon Footprint Calculator
                </span>
              </a></li>
              <li><a href="/help" className="hover:text-yellow-300 transition-colors">Help</a></li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <hr className="my-6 sm:my-8 border-blue-700" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <a href="/" className="flex items-center space-x-2">
              <img
                src="/logo.png"
                alt="Walmart Logo"
                className="w-20 sm:w-24 h-auto object-contain"
              />
              <Leaf className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-400" />
            </a>
            
            <select className="bg-blue-800 border border-blue-600 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm">
              <option>English</option>
              <option>हिन्दी</option>
              <option>తెలుగు</option>
              <option>தமிழ்</option>
            </select>
            
            <div className="flex items-center space-x-1 text-xs sm:text-sm">
              <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-4 h-2.5 sm:w-5 sm:h-3" />
              <span>India</span>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <a href="#" className="text-blue-300 hover:text-yellow-300 transition-colors">
              <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a href="#" className="text-blue-300 hover:text-yellow-300 transition-colors">
              <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a href="#" className="text-blue-300 hover:text-yellow-300 transition-colors">
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a href="#" className="text-blue-300 hover:text-yellow-300 transition-colors">
              <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-blue-700">
          <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm text-blue-200 justify-center">
            <a href="/conditions" className="hover:text-yellow-300 transition-colors">Conditions of Use</a>
            <a href="/privacy" className="hover:text-yellow-300 transition-colors">Privacy Notice</a>
            <a href="/interest-ads" className="hover:text-yellow-300 transition-colors">Your Ads Privacy Choices</a>
            <a href="/carbon-neutral" className="hover:text-yellow-300 transition-colors text-green-400">
              Carbon Neutral Shipping
            </a>
          </div>
          <div className="text-center text-xs sm:text-sm text-blue-200 mt-3 sm:mt-4">
            © 1996-2024, Walmart.com, Inc. or its affiliates
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;