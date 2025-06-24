
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface LoginFormProps {
  translations: {
    email: string;
    emailPlaceholder: string;
    password: string;
    passwordPlaceholder: string;
    rememberMe: string;
    forgotPassword: string;
    signIn: string;
  };
}

const LoginForm = ({ translations: t }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password, rememberMe });
    navigate("/home");
  };

  return (
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
          className="font-montserrat border-pink-200 focus:ring-pink-300 focus:border-pink-400 rounded-xl"
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
            className="font-montserrat border-pink-200 focus:ring-pink-300 focus:border-pink-400 pr-10 rounded-xl"
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
        <button
          type="button"
          className="text-sm font-montserrat text-pink-600 hover:text-pink-700 hover:underline"
        >
          {t.forgotPassword}
        </button>
      </div>

      {/* Sign In Button */}
      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white font-montserrat py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        {t.signIn}
      </Button>
    </form>
  );
};

export default LoginForm;
