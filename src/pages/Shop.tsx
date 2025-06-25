
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingBag, Search, Star, Filter, Grid, List } from "lucide-react";
import { Link } from "react-router-dom";
import { products, categories, ageGroups, Product } from "@/utils/productData";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";

interface ShopProps {
  language: string;
}

const Shop = ({ language }: ShopProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("All Ages");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [priceRange, setPriceRange] = useState<"all" | "under-2000" | "2000-5000" | "above-5000">("all");

  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();

  const translations = {
    english: {
      title: "Shop Collection",
      searchPlaceholder: "Search products...",
      categories: "Categories",
      ageGroups: "Age Groups",
      sortBy: "Sort By",
      priceRange: "Price Range",
      featured: "Featured",
      priceLowHigh: "Price: Low to High",
      priceHighLow: "Price: High to Low",
      rating: "Rating",
      newest: "Newest",
      all: "All",
      allAges: "All Ages",
      under2000: "Under ₹2,000",
      range2000to5000: "₹2,000 - ₹5,000",
      above5000: "Above ₹5,000",
      addToCart: "Add to Cart",
      addToWishlist: "Add to Wishlist",
      removeFromWishlist: "Remove from Wishlist",
      viewProduct: "View Product",
      noResults: "No products found matching your criteria",
      showingResults: "Showing {count} products"
    },
    hindi: {
      title: "शॉप कलेक्शन",
      searchPlaceholder: "उत्पाद खोजें...",
      categories: "श्रेणियां",
      ageGroups: "आयु समूह",
      sortBy: "क्रमबद्ध करें",
      priceRange: "मूल्य सीमा",
      featured: "फीचर्ड",
      priceLowHigh: "मूल्य: कम से अधिक",
      priceHighLow: "मूल्य: अधिक से कम",
      rating: "रेटिंग",
      newest: "नवीनतम",
      all: "सभी",
      allAges: "सभी आयु",
      under2000: "₹2,000 से कम",
      range2000to5000: "₹2,000 - ₹5,000",
      above5000: "₹5,000 से अधिक",
      addToCart: "कार्ट में जोड़ें",
      addToWishlist: "पसंदीदा में जोड़ें",
      removeFromWishlist: "पसंदीदा से हटाएं",
      viewProduct: "उत्पाद देखें",
      noResults: "आपके मानदंडों से मेल खाने वाला कोई उत्पाद नहीं मिला",
      showingResults: "{count} उत्पाद दिखा रहे हैं"
    },
    marathi: {
      title: "शॉप कलेक्शन",
      searchPlaceholder: "उत्पादने शोधा...",
      categories: "श्रेणी",
      ageGroups: "वय गट",
      sortBy: "क्रमवारी लावा",
      priceRange: "किंमत श्रेणी",
      featured: "फीचर्ड",
      priceLowHigh: "किंमत: कमी ते जास्त",
      priceHighLow: "किंमत: जास्त ते कमी",
      rating: "रेटिंग",
      newest: "नवीनतम",
      all: "सर्व",
      allAges: "सर्व वय",
      under2000: "₹2,000 पेक्षा कमी",
      range2000to5000: "₹2,000 - ₹5,000",
      above5000: "₹5,000 पेक्षा जास्त",
      addToCart: "कार्टमध्ये जोडा",
      addToWishlist: "आवडत्यांमध्ये जोडा",
      removeFromWishlist: "आवडत्यांमधून काढा",
      viewProduct: "उत्पाद पहा",
      noResults: "तुमच्या निकषांशी जुळणारे कोणतेही उत्पादन सापडले नाही",
      showingResults: "{count} उत्पादने दाखवत आहे"
    }
  };

  const t = translations[language as keyof typeof translations] || translations.english;

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesAgeGroup = selectedAgeGroup === "All Ages" || product.ageGroup === selectedAgeGroup;
    
    let matchesPrice = true;
    if (priceRange !== "all") {
      const price = parseFloat(product.price.replace('₹', '').replace(',', ''));
      switch (priceRange) {
        case "under-2000":
          matchesPrice = price < 2000;
          break;
        case "2000-5000":
          matchesPrice = price >= 2000 && price <= 5000;
          break;
        case "above-5000":
          matchesPrice = price > 5000;
          break;
      }
    }
    
    return matchesSearch && matchesCategory && matchesAgeGroup && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "priceLowHigh":
        return parseFloat(a.price.replace('₹', '').replace(',', '')) - 
               parseFloat(b.price.replace('₹', '').replace(',', ''));
      case "priceHighLow":
        return parseFloat(b.price.replace('₹', '').replace(',', '')) - 
               parseFloat(a.price.replace('₹', '').replace(',', ''));
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return b.isNew ? 1 : -1;
      default:
        return 0;
    }
  });

  const handleWishlistToggle = (product: Product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product, product.sizes[0], product.colors[0]);
  };

  return (
    <div className="min-h-screen bg-fashion-gradient">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-playfair font-bold text-pink-600">{t.title}</h1>
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 bg-white/80 backdrop-blur-sm font-montserrat"
            />
          </div>

          {/* Filters */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.categories}</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2 border border-pink-200 rounded-lg font-montserrat"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === "All" ? t.all : category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.ageGroups}</label>
              <select
                value={selectedAgeGroup}
                onChange={(e) => setSelectedAgeGroup(e.target.value)}
                className="w-full p-2 border border-pink-200 rounded-lg font-montserrat"
              >
                {ageGroups.map(ageGroup => (
                  <option key={ageGroup} value={ageGroup}>
                    {ageGroup === "All Ages" ? t.allAges : ageGroup}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.priceRange}</label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value as any)}
                className="w-full p-2 border border-pink-200 rounded-lg font-montserrat"
              >
                <option value="all">{t.all}</option>
                <option value="under-2000">{t.under2000}</option>
                <option value="2000-5000">{t.range2000to5000}</option>
                <option value="above-5000">{t.above5000}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.sortBy}</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full p-2 border border-pink-200 rounded-lg font-montserrat"
              >
                <option value="featured">{t.featured}</option>
                <option value="priceLowHigh">{t.priceLowHigh}</option>
                <option value="priceHighLow">{t.priceHighLow}</option>
                <option value="rating">{t.rating}</option>
                <option value="newest">{t.newest}</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Products Grid */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <p className="text-gray-600 font-montserrat">
            {t.showingResults.replace('{count}', sortedProducts.length.toString())}
          </p>
        </div>

        {sortedProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600 font-montserrat">{t.noResults}</p>
          </div>
        ) : (
          <div className={`grid gap-6 ${viewMode === "grid" 
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
            : "grid-cols-1"
          }`}>
            {sortedProducts.map((product) => (
              <Card key={product.id} className={`overflow-hidden hover:shadow-xl transition-all duration-300 bg-white border-0 group ${
                viewMode === "list" ? "flex" : ""
              }`}>
                <div className={`relative ${viewMode === "list" ? "w-48 flex-shrink-0" : ""}`}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                      viewMode === "list" ? "w-full h-full" : "w-full h-64"
                    }`}
                  />
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.isNew && (
                      <Badge className="bg-green-500 text-white font-montserrat">NEW</Badge>
                    )}
                    {product.isSale && (
                      <Badge className="bg-red-500 text-white font-montserrat">SALE</Badge>
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
                
                <CardContent className={`p-4 ${viewMode === "list" ? "flex-1" : ""}`}>
                  <div className={viewMode === "list" ? "flex justify-between items-start h-full" : ""}>
                    <div className={viewMode === "list" ? "flex-1" : ""}>
                      <h3 className="font-montserrat font-semibold text-gray-800 mb-2">{product.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm text-gray-600 font-montserrat">
                            {product.rating} ({product.reviews})
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="text-lg font-semibold text-pink-600 font-montserrat">{product.price}</span>
                        <span className="text-sm text-gray-500 line-through font-montserrat">{product.originalPrice}</span>
                      </div>
                    </div>
                    
                    <div className={`flex gap-2 ${viewMode === "list" ? "flex-col" : ""}`}>
                      <Button 
                        size="sm" 
                        onClick={() => handleAddToCart(product)}
                        className="bg-pink-600 hover:bg-pink-700 font-montserrat"
                      >
                        <ShoppingBag className="h-4 w-4 mr-1" />
                        {t.addToCart}
                      </Button>
                      <Link to={`/product/${product.id}`}>
                        <Button variant="outline" size="sm" className="font-montserrat">
                          {t.viewProduct}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Shop;
