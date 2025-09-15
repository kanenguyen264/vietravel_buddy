import React from 'react';
import { MapPin, Clock, Users, Star, Shield, MessageCircle } from 'lucide-react';
import { Tour } from '../types/tour';

interface GuidesPageProps {
    onBookTour: (tour: Tour) => void;
    tours: Tour[];
}

const GuidesPage: React.FC<GuidesPageProps> = ({ onBookTour, tours }) => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Hướng dẫn viên</h1>
                    <p className="text-xl text-gray-600 mb-12">
                        Tìm kiếm hướng dẫn viên chuyên nghiệp cho chuyến du lịch của bạn
                    </p>

                    {/* Search Section */}
                    <div className="bg-white rounded-lg border border-gray-200 p-8 mb-12">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Địa điểm
                                </label>
                                <select className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-900">
                                    <option>Chọn địa điểm</option>
                                    <option>TP. Hồ Chí Minh</option>
                                    <option>Hà Nội</option>
                                    <option>Đà Nẵng</option>
                                    <option>Nha Trang</option>
                                    <option>Phan Thiết</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Loại tour
                                </label>
                                <select className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-500">
                                    <option>-- Chọn loại tour --</option>
                                    <option>Tour ẩm thực</option>
                                    <option>Workshop</option>
                                    <option>Tour Trekking</option>
                                    <option>Tour văn hóa</option>
                                    <option>Tour thiên nhiên</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Thời gian
                                </label>
                                <select className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-500">
                                    <option>-- Chọn thời gian --</option>
                                    <option>Nửa ngày (2-4 giờ)</option>
                                    <option>Cả ngày (6-8 giờ)</option>
                                    <option>2 ngày 1 đêm</option>
                                    <option>3 ngày 2 đêm</option>
                                </select>
                            </div>

                            <div>
                                <button className="w-full bg-yellow-500 text-white py-3 px-6 rounded-lg hover:bg-yellow-600 transition-colors font-medium">
                                    Tìm kiếm
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Guides List */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">
                            Hướng dẫn viên nổi bật
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Guide 1 - Anh Minh */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="relative">
                                    <img
                                        src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
                                        alt="Tour Ẩm Thực Sài Gòn"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                                            Tour ẩm thực
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm font-bold">
                                            450,000đ
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        Tour Ẩm Thực Sài Gòn Đêm
                                    </h3>

                                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                                        <div className="flex items-center space-x-1">
                                            <MapPin className="h-4 w-4" />
                                            <span>TP. Hồ Chí Minh</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Clock className="h-4 w-4" />
                                            <span>4 giờ</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Users className="h-4 w-4" />
                                            <span>Tối đa 8</span>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 text-sm mb-4">
                                        Khám phá tinh hoa ẩm thực đường phố Sài Gòn cùng HDV địa phương. Thưởng thức các món ăn đặc sản từ phở, bánh mì đến chè và cà phê.
                                    </p>

                                    {/* Guide Info */}
                                    <div className="border-t pt-4 mb-4">
                                        <div className="flex items-center space-x-3">
                                            <img
                                                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                                                alt="Anh Minh"
                                                className="w-10 h-10 rounded-full object-cover"
                                            />
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-2">
                                                    <h4 className="text-sm font-semibold text-gray-900">
                                                        Anh Minh
                                                    </h4>
                                                    <Shield className="h-4 w-4 text-green-500" />
                                                </div>
                                                <div className="flex items-center space-x-2 text-xs text-gray-500">
                                                    <div className="flex items-center">
                                                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                                                        <span className="ml-1">4.9</span>
                                                    </div>
                                                    <span>•</span>
                                                    <span>5 năm kinh nghiệm</span>
                                                </div>
                                            </div>
                                            <button className="text-blue-800 hover:text-blue-900 transition-colors">
                                                <MessageCircle className="h-5 w-5" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-2">
                                            <div className="flex items-center">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`h-4 w-4 ${i < 5 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-sm text-gray-600">
                                                4.8 (127 đánh giá)
                                            </span>
                                        </div>
                                    </div>

                                    {/* Book Button */}
                                    <button
                                        onClick={() => onBookTour(tours[0])}
                                        className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition-colors font-semibold"
                                    >
                                        Đặt tour ngay
                                    </button>
                                </div>
                            </div>

                            {/* Guide 2 - Chị Mai */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="relative">
                                    <img
                                        src="https://images.pexels.com/photos/5999764/pexels-photo-5999764.jpeg"
                                        alt="Workshop Làm Gốm Hội An"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                                            Workshop
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm font-bold">
                                            320,000đ
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        Workshop Làm Gốm Hội An
                                    </h3>

                                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                                        <div className="flex items-center space-x-1">
                                            <MapPin className="h-4 w-4" />
                                            <span>Đà Nẵng</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Clock className="h-4 w-4" />
                                            <span>3 giờ</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Users className="h-4 w-4" />
                                            <span>Tối đa 6</span>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 text-sm mb-4">
                                        Trải nghiệm làm gốm truyền thống tại làng nghề Thanh Hà. Học kỹ thuật nặn gốm cơ bản và tự tay tạo ra sản phẩm của riêng mình.
                                    </p>

                                    {/* Guide Info */}
                                    <div className="border-t pt-4 mb-4">
                                        <div className="flex items-center space-x-3">
                                            <img
                                                src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg"
                                                alt="Chị Mai"
                                                className="w-10 h-10 rounded-full object-cover"
                                            />
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-2">
                                                    <h4 className="text-sm font-semibold text-gray-900">
                                                        Chị Mai
                                                    </h4>
                                                    <Shield className="h-4 w-4 text-green-500" />
                                                </div>
                                                <div className="flex items-center space-x-2 text-xs text-gray-500">
                                                    <div className="flex items-center">
                                                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                                                        <span className="ml-1">4.8</span>
                                                    </div>
                                                    <span>•</span>
                                                    <span>8 năm kinh nghiệm</span>
                                                </div>
                                            </div>
                                            <button className="text-blue-800 hover:text-blue-900 transition-colors">
                                                <MessageCircle className="h-5 w-5" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-2">
                                            <div className="flex items-center">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`h-4 w-4 ${i < 5 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-sm text-gray-600">
                                                4.7 (89 đánh giá)
                                            </span>
                                        </div>
                                    </div>

                                    {/* Book Button */}
                                    <button
                                        onClick={() => onBookTour(tours[1])}
                                        className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition-colors font-semibold"
                                    >
                                        Đặt tour ngay
                                    </button>
                                </div>
                            </div>

                            {/* Guide 3 - Anh Dũng */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="relative">
                                    <img
                                        src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg"
                                        alt="Trekking Sapa - Chinh Phục Fansipan"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                                            Tour Trekking
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm font-bold">
                                            1,250,000đ
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        Trekking Sapa - Chinh Phục Fansipan
                                    </h3>

                                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                                        <div className="flex items-center space-x-1">
                                            <MapPin className="h-4 w-4" />
                                            <span>Hà Nội</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Clock className="h-4 w-4" />
                                            <span>2 ngày 1 đêm</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Users className="h-4 w-4" />
                                            <span>Tối đa 12</span>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 text-sm mb-4">
                                        Chinh phục đỉnh Fansipan - nóc nhà Đông Dương. Khám phá cảnh đẹp ruộng bậc thang và văn hóa dân tộc thiểu số.
                                    </p>

                                    {/* Guide Info */}
                                    <div className="border-t pt-4 mb-4">
                                        <div className="flex items-center space-x-3">
                                            <img
                                                src="https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg"
                                                alt="Anh Dũng"
                                                className="w-10 h-10 rounded-full object-cover"
                                            />
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-2">
                                                    <h4 className="text-sm font-semibold text-gray-900">
                                                        Anh Dũng
                                                    </h4>
                                                    <Shield className="h-4 w-4 text-green-500" />
                                                </div>
                                                <div className="flex items-center space-x-2 text-xs text-gray-500">
                                                    <div className="flex items-center">
                                                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                                                        <span className="ml-1">4.9</span>
                                                    </div>
                                                    <span>•</span>
                                                    <span>10 năm kinh nghiệm</span>
                                                </div>
                                            </div>
                                            <button className="text-blue-800 hover:text-blue-900 transition-colors">
                                                <MessageCircle className="h-5 w-5" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-2">
                                            <div className="flex items-center">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`h-4 w-4 ${i < 5 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-sm text-gray-600">
                                                4.9 (203 đánh giá)
                                            </span>
                                        </div>
                                    </div>

                                    {/* Book Button */}
                                    <button
                                        onClick={() => onBookTour(tours[2])}
                                        className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition-colors font-semibold"
                                    >
                                        Đặt tour ngay
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuidesPage;