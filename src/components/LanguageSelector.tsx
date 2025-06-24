
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Heart, Globe, Star } from "lucide-react";

interface LanguageSelectorProps {
  onLanguageSelect: (language: string) => void;
}

const LanguageSelector = ({ onLanguageSelect }: LanguageSelectorProps) => {
  const languages = [
    { 
      code: 'english', 
      name: 'English', 
      flag: '🇺🇸',
      gradient: 'from-blue-400 to-purple-500',
      hoverGradient: 'from-blue-500 to-purple-600'
    },
    { 
      code: 'hindi', 
      name: 'हिंदी', 
      flag: '🇮🇳',
      gradient: 'from-orange-400 to-pink-500',
      hoverGradient: 'from-orange-500 to-pink-600'
    },
    { 
      code: 'marathi', 
      name: 'मराठी', 
      flag: '🇮🇳',
      gradient: 'from-green-400 to-teal-500',
      hoverGradient: 'from-green-500 to-teal-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-100 via-indigo-100 to-cyan-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 text-pink-300 opacity-40 animate-spin">
          <Sparkles className="h-12 w-12" />
        </div>
        <div className="absolute top-32 right-32 text-purple-300 opacity-40 animate-bounce">
          <Heart className="h-10 w-10" />
        </div>
        <div className="absolute bottom-32 left-32 text-indigo-300 opacity-40 animate-pulse">
          <Star className="h-8 w-8" />
        </div>
        <div className="absolute bottom-20 right-20 text-cyan-300 opacity-40 animate-spin">
          <Globe className="h-14 w-14" />
        </div>
        <div className="absolute top-1/2 left-10 text-pink-200 opacity-30 animate-bounce">
          <Sparkles className="h-6 w-6" />
        </div>
        <div className="absolute top-1/4 right-10 text-purple-200 opacity-30 animate-pulse">
          <Heart className="h-7 w-7" />
        </div>
        <div className="absolute bottom-1/3 left-16 text-indigo-200 opacity-30 animate-spin">
          <Star className="h-5 w-5" />
        </div>
      </div>

      <Card className="w-full max-w-lg bg-white/95 backdrop-blur-xl shadow-2xl border-0 rounded-3xl animate-scale-in relative z-10">
        <CardHeader className="text-center pb-6 pt-8">
          <div className="mx-auto mb-6 text-8xl animate-bounce">
            👗
          </div>
          <CardTitle className="text-4xl font-playfair font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Dhruvii's Fashion
          </CardTitle>
          <CardDescription className="text-gray-600 font-montserrat text-lg leading-relaxed">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Globe className="h-5 w-5 text-pink-500" />
                <span>Select your preferred language</span>
              </div>
              <div className="text-sm opacity-75">अपनी पसंदीदा भाषा चुनें</div>
              <div className="text-sm opacity-75">आपली आवडती भाषा निवडा</div>
            </div>
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4 pb-8">
          {languages.map((lang, index) => (
            <Button
              key={lang.code}
              onClick={() => onLanguageSelect(lang.code)}
              variant="outline"
              className={`w-full h-16 text-lg font-montserrat border-2 border-transparent 
                bg-gradient-to-r ${lang.gradient} text-white
                hover:bg-gradient-to-r hover:${lang.hoverGradient}
                transform transition-all duration-300 hover:scale-105 hover:shadow-xl
                rounded-2xl group animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="mr-4 text-3xl group-hover:animate-bounce">{lang.flag}</span>
              <span className="font-semibold text-xl">{lang.name}</span>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Sparkles className="h-5 w-5" />
              </div>
            </Button>
          ))}
          
          {/* Decorative Element */}
          <div className="text-center pt-4">
            <div className="flex justify-center items-center gap-2 text-gray-400">
              <Star className="h-4 w-4" />
              <span className="text-sm font-montserrat">Choose your language to continue</span>
              <Star className="h-4 w-4" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LanguageSelector;
