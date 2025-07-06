import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import { useStore } from '../../store/useStore';
import ErrorIcon from '../common/ErrorIcon';

interface FormData {
  email: string;
  password: string;
}

interface ValidationErrors {
  email?: string;
  password?: string;
}

interface ErrorMessage {
  msg: string;
}

const LoginForm = () => {
  const navigate = useNavigate();
  const { login, loading, error } = useStore();
  
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});

  // Clear validation errors when form data changes
  useEffect(() => {
    setValidationErrors({});
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value} = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

  };

  const validateForm = () => {
    const errors: ValidationErrors = {};
    
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email format is invalid';
    }
    
    if (!formData.password) {
      errors.password = 'Password is required';
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    const success = await login(formData);
    if (success) {
      navigate('/');
    }
  };

  // Helper function to format error message
  const formatErrorMessage = (error: string | ErrorMessage | ErrorMessage[]) => {
    if (typeof error === 'string') return error;
    if (Array.isArray(error)) return error.map(err => err.msg).join(', ');
    if (error && 'msg' in error) return error.msg;
    return 'An error occurred';
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
          <div className="text-center mb-8">
            <Link to="/" className="flex justify-center mb-4">
              <div className="flex items-center space-x-2">
                <div className="bg-blue-600 text-white p-2 rounded-lg">
                  <img src="/walmart.svg" className='w-8 h-8' alt="" />
                </div>
                <div className="text-left">
                  <h1 className="text-2xl font-bold text-blue-600">Walmart</h1>
                  <div className="flex items-center space-x-1">
                    <Leaf className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Green</span>
                  </div>
                </div>
              </div>
            </Link>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Sign in to your account
            </h2>
            <p className="text-gray-600">
              Welcome back to Walmart Green
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 border ${
                    validationErrors.email ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200`}
                  placeholder="Enter your email"
                />
              </div>
              {validationErrors.email && (
                <div className="flex items-center space-x-2 mt-2">
                  <ErrorIcon />
                  <p className="text-sm text-red-600">{validationErrors.email}</p>
                </div>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-12 py-3 border ${
                    validationErrors.password ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center hover:text-blue-600 transition-colors duration-200"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
              {validationErrors.password && (
                <div className="flex items-center space-x-2 mt-2">
                  <ErrorIcon />
                  <p className="text-sm text-red-600">{validationErrors.password}</p>
                </div>
              )}
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-sm text-red-700">
                  {formatErrorMessage(error)}
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-xs sm:text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-xs sm:text-sm cursor-pointer text-blue-600 hover:text-blue-700 transition-colors duration-200">
                  Forgot your password?
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>

            <div className="text-center pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-4">
                Don't have an account?{' '}
                <Link
                  to="/register"
                  className="font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200"
                >
                  Create a new account
                </Link>
              </p>
              <p className="text-xs text-gray-500">
                By signing in, you agree to Walmart's{' '}
                <Link to="/terms" className="text-blue-600 hover:text-blue-700 underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-blue-600 hover:text-blue-700 underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginForm;