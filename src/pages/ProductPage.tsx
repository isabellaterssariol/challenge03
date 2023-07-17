import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import headsetImage from "../assets/headsetImage3.png";
import userImage from "../assets/userImage.png";
import classes from './ProductPage.module.css';

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
  const [selectedOption, setSelectedOption] = useState("overview");
  const [product, setProduct] = useState<ProductType | null>(null);

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

  return (
    <>
      <Header />
      <p>{`USD ${Math.round(parseFloat(product.price.replace('$', '')))}`}</p>
      <h1>{product.name}</h1>

      <div>
        <button
          onClick={() => handleOptionChange("overview")}
          className={selectedOption === "overview" ? "active" : ""}>
          Overview
        </button>

        <button
          onClick={() => handleOptionChange("features")}
          className={selectedOption === "features" ? "active" : ""}>
          Features
        </button>
      </div>

      {selectedOption=== "overview" && (
        <div>
          <img
            src={headsetImage}
            alt="Headset"
          />
          <p>{`Reviews (${product.reviews.length})`}</p>
          {product.reviews.map((review) => (
            <div key={review.id}>
              <img
                src={userImage}
                alt="Headset"
              />
              <h3>{review.user}</h3>
              <div className={classes.rating}>
                {renderStars(review.rating)}
              </div>
              <p>{review.description}</p>
            </div>
          ))}
        </div>
      )}

      {selectedOption === "features" && (
        <div>
          <p>{product.description}</p>
        </div>
      )}
    </>
  );
};

export default ProductPage;