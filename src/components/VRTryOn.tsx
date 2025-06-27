
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Camera, RotateCw, Zap, X } from "lucide-react";
import { Product } from "@/utils/productData";

interface VRTryOnProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  language: string;
}

const VRTryOn = ({ product, isOpen, onClose, language }: VRTryOnProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [vrMode, setVrMode] = useState<"preview" | "active">("preview");
  const [cameraError, setCameraError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const translations = {
    english: {
      vrTryOn: "VR Try-On",
      startVR: "Start VR Experience",
      exitVR: "Exit VR",
      loading: "Loading VR Experience...",
      takePhoto: "Take Photo",
      rotate: "Rotate View",
      aiPowered: "AI Powered",
      instructions: "Point your camera at yourself and see how this outfit looks on you!",
      cameraError: "Camera access denied or not available",
      allowCamera: "Please allow camera access to use VR try-on",
      features: [
        "Real-time virtual fitting",
        "360° view rotation",
        "Perfect size matching",
        "Photo capture & share"
      ]
    },
    hindi: {
      vrTryOn: "VR ट्राई-ऑन",
      startVR: "VR अनुभव शुरू करें",
      exitVR: "VR से बाहर निकलें",
      loading: "VR अनुभव लोड हो रहा है...",
      takePhoto: "फोटो लें",
      rotate: "व्यू घुमाएं",
      aiPowered: "AI संचालित",
      instructions: "अपने कैमरे को अपनी ओर करें और देखें कि यह पोशाक आप पर कैसी लगती है!",
      cameraError: "कैमरा एक्सेस अस्वीकृत या उपलब्ध नहीं",
      allowCamera: "VR ट्राई-ऑन का उपयोग करने के लिए कैमरा एक्सेस की अनुमति दें",
      features: [
        "रियल-टाइम वर्चुअल फिटिंग",
        "360° व्यू रोटेशन",
        "परफेक्ट साइज़ मैचिंग",
        "फोटो कैप्चर और शेयर"
      ]
    },
    marathi: {
      vrTryOn: "VR ट्राय-ऑन",
      startVR: "VR अनुभव सुरू करा",
      exitVR: "VR मधून बाहेर पडा",
      loading: "VR अनुभव लोड होत आहे...",
      takePhoto: "फोटो काढा",
      rotate: "व्यू फिरवा",
      aiPowered: "AI चालित",
      instructions: "तुमचा कॅमेरा तुमच्याकडे करा आणि पहा की हा पोशाख तुमच्यावर कसा दिसतो!",
      cameraError: "कॅमेरा प्रवेश नाकारला किंवा उपलब्ध नाही",
      allowCamera: "VR ट्राय-ऑन वापरण्यासाठी कॅमेरा प्रवेशाची अनुमती द्या",
      features: [
        "रिअल-टाइम व्हर्च्युअल फिटिंग",
        "360° व्यू रोटेशन",
        "परफेक्ट साइझ मॅचिंग",
        "फोटो कॅप्चर आणि शेअर"
      ]
    }
  };

  const t = translations[language as keyof typeof translations] || translations.english;

  const startCamera = async () => {
    try {
      setCameraError(null);
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          facingMode: 'user',
          width: { ideal: 640 },
          height: { ideal: 480 }
        } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
      }
    } catch (error) {
      console.error('Camera access error:', error);
      setCameraError(t.cameraError);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  const handleStartVR = async () => {
    setIsLoading(true);
    await startCamera();
    setTimeout(() => {
      setIsLoading(false);
      setVrMode("active");
    }, 1000);
  };

  const handleExitVR = () => {
    stopCamera();
    setVrMode("preview");
    setCameraError(null);
    onClose();
  };

  const takePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      
      if (context) {
        context.drawImage(videoRef.current, 0, 0);
        const imageData = canvas.toDataURL('image/png');
        
        // Create download link
        const link = document.createElement('a');
        link.download = `vr-tryout-${product.name}-${Date.now()}.png`;
        link.href = imageData;
        link.click();
      }
    }
  };

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-auto bg-white">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center space-x-3">
            <Eye className="h-6 w-6 text-purple-600" />
            <CardTitle className="text-2xl font-playfair">{t.vrTryOn}</CardTitle>
            <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <Zap className="h-3 w-3 mr-1" />
              {t.aiPowered}
            </Badge>
          </div>
          <Button variant="ghost" size="icon" onClick={handleExitVR}>
            <X className="h-5 w-5" />
          </Button>
        </CardHeader>

        <CardContent className="space-y-6">
          {vrMode === "preview" && (
            <>
              <div className="text-center space-y-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-48 h-64 object-cover mx-auto rounded-lg shadow-lg"
                />
                <div>
                  <h3 className="text-xl font-semibold font-montserrat">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                <p className="text-center text-gray-700 mb-4 font-montserrat">
                  {t.instructions}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {t.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                      <span className="text-sm font-montserrat">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {cameraError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                  <p className="text-red-600 font-montserrat">{t.allowCamera}</p>
                </div>
              )}

              <div className="text-center">
                <Button 
                  onClick={handleStartVR}
                  disabled={isLoading}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg font-montserrat"
                >
                  <Eye className="h-5 w-5 mr-2" />
                  {isLoading ? t.loading : t.startVR}
                </Button>
              </div>
            </>
          )}

          {vrMode === "active" && (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-lg p-8 text-white">
                <div className="relative">
                  <div className="w-full h-64 bg-black rounded-lg overflow-hidden mb-4 relative">
                    {cameraError ? (
                      <div className="flex items-center justify-center h-full">
                        <div className="text-center text-red-300">
                          <Camera className="h-12 w-12 mx-auto mb-2" />
                          <p className="text-sm">{cameraError}</p>
                        </div>
                      </div>
                    ) : (
                      <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
                        className="w-full h-full object-cover transform scaleX-[-1]"
                      />
                    )}
                    
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-500 text-white animate-pulse">
                        LIVE
                      </Badge>
                    </div>

                    {/* Virtual product overlay */}
                    <div className="absolute top-4 left-4 opacity-50">
                      <img 
                        src={product.image} 
                        alt="Virtual overlay"
                        className="w-16 h-20 object-cover rounded border-2 border-white/50"
                      />
                    </div>
                  </div>

                  <div className="flex justify-center space-x-4 mt-6">
                    <Button 
                      onClick={takePhoto}
                      variant="outline" 
                      className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                      disabled={!!cameraError}
                    >
                      <Camera className="h-4 w-4 mr-2" />
                      {t.takePhoto}
                    </Button>
                    <Button 
                      variant="outline"
                      className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                    >
                      <RotateCw className="h-4 w-4 mr-2" />
                      {t.rotate}
                    </Button>
                    <Button 
                      onClick={handleExitVR}
                      variant="outline"
                      className="bg-red-500/80 border-red-400 text-white hover:bg-red-600"
                    >
                      <X className="h-4 w-4 mr-2" />
                      {t.exitVR}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="text-center text-sm text-gray-600 font-montserrat">
                <p>Move around to see how the outfit fits from different angles</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default VRTryOn;
