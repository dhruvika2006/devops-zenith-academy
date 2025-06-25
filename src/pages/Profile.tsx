
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { User, Mail, Phone, MapPin, Calendar, Edit, Save } from "lucide-react";

interface ProfileProps {
  language: string;
}

const Profile = ({ language }: ProfileProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Dhruvika",
    email: "dhruvikaswagh@gmail.com",
    phone: "+91 98765 43210",
    address: "123 Fashion Street, Mumbai, Maharashtra",
    birthDate: "1995-06-15",
    joinDate: "2024-01-15"
  });

  const translations = {
    english: {
      title: "My Profile",
      personalInfo: "Personal Information",
      accountSettings: "Account Settings",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      address: "Address",
      birthDate: "Birth Date",
      joinDate: "Member Since",
      edit: "Edit Profile",
      save: "Save Changes",
      cancel: "Cancel",
      orderHistory: "Order History",
      addresses: "Saved Addresses",
      paymentMethods: "Payment Methods",
      preferences: "Preferences"
    },
    hindi: {
      title: "मेरी प्रोफ़ाइल",
      personalInfo: "व्यक्तिगत जानकारी",
      accountSettings: "खाता सेटिंग्स",
      name: "पूरा नाम",
      email: "ईमेल पता",
      phone: "फोन नंबर",
      address: "पता",
      birthDate: "जन्म तिथि",
      joinDate: "सदस्य बनने की तारीख",
      edit: "प्रोफ़ाइल संपादित करें",
      save: "बदलाव सहेजें",
      cancel: "रद्द करें",
      orderHistory: "ऑर्डर इतिहास",
      addresses: "सहेजे गए पते",
      paymentMethods: "भुगतान विधियां",
      preferences: "प्राथमिकताएं"
    },
    marathi: {
      title: "माझे प्रोफाइल",
      personalInfo: "वैयक्तिक माहिती",
      accountSettings: "खाते सेटिंग्ज",
      name: "पूर्ण नाव",
      email: "ईमेल पत्ता",
      phone: "फोन नंबर",
      address: "पत्ता",
      birthDate: "जन्म तारीख",
      joinDate: "सदस्य झाल्याची तारीख",
      edit: "प्रोफाइल संपादित करा",
      save: "बदल जतन करा",
      cancel: "रद्द करा",
      orderHistory: "ऑर्डर इतिहास",
      addresses: "जतन केलेले पत्ते",
      paymentMethods: "पेमेंट पद्धती",
      preferences: "प्राधान्ये"
    }
  };

  const t = translations[language as keyof typeof translations] || translations.english;

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
    console.log("Profile saved:", profile);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form to original values if needed
  };

  return (
    <div className="min-h-screen bg-fashion-gradient">
      <div className="container mx-auto p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-playfair font-bold text-pink-600">{t.title}</h1>
            {!isEditing ? (
              <Button onClick={() => setIsEditing(true)} className="font-montserrat">
                <Edit className="h-4 w-4 mr-2" />
                {t.edit}
              </Button>
            ) : (
              <div className="flex space-x-2">
                <Button onClick={handleSave} className="bg-pink-600 hover:bg-pink-700 font-montserrat">
                  <Save className="h-4 w-4 mr-2" />
                  {t.save}
                </Button>
                <Button variant="outline" onClick={handleCancel} className="font-montserrat">
                  {t.cancel}
                </Button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Picture & Basic Info */}
            <div className="lg:col-span-1">
              <Card className="bg-white border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User className="h-16 w-16 text-white" />
                  </div>
                  <h2 className="text-xl font-playfair font-semibold text-gray-800 mb-1">{profile.name}</h2>
                  <p className="text-gray-600 font-montserrat mb-4">{profile.email}</p>
                  <div className="text-sm text-gray-500 font-montserrat">
                    <div className="flex items-center justify-center mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      {t.joinDate}: {new Date(profile.joinDate).toLocaleDateString()}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Profile Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Personal Information */}
              <Card className="bg-white border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-playfair text-gray-800">{t.personalInfo}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 font-montserrat">
                        {t.name}
                      </label>
                      {isEditing ? (
                        <Input
                          value={profile.name}
                          onChange={(e) => setProfile({...profile, name: e.target.value})}
                          className="font-montserrat"
                        />
                      ) : (
                        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                          <User className="h-4 w-4 text-gray-400 mr-3" />
                          <span className="font-montserrat">{profile.name}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 font-montserrat">
                        {t.email}
                      </label>
                      {isEditing ? (
                        <Input
                          type="email"
                          value={profile.email}
                          onChange={(e) => setProfile({...profile, email: e.target.value})}
                          className="font-montserrat"
                        />
                      ) : (
                        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                          <Mail className="h-4 w-4 text-gray-400 mr-3" />
                          <span className="font-montserrat">{profile.email}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 font-montserrat">
                        {t.phone}
                      </label>
                      {isEditing ? (
                        <Input
                          value={profile.phone}
                          onChange={(e) => setProfile({...profile, phone: e.target.value})}
                          className="font-montserrat"
                        />
                      ) : (
                        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                          <Phone className="h-4 w-4 text-gray-400 mr-3" />
                          <span className="font-montserrat">{profile.phone}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 font-montserrat">
                        {t.birthDate}
                      </label>
                      {isEditing ? (
                        <Input
                          type="date"
                          value={profile.birthDate}
                          onChange={(e) => setProfile({...profile, birthDate: e.target.value})}
                          className="font-montserrat"
                        />
                      ) : (
                        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                          <Calendar className="h-4 w-4 text-gray-400 mr-3" />
                          <span className="font-montserrat">{new Date(profile.birthDate).toLocaleDateString()}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-montserrat">
                      {t.address}
                    </label>
                    {isEditing ? (
                      <Input
                        value={profile.address}
                        onChange={(e) => setProfile({...profile, address: e.target.value})}
                        className="font-montserrat"
                      />
                    ) : (
                      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <MapPin className="h-4 w-4 text-gray-400 mr-3" />
                        <span className="font-montserrat">{profile.address}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-white border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-playfair text-gray-800">{t.accountSettings}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Button variant="outline" className="h-20 flex-col font-montserrat">
                      <Calendar className="h-6 w-6 mb-2" />
                      {t.orderHistory}
                    </Button>
                    <Button variant="outline" className="h-20 flex-col font-montserrat">
                      <MapPin className="h-6 w-6 mb-2" />
                      {t.addresses}
                    </Button>
                    <Button variant="outline" className="h-20 flex-col font-montserrat">
                      <User className="h-6 w-6 mb-2" />
                      {t.paymentMethods}
                    </Button>
                    <Button variant="outline" className="h-20 flex-col font-montserrat">
                      <Edit className="h-6 w-6 mb-2" />
                      {t.preferences}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
