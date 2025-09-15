import React from 'react';
import { Star, Clock, Users, MapPin, MessageCircle, Shield } from 'lucide-react';
import { Tour } from '../types/tour';

interface TourCardProps {
  tour: Tour;
  onBook: () => void;
  onChatWithGuide: () => void;
}

const TourCard: React.FC<TourCardProps> = ({ tour, onBook, onChatWithGuide }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-medium">
            {tour.category}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm font-bold">
            {tour.price.toLocaleString()}đ
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
            {tour.title}
          </h3>
        </div>

        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>{tour.location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{tour.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>Tối đa {tour.maxGroupSize}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {tour.description}
        </p>

        {/* Guide Info */}
        <div className="border-t pt-4 mb-4">
          <div className="flex items-center space-x-3">
            <img
              src={tour.guide.avatar}
              alt={tour.guide.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h4 className="text-sm font-semibold text-gray-900">
                  {tour.guide.name}
                </h4>
                {tour.guide.verified && (
                  <Shield className="h-4 w-4 text-green-500" />
                )}
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <div className="flex items-center">
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  <span className="ml-1">{tour.guide.rating}</span>
                </div>
                <span>•</span>
                <span>{tour.guide.experience}</span>
              </div>
            </div>
            <button
              onClick={onChatWithGuide}
              className="text-blue-800 hover:text-blue-900 transition-colors"
            >
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
                  className={`h-4 w-4 ${
                    i < Math.floor(tour.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {tour.rating} ({tour.reviewCount} đánh giá)
            </span>
          </div>
        </div>

        {/* Book Button */}
        <button
          onClick={onBook}
          className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition-colors font-semibold"
        >
          Đặt tour ngay
        </button>
      </div>
    </div>
  );
};

export default TourCard;