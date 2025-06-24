
import { Heart, Sparkles } from "lucide-react";

const BackgroundDecorations = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-10 left-10 text-pink-300 opacity-30 animate-pulse">
        <Sparkles className="h-8 w-8" />
      </div>
      <div className="absolute top-20 right-20 text-purple-300 opacity-30 animate-bounce">
        <Heart className="h-6 w-6" />
      </div>
      <div className="absolute bottom-20 left-20 text-pink-300 opacity-30 animate-pulse">
        <Sparkles className="h-10 w-10" />
      </div>
      <div className="absolute bottom-10 right-10 text-purple-300 opacity-30 animate-bounce">
        <Heart className="h-8 w-8" />
      </div>
      <div className="absolute top-1/2 left-5 text-indigo-300 opacity-20">
        <Sparkles className="h-6 w-6" />
      </div>
      <div className="absolute top-1/3 right-5 text-pink-300 opacity-20">
        <Heart className="h-7 w-7" />
      </div>
    </div>
  );
};

export default BackgroundDecorations;
