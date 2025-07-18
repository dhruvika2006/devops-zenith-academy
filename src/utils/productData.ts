export interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  image: string;
  colorImages?: { [key: string]: string }; // Color-specific images
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
  // 1-5 Years Category
  {
    id: 1,
    name: "Cute Baby Pink Frock",
    price: "₹599",
    originalPrice: "₹799",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=400&h=600&fit=crop",
    colorImages: {
      "Pink": "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=400&h=600&fit=crop",
      "Peach": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
      "Lavender": "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=400&h=600&fit=crop"
    },
    rating: 4.7,
    reviews: 85,
    isNew: true,
    isSale: true,
    category: "Dresses",
    ageGroup: "1-5 Years",
    description: "Adorable pink frock with butterfly patterns, perfect for little princesses. Made with soft cotton fabric for comfort.",
    colors: ["Pink", "Peach", "Lavender"],
    sizes: ["12M", "18M", "2Y", "3Y", "4Y", "5Y"]
  },
  {
    id: 2,
    name: "Toddler Party Dress",
    price: "₹749",
    originalPrice: "₹999",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop",
    colorImages: {
      "Gold": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop",
      "Silver": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
      "Rose Pink": "https://images.unsplash.com/photo-1566479179817-c0e8bbc15f11?w=400&h=600&fit=crop"
    },
    rating: 4.8,
    reviews: 67,
    isNew: false,
    isSale: true,
    category: "Party Wear",
    ageGroup: "1-5 Years",
    description: "Sparkly party dress with sequin details perfect for special occasions and birthday parties.",
    colors: ["Gold", "Silver", "Rose Pink"],
    sizes: ["12M", "18M", "2Y", "3Y", "4Y", "5Y"]
  },
  {
    id: 3,
    name: "Baby Ethnic Lehenga",
    price: "₹899",
    originalPrice: "₹1,199",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=600&fit=crop",
    colorImages: {
      "Red": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=600&fit=crop",
      "Yellow": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
      "Orange": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=600&fit=crop",
      "Pink": "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=400&h=600&fit=crop"
    },
    rating: 4.9,
    reviews: 92,
    isNew: true,
    isSale: false,
    category: "Ethnic",
    ageGroup: "1-5 Years",
    description: "Traditional lehenga set with embroidered choli and dupatta, perfect for festivals and weddings.",
    colors: ["Red", "Yellow", "Orange", "Pink"],
    sizes: ["12M", "18M", "2Y", "3Y", "4Y", "5Y"]
  },
  {
    id: 4,
    name: "Toddler Casual Romper",
    price: "₹449",
    originalPrice: "₹599",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=600&fit=crop",
    colorImages: {
      "Blue": "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=600&fit=crop",
      "Pink": "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=400&h=600&fit=crop",
      "Green": "https://images.unsplash.com/photo-1564342460-c8e0a6b8fede?w=400&h=600&fit=crop",
      "Yellow": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop"
    },
    rating: 4.5,
    reviews: 134,
    isNew: false,
    isSale: true,
    category: "Dresses",
    ageGroup: "1-5 Years",
    description: "Comfortable cotton romper with cute prints, perfect for everyday wear and playtime.",
    colors: ["Blue", "Pink", "Green", "Yellow"],
    sizes: ["12M", "18M", "2Y", "3Y", "4Y", "5Y"]
  },

  // 6-12 Years Category
  {
    id: 5,
    name: "Kids Elegant Princess Gown",
    price: "₹1,299",
    originalPrice: "₹1,699",
    image: "https://images.unsplash.com/photo-1566479179817-c0e8bbc15f11?w=400&h=600&fit=crop",
    colorImages: {
      "Pink": "https://images.unsplash.com/photo-1566479179817-c0e8bbc15f11?w=400&h=600&fit=crop",
      "Purple": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop",
      "Blue": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
      "White": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=600&fit=crop"
    },
    rating: 4.8,
    reviews: 156,
    isNew: true,
    isSale: true,
    category: "Gowns",
    ageGroup: "6-12 Years",
    description: "Beautiful princess gown with layered tulle skirt and embellishments, perfect for formal events.",
    colors: ["Pink", "Purple", "Blue", "White"],
    sizes: ["6Y", "7Y", "8Y", "9Y", "10Y", "11Y", "12Y"]
  },
  {
    id: 6,
    name: "Kids Ethnic Anarkali",
    price: "₹999",
    originalPrice: "₹1,299",
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&h=600&fit=crop",
    colorImages: {
      "Maroon": "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&h=600&fit=crop",
      "Royal Blue": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
      "Green": "https://images.unsplash.com/photo-1564342460-c8e0a6b8fede?w=400&h=600&fit=crop",
      "Orange": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop"
    },
    rating: 4.7,
    reviews: 89,
    isNew: false,
    isSale: true,
    category: "Ethnic",
    ageGroup: "6-12 Years",
    description: "Traditional Anarkali suit with matching dupatta and churidar, ideal for festive occasions.",
    colors: ["Maroon", "Royal Blue", "Green", "Orange"],
    sizes: ["6Y", "7Y", "8Y", "9Y", "10Y", "11Y", "12Y"]
  },
  {
    id: 7,
    name: "School Function Dress",
    price: "₹799",
    originalPrice: "₹1,099",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=600&fit=crop",
    colorImages: {
      "Navy": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=600&fit=crop",
      "Maroon": "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&h=600&fit=crop",
      "Black": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
      "Grey": "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=600&fit=crop"
    },
    rating: 4.6,
    reviews: 112,
    isNew: true,
    isSale: false,
    category: "Formal",
    ageGroup: "6-12 Years",
    description: "Smart casual dress with collar and belt, perfect for school events and formal functions.",
    colors: ["Navy", "Maroon", "Black", "Grey"],
    sizes: ["6Y", "7Y", "8Y", "9Y", "10Y", "11Y", "12Y"]
  },
  {
    id: 8,
    name: "Kids Party Cocktail Dress",
    price: "₹1,199",
    originalPrice: "₹1,499",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop",
    colorImages: {
      "Gold": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop",
      "Silver": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
      "Rose Gold": "https://images.unsplash.com/photo-1566479179817-c0e8bbc15f11?w=400&h=600&fit=crop",
      "Copper": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop"
    },
    rating: 4.8,
    reviews: 73,
    isNew: false,
    isSale: true,
    category: "Party Wear",
    ageGroup: "6-12 Years",
    description: "Stylish cocktail dress with sequin details and fit-and-flare silhouette for parties.",
    colors: ["Gold", "Silver", "Rose Gold", "Copper"],
    sizes: ["6Y", "7Y", "8Y", "9Y", "10Y", "11Y", "12Y"]
  },

  // 13-19 Years Category  
  {
    id: 9,
    name: "Teen Casual Summer Dress",
    price: "₹1,299",
    originalPrice: "₹1,599",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
    colorImages: {
      "Blue": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
      "White": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=600&fit=crop",
      "Light Pink": "https://images.unsplash.com/photo-1566479179817-c0e8bbc15f11?w=400&h=600&fit=crop",
      "Mint": "https://images.unsplash.com/photo-1564342460-c8e0a6b8fede?w=400&h=600&fit=crop"
    },
    rating: 4.7,
    reviews: 156,
    isNew: true,
    isSale: false,
    category: "Dresses",
    ageGroup: "13-19 Years",
    description: "Trendy summer dress with floral prints and comfortable fit, perfect for casual outings.",
    colors: ["Blue", "White", "Light Pink", "Mint"],
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 10,
    name: "Teen Party Dress",
    price: "₹1,799",
    originalPrice: "₹2,299",
    image: "https://images.unsplash.com/photo-1582142306909-195724d40aa8?w=400&h=600&fit=crop",
    colorImages: {
      "Black": "https://images.unsplash.com/photo-1582142306909-195724d40aa8?w=400&h=600&fit=crop",
      "Navy": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
      "Emerald": "https://images.unsplash.com/photo-1564342460-c8e0a6b8fede?w=400&h=600&fit=crop",
      "Burgundy": "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&h=600&fit=crop"
    },
    rating: 4.6,
    reviews: 203,
    isNew: false,
    isSale: true,
    category: "Party Wear",
    ageGroup: "13-19 Years",
    description: "Chic party dress with modern cut and elegant design, perfect for teenage celebrations.",
    colors: ["Black", "Navy", "Emerald", "Burgundy"],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 11,
    name: "Teen Denim Dress",
    price: "₹1,099",
    originalPrice: "₹1,399",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=600&fit=crop",
    colorImages: {
      "Light Blue": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=600&fit=crop",
      "Dark Blue": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
      "Black Denim": "https://images.unsplash.com/photo-1582142306909-195724d40aa8?w=400&h=600&fit=crop"
    },
    rating: 4.5,
    reviews: 134,
    isNew: true,
    isSale: true,
    category: "Dresses",
    ageGroup: "13-19 Years",
    description: "Stylish denim dress with modern cut and button details, perfect for casual wear.",
    colors: ["Light Blue", "Dark Blue", "Black Denim"],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 12,
    name: "Teen Ethnic Kurta Set",
    price: "₹1,499",
    originalPrice: "₹1,899",
    image: "https://images.unsplash.com/photo-1564342460-c8e0a6b8fede?w=400&h=600&fit=crop",
    colorImages: {
      "Mint Green": "https://images.unsplash.com/photo-1564342460-c8e0a6b8fede?w=400&h=600&fit=crop",
      "Peach": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
      "Lavender": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop",
      "Coral": "https://images.unsplash.com/photo-1566479179817-c0e8bbc15f11?w=400&h=600&fit=crop"
    },
    rating: 4.8,
    reviews: 98,
    isNew: false,
    isSale: false,
    category: "Ethnic",
    ageGroup: "13-19 Years",
    description: "Contemporary kurta set with palazzo pants and dupatta, perfect for ethnic occasions.",
    colors: ["Mint Green", "Peach", "Lavender", "Coral"],
    sizes: ["XS", "S", "M", "L"]
  },

  // 20-35 Years Category
  {
    id: 13,
    name: "Elegant Pink Gown",
    price: "₹2,999",
    originalPrice: "₹3,999",
    image: "https://images.unsplash.com/photo-1566479179817-c0e8bbc15f11?w=400&h=600&fit=crop",
    colorImages: {
      "Pink": "https://images.unsplash.com/photo-1566479179817-c0e8bbc15f11?w=400&h=600&fit=crop",
      "Rose Gold": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop",
      "Coral": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop"
    },
    rating: 4.8,
    reviews: 124,
    isNew: true,
    isSale: true,
    category: "Gowns",
    ageGroup: "20-35 Years",
    description: "Beautiful pink gown with flowing fabric and elegant design, perfect for special occasions and parties.",
    colors: ["Pink", "Rose Gold", "Coral"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 14,
    name: "Designer Party Wear",
    price: "₹4,299",
    originalPrice: "₹5,299",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop",
    colorImages: {
      "Black": "https://images.unsplash.com/photo-1582142306909-195724d40aa8?w=400&h=600&fit=crop",
      "Navy": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
      "Emerald": "https://images.unsplash.com/photo-1564342460-c8e0a6b8fede?w=400&h=600&fit=crop"
    },
    rating: 4.6,
    reviews: 203,
    isNew: false,
    isSale: true,
    category: "Party Wear",
    ageGroup: "20-35 Years",
    description: "Stunning designer outfit with intricate detailing, perfect for cocktail parties and events.",
    colors: ["Black", "Navy", "Emerald"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 15,
    name: "Bohemian Maxi Dress",
    price: "₹2,199",
    originalPrice: "₹2,799",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=600&fit=crop",
    colorImages: {
      "Floral Print": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=600&fit=crop",
      "Paisley": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=600&fit=crop",
      "Abstract": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop"
    },
    rating: 4.6,
    reviews: 145,
    isNew: true,
    isSale: true,
    category: "Dresses",
    ageGroup: "20-35 Years",
    description: "Flowing bohemian maxi dress with beautiful patterns and comfortable fit for casual elegance.",
    colors: ["Floral Print", "Paisley", "Abstract"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 16,
    name: "Contemporary Kurti Set",
    price: "₹1,899",
    originalPrice: "₹2,399",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=600&fit=crop",
    colorImages: {
      "Mint Green": "https://images.unsplash.com/photo-1564342460-c8e0a6b8fede?w=400&h=600&fit=crop",
      "Peach": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
      "Lavender": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop"
    },
    rating: 4.5,
    reviews: 112,
    isNew: true,
    isSale: false,
    category: "Ethnic",
    ageGroup: "20-35 Years",
    description: "Modern kurti set with palazzo pants and dupatta, combining traditional and contemporary styles.",
    colors: ["Mint Green", "Peach", "Lavender"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 17,
    name: "Sequined Evening Gown",
    price: "₹6,999",
    originalPrice: "₹8,999",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
    colorImages: {
      "Gold": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop",
      "Silver": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
      "Rose Gold": "https://images.unsplash.com/photo-1566479179817-c0e8bbc15f11?w=400&h=600&fit=crop"
    },
    rating: 4.9,
    reviews: 87,
    isNew: true,
    isSale: true,
    category: "Gowns",
    ageGroup: "20-35 Years",
    description: "Glamorous sequined evening gown with fitted bodice and flowing skirt for special events.",
    colors: ["Gold", "Silver", "Rose Gold"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 18,
    name: "Off-Shoulder Party Dress",
    price: "₹2,799",
    originalPrice: "₹3,499",
    image: "https://images.unsplash.com/photo-1566479179817-c0e8bbc15f11?w=400&h=600&fit=crop",
    colorImages: {
      "Coral": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
      "Dusty Rose": "https://images.unsplash.com/photo-1566479179817-c0e8bbc15f11?w=400&h=600&fit=crop",
      "Champagne": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop"
    },
    rating: 4.6,
    reviews: 201,
    isNew: false,
    isSale: true,
    category: "Party Wear",
    ageGroup: "20-35 Years",
    description: "Trendy off-shoulder party dress with ruffle details and flattering silhouette.",
    colors: ["Coral", "Dusty Rose", "Champagne"],
    sizes: ["S", "M", "L", "XL"]
  },

  // 36-50 Years Category
  {
    id: 19,
    name: "Traditional Silk Saree",
    price: "₹5,499",
    originalPrice: "₹6,999",
    image: "https://images.unsplash.com/photo-1564342460-c8e0a6b8fede?w=400&h=600&fit=crop",
    colorImages: {
      "Maroon": "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&h=600&fit=crop",
      "Gold": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop",
      "Deep Red": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=600&fit=crop"
    },
    rating: 4.9,
    reviews: 89,
    isNew: false,
    isSale: true,
    category: "Sarees",
    ageGroup: "36-50 Years",
    description: "Exquisite silk saree with traditional patterns and gold work, perfect for weddings and festivals.",
    colors: ["Maroon", "Gold", "Deep Red"],
    sizes: ["Free Size"]
  },
  {
    id: 20,
    name: "Formal Business Attire",
    price: "₹3,599",
    originalPrice: "₹4,299",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop",
    colorImages: {
      "Charcoal": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=600&fit=crop",
      "Navy": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
      "Black": "https://images.unsplash.com/photo-1582142306909-195724d40aa8?w=400&h=600&fit=crop"
    },
    rating: 4.7,
    reviews: 91,
    isNew: false,
    isSale: true,
    category: "Formal",
    ageGroup: "36-50 Years",
    description: "Professional formal wear with tailored fit, perfect for business meetings and corporate events.",
    colors: ["Charcoal", "Navy", "Black"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 21,
    name: "Chiffon Anarkali Suit",
    price: "₹3,299",
    originalPrice: "₹4,199",
    image: "https://images.unsplash.com/photo-1582142306909-195724d40aa8?w=400&h=600&fit=crop",
    colorImages: {
      "Royal Blue": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
      "Emerald": "https://images.unsplash.com/photo-1564342460-c8e0a6b8fede?w=400&h=600&fit=crop",
      "Magenta": "https://images.unsplash.com/photo-1566479179817-c0e8bbc15f11?w=400&h=600&fit=crop"
    },
    rating: 4.8,
    reviews: 156,
    isNew: true,
    isSale: false,
    category: "Ethnic",
    ageGroup: "36-50 Years",
    description: "Elegant chiffon Anarkali suit with embroidered work and flowing silhouette.",
    colors: ["Royal Blue", "Emerald", "Magenta"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 22,
    name: "Professional Blazer Dress",
    price: "₹4,199",
    originalPrice: "₹5,199",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
    colorImages: {
      "Charcoal Grey": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=600&fit=crop",
      "Navy Blue": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
      "Burgundy": "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&h=600&fit=crop"
    },
    rating: 4.7,
    reviews: 93,
    isNew: true,
    isSale: true,
    category: "Formal",
    ageGroup: "36-50 Years",
    description: "Sophisticated blazer dress with structured design for professional settings.",
    colors: ["Charcoal Grey", "Navy Blue", "Burgundy"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 23,
    name: "Designer Cocktail Saree",
    price: "₹7,299",
    originalPrice: "₹8,999",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=600&fit=crop",
    colorImages: {
      "Wine": "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&h=600&fit=crop",
      "Teal": "https://images.unsplash.com/photo-1564342460-c8e0a6b8fede?w=400&h=600&fit=crop",
      "Plum": "https://images.unsplash.com/photo-1566479179817-c0e8bbc15f11?w=400&h=600&fit=crop"
    },
    rating: 4.8,
    reviews: 67,
    isNew: false,
    isSale: true,
    category: "Sarees",
    ageGroup: "36-50 Years",
    description: "Designer cocktail saree with contemporary draping and modern embellishments.",
    colors: ["Wine", "Teal", "Plum"],
    sizes: ["Free Size"]
  },

  // 51+ Years Category
  {
    id: 24,
    name: "Classic Elegant Saree",
    price: "₹4,299",
    originalPrice: "₹5,599",
    image: "https://images.unsplash.com/photo-1564342460-c8e0a6b8fede?w=400&h=600&fit=crop",
    colorImages: {
      "Deep Maroon": "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&h=600&fit=crop",
      "Royal Blue": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
      "Forest Green": "https://images.unsplash.com/photo-1564342460-c8e0a6b8fede?w=400&h=600&fit=crop"
    },
    rating: 4.9,
    reviews: 145,
    isNew: false,
    isSale: true,
    category: "Sarees",
    ageGroup: "51+ Years",
    description: "Timeless elegant saree with classic patterns and rich fabric, perfect for formal occasions.",
    colors: ["Deep Maroon", "Royal Blue", "Forest Green"],
    sizes: ["Free Size"]
  },
  {
    id: 25,
    name: "Comfort Formal Dress",
    price: "₹2,799",
    originalPrice: "₹3,499",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop",
    colorImages: {
      "Navy": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
      "Black": "https://images.unsplash.com/photo-1582142306909-195724d40aa8?w=400&h=600&fit=crop",
      "Deep Purple": "https://images.unsplash.com/photo-1566479179817-c0e8bbc15f11?w=400&h=600&fit=crop"
    },
    rating: 4.6,
    reviews: 87,
    isNew: true,
    isSale: false,
    category: "Formal",
    ageGroup: "51+ Years",
    description: "Comfortable formal dress with elegant styling and relaxed fit for all-day comfort.",
    colors: ["Navy", "Black", "Deep Purple"],
    sizes: ["M", "L", "XL", "XXL"]
  },
  {
    id: 26,
    name: "Traditional Cotton Kurti",
    price: "₹1,299",
    originalPrice: "₹1,699",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=600&fit=crop",
    colorImages: {
      "Beige": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=600&fit=crop",
      "Cream": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop",
      "Light Blue": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
      "Soft Pink": "https://images.unsplash.com/photo-1566479179817-c0e8bbc15f11?w=400&h=600&fit=crop"
    },
    rating: 4.7,
    reviews: 234,
    isNew: false,
    isSale: true,
    category: "Ethnic",
    ageGroup: "51+ Years",
    description: "Comfortable cotton kurti with traditional prints and breathable fabric for daily wear.",
    colors: ["Beige", "Cream", "Light Blue", "Soft Pink"],
    sizes: ["M", "L", "XL", "XXL"]
  },
  {
    id: 27,
    name: "Graceful Party Wear",
    price: "₹3,799",
    originalPrice: "₹4,599",
    image: "https://images.unsplash.com/photo-1582142306909-195724d40aa8?w=400&h=600&fit=crop",
    colorImages: {
      "Wine": "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&h=600&fit=crop",
      "Navy": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
      "Deep Green": "https://images.unsplash.com/photo-1564342460-c8e0a6b8fede?w=400&h=600&fit=crop"
    },
    rating: 4.8,
    reviews: 76,
    isNew: true,
    isSale: true,
    category: "Party Wear",
    ageGroup: "51+ Years",
    description: "Graceful party wear with sophisticated design and comfortable fit for special occasions.",
    colors: ["Wine", "Navy", "Deep Green"],
    sizes: ["M", "L", "XL", "XXL"]
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
