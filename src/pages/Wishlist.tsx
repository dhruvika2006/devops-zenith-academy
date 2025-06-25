
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingBag, Star, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";

interface WishlistProps {
  language: string;
}

const Wishlist = ({ language }: WishlistProps) => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const translations = {
    english: {
      title: "My Wishlist",
      empty: "Your wishlist is empty",
      emptyDescription: "Start adding items you love to your wishlist!",
      shopNow: "Shop Now",
      addToCart: "Add to Cart",
      removeFromWishlist: "Remove from Wishlist",
      viewProduct: "View Product",
      items: "items"
    },
    hindi: {
      title: "मेरी इच्छा सूची",
      empty: "आपकी इच्छा सूची खाली है",
      emptyDescription: "अपनी पसंदीदा वस्तुओं को इच्छा सूची में जोड़ना शुरू करें!",
      shopNow: "अभी खरीदारी करें",
      addToCart: "कार्ट में जोड़ें",
      removeFromWishlist: "इच्छा सूची से हटाएं",
      viewProduct: "उत्पाद देखें",
      items: "वस्तुएं"
    },
    marathi: {
      title: "माझी इच्छा यादी",
      empty: "तुमची इच्छा यादी रिकामी आहे",
      emptyDescription: "तुम्हाला आवडणाऱ्या वस्तू इच्छा यादीत जोडायला सुरुवात करा!",
      shopNow: "आता खरेदी करा",
      addToCart: "कार्टमध्ये जोडा",
      removeFromWishlist: "इच्छा यादीतून काढा",
      viewProduct: "उत्पाद पहा",
      items: "वस्तू"
    }
  };

  const t = translations[language as keyof typeof translations] || translations.english;

  const handleAddToCart = (product: any) => {
    addToCart(product, product.sizes[0], product.colors[0]);
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-fashion-gradient flex items-center justify-center">
        <div className="text-center">
          <Heart className="h-24 w-24 text-pink-300 mx-auto mb-6" />
          <h1 className="text-3xl font-playfair font-bold text-pink-600 mb-4">{t.empty}</h1>
          <p className="text-gray-600 font-montserrat mb-8">{t.emptyDescription}</p>
          <Link to="/shop">
            <Button className="bg-pink-600 hover:bg-pink-700 font-montserrat">
              {t.shopNow}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-fashion-gradient">
      <div className="container mx-auto p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-playfair font-bold text-pink-600 mb-2">{t.title}</h1>
            <p className="text-gray-600 font-montserrat">
              {wishlistItems.length} {t.items}
            </p>
          </div>
          <Link to="/shop">
            <Button variant="outline" className="font-montserrat">
              Continue Shopping
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((product) => (
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
                    <Badge className="bg-red-500 text-white font-montserrat">SALE</Badge>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute top-3 right-3 text-red-500 hover:bg-white/80 hover:text-red-600"
                  title={t.removeFromWishlist}
                >
                  <Trash2 className="h-5 w-5" />
                </Button>
              </div>
              
              <CardContent className="p-4">
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
                
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    onClick={() => handleAddToCart(product)}
                    className="bg-pink-600 hover:bg-pink-700 font-montserrat flex-1"
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
