import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Phone, Video, MoreHorizontal } from 'lucide-react';

interface ChatModalProps {
  guideName: string;
  onClose: () => void;
}

interface Message {
  id: string;
  sender: 'user' | 'guide';
  content: string;
  timestamp: Date;
  type: 'text' | 'image' | 'location';
}

const ChatModal: React.FC<ChatModalProps> = ({ guideName, onClose }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'guide',
      content: `Xin chào! Tôi là ${guideName}. Rất vui được hỗ trợ bạn. Bạn có câu hỏi gì về tour không?`,
      timestamp: new Date(Date.now() - 300000),
      type: 'text'
    },
    {
      id: '2',
      sender: 'user',
      content: 'Chào bạn! Mình muốn hỏi về lịch trình tour và những điều cần chuẩn bị.',
      timestamp: new Date(Date.now() - 240000),
      type: 'text'
    },
    {
      id: '3',
      sender: 'guide',
      content: 'Tuyệt vời! Tour của chúng ta sẽ bắt đầu lúc 6h sáng. Bạn nên mang giày đi bộ thoải mái, nón và kem chống nắng. Còn điều gì khác bạn muốn biết không?',
      timestamp: new Date(Date.now() - 180000),
      type: 'text'
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      content: message,
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, newMessage]);
    setMessage('');

    // Simulate guide response
    setTimeout(() => {
      const responses = [
        'Cảm ơn bạn đã chia sẻ! Tôi sẽ hỗ trợ bạn tốt nhất có thể.',
        'Đây là thông tin rất hữu ích. Tôi sẽ chuẩn bị chu đáo cho tour của bạn.',
        'Tuyệt! Hẹn gặp bạn vào ngày tour. Nếu có thêm câu hỏi, đừng ngần ngại liên hệ nhé!',
        'Đồng ý! Tôi sẽ lưu ý điều này và đảm bảo tour sẽ phù hợp với bạn.',
      ];
      
      const guideResponse: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'guide',
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
        type: 'text'
      };

      setMessages(prev => [...prev, guideResponse]);
    }, 1000 + Math.random() * 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-2xl h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-gray-50 rounded-t-xl">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">
                {guideName.charAt(0)}
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{guideName}</h3>
              <span className="text-sm text-green-500">Đang online</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-600 hover:text-blue-800 transition-colors">
              <Phone className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-blue-800 transition-colors">
              <Video className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-blue-800 transition-colors">
              <MoreHorizontal className="h-5 w-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-600 hover:text-blue-800 hover:bg-blue-50 rounded-full transition-all duration-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  msg.sender === 'user'
                    ? 'bg-blue-800 text-white'
                    : 'bg-gray-200 text-gray-900'
                }`}
              >
                <p className="text-sm">{msg.content}</p>
                <p
                  className={`text-xs mt-1 ${
                    msg.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}
                >
                  {msg.timestamp.toLocaleTimeString('vi-VN', {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        <div className="px-4 py-2 border-t">
          <div className="flex flex-wrap gap-2 mb-2">
            {[
              'Lịch trình chi tiết?',
              'Cần chuẩn bị gì?',
              'Thời tiết như thế nào?',
              'Có wifi không?'
            ].map((quickReply, index) => (
              <button
                key={index}
                onClick={() => setMessage(quickReply)}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-gray-200 transition-colors"
              >
                {quickReply}
              </button>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <form onSubmit={handleSendMessage} className="p-4 border-t">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Nhập tin nhắn..."
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              disabled={!message.trim()}
              className="bg-blue-800 text-white p-2 rounded-lg hover:bg-blue-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatModal;