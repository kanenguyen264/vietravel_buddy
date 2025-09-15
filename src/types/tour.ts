export interface Tour {
  id: string;
  title: string;
  location: string;
  category: string;
  price: number;
  duration: string;
  image: string;
  rating: number;
  reviewCount: number;
  description: string;
  itinerary: ItineraryDay[];
  guide: Guide;
  availableDates: string[];
  maxGroupSize: number;
  included: string[];
  reviews: Review[];
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
}

export interface Guide {
  name: string;
  avatar: string;
  rating: number;
  experience: string;
  languages: string[];
  specialties: string[];
  bio: string;
  verified: boolean;
}

export interface Review {
  id: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
}