
interface WishlistProps {
  language: string;
}

const Wishlist = ({ language }: WishlistProps) => {
  return (
    <div className="min-h-screen bg-fashion-gradient p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-playfair font-bold text-pink-600 mb-8">My Wishlist</h1>
        <p className="font-montserrat text-gray-600">Wishlist functionality will be implemented here.</p>
      </div>
    </div>
  );
};

export default Wishlist;
