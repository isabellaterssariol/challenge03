import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import axios from "axios";
import CategoryCard from "./CategoryCard";

interface ProductType {
  id: number;
  category: string;
}

const apiUrl = "https://run.mocky.io/v3/8658d4c7-1a28-49a1-bfa8-801a536ba6c3";
const categoryCheck = "Headphones";

const CategoryStore = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categoryCheck
  );

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
    <>
      <div>
        <button
          className={selectedCategory === "Headphones" ? "active" : ""}
          onClick={() => handleCategoryClick("Headphones")}>
          Headphones
        </button>
        <button
          className={selectedCategory === "Headsets" ? "active" : ""}
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
          gap: "370px",
        }}>
        {filteredProducts.map((product) => (
          <SplideSlide key={product.id}>
            <CategoryCard productId={product.id} />
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};

export default CategoryStore;
