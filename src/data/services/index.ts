import type { DetailedServiceData } from "./types";
import { Wrench, Bike, Droplets, Key, Settings, Cpu, AlertTriangle, type LucideIcon } from "lucide-react"

// Legacy IconMap from old services.ts
export const IconMap: Record<string, LucideIcon> = {
  Wrench,
  Bike,
  Droplets,
  Key,
  Settings,
  Cpu,
  AlertTriangle
}

const defaultProcess = [
  { step: 1, title: "Booking & Confirmation", description: "Select your service, choose a package, and book a convenient time slot online." },
  { step: 2, title: "Vehicle Drop-off / Pickup", description: "Bring your vehicle to our service center or opt for our premium pickup and drop-off service." },
  { step: 3, title: "Expert Servicing", description: "Our certified technicians perform the requested services using state-of-the-art tools and OEM parts." },
  { step: 4, title: "Quality Check & Handover", description: "We conduct a rigorous multi-point quality inspection before handing the vehicle back to you." }
]

const defaultFAQ = [
  { question: "Do you offer warranty on your services?", answer: "Yes, all our services come with a standard 6-month warranty on labor and parts." },
  { question: "Can I reschedule my appointment?", answer: "Absolutely. You can reschedule your appointment up to 24 hours in advance without any penalty." },
  { question: "Do you use original parts?", answer: "We exclusively use OEM parts to ensure the highest quality and compatibility." },
]

const defaultReviews = [
  { author: "Michael T.", rating: 5, date: "2 weeks ago", content: "Exceptional service! The team was highly professional and my vehicle runs like new." },
  { author: "Sarah L.", rating: 5, date: "1 month ago", content: "Loved the AI diagnosis feature. It was completely transparent and I knew exactly what I was paying for." },
  { author: "James W.", rating: 4, date: "2 months ago", content: "Very convenient pickup and drop-off service. Saved me a lot of time." }
]

// Base booking types and addons to avoid crashes for non-migrated services
const defaultBookingTypes = [
  { id: "bt_normal", name: "Normal Booking", markupPercentage: 0, description: "Standard scheduling within 3-5 days." },
  { id: "bt_priority", name: "Priority Booking", markupPercentage: 15, description: "Skip the queue. Guaranteed slot within 24-48 hours." }
];

export const ALL_DETAILED_SERVICES: DetailedServiceData[] = [
  {
    id: "s1",
    slug: "car-repair",
    title: "Premium Car Repair",
    shortDescription: "Complete engine diagnostics, mechanical repairs, and regular maintenance.",
    longDescription: "Our premium car repair service ensures your vehicle runs perfectly. From standard oil changes to complex engine diagnostics, our certified experts use state-of-the-art AI tools to identify and fix issues with precision.",
    icon: "Wrench",
    imageUrl: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&q=80",
    startingPrice: "Rs. 5,000",
    estimatedDuration: "2-4 Hours",
    rating: 4.8,
    reviewsCount: 1240,
    benefits: ["Certified Mechanics", "AI Diagnostics", "Original OEM Parts", "6-Month Warranty"],
    process: defaultProcess,
    faq: defaultFAQ,
    reviews: defaultReviews,
    packages: [
      { name: "Basic", price: "Rs. 5,000", features: ["Oil Change", "Filter Replacement", "Basic Inspection"], estimatedTime: "1 Hour", pickupDrop: false, warranty: "30 Days" },
      { name: "Standard", price: "Rs. 12,000", features: ["Basic +", "Brake Check", "Fluid Top-ups", "Tire Rotation"], estimatedTime: "2-3 Hours", pickupDrop: true, warranty: "6 Months", isPopular: true },
      { name: "Premium", price: "Rs. 25,000", features: ["Standard +", "Engine Diagnostics", "AC Service", "Full Detail"], estimatedTime: "4-6 Hours", pickupDrop: true, warranty: "1 Year" },
    ],
    // New detailed architecture fields
    bookingTypes: [
      { id: "bt_normal", name: "Normal Booking", markupPercentage: 0, description: "Standard scheduling within 3-5 days." },
      { id: "bt_priority", name: "Priority Booking", markupPercentage: 15, description: "Skip the queue. Guaranteed slot within 24-48 hours." },
      { id: "bt_emergency", name: "Emergency Booking", markupPercentage: 35, description: "Immediate attention. Towing included." }
    ],
    addons: [
      { id: "ad_pickup", name: "Pickup & Drop", price: 1500, description: "We will pick up and return your vehicle." },
      { id: "ad_wash", name: "Exterior Wash", price: 800, description: "Basic foam wash and tire shine." },
      { id: "ad_interior", name: "Interior Cleaning", price: 1200, description: "Deep vacuum and dashboard polish." }
    ],
    categories: [
      {
        id: "cat_engine",
        name: "Engine",
        subServices: [
          { id: "ss_oil", name: "Synthetic Oil Change", description: "Premium synthetic oil replacement and oil filter change.", estimatedTime: "45 Mins", warranty: "1 Month", startingPrice: 6500, isRecommended: true },
          { id: "ss_tuneup", name: "Engine Tune-up", description: "Spark plugs, air filter, and throttle body cleaning.", estimatedTime: "2 Hours", warranty: "6 Months", startingPrice: 12000 },
          { id: "ss_overhaul", name: "Complete Overhaul", description: "Full engine tear-down and rebuild.", estimatedTime: "3-5 Days", warranty: "1 Year", startingPrice: 150000 }
        ]
      },
      {
        id: "cat_brakes",
        name: "Brakes",
        subServices: [
          { id: "ss_brakepads", name: "Brake Pads Replacement", description: "OEM brake pads installation.", estimatedTime: "1 Hour", warranty: "6 Months", startingPrice: 8500, isRecommended: true },
          { id: "ss_brakefluid", name: "Brake Fluid Flush", description: "Complete draining and bleeding of old brake fluid.", estimatedTime: "45 Mins", warranty: "3 Months", startingPrice: 3500 },
          { id: "ss_brakedisc", name: "Brake Disc Skimming", description: "Resurfacing warped brake rotors.", estimatedTime: "2 Hours", warranty: "6 Months", startingPrice: 6000 }
        ]
      },
      {
        id: "cat_suspension",
        name: "Suspension",
        subServices: [
          { id: "ss_shocks", name: "Shock Absorber Replacement", description: "Replacement of front and rear struts.", estimatedTime: "3 Hours", warranty: "1 Year", startingPrice: 25000 },
          { id: "ss_alignment", name: "Computerized Wheel Alignment", description: "Laser-guided 3D wheel alignment.", estimatedTime: "30 Mins", warranty: "1 Month", startingPrice: 2000, isRecommended: true }
        ]
      }
    ]
  },
  {
    id: "s2",
    slug: "bike-repair",
    title: "Bike Repair & Tuning",
    shortDescription: "Specialized service for superbikes, cruisers, and regular motorcycles.",
    longDescription: "Give your motorcycle the care it deserves. We handle everything from basic chain lubrication to complete engine overhauls for all makes and models.",
    icon: "Bike",
    imageUrl: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80",
    startingPrice: "Rs. 2,000",
    estimatedDuration: "1-3 Hours",
    rating: 4.9,
    reviewsCount: 856,
    benefits: ["Superbike Specialists", "Performance Tuning", "Dyno Testing", "Quick Turnaround"],
    process: defaultProcess,
    faq: defaultFAQ,
    reviews: defaultReviews,
    packages: [
      { name: "Standard", price: "Rs. 2,000", features: ["Chain Lube", "Oil Change", "Brake Adjustment"], estimatedTime: "1 Hour", pickupDrop: false, warranty: "30 Days" },
      { name: "Pro Tune", price: "Rs. 6,500", features: ["Standard +", "Carburetor Sync", "Spark Plugs", "Suspension Tuning"], estimatedTime: "3 Hours", pickupDrop: true, warranty: "6 Months", isPopular: true },
    ],
    categories: [], addons: [], bookingTypes: defaultBookingTypes
  },
  {
    id: "s3",
    slug: "car-wash",
    title: "Auto Spa & Detailing",
    shortDescription: "Premium hand wash, ceramic coating, and deep interior cleaning.",
    longDescription: "Experience showroom-quality cleanliness with our premium detailing service. We use eco-friendly products and advanced ceramic coatings to protect your vehicle's paint.",
    icon: "Droplets",
    imageUrl: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80",
    startingPrice: "Rs. 1,500",
    estimatedDuration: "45 Mins",
    rating: 4.7,
    reviewsCount: 2100,
    benefits: ["Hand Wash", "Eco-friendly Products", "Ceramic Coating", "Interior Steam Clean"],
    process: defaultProcess,
    faq: defaultFAQ,
    reviews: defaultReviews,
    packages: [
      { name: "Express", price: "Rs. 1,500", features: ["Exterior Wash", "Tire Shine", "Window Cleaning"], estimatedTime: "45 Mins", pickupDrop: false, warranty: "None" },
      { name: "Deep Detail", price: "Rs. 8,000", features: ["Express +", "Interior Vacuum", "Wax Application", "Leather Conditioning"], estimatedTime: "2-3 Hours", pickupDrop: true, warranty: "1 Month", isPopular: true },
    ],
    categories: [], addons: [], bookingTypes: defaultBookingTypes
  },
  {
    id: "s4",
    slug: "vehicle-rental",
    title: "Luxury Vehicle Rental",
    shortDescription: "Rent premium cars and bikes for your trips with flexible pricing.",
    longDescription: "Need a ride while yours is in the shop? Or planning a weekend getaway? Choose from our fleet of fully maintained luxury vehicles and sports bikes.",
    icon: "Key",
    imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80",
    startingPrice: "Rs. 15,000/day",
    estimatedDuration: "Flexible",
    rating: 4.9,
    reviewsCount: 530,
    benefits: ["Fully Insured", "Unlimited Mileage Options", "Latest Models", "Drop-off Service"],
    process: defaultProcess,
    faq: defaultFAQ,
    reviews: defaultReviews,
    packages: [
      { name: "Economy", price: "Rs. 15,000/day", features: ["Compact Car", "Basic Insurance", "200 Miles/day"], estimatedTime: "Instant", pickupDrop: true, warranty: "Included" },
      { name: "Luxury", price: "Rs. 45,000/day", features: ["Premium Sedan/SUV", "Full Coverage", "Unlimited Miles"], estimatedTime: "Instant", pickupDrop: true, warranty: "Included", isPopular: true },
    ],
    categories: [], addons: [], bookingTypes: defaultBookingTypes
  },
  {
    id: "s5",
    slug: "spare-parts",
    title: "Genuine Spare Parts",
    shortDescription: "Order verified OEM spare parts for all major vehicle brands.",
    longDescription: "We source and install only 100% genuine OEM parts. Every part comes with a manufacturer warranty and guaranteed compatibility with your vehicle.",
    icon: "Settings",
    imageUrl: "https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&q=80",
    startingPrice: "Varies",
    estimatedDuration: "Instant",
    rating: 4.6,
    reviewsCount: 3400,
    benefits: ["OEM Certified", "Warranty Included", "Nationwide Shipping", "Expert Installation Available"],
    process: defaultProcess,
    faq: defaultFAQ,
    reviews: defaultReviews,
    packages: [],
    categories: [], addons: [], bookingTypes: defaultBookingTypes
  },
  {
    id: "s6",
    slug: "ai-diagnosis",
    title: "AI Vehicle Diagnosis",
    shortDescription: "Upload a picture or plug in our OBD scanner for instant AI analysis.",
    longDescription: "Leverage the power of our proprietary AI engine. Upload a picture of a damaged part, or let our automated OBD-II scanners identify underlying mechanical issues in seconds.",
    icon: "Cpu",
    imageUrl: "https://images.unsplash.com/photo-1633493722141-56e7e163b821?auto=format&fit=crop&q=80",
    startingPrice: "Free",
    estimatedDuration: "2 Mins",
    rating: 5.0,
    reviewsCount: 8900,
    benefits: ["Instant Results", "99% Accuracy", "Cost Estimation", "Actionable Reports"],
    process: defaultProcess,
    faq: defaultFAQ,
    reviews: defaultReviews,
    packages: [
      { name: "Basic Scan", price: "Free", features: ["Visual Image Analysis", "Basic OBD Scan", "Error Code Output"], estimatedTime: "Instant", pickupDrop: false, warranty: "None" },
      { name: "Deep AI Scan", price: "Rs. 2,500", features: ["Basic +", "Predictive Failure Analysis", "Repair Cost Estimation"], estimatedTime: "2 Mins", pickupDrop: false, warranty: "Satisfaction Guarantee", isPopular: true },
    ],
    categories: [], addons: [], bookingTypes: defaultBookingTypes
  },
  {
    id: "s7",
    slug: "roadside-assistance",
    title: "Emergency Assistance",
    shortDescription: "24/7 towing, jump-starts, and emergency roadside repairs.",
    longDescription: "Stuck on the side of the road? Our emergency response team is available 24/7 to provide towing, flat tire changes, jump starts, and lockout services.",
    icon: "AlertTriangle",
    imageUrl: "https://images.unsplash.com/photo-1528646011707-160a340cfd80?auto=format&fit=crop&q=80",
    startingPrice: "Rs. 3,500",
    estimatedDuration: "< 30 Mins",
    rating: 4.8,
    reviewsCount: 4200,
    benefits: ["24/7 Availability", "GPS Tracking", "Flatbed Towing", "Rapid Response"],
    process: defaultProcess,
    faq: defaultFAQ,
    reviews: defaultReviews,
    packages: [
      { name: "Call-out Fee", price: "Rs. 3,500", features: ["Dispatch", "Jump Start / Lockout", "Minor Roadside Fix"], estimatedTime: "30 Mins", pickupDrop: false, warranty: "None" },
      { name: "Towing", price: "Rs. 8,000+", features: ["Flatbed Transport", "Up to 50 miles", "Secure Storage Dropoff"], estimatedTime: "1-2 Hours", pickupDrop: true, warranty: "Safe Transport Guarantee", isPopular: true },
    ],
    categories: [], addons: [], bookingTypes: defaultBookingTypes
  }
];

export const SERVICES_DATA = ALL_DETAILED_SERVICES;

export function getServiceBySlug(slug: string): DetailedServiceData | undefined {
  return ALL_DETAILED_SERVICES.find(s => s.slug === slug);
}
