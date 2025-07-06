import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { useStore } from '../../store/useStore';

const SearchBar = () => {
  const { searchQuery, setSearchQuery, searchProducts, products } = useStore();
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.length > 2) {
      const filtered = products
        .filter(product => 
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 5);
      setFilteredProducts(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [searchQuery, products]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      await searchProducts(searchQuery);
      setShowSuggestions(false);
      navigate('/');
    }
  };

  const handleSuggestionClick = (product: any) => {
    setSearchQuery('');
    setShowSuggestions(false);
    navigate(`/product/${product._id}`);
  };

  return (
    <div className="relative w-full">
      <form onSubmit={handleSearch} className="flex w-full bg-white rounded-full border-2 border-gray-300 hover:border-gray-400 focus-within:border-blue-500 transition-colors shadow-sm">
        <select className="bg-transparent text-gray-700 px-3 sm:px-4 py-3 text-xs sm:text-sm hidden sm:block focus:outline-none border-r border-gray-300 rounded-l-full">
          <option>All Departments</option>
          <option>Green Store</option>
          <option>Electronics</option>
          <option>Fashion</option>
          <option>Home & Kitchen</option>
          <option>Books</option>
        </select>
        
        <div className="flex-1 relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => searchQuery.length > 2 && setShowSuggestions(true)}
            placeholder="Search everything at Walmart online and in store"
            className="w-full px-4 py-3 text-gray-900 focus:outline-none text-sm sm:text-base bg-transparent placeholder-gray-500"
          />
          
          {/* Search Suggestions */}
          {showSuggestions && filteredProducts.length > 0 && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-xl z-50 max-h-80 overflow-y-auto mt-1">
              {filteredProducts.map((product) => (
                <button
                  key={product._id}
                  onClick={() => handleSuggestionClick(product)}
                  className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={product.url || 'https://images.pexels.com/photos/1029236/pexels-photo-1029236.jpeg?auto=compress&cs=tinysrgb&w=50'}
                      alt={product.name}
                      className="w-8 h-8 object-cover rounded border border-gray-200"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/1029236/pexels-photo-1029236.jpeg?auto=compress&cs=tinysrgb&w=50';
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-gray-900 truncate">
                        {product.name}
                      </div>
                      <div className="text-xs text-gray-600">{product.price}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 px-4 py-3 rounded-r-full flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2"
        >
          <Search className="w-5 h-5 text-gray-900" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;