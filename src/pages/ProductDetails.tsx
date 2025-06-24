
import { useParams } from "react-router-dom";

interface ProductDetailsProps {
  language: string;
}

const ProductDetails = ({ language }: ProductDetailsProps) => {
  const { id } = useParams();
  
  return (
    <div className="min-h-screen bg-fashion-gradient p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-playfair font-bold text-pink-600 mb-8">Product Details</h1>
        <p className="font-montserrat text-gray-600">Product details for item {id} will be implemented here with VR try-on feature.</p>
      </div>
    </div>
  );
};

export default ProductDetails;
