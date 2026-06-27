export interface SubService {
  id: string;
  name: string;
  description: string;
  estimatedTime: string;
  warranty: string;
  startingPrice: number;
  isRecommended?: boolean;
}

export interface ServiceCategory {
  id: string;
  name: string;
  subServices: SubService[];
}

export interface BookingType {
  id: string;
  name: string;
  markupPercentage: number;
  description: string;
}

export interface ServiceAddon {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface DetailedServiceData {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  imageUrl: string;
  startingPrice: string;
  estimatedDuration: string;
  rating: number;
  reviewsCount: number;
  benefits: string[];
  packages: any[];
  categories: ServiceCategory[];
  bookingTypes: BookingType[];
  addons: ServiceAddon[];
  faq: { question: string; answer: string }[];
  reviews: { author: string; rating: number; date: string; content: string }[];
  process: { step: number; title: string; description: string }[];
}
