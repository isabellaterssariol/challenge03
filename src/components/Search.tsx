import classes from "./Search.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductListCard from "./ProductListCard";
import { motion, AnimatePresence } from "framer-motion";

interface ProductType {
  id: number;
  name: string;
  price: string;
  rating: number;
  reviews: ReviewType[];
}

interface ReviewType {
  user: string;
  description: string;
  rating: number;
  date: string;
  id: number;
}

const apiUrl = "https://run.mocky.io/v3/2e274c48-e3d7-4b21-820a-c5c3de9f53f5";

const Search = () => {
  const navigate = useNavigate();
  const [searchProduct, setSearchProduct] = useState("");
  const [searchResult, setSearchResult] = useState<ProductType[]>([]);

  const handleInputClick = () => {
    navigate("/search-page");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchProduct(e.target.value);
  };

  useEffect(() => {
    const findResult = async () => {
      try {
        const response = await axios.get<ProductType[]>(apiUrl);
        const results = response.data.filter((item) =>
          item.name.toLowerCase().includes(searchProduct.toLowerCase())
        );
        setSearchResult(results);
      } catch (error) {
        console.error("Error to search result:", error);
      }
    };

    if (searchProduct.trim() !== "") {
      findResult();
    } else {
      setSearchResult([]);
    }
  }, [searchProduct]);

  return (
    <>  
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }} 
          transition={{ duration: 1.5 }}>
          <div className={classes.search}>
            <i className="material-symbols-outlined">search</i>
            <input
              type="text"
              placeholder="Search headphone"
              onChange={handleInputChange}
              onClick={handleInputClick}
              className={classes.inputSearch}
            />
          </div>
        </motion.div>
      </AnimatePresence>  
      <ul>
        {searchProduct.trim() !== "" ? (
          searchResult.length > 0 ? (
            searchResult.map((product) => (
              <li>
                <ProductListCard
                  key={product.id}
                  productId={product.id}
                  showReviews={true}
                />
              </li>  
            ))
          ) : (
            <p className={classes.text}>No products found</p>
          )
        ) : null}
      </ul>
    </>
  );
};

export default Search;
