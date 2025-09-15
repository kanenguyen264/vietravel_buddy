import React, { useState } from 'react';
import { X, Calendar, Users, MapPin, Star, CheckCircle, AlertCircle, Bed, Bath, Maximize } from 'lucide-react';
import { Accommodation } from '../data/accommodations';

interface RoomBookingModalProps {
  accommodation: Accommodation;
  onClose: () => void;
  onConfirm: () => void;
}

const RoomBookingModal: React.FC<RoomBookingModalProps> = ({ accommodation, onClose, onConfirm }) => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numberOfRooms, setNumberOfRooms] = useState(1);
  const [numberOfGuests, setNumberOfGuests] = useState(2);
  const [specialRequests, setSpecialRequests] = useState('');
  const [step, setStep] = useState<'booking' | 'waiting' | 'confirmed'>('booking');

  // Room types for different accommodation types
  const getRoomTypes = () => {
    if (accommodation.type === 'resort') {
      return [
        { name: 'Deluxe Ocean View', price: accommodation.price, description: 'Phòng cao cấp view biển' },
        { name: 'Premium Suite', price: accommodation.price * 1.5, description: 'Suite cao cấp với ban công riêng' },
        { name: 'Villa', price: accommodation.price * 2, description: 'Villa riêng biệt với hồ bơi' }
      ];
    } else if (accommodation.type === 'hotel') {
      return [
        { name: 'Standard Room', price: accommodation.price * 0.8, description: 'Phòng tiêu chuẩn' },
        { name: 'Superior Room', price: accommodation.price, description: 'Phòng cao cấp' },
        { name: 'Executive Suite', price: accommodation.price * 1.8, description: 'Suite điều hành' }
      ];
    } else {
      return [
        { name: 'Private Room', price: accommodation.price, description: 'Phòng riêng' },
        { name: 'Entire Place', price: accommodation.price * 1.5, description: 'Toàn bộ căn hộ' }
      ];
    }
  };

  const [selectedRoomType, setSelectedRoomType] = useState(getRoomTypes()[0]);
  const roomTypes = getRoomTypes();

  const calculateNights = () => {
    if (!checkInDate || !checkOutDate) return 0;
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const calculateTotal = () => {
    const nights = calculateNights();
    return selectedRoomType.price * numberOfRooms * nights;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('waiting');
    
    // Simulate confirmation after 2 seconds
    setTimeout(() => {
      setStep('confirmed');
    }, 2000);
  };

  const handleProceedToPayment = () => {
    onConfirm();
  };

  if (step === 'waiting') {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl max-w-md w-full p-8 text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-800 mx-auto mb-6"></div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Đang xử lý đặt phòng
          </h3>
          <p className="text-gray-600 mb-6">
            Chúng tôi đang kiểm tra tình trạng phòng và xử lý yêu cầu của bạn...
          </p>
          <div className="bg-gray-50 rounded-lg p-4 text-left">
            <h4 className="font-semibold text-gray-900 mb-2">Thông tin đặt phòng:</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <p><strong>Khách sạn:</strong> {accommodation.name}</p>
              <p><strong>Loại phòng:</strong> {selectedRoomType.name}</p>
              <p><strong>Check-in:</strong> {new Date(checkInDate).toLocaleDateString('vi-VN')}</p>
              <p><strong>Check-out:</strong> {new Date(checkOutDate).toLocaleDateString('vi-VN')}</p>
              <p><strong>Số phòng:</strong> {numberOfRooms}</p>
              <p><strong>Số khách:</strong> {numberOfGuests}</p>
              <p><strong>Tổng tiền:</strong> {calculateTotal().toLocaleString()}đ</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="mt-6 text-gray-500 hover:text-gray-700 text-sm"
          >
            Hủy yêu cầu
          </button>
        </div>
      </div>
    );
  }

  if (step === 'confirmed') {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl max-w-md w-full p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Đặt phòng thành công!
          </h3>
          <p className="text-gray-600 mb-6">
            Phòng đã được xác nhận. Bạn có thể tiến hành thanh toán để hoàn tất đặt phòng.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-left mb-6">
            <h4 className="font-semibold text-green-900 mb-2">Chi tiết đặt phòng:</h4>
            <div className="space-y-1 text-sm text-green-700">
              <p><strong>Khách sạn:</strong> {accommodation.name}</p>
              <p><strong>Loại phòng:</strong> {selectedRoomType.name}</p>
              <p><strong>Check-in:</strong> {new Date(checkInDate).toLocaleDateString('vi-VN')}</p>
              <p><strong>Check-out:</strong> {new Date(checkOutDate).toLocaleDateString('vi-VN')}</p>
              <p><strong>Số đêm:</strong> {calculateNights()}</p>
              <p><strong>Số phòng:</strong> {numberOfRooms}</p>
              <p><strong>Tổng tiền:</strong> {calculateTotal().toLocaleString()}đ</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium"
            >
              Để sau
            </button>
            <button
              onClick={handleProceedToPayment}
              className="flex-1 bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition-colors font-semibold"
            >
              Thanh toán ngay
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Đặt phòng</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-full transition-all duration-200"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Accommodation Info */}
            <div>
              <img
                src={accommodation.image}
                alt={accommodation.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {accommodation.name}
              </h3>
              
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{accommodation.address}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span>{accommodation.rating} ({accommodation.reviewCount} đánh giá)</span>
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                {accommodation.description}
              </p>

              {/* Amenities */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Tiện nghi
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {accommodation.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Đánh giá từ khách hàng
                </h4>
                {accommodation.reviews.slice(0, 2).map((review) => (
                  <div key={review.id} className="mb-4 p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-3 mb-2">
                      <img
                        src={review.userAvatar}
                        alt={review.userName}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <h5 className="font-medium text-gray-900">{review.userName}</h5>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < review.rating
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Form */}
            <div>
              <div className="sticky top-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Room Type Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Chọn loại phòng
                    </label>
                    <div className="space-y-3">
                      {roomTypes.map((roomType, index) => (
                        <label
                          key={index}
                          className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-colors ${
                            selectedRoomType.name === roomType.name
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <input
                              type="radio"
                              name="roomType"
                              value={roomType.name}
                              checked={selectedRoomType.name === roomType.name}
                              onChange={() => setSelectedRoomType(roomType)}
                              className="text-blue-600"
                            />
                            <div>
                              <div className="font-medium text-gray-900">{roomType.name}</div>
                              <div className="text-sm text-gray-600">{roomType.description}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-blue-800">
                              {roomType.price.toLocaleString()}đ
                            </div>
                            <div className="text-xs text-gray-500">/đêm</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Check-in Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="inline h-4 w-4 mr-1" />
                      Ngày nhận phòng
                    </label>
                    <input
                      type="date"
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Check-out Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="inline h-4 w-4 mr-1" />
                      Ngày trả phòng
                    </label>
                    <input
                      type="date"
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                      min={checkInDate || new Date().toISOString().split('T')[0]}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Number of Rooms */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Bed className="inline h-4 w-4 mr-1" />
                        Số phòng
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={numberOfRooms}
                        onChange={(e) => setNumberOfRooms(parseInt(e.target.value))}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>

                    {/* Number of Guests */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Users className="inline h-4 w-4 mr-1" />
                        Số khách
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="20"
                        value={numberOfGuests}
                        onChange={(e) => setNumberOfGuests(parseInt(e.target.value))}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Yêu cầu đặc biệt (tùy chọn)
                    </label>
                    <textarea
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={3}
                      placeholder="Ví dụ: Phòng tầng cao, giường đôi, check-in sớm..."
                    />
                  </div>

                  {/* Price Summary */}
                  {checkInDate && checkOutDate && (
                    <div className="border-t pt-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>{selectedRoomType.name} × {numberOfRooms} phòng × {calculateNights()} đêm</span>
                          <span>{calculateTotal().toLocaleString()}đ</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Phí dịch vụ</span>
                          <span>0đ</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Thuế</span>
                          <span>Đã bao gồm</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-lg font-bold mt-4 pt-4 border-t">
                        <span>Tổng cộng:</span>
                        <span className="text-blue-800">
                          {calculateTotal().toLocaleString()}đ
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div className="text-sm text-blue-800">
                        <p className="font-medium mb-1">Chính sách hủy phòng:</p>
                        <p>Miễn phí hủy phòng trước 24 giờ. Sau thời gian này sẽ tính phí 50% tổng giá trị đặt phòng.</p>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!checkInDate || !checkOutDate}
                    className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Xác nhận đặt phòng
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomBookingModal;