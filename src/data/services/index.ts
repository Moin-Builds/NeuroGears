export type { DetailedServiceData, DetailedServiceData as ServiceData } from "./types";
import { 
  Wrench, Bike, Droplets, Key, Settings, Cpu, AlertTriangle, 
  Battery, CircleDashed, Filter, Wind, Octagon, Activity, 
  Paintbrush, Search, MessageSquare, type LucideIcon 
} from "lucide-react"

export const IconMap: Record<string, LucideIcon> = {
  Wrench,
  Bike,
  Droplets,
  Key,
  Settings,
  Cpu,
  AlertTriangle,
  Battery,
  CircleDashed,
  Filter,
  Wind,
  Octagon,
  Activity,
  Paintbrush,
  Search,
  MessageSquare
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
    imageUrl: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&q=80",
    startingPrice: "Rs. 5,000",
    estimatedDuration: "2-4 Hours",
    rating: 4.8,
    reviewsCount: 1240,
    benefits: ["Certified Mechanics", "AI Diagnostics", "Original OEM Parts", "6-Month Warranty"],
    process: defaultProcess,
    faq: defaultFAQ,
    reviews: defaultReviews,
    packages: [
      { name: "Basic", price: "Rs. 5,000", features: ["Oil Change", "Filter Replacement", "Basic Inspection"], estimatedTime: "1 Hour", pickupDrop: false, warranty: "30 Days" }
    ],
    bookingTypes: defaultBookingTypes,
    addons: [],
    categories: []
  },
  {
    id: "s2",
    slug: "bike-repair",
    title: "Bike Repair & Tuning",
    shortDescription: "Specialized service for superbikes, cruisers, and regular motorcycles.",
    longDescription: "Give your motorcycle the care it deserves. We handle everything from basic chain lubrication to complete engine overhauls for all makes and models.",
    icon: "Bike",
    imageUrl: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&q=80",
    startingPrice: "Rs. 2,000",
    estimatedDuration: "1-3 Hours",
    rating: 4.9,
    reviewsCount: 856,
    benefits: ["Superbike Specialists", "Performance Tuning", "Dyno Testing", "Quick Turnaround"],
    process: defaultProcess,
    faq: defaultFAQ,
    reviews: defaultReviews,
    packages: [
      { name: "Basic Service", price: "Rs. 2,000", features: ["Oil Change", "Chain Lube", "Wash"], estimatedTime: "1 Hour", pickupDrop: false, warranty: "15 Days" },
      { name: "Standard Tune-up", price: "Rs. 4,500", features: ["Basic + Filter Change", "Carburetor Cleaning", "Brake Adjustment"], estimatedTime: "2 Hours", pickupDrop: true, warranty: "1 Month" },
      { name: "Premium Overhaul", price: "Rs. 8,000", features: ["Standard + Engine Flush", "Electrical Check", "Performance Tuning"], estimatedTime: "4 Hours", pickupDrop: true, warranty: "3 Months" }
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
    imageUrl: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80",
    startingPrice: "Rs. 1,500",
    estimatedDuration: "45 Mins",
    rating: 4.7,
    reviewsCount: 2100,
    benefits: ["Hand Wash", "Eco-friendly Products", "Ceramic Coating", "Interior Steam Clean"],
    process: defaultProcess,
    faq: defaultFAQ,
    reviews: defaultReviews,
    packages: [
      { name: "Express Wash", price: "Rs. 1,500", features: ["Exterior Foam Wash", "Tire Dressing", "Glass Cleaning"], estimatedTime: "45 Mins", pickupDrop: false, warranty: "None" },
      { name: "Deep Polish", price: "Rs. 4,000", features: ["Express + Waxing", "Interior Vacuum", "Dashboard Polish"], estimatedTime: "2 Hours", pickupDrop: true, warranty: "None" },
      { name: "Ceramic Coating", price: "Rs. 15,000", features: ["Deep Polish + Paint Correction", "3-Layer Ceramic Coating", "Engine Bay Wash"], estimatedTime: "1 Day", pickupDrop: true, warranty: "1 Year" }
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
    imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    startingPrice: "Rs. 15,000/day",
    estimatedDuration: "Flexible",
    rating: 4.9,
    reviewsCount: 530,
    benefits: ["Fully Insured", "Unlimited Mileage Options", "Latest Models", "Drop-off Service"],
    process: defaultProcess,
    faq: defaultFAQ,
    reviews: defaultReviews,
    packages: [
      { name: "Standard Sedan", price: "Rs. 15,000/day", features: ["Civic/Corolla", "Basic Insurance", "100km Limit"], estimatedTime: "1 Day", pickupDrop: false, warranty: "None" },
      { name: "Luxury SUV", price: "Rs. 30,000/day", features: ["Fortuner/Prado", "Comprehensive Insurance", "200km Limit"], estimatedTime: "1 Day", pickupDrop: true, warranty: "None" },
      { name: "Sports Car", price: "Rs. 50,000/day", features: ["Porsche/Mustang", "Full Insurance", "Unlimited Mileage"], estimatedTime: "1 Day", pickupDrop: true, warranty: "None" }
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
    imageUrl: "https://images.unsplash.com/photo-1613214149922-f1809c99b414?w=800&q=80",
    startingPrice: "Varies",
    estimatedDuration: "Instant",
    rating: 4.6,
    reviewsCount: 3400,
    benefits: ["OEM Certified", "Warranty Included", "Nationwide Shipping", "Expert Installation Available"],
    process: defaultProcess,
    faq: defaultFAQ,
    reviews: defaultReviews,
    packages: [
      { name: "Standard Parts", price: "Varies", features: ["High-Quality Aftermarket", "Basic Warranty", "Installation Available"], estimatedTime: "Instant", pickupDrop: false, warranty: "3 Months" },
      { name: "OEM Certified", price: "Varies", features: ["100% Genuine OEM", "Manufacturer Warranty", "Guaranteed Fit"], estimatedTime: "Instant", pickupDrop: true, warranty: "1 Year" },
      { name: "Performance Upgrades", price: "Varies", features: ["Racing Specs", "Custom Tuning", "Dyno Tested"], estimatedTime: "1-3 Days", pickupDrop: true, warranty: "6 Months" }
    ],
    categories: [], addons: [], bookingTypes: defaultBookingTypes
  },
  {
    id: "s6",
    slug: "battery-replacement",
    title: "Battery Replacement",
    shortDescription: "High-performance battery replacement and electrical system check.",
    longDescription: "Get back on the road quickly with our premium battery replacement service. Includes full alternator and starter motor diagnostics.",
    icon: "Battery",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80",
    startingPrice: "Rs. 4,500",
    estimatedDuration: "30 Mins",
    rating: 4.8,
    reviewsCount: 1100,
    benefits: ["OEM Batteries", "Instant Jumpstart", "Voltage Testing", "1-Year Warranty"],
    process: defaultProcess,
    faq: defaultFAQ,
    reviews: defaultReviews,
    packages: [
      { name: "Standard Battery", price: "Rs. 4,500", features: ["Lead Acid", "Terminal Cleaning", "Installation"], estimatedTime: "30 Mins", pickupDrop: false, warranty: "6 Months" },
      { name: "Heavy Duty", price: "Rs. 8,000", features: ["High CCA", "Alternator Test", "Recycling Old Battery"], estimatedTime: "45 Mins", pickupDrop: true, warranty: "1 Year" },
      { name: "Maintenance-Free", price: "Rs. 12,000", features: ["AGM Technology", "Full Electrical Scan", "Premium Terminals"], estimatedTime: "1 Hour", pickupDrop: true, warranty: "2 Years" }
    ],
    categories: [], addons: [], bookingTypes: defaultBookingTypes
  },
  {
    id: "s7",
    slug: "tire-wheel-services",
    title: "Tire & Wheel Services",
    shortDescription: "Tire rotation, laser alignment, balancing, and new tire installation.",
    longDescription: "Maximize your tire life and ensure a smooth ride with our computerized wheel alignment and precision balancing services.",
    icon: "CircleDashed",
    imageUrl: "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?w=800&q=80",
    startingPrice: "Rs. 1,200",
    estimatedDuration: "1 Hour",
    rating: 4.7,
    reviewsCount: 1400,
    benefits: ["Laser Alignment", "Precision Balancing", "Nitrogen Inflation", "Tire Rotation"],
    process: defaultProcess,
    faq: defaultFAQ,
    reviews: defaultReviews,
    packages: [],
    categories: [], addons: [], bookingTypes: defaultBookingTypes
  },

  {
    id: "s10",
    slug: "brake-inspection",
    title: "Brake Inspection & Repair",
    shortDescription: "Brake pad replacement, disc skimming, and fluid flushes.",
    longDescription: "Ensure your safety with our comprehensive brake services. We offer high-quality ceramic pads and precise rotor resurfacing.",
    icon: "Octagon",
    imageUrl: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
    startingPrice: "Rs. 2,000",
    estimatedDuration: "1.5 Hours",
    rating: 4.9,
    reviewsCount: 1750,
    benefits: ["Ceramic Brake Pads", "Rotor Skimming", "Brake Fluid Flush", "Safety Inspection"],
    process: defaultProcess,
    faq: defaultFAQ,
    reviews: defaultReviews,
    packages: [
      { name: "Inspection", price: "Rs. 2,000", features: ["Visual Check", "Fluid Test", "Adjustment"], estimatedTime: "30 Mins", pickupDrop: false, warranty: "15 Days" },
      { name: "Pad Replacement", price: "Rs. 6,000", features: ["Ceramic Pads", "Rotor Skimming", "Bleeding"], estimatedTime: "2 Hours", pickupDrop: true, warranty: "6 Months" },
      { name: "Full Overhaul", price: "Rs. 18,000", features: ["New Calipers", "Performance Rotors", "High-Temp Fluid"], estimatedTime: "4 Hours", pickupDrop: true, warranty: "1 Year" }
    ],
    categories: [], addons: [], bookingTypes: defaultBookingTypes
  },
  {
    id: "s11",
    slug: "suspension-steering",
    title: "Suspension & Steering",
    shortDescription: "Shock absorbers, struts, and steering column repairs.",
    longDescription: "Restore your vehicle's factory ride quality with our expert suspension and steering repairs. Say goodbye to bumpy rides and handling issues.",
    icon: "Activity",
    imageUrl: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80",
    startingPrice: "Rs. 5,000",
    estimatedDuration: "3 Hours",
    rating: 4.7,
    reviewsCount: 890,
    benefits: ["OEM Struts", "Link Rod Replacement", "Power Steering Flush", "Ride Quality Check"],
    process: defaultProcess,
    faq: defaultFAQ,
    reviews: defaultReviews,
    packages: [
      { name: "Inspection", price: "Rs. 5,000", features: ["Suspension Check", "Steering Test", "Lubrication"], estimatedTime: "1 Hour", pickupDrop: false, warranty: "1 Month" },
      { name: "Shock Replacement", price: "Rs. 15,000", features: ["New OEM Shocks", "Mounts Replacement", "Alignment"], estimatedTime: "4 Hours", pickupDrop: true, warranty: "6 Months" },
      { name: "Full Overhaul", price: "Rs. 35,000", features: ["All Bushings", "Control Arms", "Complete Rebuild"], estimatedTime: "2 Days", pickupDrop: true, warranty: "1 Year" }
    ],
    categories: [], addons: [], bookingTypes: defaultBookingTypes
  },
  {
    id: "s12",
    slug: "denting-painting",
    title: "Denting & Painting",
    shortDescription: "Paintless dent removal and premium color-matched painting.",
    longDescription: "Erase scratches and dents with our advanced paint booth technology, offering 100% color matching and factory finish.",
    icon: "Paintbrush",
    imageUrl: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=800&q=80",
    startingPrice: "Rs. 3,500/panel",
    estimatedDuration: "2-3 Days",
    rating: 4.8,
    reviewsCount: 3100,
    benefits: ["Color Match Guarantee", "Premium Clear Coat", "Paintless Dent Repair", "Oven Baked Finish"],
    process: defaultProcess,
    faq: defaultFAQ,
    reviews: defaultReviews,
    packages: [
      { name: "Single Panel", price: "Rs. 3,500", features: ["Dent Removal", "Color Match Paint", "Clear Coat"], estimatedTime: "1 Day", pickupDrop: false, warranty: "6 Months" },
      { name: "Full Bumper", price: "Rs. 8,000", features: ["Bumper Repair", "Oven Baked Paint", "Polishing"], estimatedTime: "2 Days", pickupDrop: true, warranty: "1 Year" },
      { name: "Complete Car", price: "Rs. 60,000", features: ["Full Body Prep", "Premium Paint", "Ceramic Top Coat"], estimatedTime: "7 Days", pickupDrop: true, warranty: "3 Years" }
    ],
    categories: [], addons: [], bookingTypes: defaultBookingTypes
  },
  {
    id: "s13",
    slug: "vehicle-inspection",
    title: "Vehicle Inspection",
    shortDescription: "Pre-purchase inspections and 150-point health checks.",
    longDescription: "Buying a used car? Let our certified mechanics perform a rigorous 150-point inspection to ensure you are making a safe investment.",
    icon: "Search",
    imageUrl: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80",
    startingPrice: "Rs. 2,000",
    estimatedDuration: "1 Hour",
    rating: 4.9,
    reviewsCount: 1600,
    benefits: ["150-Point Check", "Computerized Scan", "Test Drive Report", "Market Value Estimate"],
    process: defaultProcess,
    faq: defaultFAQ,
    reviews: defaultReviews,
    packages: [
      { name: "Basic Check", price: "Rs. 2,000", features: ["Visual Inspection", "Fluid Levels", "Tire Check"], estimatedTime: "30 Mins", pickupDrop: false, warranty: "None" },
      { name: "Pre-Purchase", price: "Rs. 5,000", features: ["Test Drive", "OBD Scan", "Paint Thickness"], estimatedTime: "1 Hour", pickupDrop: false, warranty: "None" },
      { name: "150-Point Check", price: "Rs. 8,000", features: ["Complete Teardown", "Compression Test", "Detailed PDF Report"], estimatedTime: "3 Hours", pickupDrop: true, warranty: "None" }
    ],
    categories: [], addons: [], bookingTypes: defaultBookingTypes
  },
  {
    id: "s14",
    slug: "ai-diagnosis",
    title: "AI Vehicle Diagnosis",
    shortDescription: "Upload a vehicle image or connect an OBD scanner to receive instant AI-powered fault detection, maintenance suggestions, and repair recommendations.",
    longDescription: "Leverage the power of our proprietary AI engine. Upload a picture of a damaged part, or let our automated OBD-II scanners identify underlying mechanical issues in seconds.",
    icon: "Cpu",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
    startingPrice: "Free",
    estimatedDuration: "2 Mins",
    rating: 5.0,
    reviewsCount: 8900,
    benefits: ["Instant Results", "99% Accuracy", "Cost Estimation", "Actionable Reports"],
    process: defaultProcess,
    faq: defaultFAQ,
    reviews: defaultReviews,
    packages: [
      { name: "Basic Scan", price: "Free", features: ["Image Analysis", "Quick Estimate", "General Advice"], estimatedTime: "Instant", pickupDrop: false, warranty: "None" },
      { name: "Detailed Report", price: "Rs. 1,000", features: ["OBD Data Sync", "Part Numbers", "Labor Costs"], estimatedTime: "Instant", pickupDrop: false, warranty: "None" },
      { name: "Expert Consult", price: "Rs. 2,500", features: ["Detailed Report +", "Video Call with Mechanic", "Priority Booking"], estimatedTime: "15 Mins", pickupDrop: false, warranty: "None" }
    ],
    categories: [], addons: [], bookingTypes: defaultBookingTypes
  }
];

export const SERVICES_DATA = ALL_DETAILED_SERVICES;

export function getServiceBySlug(slug: string): DetailedServiceData | undefined {
  return ALL_DETAILED_SERVICES.find(s => s.slug === slug);
}

