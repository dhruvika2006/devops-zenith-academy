
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
    image: "https://images.unsplash.com/photo-1566479179817-c0e8bbc15f11?w=400&h=600&fit=crop",
    rating: 4.8,
    reviews: 124,
    isNew: true,
    isSale: true,
    category: "Gowns",
    ageGroup: "20-35 Years",
    description: "Beautiful pink gown perfect for special occasions and parties",
    colors: ["Pink", "Rose Gold", "Coral"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 2,
    name: "Traditional Silk Saree",
    price: "₹5,499",
    originalPrice: "₹6,999",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=600&fit=crop",
    rating: 4.9,
    reviews: 89,
    isNew: false,
    isSale: true,
    category: "Sarees",
    ageGroup: "36-50 Years",
    description: "Exquisite silk saree with traditional patterns and gold work",
    colors: ["Maroon", "Gold", "Deep Red"],
    sizes: ["Free Size"]
  },
  {
    id: 3,
    name: "Casual Summer Dress",
    price: "₹1,299",
    originalPrice: "₹1,599",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=600&fit=crop",
    rating: 4.7,
    reviews: 156,
    isNew: true,
    isSale: false,
    category: "Dresses",
    ageGroup: "13-19 Years",
    description: "Comfortable and stylish summer dress for casual outings",
    colors: ["Blue", "White", "Light Pink"],
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 4,
    name: "Designer Party Wear",
    price: "₹4,299",
    originalPrice: "₹5,299",
    image: "https://images.unsplash.com/photo-1582142306909-195724d40aa8?w=400&h=600&fit=crop",
    rating: 4.6,
    reviews: 203,
    isNew: false,
    isSale: true,
    category: "Party Wear",
    ageGroup: "20-35 Years",
    description: "Stunning designer outfit perfect for cocktail parties",
    colors: ["Black", "Navy", "Emerald"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 5,
    name: "Kids Ethnic Wear",
    price: "₹899",
    originalPrice: "₹1,199",
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&h=600&fit=crop",
    rating: 4.5,
    reviews: 78,
    isNew: true,
    isSale: false,
    category: "Ethnic",
    ageGroup: "6-12 Years",
    description: "Beautiful ethnic wear for children with traditional embroidery",
    colors: ["Yellow", "Orange", "Red"],
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"]
  },
  {
    id: 6,
    name: "Formal Business Attire",
    price: "₹3,599",
    originalPrice: "₹4,299",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
    rating: 4.7,
    reviews: 91,
    isNew: false,
    isSale: true,
    category: "Formal",
    ageGroup: "36-50 Years",
    description: "Professional formal wear perfect for business meetings",
    colors: ["Charcoal", "Navy", "Black"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 7,
    name: "Bohemian Maxi Dress",
    price: "₹2,199",
    originalPrice: "₹2,799",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop",
    rating: 4.6,
    reviews: 145,
    isNew: true,
    isSale: true,
    category: "Dresses",
    ageGroup: "20-35 Years",
    description: "Flowing bohemian maxi dress with floral patterns",
    colors: ["Floral Print", "Paisley", "Abstract"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 8,
    name: "Vintage Cocktail Dress",
    price: "₹3,799",
    originalPrice: "₹4,499",
    image: "https://images.unsplash.com/photo-1566479179817-c0e8bbc15f11?w=400&h=600&fit=crop",
    rating: 4.8,
    reviews: 167,
    isNew: false,
    isSale: true,
    category: "Party Wear",
    ageGroup: "20-35 Years",
    description: "Vintage-inspired cocktail dress with lace details",
    colors: ["Burgundy", "Forest Green", "Midnight Blue"],
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 9,
    name: "Contemporary Kurti Set",
    price: "₹1,899",
    originalPrice: "₹2,399",
    image: "https://images.unsplash.com/photo-1564342460-c8e0a6b8fede?w=400&h=600&fit=crop",
    rating: 4.5,
    reviews: 112,
    isNew: true,
    isSale: false,
    category: "Ethnic",
    ageGroup: "20-35 Years",
    description: "Modern kurti set with palazzo pants and dupatta",
    colors: ["Mint Green", "Peach", "Lavender"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 10,
    name: "Floral Wrap Dress",
    price: "₹1,699",
    originalPrice: "₹2,199",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=600&fit=crop",
    rating: 4.7,
    reviews: 198,
    isNew: false,
    isSale: true,
    category: "Dresses",
    ageGroup: "13-19 Years",
    description: "Charming floral wrap dress perfect for brunch dates",
    colors: ["Rose Print", "Daisy Print", "Tropical Print"],
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 11,
    name: "Sequined Evening Gown",
    price: "₹6,999",
    originalPrice: "₹8,999",
    image: "https://images.unsplash.com/photo-1582142306909-195724d40aa8?w=400&h=600&fit=crop",
    rating: 4.9,
    reviews: 87,
    isNew: true,
    isSale: true,
    category: "Gowns",
    ageGroup: "20-35 Years",
    description: "Glamorous sequined evening gown for special events",
    colors: ["Gold", "Silver", "Rose Gold"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 12,
    name: "Casual Denim Dress",
    price: "₹1,499",
    originalPrice: "₹1,899",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop",
    rating: 4.4,
    reviews: 134,
    isNew: false,
    isSale: true,
    category: "Dresses",
    ageGroup: "13-19 Years",
    description: "Trendy denim dress with button-front design",
    colors: ["Light Blue", "Dark Blue", "Black Denim"],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 13,
    name: "Chiffon Anarkali Suit",
    price: "₹3,299",
    originalPrice: "₹4,199",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=600&fit=crop",
    rating: 4.8,
    reviews: 156,
    isNew: true,
    isSale: false,
    category: "Ethnic",
    ageGroup: "36-50 Years",
    description: "Elegant chiffon Anarkali suit with embroidered work",
    colors: ["Royal Blue", "Emerald", "Magenta"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 14,
    name: "Off-Shoulder Party Dress",
    price: "₹2,799",
    originalPrice: "₹3,499",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
    rating: 4.6,
    reviews: 201,
    isNew: false,
    isSale: true,
    category: "Party Wear",
    ageGroup: "20-35 Years",
    description: "Trendy off-shoulder party dress with ruffle details",
    colors: ["Coral", "Dusty Rose", "Champagne"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 15,
    name: "Professional Blazer Dress",
    price: "₹4,199",
    originalPrice: "₹5,199",
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&h=600&fit=crop",
    rating: 4.7,
    reviews: 93,
    isNew: true,
    isSale: true,
    category: "Formal",
    ageGroup: "36-50 Years",
    description: "Sophisticated blazer dress for professional settings",
    colors: ["Charcoal Grey", "Navy Blue", "Burgundy"],
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
