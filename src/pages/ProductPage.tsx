import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

interface ProductType {
  id: number;
  name: string;
  price: string;
  reviews: ReviewType[];
  description: string;
}

interface ReviewType {
  user: string;
  description: string;
  rating: number;
  id: number;
}

const apiUrl = 'https://run.mocky.io/v3/8658d4c7-1a28-49a1-bfa8-801a536ba6c3';

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    const findDataProduct = async () => {
      try {
        const response = await axios.get(apiUrl);
        const productData = response.data.find(
          (item: ProductType) => item.id === Number(productId)
        );
        setProduct(productData);
      } catch (error) {
        console.error("Error in finding product:", error);
      }
    }; 

    findDataProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <p>{`USD ${Math.round(parseFloat(product.price.replace('$', '')))}`}</p>
      <h2>{product.name}</h2>
    </>
  );
};

export default ProductPage;