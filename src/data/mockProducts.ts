export interface Product {
  id: string;
  title: string;
  vendor: string;
  location: string;
  rating: number;
  reviews: number;
  pricePerDay: number;
  pricePerWeek?: number;
  image: string;
  isAvailable: boolean;
  tags: string[];
  category: string;
  description: string;
}

export const mockProducts: Product[] = [
  {
    id: "1",
    title: "Canon EOS 5D Mark IV DSLR Camera with 24-70mm Lens",
    vendor: "ProLens Karachi",
    location: "Defence, Karachi",
    rating: 4.9,
    reviews: 127,
    pricePerDay: 3500,
    pricePerWeek: 20000,
    image: "/placeholder.svg",
    isAvailable: true,
    tags: ["Professional", "Full Frame", "Canon"],
    category: "cameras",
    description: "Professional DSLR camera perfect for weddings, events, and commercial photography."
  },
  {
    id: "2", 
    title: "Sony A7 III Mirrorless Camera with 28-70mm Kit Lens",
    vendor: "Digital Dreams",
    location: "Gulberg, Lahore",
    rating: 4.8,
    reviews: 93,
    pricePerDay: 4200,
    pricePerWeek: 24000,
    image: "/placeholder.svg",
    isAvailable: true,
    tags: ["Mirrorless", "4K Video", "Sony"],
    category: "cameras",
    description: "Versatile mirrorless camera with excellent low-light performance and 4K video recording."
  },
  {
    id: "3",
    title: "Nikon Z6 II Mirrorless Camera Body Only",
    vendor: "Focus Point",
    location: "F-7, Islamabad", 
    rating: 4.7,
    reviews: 85,
    pricePerDay: 3800,
    pricePerWeek: 22000,
    image: "/placeholder.svg",
    isAvailable: false,
    tags: ["Mirrorless", "Full Frame", "Nikon"],
    category: "cameras",
    description: "High-performance mirrorless camera with dual processors and excellent image stabilization."
  },
  {
    id: "4",
    title: "Canon RF 70-200mm f/2.8L IS USM Telephoto Lens",
    vendor: "Lens Masters",
    location: "DHA, Karachi",
    rating: 4.9,
    reviews: 67,
    pricePerDay: 2800,
    pricePerWeek: 16000,
    image: "/placeholder.svg",
    isAvailable: true,  
    tags: ["Telephoto", "Professional", "Canon RF"],
    category: "lenses",
    description: "Professional telephoto lens ideal for sports, wildlife, and portrait photography."
  },
  {
    id: "5",
    title: "Sony FX3 Full-Frame Cinema Camera",
    vendor: "CineGear Pro",
    location: "Model Town, Lahore",
    rating: 4.8,
    reviews: 42,
    pricePerDay: 8500,
    pricePerWeek: 48000,
    image: "/placeholder.svg", 
    isAvailable: true,
    tags: ["Cinema", "Professional", "Sony FX"],
    category: "cameras",
    description: "Professional cinema camera designed for filmmakers and content creators."
  },
  {
    id: "6",
    title: "Fujifilm X-T4 Mirrorless Camera with 18-55mm Lens",
    vendor: "Shutter Studio",
    location: "Blue Area, Islamabad",
    rating: 4.6,
    reviews: 58,
    pricePerDay: 3200,
    pricePerWeek: 18000,
    image: "/placeholder.svg",
    isAvailable: true,
    tags: ["Mirrorless", "IBIS", "Fujifilm"],
    category: "cameras", 
    description: "Versatile mirrorless camera with in-body stabilization and film simulation modes."
  }
];

export const categories = [
  { id: "cameras", name: "Cameras", count: 450 },
  { id: "lenses", name: "Lenses", count: 320 },
  { id: "lighting", name: "Lighting", count: 180 },
  { id: "audio", name: "Audio", count: 95 },
  { id: "accessories", name: "Accessories", count: 210 },
];

export const locations = [
  "Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad", 
  "Multan", "Peshawar", "Gujranwala", "Sialkot", "Hyderabad"
];