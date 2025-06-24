
interface CartProps {
  language: string;
}

const Cart = ({ language }: CartProps) => {
  return (
    <div className="min-h-screen bg-fashion-gradient p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-playfair font-bold text-pink-600 mb-8">Shopping Cart</h1>
        <p className="font-montserrat text-gray-600">Shopping cart functionality will be implemented here.</p>
      </div>
    </div>
  );
};

export default Cart;
