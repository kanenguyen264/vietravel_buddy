import React, { useState } from 'react';
import { MessageCircle, X, Facebook, Mail, MessageSquare, Phone } from 'lucide-react';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleContactOption = (type: string) => {
    switch (type) {
      case 'facebook':
        window.open('https://m.me/vietravelbuddy', '_blank');
        break;
      case 'zalo':
        window.open('https://zalo.me/0982751323', '_blank');
        break;
      case 'email':
        window.location.href = 'mailto:support@vietravelbuddy.com';
        break;
      case 'phone':
        window.location.href = 'tel:0982751323';
        break;
      case 'chat':
        // Mở chat trực tiếp (có thể tích hợp với hệ thống chat thực tế)
        alert('Chức năng chat trực tiếp đang được phát triển. Vui lòng sử dụng các kênh liên hệ khác!');
        break;
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Options Menu */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-in slide-in-from-bottom-2 duration-300">
          <div className="p-4 bg-blue-800 text-white">
            <h3 className="font-semibold text-lg">Liên hệ với chúng tôi</h3>
            <p className="text-sm text-blue-100">Chọn cách liên hệ phù hợp</p>
          </div>
          
          <div className="p-2">
            {/* Chat trực tiếp */}
            <button
              onClick={() => handleContactOption('chat')}
              className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-blue-800" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Chat trực tiếp</div>
                <div className="text-sm text-gray-500">Hỗ trợ ngay lập tức</div>
              </div>
            </button>

            {/* Facebook */}
            <button
              onClick={() => handleContactOption('facebook')}
              className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Facebook className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Facebook</div>
                <div className="text-sm text-gray-500">Messenger</div>
              </div>
            </button>

            {/* Zalo */}
            <button
              onClick={() => handleContactOption('zalo')}
              className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <MessageSquare className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Zalo</div>
                <div className="text-sm text-gray-500">0982 751 323</div>
              </div>
            </button>

            {/* Email */}
            <button
              onClick={() => handleContactOption('email')}
              className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
            >
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Mail className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Email</div>
                <div className="text-sm text-gray-500">support@vietravelbuddy.com</div>
              </div>
            </button>

            {/* Phone */}
            <button
              onClick={() => handleContactOption('phone')}
              className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
            >
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <Phone className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Hotline</div>
                <div className="text-sm text-gray-500">0982 751 323</div>
              </div>
            </button>
          </div>

          <div className="p-3 bg-gray-50 border-t">
            <p className="text-xs text-gray-500 text-center">
              Thời gian hỗ trợ: 8:00 - 22:00 hàng ngày
            </p>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
          isOpen 
            ? 'bg-gray-600 hover:bg-gray-700' 
            : 'bg-blue-800 hover:bg-blue-900 hover:scale-110'
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Notification Badge */}
      {!isOpen && (
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-xs text-white font-bold">!</span>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;