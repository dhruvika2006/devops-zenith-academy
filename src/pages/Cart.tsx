
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Minus, Plus, Trash2, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";

interface CartProps {
  language: string;
}

const Cart = ({ language }: CartProps) => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();
  const { addToWishlist } = useWishlist();

  const translations = {
    english: {
      title: "Shopping Cart",
      empty: "Your cart is empty",
      emptyDescription: "Start shopping to add items to your cart!",
      shopNow: "Shop Now",
      moveToWishlist: "Move to Wishlist",
      remove: "Remove",
      quantity: "Quantity",
      subtotal: "Subtotal",
      total: "Total",
      checkout: "Proceed to Checkout",
      continueShopping: "Continue Shopping",
      clearCart: "Clear Cart",
      items: "items"
    },
    hindi: {
      title: "शॉपिंग कार्ट",
      empty: "आपका कार्ट खाली है",
      emptyDescription: "अपने कार्ट में आइटम जोड़ने के लिए खरीदारी शुरू करें!",
      shopNow: "अभी खरीदारी करें",
      moveToWishlist: "इच्छा सूची में ले जाएं",
      remove: "हटाएं",
      quantity: "मात्रा",
      subtotal: "उप योग",
      total: "कुल",
      checkout: "चेकआउट पर जाएं",
      continueShopping: "खरीदारी जारी रखें",
      clearCart: "कार्ट खाली करें",
      items: "वस्तुएं"
    },
    marathi: {
      title: "शॉपिंग कार्ट",
      empty: "तुमचा कार्ट रिकामा आहे",
      emptyDescription: "तुमच्या कार्टमध्ये वस्तू जोडण्यासाठी खरेदी सुरू करा!",
      shopNow: "आता खरेदी करा",
      moveToWishlist: "इच्छा यादीत हलवा",
      remove: "काढा",
      quantity: "प्रमाण",
      subtotal: "उप एकूण",
      total: "एकूण",
      checkout: "चेकआउटवर जा",
      continueShopping: "खरेदी चालू ठेवा",
      clearCart: "कार्ट साफ करा",
      items: "वस्तू"
    }
  };

  const t = translations[language as keyof typeof translations] || translations.english;

  const handleMoveToWishlist = (item: any) => {
    addToWishlist(item);
    removeFromCart(item.id);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-fashion-gradient flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 text-pink-300 mx-auto mb-6" />
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
              {cartItems.reduce((total, item) => total + item.quantity, 0)} {t.items}
            </p>
          </div>
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              onClick={clearCart}
              className="font-montserrat text-red-600 border-red-300 hover:bg-red-50"
            >
              {t.clearCart}
            </Button>
            <Link to="/shop">
              <Button variant="outline" className="font-montserrat">
                {t.continueShopping}
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="bg-white border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-montserrat font-semibold text-gray-800">{item.name}</h3>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="text-sm text-gray-600 mb-2">
                        <span>Size: {item.selectedSize}</span>
                        <span className="mx-2">•</span>
                        <span>Color: {item.selectedColor}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-semibold text-pink-600 font-montserrat">{item.price}</span>
                          <span className="text-sm text-gray-500 line-through font-montserrat">{item.originalPrice}</span>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleMoveToWishlist(item)}
                            className="text-pink-500 hover:bg-pink-50"
                            title={t.moveToWishlist}
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                          
                          <div className="flex items-center border border-gray-300 rounded-lg">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="h-8 w-8"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="px-3 py-1 text-sm font-medium">{item.quantity}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="h-8 w-8"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="bg-white border-0 shadow-md sticky top-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-gray-800 mb-4">Order Summary</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="font-montserrat text-gray-600">{t.subtotal}</span>
                    <span className="font-montserrat font-semibold">₹{cartTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-montserrat text-gray-600">Shipping</span>
                    <span className="font-montserrat font-semibold text-green-600">Free</span>
                  </div>
                  <hr />
                  <div className="flex justify-between text-lg">
                    <span className="font-montserrat font-semibold">{t.total}</span>
                    <span className="font-montserrat font-bold text-pink-600">₹{cartTotal.toLocaleString()}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-pink-600 hover:bg-pink-700 font-montserrat mb-3">
                  {t.checkout}
                </Button>
                
                <Link to="/shop">
                  <Button variant="outline" className="w-full font-montserrat">
                    {t.continueShopping}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
