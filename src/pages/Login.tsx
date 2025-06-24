
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

interface LoginProps {
  language: string;
}

const Login = ({ language }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const translations = {
    english: {
      welcomeBack: "Welcome Back",
      subtitle: "Sign in to continue your fashion journey",
      email: "Email Address",
      emailPlaceholder: "Enter your email",
      password: "Password",
      passwordPlaceholder: "Enter your password",
      rememberMe: "Remember me",
      forgotPassword: "Forgot Password?",
      signIn: "Sign In",
      noAccount: "Don't have an account?",
      signUp: "Sign Up",
      orContinue: "Or continue with",
      google: "Google",
      facebook: "Facebook"
    },
    hindi: {
      welcomeBack: "वापस स्वागत है",
      subtitle: "अपनी फैशन यात्रा जारी रखने के लिए साइन इन करें",
      email: "ईमेल पता",
      emailPlaceholder: "अपना ईमेल दर्ज करें",
      password: "पासवर्ड",
      passwordPlaceholder: "अपना पासवर्ड दर्ज करें",
      rememberMe: "मुझे याद रखें",
      forgotPassword: "पासवर्ड भूल गए?",
      signIn: "साइन इन",
      noAccount: "खाता नहीं है?",
      signUp: "साइन अप",
      orContinue: "या जारी रखें",
      google: "गूगल",
      facebook: "फेसबुक"
    },
    marathi: {
      welcomeBack: "परत स्वागत आहे",
      subtitle: "तुमच्या फॅशन प्रवासाला सुरुवात करण्यासाठी साइन इन करा",
      email: "ईमेल पत्ता",
      emailPlaceholder: "तुमचा ईमेल टाका",
      password: "पासवर्ड",
      passwordPlaceholder: "तुमचा पासवर्ड टाका",
      rememberMe: "मला लक्षात ठेवा",
      forgotPassword: "पासवर्ड विसरलात?",
      signIn: "साइन इन",
      noAccount: "खाते नाही?",
      signUp: "साइन अप",
      orContinue: "किंवा सुरू ठेवा",
      google: "गूगल",
      facebook: "फेसबुक"
    }
  };

  const t = translations[language as keyof typeof translations] || translations.english;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { email, password, rememberMe });
  };

  return (
    <div className="min-h-screen bg-fashion-gradient flex items-center justify-center p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-pink-200 opacity-20">
          <Sparkles className="h-8 w-8" />
        </div>
        <div className="absolute top-20 right-20 text-purple-200 opacity-20">
          <Heart className="h-6 w-6" />
        </div>
        <div className="absolute bottom-20 left-20 text-pink-200 opacity-20">
          <Sparkles className="h-10 w-10" />
        </div>
        <div className="absolute bottom-10 right-10 text-purple-200 opacity-20">
          <Heart className="h-8 w-8" />
        </div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Brand Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="text-6xl mb-4">👗</div>
          <h1 className="text-3xl font-playfair font-bold text-pink-600 mb-2">
            Dhruvii's Fashion
          </h1>
          <p className="text-gray-600 font-montserrat">
            Premium Fashion for Every Age
          </p>
        </div>

        {/* Login Card */}
        <Card className="bg-white/80 backdrop-blur-md shadow-2xl border-0 animate-scale-in">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-playfair text-gray-800">
              {t.welcomeBack}
            </CardTitle>
            <CardDescription className="text-gray-600 font-montserrat">
              {t.subtitle}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="font-montserrat text-gray-700">
                  {t.email}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="font-montserrat border-pink-200 focus:ring-pink-300 focus:border-pink-400"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="font-montserrat text-gray-700">
                  {t.password}
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder={t.passwordPlaceholder}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="font-montserrat border-pink-200 focus:ring-pink-300 focus:border-pink-400 pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400 hover:text-pink-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  />
                  <Label
                    htmlFor="remember"
                    className="text-sm font-montserrat text-gray-600 cursor-pointer"
                  >
                    {t.rememberMe}
                  </Label>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-sm font-montserrat text-pink-600 hover:text-pink-700 hover:underline"
                >
                  {t.forgotPassword}
                </Link>
              </div>

              {/* Sign In Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-montserrat py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {t.signIn}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-pink-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500 font-montserrat">
                  {t.orContinue}
                </span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="font-montserrat border-pink-200 hover:bg-pink-50 hover:border-pink-300"
              >
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                {t.google}
              </Button>
              <Button
                variant="outline"
                className="font-montserrat border-pink-200 hover:bg-pink-50 hover:border-pink-300"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                {t.facebook}
              </Button>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <span className="text-gray-600 font-montserrat text-sm">
                {t.noAccount}{" "}
              </span>
              <Link
                to="/signup"
                className="text-pink-600 hover:text-pink-700 font-montserrat font-semibold text-sm hover:underline"
              >
                {t.signUp}
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
