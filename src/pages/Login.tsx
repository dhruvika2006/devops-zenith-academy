
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { getTranslations } from "@/utils/translations";
import BackgroundDecorations from "@/components/BackgroundDecorations";
import SocialLoginButtons from "@/components/SocialLoginButtons";
import LoginForm from "@/components/LoginForm";
import BrandHeader from "@/components/BrandHeader";

interface LoginProps {
  language: string;
}

const Login = ({ language }: LoginProps) => {
  const navigate = useNavigate();
  const t = getTranslations(language);

  const handleSignUpClick = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 flex items-center justify-center p-4">
      <BackgroundDecorations />

      <div className="w-full max-w-md relative z-10">
        <BrandHeader />

        <Card className="bg-white/90 backdrop-blur-lg shadow-2xl border-0 animate-scale-in rounded-2xl">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-playfair bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              {t.welcomeBack}
            </CardTitle>
            <CardDescription className="text-gray-600 font-montserrat">
              {t.subtitle}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <LoginForm translations={t} />

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gradient-to-r from-pink-200 to-purple-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500 font-montserrat">
                  {t.orContinue}
                </span>
              </div>
            </div>

            <SocialLoginButtons googleText={t.google} facebookText={t.facebook} />

            {/* Sign Up Link */}
            <div className="text-center">
              <span className="text-gray-600 font-montserrat text-sm">
                {t.noAccount}{" "}
              </span>
              <button
                onClick={handleSignUpClick}
                className="text-pink-600 hover:text-pink-700 font-montserrat font-semibold text-sm hover:underline"
              >
                {t.signUp}
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
