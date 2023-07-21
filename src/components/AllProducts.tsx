import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./AllProducts.module.css"

interface ProductType {
  id: number;
  name: string;
  price: string;
  rating: number;
  category: string;
  created_at: string;
  reviews: ReviewType[];
}

interface ReviewType {
  user: string;
  description: string;
  rating: number;
  id: number;
}

interface AllProductsProps {
  filter: string;
  category: string;
}

const apiUrl = "https://run.mocky.io/v3/2e274c48-e3d7-4b21-820a-c5c3de9f53f5";

const AllProducts: React.FC<AllProductsProps> = ({ filter, category }) => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const findProducts = async () => {
        try {
            const response = await axios.get<ProductType[]>(apiUrl);
            setProducts(response.data);
        } catch (error) {
            console.error("Error in finding products:", error);
        }
    };
    findProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    switch (filter) {
      case "popularity":
        filtered.sort((a, b) => 
          b.rating - a.rating
        );
        break;

      case "newest":
        filtered.sort(
          (a, b) =>
            new Date(b.created_at).getTime() -
            new Date(a.created_at).getTime()
        );
        break;

      case "oldest":
        filtered.sort(
          (a, b) =>
            new Date(a.created_at).getTime() -
            new Date(b.created_at).getTime()
        );
        break;

      case "high-price":
        filtered.sort(
          (a, b) =>
            parseFloat(b.price.replace("$", "")) -
            parseFloat(a.price.replace("$", ""))
        );
        break;

      case "low-price":
        filtered.sort(
          (a, b) =>
            parseFloat(a.price.replace("$", "")) -
            parseFloat(b.price.replace("$", ""))
        );
        break;
      
      case "review":
        filtered.sort((a, b) => 
          b.reviews.length - a.reviews.length
        );
        break;

      default:
        console.log("Invalid option")
    }

    return filtered;
  }, [products, filter, category]);

  return (
    <div className={classes.container}>
      {filteredProducts.map((product) => (
        <ProductCard 
          productId={product.id} 
          showReviews={true}
          key={product.id}
        />
      ))}
    </div>
  );
};

export default AllProducts;
  