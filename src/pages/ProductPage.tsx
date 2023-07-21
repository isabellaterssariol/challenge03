import Header from "../components/Header";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import headsetImage from "../assets/headsetImage3.png";
import userImage from "../assets/userImage.png";
import classes from './ProductPage.module.css';
import Button from "../components/Button";
import SomeProducts from "../components/SomeProducts";
import { useCartContext } from "../components/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";

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
  date: string;
  id: number;
}

const apiUrl = "https://run.mocky.io/v3/2e274c48-e3d7-4b21-820a-c5c3de9f53f5";

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const [selectedOption, setSelectedOption] = useState("overview");
  const [product, setProduct] = useState<ProductType | null>(null);
  const navigate = useNavigate();
  const { addToCart } = useCartContext();

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const renderStars = (rating: number) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      const starClass = i <= rating ? classes.starFilled : classes.starOutlined;
      stars.push(<div key={i} className={starClass} />);
    }

    return stars;
  };

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

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/cart'); 
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1  }}
        exit={{ x: "-100%", opacity: 0.5 }}
        transition={{ duration: 0.5 }}>
        <div className={classes.container}>
          <Header showCart={true}/>
          <p className={classes.price}>{`USD ${Math.round(parseFloat(product.price.replace('$', '')))}`}</p>
          <h1 className={classes.title}>{product.name}</h1>

          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }} 
            transition={{ duration: 1.5 }}>
            <div className={classes.optionsButton}>
              <button
                onClick={() => handleOptionChange("overview")}
                className={`${classes.options} ${selectedOption === "overview" ? classes.active : ""}`}>
                Overview
              </button>

              <button
                onClick={() => handleOptionChange("features")}
                className={`${classes.options} ${selectedOption === "features" ? classes.active : ""}`}>
                Features
              </button>
            </div>
          </motion.div>

          {selectedOption=== "overview" && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5 }}>
              <div className={classes.overview}>
                <img
                  src={headsetImage}
                  alt="Headset"
                  className={classes.imageHeadset}
                />
                <p className={classes.reviewsLength}>{`Reviews (${product.reviews.length})`}</p>
                {product.reviews.map((review) => (
                  <div key={review.id} className={classes.review}>
                    <img
                      src={userImage}
                      alt="Headset"
                      className={classes.userImage}
                    />
                    <div className={classes.userInfo}> 
                      <div className={classes.titleUser}>
                        <h3>{review.user}</h3>
                        <p className={classes.date}>{format(new Date(review.date), "dd/MM/yyyy")}</p>
                      </div>
                      <div className={classes.stars}>{renderStars(review.rating)}</div>
                    </div>
                    <p className={classes.description}>{review.description}</p>
                  </div>
                ))}
                <div className={classes.someProducts}>
                  <SomeProducts title={"Another Product"}/>
                </div>
              </div>
            </motion.div>
          )}

          {selectedOption === "features" && ( 
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5 }}>
              <div className={classes.features}>
                <p>{product.description}</p>
              </div>
            </motion.div>
          )}
          <div className ={classes.button}>
            <Button text={"Add To Cart"} onClick={handleAddToCart}/>
          </div>
        </div>  
      </motion.div>
    </AnimatePresence>  
  );
};

export default ProductPage;