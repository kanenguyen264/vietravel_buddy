import React, { useState } from 'react';
import { ChevronDown, Navigation, ShoppingCart, CreditCard, Star, Clock, MapPin, Phone } from 'lucide-react';

const FoodPage: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState('TP. Hồ Chí Minh');
  const [selectedFood, setSelectedFood] = useState('');
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    note: ''
  });
  const [paymentData, setPaymentData] = useState({
    name: '',
    phone: '',
    email: '',
    amount: '',
    paymentMethod: 'bank_transfer',
    note: ''
  });

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
    // Tạo URL Google Maps với địa chỉ của nhà hàng
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.address)}`;
    // Mở Google Maps trong tab mới
    window.open(googleMapsUrl, '_blank');
  };

  const handleBookNow = (restaurant: any) => {
    setSelectedRestaurant(restaurant);
    setShowBookingModal(true);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý đặt bàn
    alert(`Đặt bàn thành công tại ${selectedRestaurant?.name}!\nTên: ${bookingData.name}\nSố điện thoại: ${bookingData.phone}\nNgày giờ: ${bookingData.date} ${bookingData.time}\nSố khách: ${bookingData.guests} người\n\nChúng tôi sẽ liên hệ xác nhận trong 15 phút.`);

    // Reset form và đóng modal
    setBookingData({
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      guests: '2',
      note: ''
    });
    setShowBookingModal(false);
  };

  const handleCloseModal = () => {
    setShowBookingModal(false);
    setSelectedRestaurant(null);
  };

  const handlePayment = (restaurant: any) => {
    setSelectedRestaurant(restaurant);
    setShowPaymentModal(true);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let paymentInfo = '';
    if (paymentData.paymentMethod === 'bank_transfer') {
      paymentInfo = 'Thông tin chuyển khoản:\n• Ngân hàng: Vietcombank\n• Số tài khoản: 0123456789\n• Chủ tài khoản: CÔNG TY TNHH ẨM THỰC VIỆT\n• Nội dung: THANHTOAN ' + paymentData.name.toUpperCase().replace(/\s/g, '');
    } else if (paymentData.paymentMethod === 'momo') {
      paymentInfo = 'Thông tin MoMo:\n• Số điện thoại: 0987654321\n• Tên: CÔNG TY TNHH ẨM THỰC VIỆT';
    } else {
      paymentInfo = 'Quét mã QR để thanh toán';
    }

    alert(`Thanh toán trước thành công!\nNhà hàng: ${selectedRestaurant?.name}\nKhách hàng: ${paymentData.name}\nSố tiền: ${paymentData.amount} VNĐ\n\n${paymentInfo}\n\nChúng tôi sẽ xác nhận thanh toán trong 5-10 phút.`);

    // Reset form và đóng modal
    setPaymentData({
      name: '',
      phone: '',
      email: '',
      amount: '',
      paymentMethod: 'bank_transfer',
      note: ''
    });
    setShowPaymentModal(false);
  };

  const handleClosePaymentModal = () => {
    setShowPaymentModal(false);
    setSelectedRestaurant(null);
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
                  className={`p-4 rounded-lg border transition-colors text-center ${selectedFood === food
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

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Đặt bàn</h2>
                  <p className="text-sm text-gray-600 mt-1">{selectedRestaurant?.name}</p>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              {/* Booking Form */}
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    required
                    value={bookingData.name}
                    onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Nhập họ và tên"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    required
                    value={bookingData.phone}
                    onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Nhập số điện thoại"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={bookingData.email}
                    onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Nhập email"
                  />
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ngày *
                    </label>
                    <input
                      type="date"
                      required
                      value={bookingData.date}
                      onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Giờ *
                    </label>
                    <input
                      type="time"
                      required
                      value={bookingData.time}
                      onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Number of Guests */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Số khách *
                  </label>
                  <select
                    required
                    value={bookingData.guests}
                    onChange={(e) => setBookingData({ ...bookingData, guests: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                      <option key={num} value={num}>{num} người</option>
                    ))}
                    <option value="10+">Trên 10 người</option>
                  </select>
                </div>

                {/* Special Note */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ghi chú đặc biệt
                  </label>
                  <textarea
                    value={bookingData.note}
                    onChange={(e) => setBookingData({ ...bookingData, note: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    rows={3}
                    placeholder="Yêu cầu đặc biệt, dị ứng thực phẩm..."
                  />
                </div>

                {/* Restaurant Info */}
                <div className="bg-gray-50 rounded-lg p-4 mt-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Thông tin nhà hàng</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{selectedRestaurant?.address}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>{selectedRestaurant?.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{selectedRestaurant?.hours}</span>
                    </div>
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="flex space-x-4 pt-6">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                  >
                    Hủy
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-medium"
                  >
                    Xác nhận đặt bàn
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Thanh toán trước</h2>
                  <p className="text-sm text-gray-600 mt-1">{selectedRestaurant?.name}</p>
                </div>
                <button
                  onClick={handleClosePaymentModal}
                  className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              {/* Payment Form */}
              <form onSubmit={handlePaymentSubmit} className="space-y-4">
                {/* Customer Info */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    required
                    value={paymentData.name}
                    onChange={(e) => setPaymentData({ ...paymentData, name: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nhập họ và tên"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    required
                    value={paymentData.phone}
                    onChange={(e) => setPaymentData({ ...paymentData, phone: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nhập số điện thoại"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={paymentData.email}
                    onChange={(e) => setPaymentData({ ...paymentData, email: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nhập email để nhận hóa đơn"
                  />
                </div>

                {/* Payment Amount */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Số tiền thanh toán *
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      required
                      value={paymentData.amount}
                      onChange={(e) => setPaymentData({ ...paymentData, amount: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Nhập số tiền"
                      min="10000"
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                      VNĐ
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Số tiền tối thiểu: 10,000 VNĐ</p>
                </div>

                {/* Payment Method */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Phương thức thanh toán *
                  </label>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="bank_transfer"
                        name="paymentMethod"
                        value="bank_transfer"
                        checked={paymentData.paymentMethod === 'bank_transfer'}
                        onChange={(e) => setPaymentData({ ...paymentData, paymentMethod: e.target.value })}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <label htmlFor="bank_transfer" className="ml-3 flex items-center">
                        <span className="text-sm text-gray-900">Chuyển khoản ngân hàng</span>
                        <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Phổ biến</span>
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="momo"
                        name="paymentMethod"
                        value="momo"
                        checked={paymentData.paymentMethod === 'momo'}
                        onChange={(e) => setPaymentData({ ...paymentData, paymentMethod: e.target.value })}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <label htmlFor="momo" className="ml-3 text-sm text-gray-900">
                        Ví MoMo
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="qr_code"
                        name="paymentMethod"
                        value="qr_code"
                        checked={paymentData.paymentMethod === 'qr_code'}
                        onChange={(e) => setPaymentData({ ...paymentData, paymentMethod: e.target.value })}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <label htmlFor="qr_code" className="ml-3 text-sm text-gray-900">
                        Quét mã QR
                      </label>
                    </div>
                  </div>
                </div>

                {/* Note */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ghi chú
                  </label>
                  <textarea
                    value={paymentData.note}
                    onChange={(e) => setPaymentData({ ...paymentData, note: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={2}
                    placeholder="Ghi chú cho đơn thanh toán..."
                  />
                </div>

                {/* Restaurant Info */}
                <div className="bg-blue-50 rounded-lg p-4 mt-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Thông tin nhà hàng</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{selectedRestaurant?.address}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>{selectedRestaurant?.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{selectedRestaurant?.hours}</span>
                    </div>
                    <div className="text-sm font-medium text-blue-700 mt-2">
                      Khoảng giá: {selectedRestaurant?.priceRange}
                    </div>
                  </div>
                </div>

                {/* Payment Info */}
                {paymentData.paymentMethod === 'bank_transfer' && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-medium text-yellow-800 mb-2">Thông tin chuyển khoản</h4>
                    <div className="text-sm text-yellow-700 space-y-1">
                      <div>• Ngân hàng: <strong>Vietcombank</strong></div>
                      <div>• Số tài khoản: <strong>0123456789</strong></div>
                      <div>• Chủ tài khoản: <strong>CÔNG TY TNHH ẨM THỰC VIỆT</strong></div>
                      <div className="text-xs mt-2 text-yellow-600">
                        * Vui lòng ghi đúng nội dung chuyển khoản để được xử lý nhanh chóng
                      </div>
                    </div>
                  </div>
                )}

                {paymentData.paymentMethod === 'momo' && (
                  <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                    <h4 className="font-medium text-pink-800 mb-2">Thông tin MoMo</h4>
                    <div className="text-sm text-pink-700 space-y-1">
                      <div>• Số điện thoại: <strong>0987654321</strong></div>
                      <div>• Tên: <strong>CÔNG TY TNHH ẨM THỰC VIỆT</strong></div>
                    </div>
                  </div>
                )}

                {paymentData.paymentMethod === 'qr_code' && (
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Mã QR</span>
                    </div>
                    <p className="text-sm text-gray-600">Quét mã QR để thanh toán</p>
                  </div>
                )}

                {/* Submit Buttons */}
                <div className="flex space-x-4 pt-6">
                  <button
                    type="button"
                    onClick={handleClosePaymentModal}
                    className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                  >
                    Hủy
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Xác nhận thanh toán
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodPage;