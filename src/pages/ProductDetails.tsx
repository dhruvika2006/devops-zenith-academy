
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingBag, Star, ArrowLeft, Eye } from "lucide-react";
import { products } from "@/utils/productData";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";

interface ProductDetailsProps {
  language: string;
}

const ProductDetails = ({ language }: ProductDetailsProps) => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();

  const translations = {
    english: {
      backToShop: "Back to Shop",
      addToCart: "Add to Cart",
      addToWishlist: "Add to Wishlist",
      removeFromWishlist: "Remove from Wishlist",
      selectSize: "Select Size",
      selectColor: "Select Color",
      quantity: "Quantity",
      description: "Description",
      reviews: "Reviews",
      productNotFound: "Product not found",
      vrTryOn: "Try with VR",
      specifications: "Specifications",
      category: "Category",
      ageGroup: "Age Group",
      colors: "Available Colors",
      sizes: "Available Sizes"
    },
    hindi: {
      backToShop: "शॉप पर वापस",
      addToCart: "कार्ट में जोड़ें",
      addToWishlist: "पसंदीदा में जोड़ें",
      removeFromWishlist: "पसंदीदा से हटाएं",
      selectSize: "साइज़ चुनें",
      selectColor: "रंग चुनें",
      quantity: "मात्रा",
      description: "विवरण",
      reviews: "समीक्षाएं",
      productNotFound: "उत्पाद नहीं मिला",
      vrTryOn: "VR के साथ ट्राई करें",
      specifications: "विशेषताएं",
      category: "श्रेणी",
      ageGroup: "आयु समूह",
      colors: "उपलब्ध रंग",
      sizes: "उपलब्ध साइज़"
    },
    marathi: {
      backToShop: "शॉपवर परत",
      addToCart: "कार्टमध्ये जोडा",
      addToWishlist: "आवडत्यांमध्ये जोडा",
      removeFromWishlist: "आवडत्यांमधून काढा",
      selectSize: "साइज निवडा",
      selectColor: "रंग निवडा",
      quantity: "प्रमाण",
      description: "वर्णन",
      reviews: "पुनरावलोकने",
      productNotFound: "उत्पादन सापडले नाही",
      vrTryOn: "VR सह ट्राय करा",
      specifications: "तपशील",
      category: "श्रेणी",
      ageGroup: "वय गट",
      colors: "उपलब्ध रंग",
      sizes: "उपलब्ध साइझ"
    }
  };

  const t = translations[language as keyof typeof translations] || translations.english;

  if (!product) {
    return (
      <div className="min-h-screen bg-fashion-gradient flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-playfair font-bold text-pink-600 mb-4">{t.productNotFound}</h1>
          <Link to="/shop">
            <Button className="bg-pink-600 hover:bg-pink-700 font-montserrat">
              {t.backToShop}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = () => {
    if (selectedSize && selectedColor) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product, selectedSize, selectedColor);
      }
    }
  };

  return (
    <div className="min-h-screen bg-fashion-gradient">
      <div className="container mx-auto p-8">
        {/* Back Button */}
        <Link to="/shop">
          <Button variant="ghost" className="mb-6 font-montserrat">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t.backToShop}
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <Card className="overflow-hidden bg-white border-0 shadow-lg">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-96 lg:h-[600px] object-cover"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <Badge className="bg-green-500 text-white font-montserrat">NEW</Badge>
                  )}
                  {product.isSale && (
                    <Badge className="bg-red-500 text-white font-montserrat">SALE</Badge>
                  )}
                </div>
              </div>
            </Card>
            
            {/* VR Try-On Button */}
            <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 font-montserrat">
              <Eye className="h-4 w-4 mr-2" />
              {t.vrTryOn}
            </Button>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-playfair font-bold text-gray-800 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-lg font-montserrat">{product.rating}</span>
                  <span className="ml-2 text-gray-600 font-montserrat">({product.reviews} reviews)</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl font-bold text-pink-600 font-montserrat">{product.price}</span>
                <span className="text-xl text-gray-500 line-through font-montserrat">{product.originalPrice}</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xl font-playfair font-semibold text-gray-800 mb-3">{t.description}</h3>
              <p className="text-gray-600 font-montserrat leading-relaxed">{product.description}</p>
            </div>

            {/* Specifications */}
            <Card className="bg-white border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-gray-800 mb-4">{t.specifications}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="font-montserrat font-medium text-gray-600">{t.category}:</span>
                    <span className="ml-2 font-montserrat">{product.category}</span>
                  </div>
                  <div>
                    <span className="font-montserrat font-medium text-gray-600">{t.ageGroup}:</span>
                    <span className="ml-2 font-montserrat">{product.ageGroup}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-montserrat font-semibold text-gray-800 mb-3">{t.selectSize}</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    onClick={() => setSelectedSize(size)}
                    className="font-montserrat"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-montserrat font-semibold text-gray-800 mb-3">{t.selectColor}</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <Button
                    key={color}
                    variant={selectedColor === color ? "default" : "outline"}
                    onClick={() => setSelectedColor(color)}
                    className="font-montserrat"
                  >
                    {color}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-montserrat font-semibold text-gray-800 mb-3">{t.quantity}</h3>
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10"
                >
                  -
                </Button>
                <span className="text-lg font-montserrat font-semibold px-4">{quantity}</span>
                <Button
                  variant="outline"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10"
                >
                  +
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <Button 
                onClick={handleAddToCart}
                disabled={!selectedSize || !selectedColor}
                className="flex-1 bg-pink-600 hover:bg-pink-700 font-montserrat py-3"
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                {t.addToCart}
              </Button>
              <Button
                variant="outline"
                onClick={handleWishlistToggle}
                className={`px-6 py-3 ${isInWishlist(product.id) ? 'text-pink-500 border-pink-300' : ''}`}
              >
                <Heart className={`h-5 w-5 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
