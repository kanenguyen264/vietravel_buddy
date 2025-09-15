import React, { useState, useEffect } from 'react';

const AboutPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState(0);

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setActiveSection(prev => (prev + 1) % 3);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const stats = [
        { number: "10K+", label: "Khách hàng hài lòng", icon: "👥" },
        { number: "500+", label: "Điểm đến độc đáo", icon: "📍" },
        { number: "5★", label: "Đánh giá trung bình", icon: "⭐" },
        { number: "3+", label: "Năm kinh nghiệm", icon: "🏆" }
    ];

    const teamMembers = [
        {
            name: "Nguyễn Minh An",
            role: "CEO & Founder",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            description: "Đam mê du lịch và khởi nghiệp với 10+ năm kinh nghiệm trong ngành du lịch"
        },
        {
            name: "Trần Thị Hương",
            role: "Head of Operations",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
            description: "Chuyên gia vận hành tour với niềm đam mê văn hóa Việt Nam"
        },
        {
            name: "Lê Đức Thắng",
            role: "Lead Tour Guide",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
            description: "Hướng dẫn viên giàu kinh nghiệm, thành thạo 4 ngoại ngữ"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
            {/* Hero Section */}
            <div className="relative py-20 px-4 sm:px-6 lg:px-8">
                {/* Floating background elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
                <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>

                <div className="relative max-w-7xl mx-auto text-center">
                    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
                        <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
                            Về Chúng Tôi
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                            Khám phá vẻ đẹp Việt Nam qua những trải nghiệm đưa bạn đến gần hơn với văn hóa và con người địa phương
                        </p>
                    </div>
                </div>
            </div>

            {/* Vision, Mission, Values Section */}
            <div className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "🎯",
                                title: "Tầm Nhìn",
                                description: "Trở thành nền tảng du lịch hàng đầu Việt Nam, kết nối du khách với những trải nghiệm văn hóa địa phương độc đáo và chân thực nhất.",
                                gradient: "from-blue-500 to-cyan-500"
                            },
                            {
                                icon: "⚡",
                                title: "Sứ Mệnh",
                                description: "Tạo ra những hành trình du lịch có ý nghĩa, giúp du khách khám phá vẻ đẹp Việt Nam qua góc nhìn của người địa phương am hiểu và đam mê.",
                                gradient: "from-purple-500 to-pink-500"
                            },
                            {
                                icon: "💎",
                                title: "Giá Trị Cốt Lõi",
                                description: "Chân thực, an toàn, chất lượng và trách nhiệm với cộng đồng. Chúng tôi cam kết mang đến dịch vụ tốt nhất cho mọi hành trình.",
                                gradient: "from-orange-500 to-yellow-500"
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className={`group relative p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${activeSection === index ? 'ring-4 ring-blue-300 ring-opacity-50' : ''
                                    }`}
                                style={{
                                    animationDelay: `${index * 200}ms`
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl"
                                    style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}></div>

                                <div className={`w-20 h-20 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    {item.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-white mb-16">
                        Thành Tựu Của Chúng Tôi
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="text-4xl mb-4 group-hover:animate-bounce">
                                    {stat.icon}
                                </div>
                                <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                                    {stat.number}
                                </div>
                                <div className="text-blue-100 text-lg font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                        Đội Ngũ Của Chúng Tôi
                    </h2>
                    <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                        Những con người đam mê và tận tâm, luôn sẵn sàng mang đến cho bạn những trải nghiệm tuyệt vời nhất
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="group relative text-center">
                                <div className="relative mb-6 inline-block">
                                    <div className="w-40 h-40 mx-auto rounded-full overflow-hidden ring-4 ring-white shadow-2xl group-hover:ring-8 group-hover:ring-blue-200 transition-all duration-300">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-125 transition-transform duration-300">
                                        ✨
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                    {member.name}
                                </h3>

                                <p className="text-blue-600 font-semibold mb-4 text-lg">
                                    {member.role}
                                </p>

                                <p className="text-gray-600 leading-relaxed">
                                    {member.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Sẵn Sàng Khám Phá Cùng Chúng Tôi?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                        Hãy để chúng tôi đồng hành cùng bạn trong hành trình khám phá những điều kỳ diệu của Việt Nam
                    </p>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-4 rounded-full text-xl font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                        Bắt Đầu Hành Trình 🚀
                    </button>
                </div>
            </div>

            <style jsx>{`
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default AboutPage;