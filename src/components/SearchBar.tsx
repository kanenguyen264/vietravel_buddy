import React, { useState } from 'react';
import { Search, MapPin, Calendar, Tag, Home, UtensilsCrossed, Handshake } from 'lucide-react';

interface SearchBarProps {
  onSearch: (filters: {
    location: string;
    date: string;
    category: string;
    accommodation: string;
    dining: string;
  }) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [accommodation, setAccommodation] = useState('');
  const [dining, setDining] = useState('');

  const locations = ['TPHCM', 'Đà Nẵng', 'Hà Nội'];
  const categories = [
    'Tour ẩm thực',
    'Workshop',
    'Tour Trekking',
    'Tour văn hóa',
    'Tour thiên nhiên',
    'Tour lịch sử'
  ];
  const accommodations = [
    'Khách sạn 3 sao',
    'Khách sạn 4 sao',
    'Khách sạn 5 sao',
    'Resort',
    'Homestay',
    'Villa'
  ];
  const diningOptions = [
    'Nhà hàng cao cấp',
    'Quán ăn địa phương',
    'Street food',
    'Buffet',
    'Ẩm thực chay',
    'Ẩm thực halal'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ location, date, category, accommodation, dining });
  };

  const handleBecomePartner = () => {
    alert('Chức năng "Trở thành đối tác" sẽ được phát triển sớm! Vui lòng liên hệ hotline: 0982 751 323 để biết thêm chi tiết.');
  };
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-5xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end">
          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MapPin className="inline h-4 w-4 mr-1" />
              Địa điểm
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Chọn địa điểm</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="inline h-4 w-4 mr-1" />
              Ngày đi tour
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Tag className="inline h-4 w-4 mr-1" />
              Thể loại
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Chọn thể loại</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Accommodation */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Home className="inline h-4 w-4 mr-1" />
              Lưu trú
            </label>
            <select
              value={accommodation}
              onChange={(e) => setAccommodation(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-800 focus:border-transparent"
            >
              <option value="">Chọn lưu trú</option>
              {accommodations.map((acc) => (
                <option key={acc} value={acc}>
                  {acc}
                </option>
              ))}
            </select>
          </div>

          {/* Dining */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <UtensilsCrossed className="inline h-4 w-4 mr-1" />
              Ẩm thực
            </label>
            <select
              value={dining}
              onChange={(e) => setDining(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-800 focus:border-transparent"
            >
              <option value="">Chọn ẩm thực</option>
              {diningOptions.map((dining) => (
                <option key={dining} value={dining}>
                  {dining}
                </option>
              ))}
            </select>
          </div>
          {/* Search Button */}
          <div>
            <button
              type="submit"
              className="inline-flex items-center space-x-2 bg-yellow-500 text-blue-800 px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors font-semibold"
            >
              <Search className="h-4 w-4" />
              <span>Tìm kiếm</span>
            </button>
          </div>
        </div>
      </form>
      
      {/* Become Partner Button */}
      <div className="mt-4 text-center">
        <button
          onClick={handleBecomePartner}
          className="inline-flex items-center space-x-2 bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors font-semibold"
        >
          <Handshake className="h-4 w-4" />
          <span>Trở thành đối tác</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;