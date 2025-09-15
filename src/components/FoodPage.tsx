import React, { useState } from 'react';
import { ChevronDown, Navigation, ShoppingCart, CreditCard, Star, Clock, MapPin, Phone } from 'lucide-react';

const FoodPage: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState('TP. Hồ Chí Minh');
  const [selectedFood, setSelectedFood] = useState('');

  const cities = ['TP. Hồ Chí Minh', 'Hà Nội', 'Đà Nẵng'];
  const foods = [
    'Phở', 'Bánh mì', 'Cơm tấm', 'Bún bò Huế', 
    'Bánh xèo', 'Gỏi cuốn', 'Chè', 'Cao lầu'
  ];

  // Restaurant data based on the image design
  const restaurants = [
    {
      id: '1',
      name: 'Quán Phở Hà Nội',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      rating: 4.8,
      reviewCount: 234,
      description: 'Phở bò truyền thống với nước dùng đậm đà',
      priceRange: '50,000đ - 80,000đ',
      address: '12 Nguyễn Thiện Thuật, Quận 3, TP.HCM',
      hours: '6:00 - 22:00',
      phone: '+84 28 3829 1234',
      city: 'TP. Hồ Chí Minh',
      foodType: 'Phở'
    },
    {
      id: '2',
      name: 'Bánh Mì Huỳnh Hoa',
      image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg',
      rating: 4.6,
      reviewCount: 567,
      description: 'Bánh mì thập cẩm nổi tiếng Sài Gòn',
      priceRange: '25,000đ - 45,000đ',
      address: '26 Lê Thị Riêng, Quận 1, TP.HCM',
      hours: '15:00 - 23:00',
      phone: '+84 28 3925 4321',
      city: 'TP. Hồ Chí Minh',
      foodType: 'Bánh mì'
    },
    {
      id: '3',
      name: 'Cơm Tấm Sài Gòn',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      rating: 4.9,
      reviewCount: 298,
      description: 'Cơm tấm sườn nướng đặc sản miền Nam',
      priceRange: '35,000đ - 65,000đ',
      address: '789 Nguyễn Trãi, Quận 5, TP.HCM',
      hours: '10:00 - 22:00',
      phone: '+84 28 3876 9012',
      city: 'TP. Hồ Chí Minh',
      foodType: 'Cơm tấm'
    },
    {
      id: '4',
      name: 'Bún Bò Huế Đông Ba',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      rating: 4.5,
      reviewCount: 156,
      description: 'Bún bò Huế chuẩn vị xứ Huế',
      priceRange: '45,000đ - 65,000đ',
      address: '123 Hai Bà Trưng, Quận 1, TP.HCM',
      hours: '6:30 - 20:30',
      phone: '+84 28 3914 7890',
      city: 'TP. Hồ Chí Minh',
      foodType: 'Bún bò Huế'
    },
    {
      id: '5',
      name: 'Bánh Xèo Miền Tây',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      rating: 4.7,
      reviewCount: 189,
      description: 'Bánh xèo giòn rụm đặc sản miền Tây',
      priceRange: '30,000đ - 50,000đ',
      address: '456 Lê Văn Sỹ, Quận 3, TP.HCM',
      hours: '16:00 - 22:00',
      phone: '+84 28 3932 5678',
      city: 'TP. Hồ Chí Minh',
      foodType: 'Bánh xèo'
    },
    {
      id: '6',
      name: 'Gỏi Cuốn Sài Gòn',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      rating: 4.4,
      reviewCount: 123,
      description: 'Gỏi cuốn tươi ngon với nước chấm đặc biệt',
      priceRange: '20,000đ - 40,000đ',
      address: '321 Nguyễn Đình Chiểu, Quận 3, TP.HCM',
      hours: '11:00 - 21:00',
      phone: '+84 28 3845 6789',
      city: 'TP. Hồ Chí Minh',
      foodType: 'Gỏi cuốn'
    }
  ];

  const handleDirection = (restaurant: any) => {
    alert(`Chỉ đường đến ${restaurant.name} tại ${restaurant.address}`);
  };

  const handleBookNow = (restaurant: any) => {
    alert(`Đặt bàn tại ${restaurant.name} thành công! Chúng tôi sẽ liên hệ xác nhận trong 15 phút.`);
  };

  const handlePayment = (restaurant: any) => {
    alert(`Chuyển đến trang thanh toán trước cho ${restaurant.name}`);
  };

  const filteredRestaurants = restaurants.filter(restaurant => {
    if (selectedCity && restaurant.city !== selectedCity) return false;
    if (selectedFood && restaurant.foodType !== selectedFood) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Ẩm thực</h1>
          <p className="text-lg text-gray-600 mb-8">
            Khám phá văn hóa ẩm thực địa phương với những món ăn đặc sắc
          </p>

          {/* Search Filters */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
              {/* City Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Chọn thành phố
                </label>
                <div className="relative">
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
                  >
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Food Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Chọn món ăn
                </label>
                <div className="relative">
                  <select
                    value={selectedFood}
                    onChange={(e) => setSelectedFood(e.target.value)}
                    className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-500"
                  >
                    <option value="">-- Chọn món ăn --</option>
                    {foods.map((food) => (
                      <option key={food} value={food}>
                        {food}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Search Button */}
              <div>
                <button className="w-full bg-gray-500 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors font-medium">
                  Tìm kiếm
                </button>
              </div>
            </div>
          </div>

          {/* Food Categories Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Món ăn phổ biến tại {selectedCity}
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {foods.map((food) => (
                <button
                  key={food}
                  onClick={() => setSelectedFood(food)}
                  className={`p-4 rounded-lg border transition-colors text-center ${
                    selectedFood === food
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="font-medium">{food}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Restaurants Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Nhà hàng nổi bật tại {selectedCity}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRestaurants.map((restaurant) => (
                <div
                  key={restaurant.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Restaurant Image */}
                  <div className="relative">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>

                  <div className="p-6">
                    {/* Restaurant Name */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {restaurant.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center space-x-2 mb-3">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="font-semibold text-gray-900">
                        {restaurant.rating}
                      </span>
                      <span className="text-gray-600 text-sm">
                        ({restaurant.reviewCount} đánh giá)
                      </span>
                    </div>

                    {/* Address */}
                    <div className="flex items-start space-x-2 mb-3">
                      <MapPin className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">
                        {restaurant.address}
                      </span>
                    </div>

                    {/* Hours */}
                    <div className="flex items-center space-x-2 mb-4">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600 text-sm">
                        {restaurant.hours}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4">
                      {restaurant.description}
                    </p>

                    {/* Price Range */}
                    <div className="mb-4">
                      <span className="text-sm font-semibold text-gray-900">Giá: </span>
                      <span className="text-sm font-bold text-orange-600">
                        {restaurant.priceRange}
                      </span>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center space-x-2 mb-6">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600 text-sm">
                        {restaurant.phone}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      {/* Direction Button */}
                      <button
                        onClick={() => handleDirection(restaurant)}
                        className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition-colors font-semibold flex items-center justify-center space-x-2"
                      >
                        <Navigation className="h-5 w-5" />
                        <span>Chỉ đường</span>
                      </button>
                      
                      {/* Book Now Button */}
                      <button
                        onClick={() => handleBookNow(restaurant)}
                        className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold flex items-center justify-center space-x-2"
                      >
                        <ShoppingCart className="h-5 w-5" />
                        <span>Đặt ngay</span>
                      </button>
                      
                      {/* Payment Button */}
                      <button
                        onClick={() => handlePayment(restaurant)}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center space-x-2"
                      >
                        <CreditCard className="h-5 w-5" />
                        <span>Thanh toán trước</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredRestaurants.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <MapPin className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Không tìm thấy nhà hàng phù hợp
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

export default FoodPage;