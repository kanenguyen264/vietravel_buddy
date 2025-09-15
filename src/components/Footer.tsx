import React from 'react';
import { MapPin, Phone, Mail, Facebook, MessageSquare, Instagram, Youtube, Star, Award, Shield, Clock } from 'lucide-react';

interface FooterProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const Footer: React.FC<FooterProps> = ({ activeTab = 'home', onTabChange = () => {} }) => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), 
                           radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), 
                           radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)`,
        }}></div>
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-8">
              <div className="relative">
                <img 
                  src="/image copy.png" 
                  alt="Vietravel Buddy Logo" 
                  className="h-14 w-14 object-contain rounded-xl shadow-lg bg-white p-2"
                />
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Star className="h-3 w-3 text-white fill-current" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold leading-tight">
                  <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 bg-clip-text text-transparent">Vietravel</span>{' '}
                  <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">Buddy</span>
                </h3>
                <div className="flex items-center space-x-1 mt-1">
                  <Award className="h-3 w-3 text-yellow-400" />
                  <span className="text-xs text-gray-300">Đối tác tin cậy</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-8 leading-relaxed text-sm">
              Khám phá Việt Nam cùng những hướng dẫn viên địa phương 
              tài năng. Trải nghiệm du lịch chân thực và đáng nhớ nhất.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div className="text-gray-300 text-sm">
                  <p className="font-medium text-white mb-1">Head Office:</p>
                  <p>190 Pasteur, Phường Xuân Hòa</p>
                  <p>TP. Hồ Chí Minh, Việt Nam</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Hotline 24/7</p>
                  <a 
                    href="tel:0982751323" 
                    className="text-white hover:text-yellow-400 transition-colors font-medium"
                  >
                    0982 751 323
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Email hỗ trợ</p>
                  <a 
                    href="mailto:support@vietravelbuddy.com" 
                    className="text-white hover:text-yellow-400 transition-colors font-medium text-sm"
                  >
                    support@vietravelbuddy.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-sm font-semibold text-white mb-4">Kết nối với chúng tôi</p>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-110">
                  <Facebook className="h-5 w-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110">
                  <MessageSquare className="h-5 w-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-110">
                  <Instagram className="h-5 w-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-110">
                  <Youtube className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white flex items-center">
              <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-md flex items-center justify-center mr-2">
                <Star className="h-3 w-3 text-white fill-current" />
              </div>
              Khám phá
            </h4>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => onTabChange('home')}
                  className={`flex items-center space-x-2 transition-all duration-300 group ${
                    activeTab === 'home' 
                      ? 'text-yellow-400 font-medium' 
                      : 'text-gray-300 hover:text-white hover:translate-x-1'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeTab === 'home' ? 'bg-yellow-400' : 'bg-gray-600 group-hover:bg-yellow-400'
                  }`}></div>
                  <span>Trang chủ</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onTabChange('guides')}
                  className={`flex items-center space-x-2 transition-all duration-300 group ${
                    activeTab === 'guides' 
                      ? 'text-yellow-400 font-medium' 
                      : 'text-gray-300 hover:text-white hover:translate-x-1'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeTab === 'guides' ? 'bg-yellow-400' : 'bg-gray-600 group-hover:bg-yellow-400'
                  }`}></div>
                  <span>Hướng dẫn viên</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onTabChange('accommodation')}
                  className={`flex items-center space-x-2 transition-all duration-300 group ${
                    activeTab === 'accommodation' 
                      ? 'text-yellow-400 font-medium' 
                      : 'text-gray-300 hover:text-white hover:translate-x-1'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeTab === 'accommodation' ? 'bg-yellow-400' : 'bg-gray-600 group-hover:bg-yellow-400'
                  }`}></div>
                  <span>Lưu trú</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onTabChange('food')}
                  className={`flex items-center space-x-2 transition-all duration-300 group ${
                    activeTab === 'food' 
                      ? 'text-yellow-400 font-medium' 
                      : 'text-gray-300 hover:text-white hover:translate-x-1'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeTab === 'food' ? 'bg-yellow-400' : 'bg-gray-600 group-hover:bg-yellow-400'
                  }`}></div>
                  <span>Ẩm thực</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onTabChange('about')}
                  className={`flex items-center space-x-2 transition-all duration-300 group ${
                    activeTab === 'about' 
                      ? 'text-yellow-400 font-medium' 
                      : 'text-gray-300 hover:text-white hover:translate-x-1'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeTab === 'about' ? 'bg-yellow-400' : 'bg-gray-600 group-hover:bg-yellow-400'
                  }`}></div>
                  <span>Về chúng tôi</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white flex items-center">
              <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-md flex items-center justify-center mr-2">
                <Shield className="h-3 w-3 text-white" />
              </div>
              Dịch vụ
            </h4>
            <ul className="space-y-4 text-gray-300">
              <li>
                <a href="#" className="flex items-center space-x-2 hover:text-yellow-400 transition-all duration-300 group hover:translate-x-1">
                  <div className="w-2 h-2 bg-gray-600 rounded-full group-hover:bg-yellow-400 transition-all duration-300"></div>
                  <span>Tour ẩm thực</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 hover:text-yellow-400 transition-all duration-300 group hover:translate-x-1">
                  <div className="w-2 h-2 bg-gray-600 rounded-full group-hover:bg-yellow-400 transition-all duration-300"></div>
                  <span>Tour văn hóa</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 hover:text-yellow-400 transition-all duration-300 group hover:translate-x-1">
                  <div className="w-2 h-2 bg-gray-600 rounded-full group-hover:bg-yellow-400 transition-all duration-300"></div>
                  <span>Tour thiên nhiên</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 hover:text-yellow-400 transition-all duration-300 group hover:translate-x-1">
                  <div className="w-2 h-2 bg-gray-600 rounded-full group-hover:bg-yellow-400 transition-all duration-300"></div>
                  <span>Workshop trải nghiệm</span>
                </a>
              </li>
              <li>
                <button
                  onClick={() => onTabChange('partner')}
                  className="flex items-center space-x-2 hover:text-yellow-400 transition-all duration-300 group hover:translate-x-1"
                >
                  <div className="w-2 h-2 bg-gray-600 rounded-full group-hover:bg-yellow-400 transition-all duration-300"></div>
                  <span>Trở thành đối tác</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white flex items-center">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-purple-500 rounded-md flex items-center justify-center mr-2">
                <Clock className="h-3 w-3 text-white" />
              </div>
              Hỗ trợ
            </h4>
            <ul className="space-y-4 text-gray-300">
              <li>
                <a href="#" className="flex items-center space-x-2 hover:text-yellow-400 transition-all duration-300 group hover:translate-x-1">
                  <div className="w-2 h-2 bg-gray-600 rounded-full group-hover:bg-yellow-400 transition-all duration-300"></div>
                  <span>Câu hỏi thường gặp</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 hover:text-yellow-400 transition-all duration-300 group hover:translate-x-1">
                  <div className="w-2 h-2 bg-gray-600 rounded-full group-hover:bg-yellow-400 transition-all duration-300"></div>
                  <span>Chính sách hủy tour</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 hover:text-yellow-400 transition-all duration-300 group hover:translate-x-1">
                  <div className="w-2 h-2 bg-gray-600 rounded-full group-hover:bg-yellow-400 transition-all duration-300"></div>
                  <span>Điều khoản dịch vụ</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 hover:text-yellow-400 transition-all duration-300 group hover:translate-x-1">
                  <div className="w-2 h-2 bg-gray-600 rounded-full group-hover:bg-yellow-400 transition-all duration-300"></div>
                  <span>Chính sách bảo mật</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 hover:text-yellow-400 transition-all duration-300 group hover:translate-x-1">
                  <div className="w-2 h-2 bg-gray-600 rounded-full group-hover:bg-yellow-400 transition-all duration-300"></div>
                  <span>Liên hệ hỗ trợ</span>
                </a>
              </li>
            </ul>

            {/* Working Hours */}
            <div className="mt-8 p-4 bg-gradient-to-r from-blue-800/30 to-purple-800/30 rounded-lg border border-blue-700/30">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="h-4 w-4 text-yellow-400" />
                <span className="text-sm font-semibold text-white">Giờ làm việc</span>
              </div>
              <div className="text-xs text-gray-300 space-y-1">
                <p>Thứ 2 - Thứ 6: 8:00 - 22:00</p>
                <p>Thứ 7 - CN: 9:00 - 21:00</p>
                <p className="text-yellow-400 font-medium">Hotline 24/7 luôn sẵn sàng!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50 bg-gradient-to-r from-gray-900/80 to-blue-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="text-gray-400 text-sm">
                © 2025 Vietravel Buddy. Tất cả quyền được bảo lưu.
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-green-400" />
                <span className="text-xs text-green-400">Được chứng nhận bởi Bộ VHTTDL</span>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center space-x-1">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span>Điều khoản dịch vụ</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center space-x-1">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span>Chính sách bảo mật</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center space-x-1">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span>Sitemap</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;