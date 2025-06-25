
export interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  image: string;
  rating: number;
  reviews: number;
  isNew: boolean;
  isSale: boolean;
  category: string;
  ageGroup: string;
  description: string;
  colors: string[];
  sizes: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Elegant Pink Gown",
    price: "₹2,999",
    originalPrice: "₹3,999",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=600&fit=crop",
    rating: 4.8,
    reviews: 124,
    isNew: true,
    isSale: true,
    category: "Gowns",
    ageGroup: "20-35 Years",
    description: "Beautiful pink gown perfect for special occasions",
    colors: ["Pink", "Rose Gold", "Coral"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 2,
    name: "Traditional Silk Saree",
    price: "₹5,499",
    originalPrice: "₹6,999",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=600&fit=crop",
    rating: 4.9,
    reviews: 89,
    isNew: false,
    isSale: true,
    category: "Sarees",
    ageGroup: "36-50 Years",
    description: "Exquisite silk saree with traditional patterns",
    colors: ["Maroon", "Gold", "Deep Red"],
    sizes: ["Free Size"]
  },
  {
    id: 3,
    name: "Casual Summer Dress",
    price: "₹1,299",
    originalPrice: "₹1,599",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=600&fit=crop",
    rating: 4.7,
    reviews: 156,
    isNew: true,
    isSale: false,
    category: "Dresses",
    ageGroup: "13-19 Years",
    description: "Comfortable and stylish summer dress",
    colors: ["Blue", "White", "Light Pink"],
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 4,
    name: "Designer Party Wear",
    price: "₹4,299",
    originalPrice: "₹5,299",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=600&fit=crop",
    rating: 4.6,
    reviews: 203,
    isNew: false,
    isSale: true,
    category: "Party Wear",
    ageGroup: "20-35 Years",
    description: "Stunning designer outfit for parties",
    colors: ["Black", "Navy", "Emerald"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 5,
    name: "Kids Ethnic Wear",
    price: "₹899",
    originalPrice: "₹1,199",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=600&fit=crop",
    rating: 4.5,
    reviews: 78,
    isNew: true,
    isSale: false,
    category: "Ethnic",
    ageGroup: "6-12 Years",
    description: "Beautiful ethnic wear for children",
    colors: ["Yellow", "Orange", "Red"],
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"]
  },
  {
    id: 6,
    name: "Formal Business Attire",
    price: "₹3,599",
    originalPrice: "₹4,299",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=600&fit=crop",
    rating: 4.7,
    reviews: 91,
    isNew: false,
    isSale: true,
    category: "Formal",
    ageGroup: "36-50 Years",
    description: "Professional formal wear for business",
    colors: ["Charcoal", "Navy", "Black"],
    sizes: ["S", "M", "L", "XL"]
  }
];

export const categories = [
  "All",
  "Gowns",
  "Sarees",
  "Dresses",
  "Party Wear",
  "Ethnic",
  "Formal"
];

export const ageGroups = [
  "All Ages",
  "1-5 Years",
  "6-12 Years", 
  "13-19 Years",
  "20-35 Years",
  "36-50 Years",
  "51+ Years"
];
