import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
}

const apiUrl = "https://run.mocky.io/v3/8658d4c7-1a28-49a1-bfa8-801a536ba6c3";

const AllProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
  
    useEffect(() => {
        const findProducts = async () => {
            try {
                const response = await axios.get<Product[]>(apiUrl);
                setProducts(response.data);
            } catch (error) {
                console.error("Error in finding products:", error);
            }
        };
  
        findProducts();
    }, []);
  
    return (
      <div>
        {products.map((product) => (
          <ProductCard productId={product.id} showReviews={true}/>
        ))}
      </div>
    );
};

export default AllProducts;
  