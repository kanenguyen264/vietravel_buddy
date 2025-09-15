import React, { useState } from 'react';
import { ArrowLeft, Users, Home, UtensilsCrossed, Check, Upload, Phone, Mail, MapPin, Star, Clock, FileText, Camera, Award } from 'lucide-react';

type PartnerType = 'guide' | 'accommodation' | 'food' | null;

interface PartnerPageProps {
  onBack: () => void;
}

const PartnerPage: React.FC<PartnerPageProps> = ({ onBack }) => {
  const [selectedPartnerType, setSelectedPartnerType] = useState<PartnerType>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    fullName: '',
    phone: '',
    email: '',
    address: '',

    // Service Info
    serviceName: '',
    serviceDescription: '',
    location: '',
    price: '',

    // Experience
    experience: '',
    languages: [] as string[],
    specialties: [] as string[],

    // Documents
    idCard: null as File | null,
    certificate: null as File | null,
    photos: [] as File[]
  });

  const steps = [
    { number: 1, title: 'Chọn loại đối tác', description: 'Chọn loại dịch vụ bạn muốn cung cấp' },
    { number: 2, title: 'Thông tin cá nhân', description: 'Nhập thông tin liên hệ của bạn' },
    { number: 3, title: 'Thông tin dịch vụ', description: 'Mô tả dịch vụ bạn cung cấp' },
    { number: 4, title: 'Kinh nghiệm', description: 'Chia sẻ kinh nghiệm và chuyên môn' },
    { number: 5, title: 'Hoàn tất', description: 'Xem lại và gửi hồ sơ' }
  ];

  const partnerTypes = [
    {
      type: 'guide' as PartnerType,
      title: 'Hướng dẫn viên',
      description: 'Trở thành hướng dẫn viên chuyên nghiệp trong mạng lưới của chúng tôi',
      icon: <Users className="h-12 w-12 text-blue-500" />,
      color: 'bg-blue-50 border-blue-200 hover:bg-blue-100'
    },
    {
      type: 'accommodation' as PartnerType,
      title: 'Lưu trú',
      description: 'Đăng ký homestay hoặc khách sạn để tăng nguồn khách',
      icon: <Home className="h-12 w-12 text-yellow-600" />,
      color: 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100'
    },
    {
      type: 'food' as PartnerType,
      title: 'Ẩm thực',
      description: 'Giới thiệu nhà hàng, quán ăn đến du khách',
      icon: <UtensilsCrossed className="h-12 w-12 text-orange-500" />,
      color: 'bg-orange-50 border-orange-200 hover:bg-orange-100'
    }
  ];

  const handlePartnerTypeSelect = (type: PartnerType) => {
    setSelectedPartnerType(type);
    setCurrentStep(2);
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      setSelectedPartnerType(null);
    }
  };

  const handleSubmit = () => {
    alert('Hồ sơ đã được gửi thành công! Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ.');
    onBack();
  };

  const renderStepIndicator = () => (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${currentStep >= step.number
                ? 'bg-blue-800 border-blue-800 text-white'
                : 'bg-white border-gray-300 text-gray-500'
              }`}>
              {currentStep > step.number ? (
                <Check className="h-5 w-5" />
              ) : (
                <span className="text-sm font-semibold">{step.number}</span>
              )}
            </div>
            {index < steps.length - 1 && (
              <div className={`w-16 h-0.5 mx-2 ${currentStep > step.number ? 'bg-blue-800' : 'bg-gray-300'
                }`} />
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900">{steps[currentStep - 1]?.title}</h3>
        <p className="text-sm text-gray-600">{steps[currentStep - 1]?.description}</p>
      </div>
    </div>
  );

  const renderPartnerTypeSelection = () => (
    <div className="max-w-6xl mx-auto">
      {/* Step Indicator */}
      <div className="mb-16">
        <div className="flex items-center justify-center space-x-8">
          {/* Step 1 - Active */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
              1
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Chọn loại đối tác</h3>
              <p className="text-sm text-gray-600">Chọn loại dịch vụ bạn muốn cung cấp</p>
            </div>
          </div>

          {/* Connector Line */}
          <div className="w-20 h-0.5 bg-gray-300 mt-8"></div>

          {/* Step 2 - Inactive */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xl font-bold mb-4">
              2
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-500 mb-1">Thông tin cá nhân</h3>
              <p className="text-sm text-gray-400">Nhập thông tin liên hệ của bạn</p>
            </div>
          </div>

          {/* Connector Line */}
          <div className="w-20 h-0.5 bg-gray-300 mt-8"></div>

          {/* Step 3 - Inactive */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xl font-bold mb-4">
              3
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-500 mb-1">Thông tin dịch vụ</h3>
              <p className="text-sm text-gray-400">Mô tả dịch vụ bạn cung cấp</p>
            </div>
          </div>

          {/* Connector Line */}
          <div className="w-20 h-0.5 bg-gray-300 mt-8"></div>

          {/* Step 4 - Inactive */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xl font-bold mb-4">
              4
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-500 mb-1">Kinh nghiệm</h3>
              <p className="text-sm text-gray-400">Chia sẻ kinh nghiệm và chuyên môn</p>
            </div>
          </div>

          {/* Connector Line */}
          <div className="w-20 h-0.5 bg-gray-300 mt-8"></div>

          {/* Step 5 - Inactive */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xl font-bold mb-4">
              5
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-500 mb-1">Hoàn tất</h3>
              <p className="text-sm text-gray-400">Xem lại và gửi hồ sơ</p>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Type Selection */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-left">Chọn loại đối tác</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Hướng dẫn viên */}
          <button
            onClick={() => handlePartnerTypeSelect('guide')}
            className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-left group"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <Users className="h-8 w-8 text-blue-500" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Hướng dẫn viên</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Trở thành hướng dẫn viên chuyên nghiệp trong mạng lưới của chúng tôi
            </p>
          </button>

          {/* Lưu trú - Highlighted */}
          <button
            onClick={() => handlePartnerTypeSelect('accommodation')}
            className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-8 hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 text-left group shadow-lg"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                <Home className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 text-center">Lưu trú</h3>
            <p className="text-white text-opacity-90 text-center leading-relaxed">
              Đăng ký homestay hoặc khách sạn để tăng nguồn khách
            </p>
          </button>

          {/* Ẩm thực */}
          <button
            onClick={() => handlePartnerTypeSelect('food')}
            className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-orange-300 hover:shadow-lg transition-all duration-300 text-left group"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                <UtensilsCrossed className="h-8 w-8 text-orange-500" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Ẩm thực</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Giới thiệu nhà hàng, quán ăn đến du khách
            </p>
          </button>
        </div>
      </div>
    </div>
  );

  const renderStepIndicatorForOtherSteps = () => (
    <div className="mb-16">
      <div className="flex items-center justify-center space-x-8">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className="flex flex-col items-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mb-4 ${currentStep >= step.number
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-300 text-gray-600'
                }`}>
                {currentStep > step.number ? (
                  <Check className="h-8 w-8" />
                ) : (
                  step.number
                )}
              </div>
              <div className="text-center">
                <h3 className={`text-lg font-semibold mb-1 ${currentStep >= step.number ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                  {step.title}
                </h3>
                <p className={`text-sm ${currentStep >= step.number ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                  {step.description}
                </p>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className={`w-20 h-0.5 mt-8 ${currentStep > step.number ? 'bg-blue-500' : 'bg-gray-300'
                }`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  const renderPersonalInfoForm = () => (
    <div className="max-w-2xl mx-auto">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Họ và tên *
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Nhập họ và tên đầy đủ"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Phone className="inline h-4 w-4 mr-1" />
              Số điện thoại *
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="0123456789"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Mail className="inline h-4 w-4 mr-1" />
              Email *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="email@example.com"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MapPin className="inline h-4 w-4 mr-1" />
            Địa chỉ *
          </label>
          <textarea
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={3}
            placeholder="Nhập địa chỉ chi tiết"
            required
          />
        </div>
      </div>
    </div>
  );

  const renderServiceInfoForm = () => (
    <div className="max-w-2xl mx-auto">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tên dịch vụ *
          </label>
          <input
            type="text"
            value={formData.serviceName}
            onChange={(e) => setFormData({ ...formData, serviceName: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder={
              selectedPartnerType === 'guide' ? 'Ví dụ: Tour ẩm thực Sài Gòn' :
                selectedPartnerType === 'accommodation' ? 'Ví dụ: Homestay view biển Đà Nẵng' :
                  'Ví dụ: Nhà hàng hải sản tươi sống'
            }
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Mô tả dịch vụ *
          </label>
          <textarea
            value={formData.serviceDescription}
            onChange={(e) => setFormData({ ...formData, serviceDescription: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={4}
            placeholder="Mô tả chi tiết về dịch vụ của bạn..."
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MapPin className="inline h-4 w-4 mr-1" />
              Khu vực hoạt động *
            </label>
            <select
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Chọn khu vực</option>
              <option value="TPHCM">TP. Hồ Chí Minh</option>
              <option value="Hà Nội">Hà Nội</option>
              <option value="Đà Nẵng">Đà Nẵng</option>
              <option value="Nha Trang">Nha Trang</option>
              <option value="Phan Thiết">Phan Thiết</option>
              <option value="Khác">Khác</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Giá dịch vụ (VNĐ) *
            </label>
            <input
              type="number"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="500000"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderExperienceForm = () => (
    <div className="max-w-2xl mx-auto">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Award className="inline h-4 w-4 mr-1" />
            Kinh nghiệm *
          </label>
          <textarea
            value={formData.experience}
            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={4}
            placeholder="Chia sẻ kinh nghiệm làm việc của bạn..."
            required
          />
        </div>

        {selectedPartnerType === 'guide' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ngôn ngữ
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {['Tiếng Việt', 'English', '中文', '日本語', '한국어', 'Français'].map((lang) => (
                  <label key={lang} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.languages.includes(lang)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData({ ...formData, languages: [...formData.languages, lang] });
                        } else {
                          setFormData({ ...formData, languages: formData.languages.filter(l => l !== lang) });
                        }
                      }}
                      className="text-blue-600"
                    />
                    <span className="text-sm">{lang}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Chuyên môn
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {['Ẩm thực', 'Lịch sử', 'Văn hóa', 'Thiên nhiên', 'Thể thao', 'Nghệ thuật'].map((specialty) => (
                  <label key={specialty} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.specialties.includes(specialty)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData({ ...formData, specialties: [...formData.specialties, specialty] });
                        } else {
                          setFormData({ ...formData, specialties: formData.specialties.filter(s => s !== specialty) });
                        }
                      }}
                      className="text-blue-600"
                    />
                    <span className="text-sm">{specialty}</span>
                  </label>
                ))}
              </div>
            </div>
          </>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Upload className="inline h-4 w-4 mr-1" />
            Tải lên hình ảnh
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-2">Tải lên hình ảnh dịch vụ của bạn</p>
            <input
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              id="photos"
              onChange={(e) => {
                if (e.target.files) {
                  setFormData({ ...formData, photos: Array.from(e.target.files) });
                }
              }}
            />
            <label
              htmlFor="photos"
              className="inline-flex items-center px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 cursor-pointer"
            >
              <Upload className="h-4 w-4 mr-2" />
              Chọn hình ảnh
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSummary = () => (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Xem lại thông tin</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-700">Loại đối tác:</h4>
            <p className="text-gray-600">
              {selectedPartnerType === 'guide' ? 'Hướng dẫn viên' :
                selectedPartnerType === 'accommodation' ? 'Lưu trú' : 'Ẩm thực'}
            </p>
          </div>

          <div>
            <h4 className="font-medium text-gray-700">Thông tin cá nhân:</h4>
            <p className="text-gray-600">{formData.fullName}</p>
            <p className="text-gray-600">{formData.phone} | {formData.email}</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-700">Dịch vụ:</h4>
            <p className="text-gray-600">{formData.serviceName}</p>
            <p className="text-gray-600">{formData.location} - {parseInt(formData.price).toLocaleString()}đ</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <h4 className="font-medium text-blue-900 mb-2">Bước tiếp theo:</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Chúng tôi sẽ xem xét hồ sơ trong vòng 24 giờ</li>
          <li>• Liên hệ qua điện thoại để xác nhận thông tin</li>
          <li>• Hướng dẫn sử dụng hệ thống và bắt đầu nhận khách</li>
        </ul>
      </div>
    </div>
  );

  if (!selectedPartnerType) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-blue-800 hover:text-blue-900 mb-8"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Quay lại</span>
          </button>

          {renderPartnerTypeSelection()}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={handlePrevious}
          className="flex items-center space-x-2 text-blue-800 hover:text-blue-900 mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Quay lại</span>
        </button>

        {renderStepIndicator()}

        <div className="bg-white rounded-xl shadow-lg p-8">
          {currentStep > 1 && renderStepIndicatorForOtherSteps()}

          {currentStep === 2 && renderPersonalInfoForm()}
          {currentStep === 3 && renderServiceInfoForm()}
          {currentStep === 4 && renderExperienceForm()}
          {currentStep === 5 && renderSummary()}

          <div className="flex justify-between mt-8 pt-6 border-t">
            <button
              onClick={handlePrevious}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Quay lại
            </button>

            {currentStep < 5 ? (
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors"
              >
                Tiếp tục
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Gửi hồ sơ
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerPage;