import React, { useState } from 'react';
import { MapPin, User, LogOut, MessageCircle, Menu, X } from 'lucide-react';

interface HeaderProps {
  isAuthenticated: boolean;
  onAuthClick: () => void;
  onLogout: () => void;
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  isAuthenticated,
  onAuthClick,
  onLogout,
  activeTab = 'home',
  onTabChange = () => { }
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleTabChange = (tab: string) => {
    onTabChange(tab);
    setIsMobileMenuOpen(false); // Close mobile menu when tab is selected
  };

  return (
    <header className="bg-white shadow-sm">
      {/* Top row - Login/User info */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center h-10">
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-gray-600" />
                  <span className="text-xs text-gray-700">Xin chào, Traveler!</span>
                </div>
                <button
                  onClick={onLogout}
                  className="flex items-center space-x-1 text-gray-600 hover:text-blue-800 transition-colors"
                >
                  <LogOut className="h-3 w-3" />
                  <span className="text-xs">Đăng xuất</span>
                </button>
              </div>
            ) : (
              <button
                onClick={onAuthClick}
                className="bg-blue-800 text-white px-4 py-1 rounded text-xs hover:bg-blue-900 transition-colors"
              >
                Đăng nhập
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main header row - Logo and Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img
              src="/image copy.png"
              alt="Vietravel Buddy Logo"
              className="h-12 w-12 object-contain"
            />
            <h1 className="text-3xl font-extrabold app-title tracking-wide">
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">Vietravel</span>{' '}
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">Buddy</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <button
              onClick={() => onTabChange('home')}
              className={`text-sm transition-colors px-4 py-2 rounded-full ${activeTab === 'home'
                  ? 'bg-yellow-500 text-white font-medium'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
            >
              Trang chủ
            </button>
            <button
              onClick={() => onTabChange('about')}
              className={`text-sm transition-colors px-4 py-2 rounded-full ${activeTab === 'about'
                  ? 'bg-yellow-500 text-white font-medium'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
            >
              Về chúng tôi
            </button>
            <button
              onClick={() => onTabChange('guides')}
              className={`text-sm transition-colors px-4 py-2 rounded-full ${activeTab === 'guides'
                  ? 'bg-yellow-500 text-white font-medium'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
            >
              Hướng dẫn viên
            </button>
            <button
              onClick={() => onTabChange('accommodation')}
              className={`text-sm transition-colors px-4 py-2 rounded-full ${activeTab === 'accommodation'
                  ? 'bg-yellow-500 text-white font-medium'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
            >
              Lưu trú
            </button>
            <button
              onClick={() => onTabChange('food')}
              className={`text-sm transition-colors px-4 py-2 rounded-full ${activeTab === 'food'
                  ? 'bg-yellow-500 text-white font-medium'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
            >
              Ẩm thực
            </button>
            <button
              onClick={() => onTabChange('partner')}
              className={`text-sm transition-colors px-4 py-2 rounded-full ${activeTab === 'partner'
                  ? 'bg-yellow-500 text-white font-medium'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
            >
              Trở thành đối tác
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
            >
              <span className="sr-only">Mở menu chính</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200 shadow-lg">
            <button
              onClick={() => handleTabChange('home')}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${activeTab === 'home'
                  ? 'bg-yellow-500 text-white'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                }`}
            >
              Trang chủ
            </button>
            <button
              onClick={() => handleTabChange('about')}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${activeTab === 'about'
                  ? 'bg-yellow-500 text-white'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                }`}
            >
              Về chúng tôi
            </button>
            <button
              onClick={() => handleTabChange('guides')}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${activeTab === 'guides'
                  ? 'bg-yellow-500 text-white'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                }`}
            >
              Hướng dẫn viên
            </button>
            <button
              onClick={() => handleTabChange('accommodation')}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${activeTab === 'accommodation'
                  ? 'bg-yellow-500 text-white'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                }`}
            >
              Lưu trú
            </button>
            <button
              onClick={() => handleTabChange('food')}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${activeTab === 'food'
                  ? 'bg-yellow-500 text-white'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                }`}
            >
              Ẩm thực
            </button>
            <button
              onClick={() => handleTabChange('partner')}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${activeTab === 'partner'
                  ? 'bg-yellow-500 text-white'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                }`}
            >
              Trở thành đối tác
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;