export type AccentColor = 'orange' | 'red' | 'blue' | 'emerald' | 'amber';

export interface ServiceItem {
  id: string;
  category: 'valeting' | 'interior' | 'polishing' | 'decontamination' | 'ceramic' | 'fleet';
  title: string;
  price: number | 'POA';
  duration: string;
  image: string;
  shortDesc: string;
  bulletPoints: string[];
  fullProcess?: string[];
  recommendedFor?: string;
  tag?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'correction' | 'polishing' | 'interior' | 'decontamination' | 'valet' | 'ceramic';
  categoryLabel: string;
  afterImage: string;
  beforeImage?: string;
  description: string;
  badge?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BusinessConfig {
  businessName: string;
  tagline: string;
  ownerName: string;
  yearsExperience: number;
  phone: string;
  email: string;
  location: string;
  serviceRadius: string;
  servicedTowns: string[];
  currencySymbol: string;
  accentColor: AccentColor;
  isEditable: boolean;
  openingHours: {
    weekdays: string;
    sunday: string;
  };
}

export interface BookingFormData {
  serviceId: string;
  vehicleType: 'Hatchback / Saloon' | 'SUV / Estate' | 'Large 4x4 / Truck' | 'Commercial Van';
  name: string;
  phone: string;
  email: string;
  postcode: string;
  date: string;
  timeSlot: 'Morning (8am - 12pm)' | 'Afternoon (12pm - 4pm)' | 'Flexible';
  notes: string;
}

export interface LocationItem {
  id: string;
  slug: string;
  cityNumber: string; // e.g. "City 1"
  cityName: string; // e.g. "Aberdeen"
  shortTitle: string; // e.g. "City 1 - Aberdeen"
  tagline: string;
  postcodes: string[];
  description: string;
  travelTime: string;
  popularServices: string[];
  features: string[];
  localWeatherChallenge: string;
  image: string;
  localReview: {
    quote: string;
    author: string;
    vehicle: string;
    rating: number;
  };
}

export interface BlogPostItem {
  id: string;
  slug: string; // e.g. "blog-post-1"
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  summary: string;
  content: {
    heading: string;
    paragraphs: string[];
    bulletPoints?: string[];
    proTip?: string;
  }[];
  keyTakeaways: string[];
}

export interface TeamMemberItem {
  id: string;
  name: string;
  role: string;
  yearsInTrade: number;
  specialization: string;
  bio: string;
  certifications: string[];
  favoriteTool: string;
  image: string;
}

