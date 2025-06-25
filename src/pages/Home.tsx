
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingBag, Search, Star, User } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/utils/productData";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";

interface HomeProps {
  language: string;
}

const Home = ({ language }: HomeProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { addToWishlist, removeFromWishlist, isInWishlist, wishlistCount } = useWishlist();
  const { addToCart, cartCount } = useCart();

  const translations = {
    english: {
      title: "Dhruvii's Fashion",
      subtitle: "Premium Fashion for Every Age",
      searchPlaceholder: "Search for dresses, sarees, gowns...",
      ageCategories: "Shop by Age Categories",
      featuredCollection: "Featured Collection",
      newArrivals: "New Arrivals",
      viewAll: "View All",
      addToWishlist: "Add to Wishlist",
      addToCart: "Add to Cart",
      trending: "Trending",
      sale: "Sale"
    },
    hindi: {
      title: "ध्रुवी फैशन",
      subtitle: "हर उम्र के लिए प्रीमियम फैशन",
      searchPlaceholder: "ड्रेसेस, साड़ियां, गाउन खोजें...",
      ageCategories: "आयु श्रेणी के अनुसार खरीदारी करें",
      featuredCollection: "फीचर्ड कलेक्शन",
      newArrivals: "नए आगमन",
      viewAll: "सभी देखें",
      addToWishlist: "पसंदीदा में जोड़ें",
      addToCart: "कार्ट में जोड़ें",
      trending: "ट्रेंडिंग",
      sale: "सेल"
    },
    marathi: {
      title: "ध्रुवीचे फॅशन",
      subtitle: "प्रत्येक वयासाठी प्रीमियम फॅशन",
      searchPlaceholder: "ड्रेसेस, साड्या, गाऊन शोधा...",
      ageCategories: "वय श्रेणीनुसार खरेदी करा",
      featuredCollection: "फीचर्ड कलेक्शन",
      newArrivals: "नवीन आगमन",
      viewAll: "सर्व पहा",
      addToWishlist: "आवडत्यांमध्ये जोडा",
      addToCart: "कार्टमध्ये जोडा",
      trending: "ट्रेंडिंग",
      sale: "सेल"
    }
  };

  const t = translations[language as keyof typeof translations] || translations.english;

  const ageCategories = [
    { range: "1-5 Years", image: "👶", color: "bg-pink-100 text-pink-600" },
    { range: "6-12 Years", image: "🧒", color: "bg-purple-100 text-purple-600" },
    { range: "13-19 Years", image: "👧", color: "bg-blue-100 text-blue-600" },
    { range: "20-35 Years", image: "👩", color: "bg-green-100 text-green-600" },
    { range: "36-50 Years", image: "👩‍💼", color: "bg-yellow-100 text-yellow-600" },
    { range: "51+ Years", image: "👵", color: "bg-red-100 text-red-600" }
  ];

  const featuredProducts = products.slice(0, 3);

  const handleWishlistToggle = (product: any) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (product: any) => {
    addToCart(product, product.sizes[0], product.colors[0]);
  };

  return (
    <div className="min-h-screen bg-fashion-gradient">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-3xl">👗</div>
              <div>
                <h1 className="text-2xl font-playfair font-bold text-pink-600">{t.title}</h1>
                <p className="text-sm text-gray-600 font-montserrat">{t.subtitle}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link to="/wishlist">
                <Button variant="ghost" size="icon" className="text-pink-600 hover:bg-pink-50 relative">
                  <Heart className="h-5 w-5" />
                  {wishlistCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center p-0">
                      {wishlistCount}
                    </Badge>
                  )}
                </Button>
              </Link>
              <Link to="/cart">
                <Button variant="ghost" size="icon" className="text-pink-600 hover:bg-pink-50 relative">
                  <ShoppingBag className="h-5 w-5" />
                  {cartCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center p-0">
                      {cartCount}
                    </Badge>
                  )}
                </Button>
              </Link>
              <Link to="/profile">
                <Button variant="ghost" size="icon" className="text-pink-600 hover:bg-pink-50">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="mt-4 relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 bg-white/80 backdrop-blur-sm font-montserrat"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Age Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-playfair font-semibold text-gray-800 mb-6">{t.ageCategories}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {ageCategories.map((category, index) => (
              <Link key={index} to="/shop">
                <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer bg-card-gradient border-0">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{category.image}</div>
                    <Badge className={`${category.color} font-montserrat`}>
                      {category.range}
                    </Badge>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Collection */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-playfair font-semibold text-gray-800">{t.featuredCollection}</h2>
            <Link to="/shop">
              <Button variant="outline" className="font-montserrat text-pink-600 border-pink-300 hover:bg-pink-50">
                {t.viewAll}
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white border-0 group">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.isNew && (
                      <Badge className="bg-green-500 text-white font-montserrat">NEW</Badge>
                    )}
                    {product.isSale && (
                      <Badge className="bg-red-500 text-white font-montserrat">{t.sale}</Badge>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleWishlistToggle(product)}
                    className={`absolute top-3 right-3 hover:bg-white/80 ${
                      isInWishlist(product.id) 
                        ? "text-pink-500" 
                        : "text-white hover:text-pink-500"
                    }`}
                  >
                    <Heart className={`h-5 w-5 ${isInWishlist(product.id) ? "fill-current" : ""}`} />
                  </Button>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-montserrat font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600 font-montserrat">{product.rating} ({product.reviews})</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-semibold text-pink-600 font-montserrat">{product.price}</span>
                      <span className="text-sm text-gray-500 line-through font-montserrat">{product.originalPrice}</span>
                    </div>
                    <Button 
                      size="sm" 
                      onClick={() => handleAddToCart(product)}
                      className="bg-pink-600 hover:bg-pink-700 font-montserrat"
                    >
                      <ShoppingBag className="h-4 w-4 mr-1" />
                      {t.addToCart}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
