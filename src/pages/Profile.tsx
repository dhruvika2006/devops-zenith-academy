
interface ProfileProps {
  language: string;
}

const Profile = ({ language }: ProfileProps) => {
  return (
    <div className="min-h-screen bg-fashion-gradient p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-playfair font-bold text-pink-600 mb-8">My Profile</h1>
        <p className="font-montserrat text-gray-600">User profile and account settings will be implemented here.</p>
      </div>
    </div>
  );
};

export default Profile;
