import React, { useState } from 'react';

const FoodPage: React.FC = () => {
    const [selectedCity, setSelectedCity] = useState('TP. Hồ Chí Minh');
    const [selectedFood, setSelectedFood] = useState('');

    const foodItems = ['Phở', 'Bánh mì', 'Cơm tấm', 'Bún bò Huế', 'Bánh xèo', 'Gỏi cuốn', 'Chè', 'Cao lầu'];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Ẩm thực</h1>
                    <p className="text-lg text-gray-600 mb-12">
                        Khám phá văn hóa ẩm thực địa phương với những món ăn đặc sắc
                    </p>

                    {/* Search Section */}
                    <div className="bg-white rounded-lg border border-gray-200 p-8 mb-12 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                            {/* City Selection */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Chọn thành phố
                                </label>
                                <select
                                    value={selectedCity}
                                    onChange={(e) => setSelectedCity(e.target.value)}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-900"
                                >
                                    <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                                    <option value="Hà Nội">Hà Nội</option>
                                    <option value="Đà Nẵng">Đà Nẵng</option>
                                    <option value="Nha Trang">Nha Trang</option>
                                    <option value="Phan Thiết">Phan Thiết</option>
                                </select>
                            </div>

                            {/* Food Selection */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Chọn món ăn
                                </label>
                                <select
                                    value={selectedFood}
                                    onChange={(e) => setSelectedFood(e.target.value)}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-500"
                                >
                                    <option value="">-- Chọn món ăn --</option>
                                    {foodItems.map((food) => (
                                        <option key={food} value={food}>{food}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Search Button */}
                            <div>
                                <button className="w-full bg-gray-400 text-white py-3 px-6 rounded-lg hover:bg-gray-500 transition-colors font-medium">
                                    Tìm kiếm
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Food Categories */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">
                            Món ăn phổ biến tại {selectedCity}
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                            {foodItems.map((food) => (
                                <button
                                    key={food}
                                    onClick={() => setSelectedFood(food)}
                                    className={`p-4 rounded-lg border transition-colors text-center ${selectedFood === food
                                            ? 'border-blue-500 bg-blue-50 text-blue-800'
                                            : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                                        }`}
                                >
                                    <div className="font-medium">{food}</div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Featured Restaurants */}
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">
                            Nhà hàng nổi bật tại {selectedCity}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Restaurant 1 */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                <img
                                    src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
                                    alt="Quán Phở Hà Nội"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Quán Phở Hà Nội</h3>
                                    <p className="text-gray-600 text-sm mb-3">Phở bò truyền thống với nước dùng đậm đà</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-1">
                                            <span className="text-yellow-400">★★★★★</span>
                                            <span className="text-sm text-gray-600">(4.8)</span>
                                        </div>
                                        <span className="text-blue-800 font-bold">50,000đ - 80,000đ</span>
                                    </div>
                                </div>
                            </div>

                            {/* Restaurant 2 */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                <img
                                    src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg"
                                    alt="Bánh Mì Huỳnh Hoa"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Bánh Mì Huỳnh Hoa</h3>
                                    <p className="text-gray-600 text-sm mb-3">Bánh mì thập cẩm nổi tiếng Sài Gòn</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-1">
                                            <span className="text-yellow-400">★★★★☆</span>
                                            <span className="text-sm text-gray-600">(4.6)</span>
                                        </div>
                                        <span className="text-blue-800 font-bold">25,000đ - 45,000đ</span>
                                    </div>
                                </div>
                            </div>

                            {/* Restaurant 3 */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                <img
                                    src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg"
                                    alt="Cơm Tấm Sài Gòn"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Cơm Tấm Sài Gòn</h3>
                                    <p className="text-gray-600 text-sm mb-3">Cơm tấm sườn nướng đặc sản miền Nam</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-1">
                                            <span className="text-yellow-400">★★★★★</span>
                                            <span className="text-sm text-gray-600">(4.9)</span>
                                        </div>
                                        <span className="text-blue-800 font-bold">35,000đ - 65,000đ</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodPage;