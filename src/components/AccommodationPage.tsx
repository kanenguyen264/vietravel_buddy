import React, { useState } from 'react';
import { Star, MapPin, Wifi, Car, Coffee, Waves, Users, Phone, Mail, ChevronDown } from 'lucide-react';
import { accommodations, Accommodation } from '../data/accommodations';

interface AccommodationPageProps {
  onBookRoom: (accommodation: Accommodation) => void;
}

const AccommodationPage: React.FC<AccommodationPageProps> = ({ onBookRoom }) => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const cities = ['TPHCM', 'Đà Nẵng', 'Hà Nội', 'Phan Thiết', 'Nha Trang'];
  const types = ['hotel', 'resort', 'homestay'];
  const priceRanges = [
    { label: 'Dưới 500k', value: '0-500000' },
    { label: '500k - 1tr', value: '500000-1000000' },
    { label: '1tr - 3tr', value: '1000000-3000000' },
    { label: 'Trên 3tr', value: '3000000-999999999' }
  ];

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'hotel': return 'Khách sạn';
      case 'resort': return 'Resort';
      case 'homestay': return 'Homestay';
      default: return type;
    }
  };

  const getAmenityIcon = (amenity: string) => {
    if (amenity.includes('WiFi')) return <Wifi className="h-4 w-4" />;
    if (amenity.includes('Hồ bơi') || amenity.includes('bãi biển')) return <Waves className="h-4 w-4" />;
    if (amenity.includes('Gym')) return <Users className="h-4 w-4" />;
    if (amenity.includes('Nhà hàng') || amenity.includes('Bar')) return <Coffee className="h-4 w-4" />;
    if (amenity.includes('Spa')) return <Star className="h-4 w-4" />;
    return <Car className="h-4 w-4" />;
  };

  const filteredAccommodations = accommodations.filter(acc => {
    if (selectedCity && acc.city !== selectedCity) return false;
    if (selectedType && acc.type !== selectedType) return false;
    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      if (acc.price < min || acc.price > max) return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Lưu trú</h1>
          <p className="text-xl text-gray-600 mb-12">
            Tìm kiếm chỗ nghỉ hoàn hảo cho chuyến du lịch của bạn
          </p>

          {/* Search Filters */}
          <div className="bg-white rounded-lg border border-gray-200 p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
              {/* City Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Thành phố
                </label>
                <div className="relative">
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  >
                    <option value="">Tất cả thành phố</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loại hình
                </label>
                <div className="relative">
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  >
                    <option value="">Tất cả loại hình</option>
                    {types.map((type) => (
                      <option key={type} value={type}>
                        {getTypeLabel(type)}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Khoảng giá
                </label>
                <div className="relative">
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  >
                    <option value="">Tất cả mức giá</option>
                    {priceRanges.map((range) => (
                      <option key={range.value} value={range.value}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Search Button */}
              <div>
                <button className="w-full bg-blue-800 text-white py-3 px-6 rounded-lg hover:bg-blue-900 transition-colors font-medium">
                  Tìm kiếm
                </button>
              </div>
            </div>
          </div>

          {/* Results */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Chỗ nghỉ được đề xuất
              </h2>
              <span className="text-gray-600">
                {filteredAccommodations.length} kết quả
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAccommodations.map((accommodation) => (
                <div
                  key={accommodation.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative">
                    <img
                      src={accommodation.image}
                      alt={accommodation.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {getTypeLabel(accommodation.type)}
                      </span>
                    </div>
                    {accommodation.originalPrice && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                        -{Math.round((1 - accommodation.price / accommodation.originalPrice) * 100)}%
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900 line-clamp-2">
                        {accommodation.name}
                      </h3>
                    </div>

                    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                      <MapPin className="h-4 w-4" />
                      <span>{accommodation.city}</span>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {accommodation.description}
                    </p>

                    {/* Amenities */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {accommodation.amenities.slice(0, 4).map((amenity, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded text-xs text-gray-600"
                        >
                          {getAmenityIcon(amenity)}
                          <span>{amenity}</span>
                        </div>
                      ))}
                      {accommodation.amenities.length > 4 && (
                        <span className="text-xs text-gray-500">
                          +{accommodation.amenities.length - 4} tiện ích khác
                        </span>
                      )}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(accommodation.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          {accommodation.rating} ({accommodation.reviewCount} đánh giá)
                        </span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        {accommodation.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            {accommodation.originalPrice.toLocaleString()}đ
                          </span>
                        )}
                        <div className="text-xl font-bold text-blue-800">
                          {accommodation.price.toLocaleString()}đ
                          <span className="text-sm font-normal text-gray-600">/đêm</span>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {accommodation.features.map((feature, index) => (
                          <span
                            key={index}
                            className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="border-t pt-4 mb-4">
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Phone className="h-3 w-3" />
                          <span>{accommodation.phone}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Mail className="h-3 w-3" />
                          <span className="truncate max-w-24">{accommodation.email}</span>
                        </div>
                      </div>
                    </div>

                    {/* Book Button */}
                    <button
                      onClick={() => onBookRoom(accommodation)}
                      className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition-colors font-semibold"
                    >
                      Đặt phòng ngay
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredAccommodations.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <MapPin className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Không tìm thấy chỗ nghỉ phù hợp
                </h3>
                <p className="text-gray-600">
                  Thử thay đổi bộ lọc để xem thêm kết quả
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationPage;