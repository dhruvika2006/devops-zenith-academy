
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import LanguageSelector from "./components/LanguageSelector";

const queryClient = new QueryClient();

const App = () => {
  const [language, setLanguage] = useState('english');
  const [showLanguageSelector, setShowLanguageSelector] = useState(true);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('dhruvii-language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
      setShowLanguageSelector(false);
    }
  }, []);

  const handleLanguageSelect = (selectedLanguage: string) => {
    setLanguage(selectedLanguage);
    localStorage.setItem('dhruvii-language', selectedLanguage);
    setShowLanguageSelector(false);
  };

  if (showLanguageSelector) {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
            <LanguageSelector onLanguageSelect={handleLanguageSelect} />
          </div>
        </TooltipProvider>
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home language={language} />} />
            <Route path="/shop" element={<Shop language={language} />} />
            <Route path="/product/:id" element={<ProductDetails language={language} />} />
            <Route path="/cart" element={<Cart language={language} />} />
            <Route path="/wishlist" element={<Wishlist language={language} />} />
            <Route path="/profile" element={<Profile language={language} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
