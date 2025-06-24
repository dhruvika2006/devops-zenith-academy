
export const loginTranslations = {
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
    signUp: "Create Account",
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
    signUp: "खाता बनाएं",
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
    signUp: "खाते तयार करा",
    orContinue: "किंवा सुरू ठेवा",
    google: "गूगल",
    facebook: "फेसबुक"
  }
};

export const getTranslations = (language: string) => {
  return loginTranslations[language as keyof typeof loginTranslations] || loginTranslations.english;
};
