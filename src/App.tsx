import React, { useState } from 'react';
import { MapPin, Clock, Users, Star, Shield, MessageCircle } from 'lucide-react';
import Header from './components/Header';
import FoodPage from './components/FoodPage';
import SearchBar from './components/SearchBar';
import TourCard from './components/TourCard';
import AccommodationPage from './components/AccommodationPage';
import PartnerPage from './components/PartnerPage';
// import GuidesPage from './components/GuidesPage'; // Add this import
import AuthModal from './components/AuthModal';
import BookingModal from './components/BookingModal';
import RoomBookingModal from './components/RoomBookingModal';
import PaymentModal from './components/PaymentModal';
import ChatModal from './components/ChatModal';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';
import { Tour } from './types/tour';
import { tours, allTours } from './data/tours';
import { accommodations, Accommodation } from './data/accommodations';
import AboutPage from './pages/about';
import GuidesPage from './pages/guides';


function App() {
  const [filteredTours, setFilteredTours] = useState<Tour[]>(allTours);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [activeTab, setActiveTab] = useState('home');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedAccommodation, setSelectedAccommodation] = useState<Accommodation | null>(null);
  const [isRoomBookingModalOpen, setIsRoomBookingModalOpen] = useState(false);
  const [showChatModal, setShowChatModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentGuide, setCurrentGuide] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState('TP. Hồ Chí Minh');
  const [selectedFood, setSelectedFood] = useState('');

  const handleSearch = (filters: any) => {
    let filtered = allTours;

    if (filters.location) {
      filtered = filtered.filter(tour => tour.location === filters.location);
    }

    if (filters.category) {
      filtered = filtered.filter(tour => tour.category === filters.category);
    }

    if (filters.date) {
      // Filter tours based on available dates
      filtered = filtered.filter(tour => tour.availableDates.includes(filters.date));
    }

    // Note: Accommodation and dining filters can be implemented when tour data includes these fields
    if (filters.accommodation) {
      // filtered = filtered.filter(tour => tour.accommodation === filters.accommodation);
    }

    if (filters.dining) {
      // filtered = filtered.filter(tour => tour.dining === filters.dining);
    }

    setFilteredTours(filtered);
  };

  const handleBookTour = (tour: Tour) => {
    setSelectedTour(tour);
    if (!isAuthenticated) {
      setShowAuthModal(true);
    } else {
      setShowBookingModal(true);
    }
  };

  const handleAuth = () => {
    setIsAuthenticated(true);
    setShowAuthModal(false);
    if (selectedTour) {
      setShowBookingModal(true);
    }
  };

  const handleBookingConfirm = () => {
    setShowBookingModal(false);
    setShowPaymentModal(true);
  };

  const handlePaymentComplete = () => {
    setShowPaymentModal(false);
    alert('Đặt tour thành công! Bạn sẽ nhận được email xác nhận shortly.');
  };

  const handleBookRoom = (accommodation: Accommodation) => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }
    setSelectedAccommodation(accommodation);
    setIsRoomBookingModalOpen(true);
  };

  const handleRoomBookingConfirm = () => {
    setIsRoomBookingModalOpen(false);
    setShowPaymentModal(true);
  };

  const handleChatWithGuide = (guideName: string) => {
    setCurrentGuide(guideName);
    setShowChatModal(true);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'food':
        return (
          <FoodPage />
        );
      case 'about':
        return (
          <AboutPage />
        );
      case 'guides':
        return (
          <GuidesPage
            onBookTour={handleBookTour}
            tours={tours}
          />
        );
      case 'accommodation':
        return (
          <AccommodationPage onBookRoom={handleBookRoom} />
        );
      case 'partner':
        return (
          <PartnerPage onBack={() => setActiveTab('home')} />
        );
      default:
        return (
          <>
            {/* New Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 min-h-screen flex items-center">
              {/* Background decorative elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-200 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-200 to-yellow-200 rounded-full opacity-10 blur-3xl"></div>
              </div>

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                {/* Badge */}
                <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Nền tảng du lịch #1 Việt Nam</span>
                </div>

                {/* Main heading */}
                <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 leading-tight">
                  <span className="inline-block animate-pulse">Khám phá</span>{' '}
                  <span className="inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-bounce">
                    Việt Nam
                  </span>{' '}
                  <span className="inline-block animate-pulse">cùng</span>{' '}
                  <span className="inline-block bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent animate-pulse hover:animate-bounce transition-all duration-300 transform hover:scale-110">
                    Vietravel Buddy
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl mb-12 text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Nền tảng kết nối du khách với các dịch vụ du lịch chất lượng cao. Từ hướng dẫn
                  viên chuyên nghiệp đến lưu trú và ẩm thực địa phương.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
                  <button
                    onClick={() => setActiveTab('guides')}
                    className="group bg-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-3"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Khám phá ngay</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>

                  <button
                    onClick={() => setActiveTab('partner')}
                    className="group bg-white/80 backdrop-blur-sm text-blue-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-3 border border-blue-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>Trở thành đối tác</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </button>
                </div>

                {/* Search Bar */}
                <div className="max-w-5xl mx-auto">
                  <SearchBar onSearch={handleSearch} />
                </div>

                {/* Three Main Sections */}
                <div className="mt-16 max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Hướng dẫn viên */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                      onClick={() => setActiveTab('guides')}>
                      <div className="flex flex-col items-center text-center">
                        {/* Icon */}
                        <div className="w-20 h-20 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-200 transition-colors">
                          <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          Hướng dẫn viên
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          Tìm kiếm hướng dẫn viên chuyên nghiệp cho chuyến du lịch của bạn
                        </p>

                        {/* CTA */}
                        <button className="inline-flex items-center space-x-2 text-yellow-600 font-semibold hover:text-yellow-700 transition-colors group-hover:translate-x-1">
                          <span>Tìm hiểu thêm</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Lưu trú */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                      onClick={() => setActiveTab('accommodation')}>
                      <div className="flex flex-col items-center text-center">
                        {/* Icon */}
                        <div className="w-20 h-20 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-200 transition-colors">
                          <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          Lưu trú
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          Khám phá homestay và khách sạn chất lượng trên khắp Việt Nam
                        </p>

                        {/* CTA */}
                        <button className="inline-flex items-center space-x-2 text-yellow-600 font-semibold hover:text-yellow-700 transition-colors group-hover:translate-x-1">
                          <span>Tìm hiểu thêm</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Ẩm thực */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                      onClick={() => setActiveTab('food')}>
                      <div className="flex flex-col items-center text-center">
                        {/* Icon */}
                        <div className="w-20 h-20 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-200 transition-colors">
                          <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          Ẩm thực
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          Khám phá văn hóa ẩm thực địa phương với những món ăn đặc sắc
                        </p>

                        {/* CTA */}
                        <button className="inline-flex items-center space-x-2 text-yellow-600 font-semibold hover:text-yellow-700 transition-colors group-hover:translate-x-1">
                          <span>Tìm hiểu thêm</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div className="p-6">
                    <div className="text-4xl font-bold text-blue-800 mb-2">500+</div>
                    <div className="text-gray-600">Hướng dẫn viên</div>
                  </div>
                  <div className="p-6">
                    <div className="text-4xl font-bold text-blue-800 mb-2">10,000+</div>
                    <div className="text-gray-600">Khách hàng hài lòng</div>
                  </div>
                  <div className="p-6">
                    <div className="text-4xl font-bold text-blue-800 mb-2">34+</div>
                    <div className="text-gray-600">Tỉnh thành</div>
                  </div>
                  <div className="p-6">
                    <div className="text-4xl font-bold text-blue-800 mb-2">4.9</div>
                    <div className="text-gray-600">Đánh giá trung bình</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Tours Section */}
            <section className="py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">
                  Tour Phổ Biến
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredTours.map((tour) => (
                    <TourCard
                      key={tour.id}
                      tour={tour}
                      onBook={() => handleBookTour(tour)}
                      onChatWithGuide={() => handleChatWithGuide(tour.guide.name)}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Tại sao chọn Vietravel Buddy?
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Chúng tôi mang đến trải nghiệm du lịch hoàn hảo với dịch vụ chất lượng cao
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">HDV được xác minh</h3>
                    <p className="text-gray-600">
                      Tất cả hướng dẫn viên đều được kiểm tra kỹ lưỡng về chuyên môn và kinh nghiệm
                    </p>
                  </div>

                  <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Đánh giá cao</h3>
                    <p className="text-gray-600">
                      Hơn 10,000 khách hàng hài lòng với rating trung bình 4.9/5 sao
                    </p>
                  </div>

                  <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Hỗ trợ 24/7</h3>
                    <p className="text-gray-600">
                      Chat trực tiếp với hướng dẫn viên và đội ngũ hỗ trợ mọi lúc mọi nơi
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Vision, Mission, Values Section */}
            <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Về Vietravel Buddy
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Chúng tôi kết nối du khách với những hướng dẫn viên địa phương tài năng,
                    mang đến trải nghiệm du lịch Việt Nam chân thực và đáng nhớ nhất.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Vision */}
                  <div className="text-center p-8 bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Tầm Nhìn</h3>
                    <p className="text-gray-600">
                      Trở thành nền tảng du lịch hàng đầu Việt Nam, kết nối du khách với
                      những trải nghiệm văn hóa địa phương độc đáo và chân thực nhất.
                    </p>
                  </div>
                  <div className="text-center p-8 bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Sứ Mệnh</h3>
                    <p className="text-gray-600">
                      Tạo ra những hành trình du lịch có ý nghĩa, giúp du khách khám phá
                      vẻ đẹp Việt Nam qua góc nhìn của người địa phương am hiểu và đam mê.
                    </p>
                  </div>
                  <div className="text-center p-8 bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Giá Trị Cốt Lõi</h3>
                    <p className="text-gray-600">
                      Chân thực, an toàn, chất lượng và trách nhiệm với cộng đồng.
                      Chúng tôi cam kết mang đến dịch vụ tốt nhất cho mọi hành trình.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      <Header
        isAuthenticated={isAuthenticated}
        onAuthClick={() => setShowAuthModal(true)}
        onLogout={() => setIsAuthenticated(false)}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <main>{renderContent()}</main>

      {/* Modals */}
      {showAuthModal && (
        <AuthModal
          onClose={() => setShowAuthModal(false)}
          onAuth={handleAuth}
        />
      )}

      {showBookingModal && selectedTour && (
        <BookingModal
          tour={selectedTour}
          onClose={() => setShowBookingModal(false)}
          onConfirm={handleBookingConfirm}
        />
      )}

      {showPaymentModal && selectedTour && (
        <PaymentModal
          tour={selectedTour}
          onClose={() => setShowPaymentModal(false)}
          onComplete={handlePaymentComplete}
        />
      )}

      {isRoomBookingModalOpen && selectedAccommodation && (
        <RoomBookingModal
          accommodation={selectedAccommodation}
          onClose={() => setIsRoomBookingModalOpen(false)}
          onConfirm={handleRoomBookingConfirm}
        />
      )}

      {showChatModal && (
        <ChatModal
          guideName={currentGuide}
          onClose={() => setShowChatModal(false)}
        />
      )}

      {/* Chat Widget */}
      <ChatWidget />
      <Footer activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;