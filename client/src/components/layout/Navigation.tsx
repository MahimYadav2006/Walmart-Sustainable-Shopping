import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Leaf, Users, Zap, Award, TrendingUp, Camera, Sparkles, Store, Target, Calculator, Gift } from 'lucide-react';
import MaterialInfoScanner from '../common/biodegradable';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showGreenLens, setShowGreenLens] = useState(false);

  const categories = [
    'Electronics',
    'Fashion',
    'Home & Kitchen',
    'Books',
    'Sports',
    'Beauty',
    'Automotive',
    'Health'
  ];

  const greenFeatures = [
    { icon: Camera, label: 'Green Lens', path: null, description: 'Analyze sustainability', action: () => setShowGreenLens(true) },
    { icon: Store, label: 'Green Store', path: '/green-store', description: 'Eco-friendly products' },
    { icon: Users, label: 'Group Buy', path: '/group-buy', description: 'Collective purchasing' },
    { icon: Award, label: 'Eco Challenges', path: '/challenges', description: 'Sustainability challenges' },
    { icon: TrendingUp, label: 'GreenBridge', path: '/greenbridge', description: 'Seller analytics' }
  ];

  const sustainableShoppingLinks = [
    { icon: Store, label: 'Green Store', path: '/green-store', description: 'Eco-friendly products' },
    { icon: Target, label: 'Eco Recommendations', path: '/eco-recommendations', description: 'Personalized suggestions' },
    { icon: Users, label: 'Group Buy Options', path: '/group-buy', description: 'Collective purchasing' },
    { icon: Calculator, label: 'Carbon Calculator', path: '/carbon-calculator', description: 'Calculate your impact' },
    { icon: Gift, label: 'Eco Rewards', path: '/eco-rewards', description: 'Green loyalty program' },
    { icon: Award, label: 'Eco Challenges', path: '/challenges', description: 'Sustainability challenges' },
  ];

  const handleGreenLensClick = () => {
    setShowGreenLens(true);
  };

  return (
    <nav className="bg-blue-700 text-white border-b border-blue-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-12">
          {/* Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center space-x-2 hover:bg-blue-600 px-3 py-2 rounded-md transition-colors flex-shrink-0 border border-transparent hover:border-blue-400"
          >
            <Menu className="w-4 h-4" />
            <span className="text-sm font-medium hidden sm:block">All</span>
          </button>

          {/* Horizontal Scrollable Navigation */}
          <div className="flex items-center space-x-1 sm:space-x-4 text-sm overflow-x-auto scrollbar-hide flex-1 ml-2 sm:ml-4">
            <Link to="/todays-deals" className="hover:bg-blue-600 hover:border-blue-400 px-3 py-2 rounded-md transition-colors whitespace-nowrap flex-shrink-0 text-xs sm:text-sm border border-transparent font-medium">
              Today's Deals
            </Link>
            <Link to="/sell" className="hover:bg-blue-600 hover:border-blue-400 px-3 py-2 rounded-md transition-colors whitespace-nowrap flex-shrink-0 text-xs sm:text-sm border border-transparent font-medium">
              Sell on Walmart
            </Link>
            <Link to="/customer-service" className="hover:bg-blue-600 hover:border-blue-400 px-3 py-2 rounded-md transition-colors whitespace-nowrap flex-shrink-0 text-xs sm:text-sm border border-transparent font-medium">
              Customer Service
            </Link>
            <Link to="/registry" className="hover:bg-blue-600 hover:border-blue-400 px-3 py-2 rounded-md transition-colors whitespace-nowrap flex-shrink-0 text-xs sm:text-sm border border-transparent font-medium">
              Registry
            </Link>
            <Link to="/gift-cards" className="hover:bg-blue-600 hover:border-blue-400 px-3 py-2 rounded-md transition-colors whitespace-nowrap flex-shrink-0 text-xs sm:text-sm border border-transparent font-medium">
              Gift Cards
            </Link>
            
            {/* Green Features - Show fewer on mobile */}
            {greenFeatures.slice(0, window.innerWidth < 640 ? 2 : greenFeatures.length).map(({ icon: Icon, label, path, description, action }) => (
              path ? (
                <Link
                  key={path}
                  to={path}
                  className="flex items-center space-x-1 sm:space-x-2 text-yellow-300 hover:text-yellow-200 hover:bg-yellow-600 hover:bg-opacity-20 px-2 sm:px-3 py-2 rounded-md transition-all duration-200 whitespace-nowrap flex-shrink-0 text-xs sm:text-sm border border-transparent hover:border-yellow-400 font-medium"
                >
                  <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:block">{label}</span>
                  <span className="sm:hidden">{label.split(' ')[0]}</span>
                </Link>
              ) : (
                <button
                  key={label}
                  onClick={action}
                  className="flex items-center space-x-1 sm:space-x-2 text-yellow-300 hover:text-yellow-200 hover:bg-yellow-600 hover:bg-opacity-20 px-2 sm:px-3 py-2 rounded-md transition-all duration-200 whitespace-nowrap flex-shrink-0 text-xs sm:text-sm border border-transparent hover:border-yellow-400 font-medium"
                >
                  <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:block">{label}</span>
                  <span className="sm:hidden">{label.split(' ')[0]}</span>
                </button>
              )
            ))}
          </div>
        </div>
      </div>

      {/* Green Lens Modal */}
      {showGreenLens && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-yellow-500 text-white p-4 sm:p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-4 h-4 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold">Green Lens Analysis</h2>
                    <p className="text-blue-100 text-xs sm:text-sm">Analyze product sustainability</p>
                  </div>
                </div>
                <button
                  className="text-white hover:text-gray-200 transition-colors p-2 hover:bg-white hover:bg-opacity-10 rounded-full"
                  onClick={() => setShowGreenLens(false)}
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-4 sm:p-6">
              <MaterialInfoScanner />
            </div>
          </div>
        </div>
      )}

      {/* Slide-out Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setMenuOpen(false)} />
          <div className="fixed left-0 top-0 h-full w-80 max-w-[90vw] bg-white text-gray-900 shadow-xl overflow-y-auto">
            <div className="p-4">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                <h2 className="text-xl font-bold text-blue-600">Browse Categories</h2>
                <button 
                  onClick={() => setMenuOpen(false)}
                  className="p-2 hover:bg-blue-50 rounded-lg transition-colors text-gray-500 hover:text-blue-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-bold mb-3 text-blue-600 text-sm uppercase tracking-wide">Shop by Category</h3>
                <div className="space-y-1">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      to={`/category/${category.toLowerCase()}`}
                      className="block py-3 px-4 hover:bg-blue-50 rounded-lg transition-colors text-gray-700 font-medium hover:text-blue-600 border border-transparent hover:border-blue-200"
                      onClick={() => setMenuOpen(false)}
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Green Store Section */}
              <div className="mb-6 p-4 bg-gradient-to-br from-blue-50 to-yellow-50 rounded-xl border-2 border-blue-200">
                <h3 className="font-bold mb-4 text-blue-600 flex items-center text-sm uppercase tracking-wide">
                  <Leaf className="w-5 h-5 mr-2 text-yellow-500" />
                  Sustainable Shopping
                </h3>
                
                <div className="space-y-2">
                  {sustainableShoppingLinks.map(({ icon: Icon, label, path, description }) => (
                    <Link
                      key={path}
                      to={path}
                      className="flex items-center space-x-3 p-3 hover:bg-blue-100 rounded-lg text-blue-700 transition-all duration-200 group border border-transparent hover:border-blue-300"
                      onClick={() => setMenuOpen(false)}
                    >
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <Icon className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-blue-800">{label}</div>
                        <div className="text-xs text-blue-600">{description}</div>
                      </div>
                    </Link>
                  ))}
                  
                  {/* Green Lens Button in Menu */}
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      setShowGreenLens(true);
                    }}
                    className="w-full flex items-center space-x-3 p-3 hover:bg-blue-100 rounded-lg text-blue-700 transition-all duration-200 group border border-transparent hover:border-blue-300"
                  >
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <Camera className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-bold text-blue-800">Green Lens Analysis</div>
                      <div className="text-xs text-blue-600">Analyze sustainability</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Programs and Features */}
              <div className="mb-6">
                <h3 className="font-bold mb-3 text-blue-600 text-sm uppercase tracking-wide">Programs & Features</h3>
                <div className="space-y-1">
                  <Link
                    to="/shop-by-interest"
                    className="block py-3 px-4 hover:bg-blue-50 rounded-lg transition-colors text-gray-700 font-medium hover:text-blue-600 border border-transparent hover:border-blue-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    Shop by Interest
                  </Link>
                  <Link
                    to="/amazon-prime"
                    className="block py-3 px-4 hover:bg-blue-50 rounded-lg transition-colors text-gray-700 font-medium hover:text-blue-600 border border-transparent hover:border-blue-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    Walmart+
                  </Link>
                  <Link
                    to="/amazon-business"
                    className="block py-3 px-4 hover:bg-blue-50 rounded-lg transition-colors text-gray-700 font-medium hover:text-blue-600 border border-transparent hover:border-blue-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    Walmart Business
                  </Link>
                </div>
              </div>

              {/* Help & Settings */}
              <div className="border-t border-gray-200 pt-4">
                <h3 className="font-bold mb-3 text-blue-600 text-sm uppercase tracking-wide">Help & Settings</h3>
                <div className="space-y-1">
                  <Link
                    to="/customer-service"
                    className="block py-3 px-4 hover:bg-blue-50 rounded-lg transition-colors text-gray-700 font-medium hover:text-blue-600 border border-transparent hover:border-blue-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    Customer Service
                  </Link>
                  <Link
                    to="/settings"
                    className="block py-3 px-4 hover:bg-blue-50 rounded-lg transition-colors text-gray-700 font-medium hover:text-blue-600 border border-transparent hover:border-blue-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    Settings
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;