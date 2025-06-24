
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface LanguageSelectorProps {
  onLanguageSelect: (language: string) => void;
}

const LanguageSelector = ({ onLanguageSelect }: LanguageSelectorProps) => {
  const languages = [
    { code: 'english', name: 'English', flag: '🇺🇸' },
    { code: 'hindi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'marathi', name: 'मराठी', flag: '🇮🇳' }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm shadow-2xl border-0">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto mb-4 text-6xl">👗</div>
          <CardTitle className="text-3xl font-playfair text-pink-600 mb-2">
            Dhruvii's Fashion
          </CardTitle>
          <CardDescription className="text-gray-600 font-montserrat">
            Select your preferred language
            <br />
            अपनी पसंदीदा भाषा चुनें
            <br />
            आपली आवडती भाषा निवडा
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {languages.map((lang) => (
            <Button
              key={lang.code}
              onClick={() => onLanguageSelect(lang.code)}
              variant="outline"
              className="w-full h-14 text-lg font-montserrat hover:bg-pink-50 hover:border-pink-300 transition-all duration-300"
            >
              <span className="mr-3 text-2xl">{lang.flag}</span>
              {lang.name}
            </Button>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default LanguageSelector;
