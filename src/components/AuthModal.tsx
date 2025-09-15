import React, { useState } from 'react';
import { X, Mail, Facebook, MessageSquare } from 'lucide-react';

interface AuthModalProps {
  onClose: () => void;
  onAuth: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose, onAuth }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate authentication
    onAuth();
  };

  const handleSocialLogin = (provider: string) => {
    // Simulate social login
    alert(`Đăng nhập bằng ${provider} (Demo)`);
    onAuth();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-full transition-all duration-200"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {isLogin ? 'Đăng nhập' : 'Đăng ký'}
          </h2>
          <p className="text-gray-600">
            {isLogin
              ? 'Chào mừng bạn trở lại!'
              : 'Tham gia cộng đồng du lịch Việt Nam'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Họ và tên
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Nhập họ và tên"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Nhập email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mật khẩu
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Nhập mật khẩu"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-900 transition-colors font-semibold"
          >
            {isLogin ? 'Đăng nhập' : 'Đăng ký'}
          </button>
        </form>

        <div className="mt-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Hoặc</span>
            </div>
          </div>

          <div className="mt-4 space-y-3">
            <button
              onClick={() => handleSocialLogin('Facebook')}
              className="w-full flex items-center justify-center space-x-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition-colors"
            >
              <Facebook className="h-5 w-5 text-blue-600" />
              <span>Đăng nhập bằng Facebook</span>
            </button>

            <button
              onClick={() => handleSocialLogin('Zalo')}
              className="w-full flex items-center justify-center space-x-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition-colors"
            >
              <MessageSquare className="h-5 w-5 text-blue-500" />
              <span>Đăng nhập bằng Zalo</span>
            </button>

            <button
              onClick={() => handleSocialLogin('Email')}
              className="w-full flex items-center justify-center space-x-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition-colors"
            >
              <Mail className="h-5 w-5 text-blue-800" />
              <span>Đăng nhập bằng Email</span>
            </button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-800 hover:text-blue-900 text-sm"
          >
            {isLogin
              ? 'Chưa có tài khoản? Đăng ký ngay'
              : 'Đã có tài khoản? Đăng nhập'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;