import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import axios from "axios";
import CategoryCard from "./CategoryCard";
import classes from "./CategoryStore.module.css"

interface ProductType {
  id: number;
  category: string;
}

const apiUrl = "https://run.mocky.io/v3/8658d4c7-1a28-49a1-bfa8-801a536ba6c3";

const CategoryStore = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Headphones");

  useEffect(() => {
    const findProduct = async () => {
      try {
        const response = await axios.get<ProductType[]>(apiUrl);
        setProducts(response.data);
      } catch (error) {
        console.error("Error in finding products:", error);
      }
    };

    findProduct();
  }, []);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  let filteredProducts = products;
  if (selectedCategory) {
    filteredProducts = products.filter(
      (product) => product.category === selectedCategory
    );
  }

  return (
    <div className={classes.container}>
      <div className={classes.categories}>
        <button
          className={`${classes.categoryButton} ${selectedCategory === "Headphones" ? classes.active : ""}`}
          onClick={() => handleCategoryClick("Headphones")}>
          Headphones
        </button>
        <button
          className={`${classes.categoryButton} ${selectedCategory === "Headsets" ? classes.active : ""}`}
          onClick={() => handleCategoryClick("Headsets")}>
          Headsets
        </button>
      </div>
      <Splide
        options={{
          perPage: 2,
          perMove: 1,
          arrows: false,
          pagination: false,
          gap: "21.875rem",
        }}>
        {filteredProducts.map((product) => (
          <SplideSlide key={product.id}>
            <CategoryCard productId={product.id} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default CategoryStore;
