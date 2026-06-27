import type { DetailedServiceData } from "./types";

export const carRepairData: DetailedServiceData = {
  id: "s1",
  slug: "car-repair",
  title: "Premium Car Repair",
  shortDescription: "Complete engine diagnostics, mechanical repairs, and regular maintenance.",
  longDescription: "Our premium car repair service ensures your vehicle runs perfectly. We combine certified mechanical expertise with advanced AI diagnostic tools.",
  icon: "Wrench",
  imageUrl: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&q=80",
  rating: 4.8,
  reviewsCount: 1240,
  benefits: ["Certified Mechanics", "AI Diagnostics", "Original OEM Parts", "6-Month Warranty"],
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
  ],
  faq: [
    { question: "Do you use original parts?", answer: "Yes, we exclusively use OEM parts." },
    { question: "Is there a warranty?", answer: "All repair jobs come with a standard 6-month warranty on labor." }
  ],
  reviews: [
    { author: "Michael T.", rating: 5, date: "2 weeks ago", content: "Exceptional service! The team was highly professional." }
  ],
  process: [
    { step: 1, title: "Diagnosis", description: "We run a complete AI diagnostic scan." },
    { step: 2, title: "Repair", description: "Our certified experts perform the required fixes." },
    { step: 3, title: "Testing", description: "Rigorous road testing to ensure optimal performance." }
  ]
};
