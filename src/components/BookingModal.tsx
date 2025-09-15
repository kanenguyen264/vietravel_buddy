import React, { useState } from 'react';
import { X, Calendar, Users, MapPin, Clock, Star, CheckCircle, AlertCircle } from 'lucide-react';
import { Tour } from '../types/tour';

interface BookingModalProps {
  tour: Tour;
  onClose: () => void;
  onConfirm: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ tour, onClose, onConfirm }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [specialRequests, setSpecialRequests] = useState('');
  const [step, setStep] = useState<'booking' | 'waiting' | 'confirmed'>('booking');
  const [guideResponse, setGuideResponse] = useState<'pending' | 'accepted' | 'declined'>('pending');

  // Available time slots
  const timeSlots = [
    '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
    '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('waiting');
    
    // Simulate guide response after 3 seconds
    setTimeout(() => {
      setGuideResponse('accepted');
      setStep('confirmed');
    }, 3000);
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
            Đang chờ HDV xác nhận
          </h3>
          <p className="text-gray-600 mb-6">
            Chúng tôi đang gửi yêu cầu đặt tour đến {tour.guide.name}. 
            Vui lòng chờ trong giây lát...
          </p>
          <div className="bg-gray-50 rounded-lg p-4 text-left">
            <h4 className="font-semibold text-gray-900 mb-2">Thông tin đặt tour:</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <p><strong>Tour:</strong> {tour.title}</p>
              <p><strong>Ngày:</strong> {new Date(selectedDate).toLocaleDateString('vi-VN')}</p>
              <p><strong>Giờ:</strong> {selectedTime}</p>
              <p><strong>Số người:</strong> {numberOfPeople}</p>
              <p><strong>Tổng tiền:</strong> {(tour.price * numberOfPeople).toLocaleString()}đ</p>
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
            HDV đã xác nhận!
          </h3>
          <p className="text-gray-600 mb-6">
            {tour.guide.name} đã đồng ý hướng dẫn tour cho bạn. 
            Bạn có thể tiến hành thanh toán để hoàn tất đặt tour.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-left mb-6">
            <h4 className="font-semibold text-green-900 mb-2">Chi tiết tour đã xác nhận:</h4>
            <div className="space-y-1 text-sm text-green-700">
              <p><strong>Tour:</strong> {tour.title}</p>
              <p><strong>HDV:</strong> {tour.guide.name}</p>
              <p><strong>Ngày:</strong> {new Date(selectedDate).toLocaleDateString('vi-VN')}</p>
              <p><strong>Giờ khởi hành:</strong> {selectedTime}</p>
              <p><strong>Số người:</strong> {numberOfPeople}</p>
              <p><strong>Tổng tiền:</strong> {(tour.price * numberOfPeople).toLocaleString()}đ</p>
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
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Đặt tour</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-full transition-all duration-200"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Tour Info */}
            <div>
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {tour.title}
              </h3>
              
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{tour.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span>{tour.rating}</span>
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                {tour.description}
              </p>

              {/* Itinerary */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Lịch trình chi tiết
                </h4>
                {tour.itinerary.map((day) => (
                  <div key={day.day} className="mb-4 p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">
                      {day.day > 1 ? `Ngày ${day.day}: ` : ''}{day.title}
                    </h5>
                    <p className="text-gray-600 text-sm mb-3">{day.description}</p>
                    <ul className="space-y-1">
                      {day.activities.map((activity, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Included */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Bao gồm trong tour
                </h4>
                <ul className="grid grid-cols-1 gap-2">
                  {tour.included.map((item, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Reviews */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Đánh giá từ khách hàng
                </h4>
                {tour.reviews.slice(0, 2).map((review) => (
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
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-red-600">
                      {tour.price.toLocaleString()}đ
                    </span>
                    <span className="text-gray-600"> / người</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="inline h-4 w-4 mr-1" />
                      Chọn ngày
                    </label>
                    <select
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Chọn ngày khởi hành</option>
                      {tour.availableDates.map((date) => (
                        <option key={date} value={date}>
                          {new Date(date).toLocaleDateString('vi-VN')}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Users className="inline h-4 w-4 mr-1" />
                      Số lượng người
                    </label>
                    <input
                      type="number"
                      min="1"
                      max={tour.maxGroupSize}
                      value={numberOfPeople}
                      onChange={(e) => setNumberOfPeople(parseInt(e.target.value))}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Tối đa {tour.maxGroupSize} người
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="inline h-4 w-4 mr-1" />
                      Giờ khởi hành
                    </label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Chọn giờ khởi hành</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Yêu cầu đặc biệt (tùy chọn)
                    </label>
                    <textarea
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={3}
                      placeholder="Ví dụ: Ăn chay, dị ứng thức ăn, yêu cầu đặc biệt khác..."
                    />
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-600">
                        {tour.price.toLocaleString()}đ × {numberOfPeople} người
                      </span>
                      <span className="font-semibold">
                        {(tour.price * numberOfPeople).toLocaleString()}đ
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Tổng cộng:</span>
                      <span className="text-blue-800">
                        {(tour.price * numberOfPeople).toLocaleString()}đ
                      </span>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div className="text-sm text-yellow-800">
                        <p className="font-medium mb-1">Lưu ý quan trọng:</p>
                        <p>Sau khi gửi yêu cầu, HDV sẽ xác nhận trong vòng 15 phút. Bạn chỉ cần thanh toán khi HDV đã đồng ý hướng dẫn tour.</p>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition-colors font-semibold"
                  >
                    Gửi yêu cầu đặt tour
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

export default BookingModal;