import { useEffect, useState } from "react";
import axios from "axios";
import headsetImage2 from "../assets/headsetImage2.png";
import classes from "./ProductCard.module.css"
import { Link } from "react-router-dom";
import starRating from "../assets/starFilled.png"

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

interface ProductCardProps {
    productId: number;
    showReviews?: boolean;
}

const apiUrl = "https://run.mocky.io/v3/2e274c48-e3d7-4b21-820a-c5c3de9f53f5";

const ProductCard: React.FC<ProductCardProps> = ({ productId, showReviews }) => {
    const [product, setProduct] = useState<ProductType | null>(null);
    
    useEffect(() => {
        const findProduct = async () => {
            try {
                const response = await axios.get(apiUrl);
                const productData = response.data.find(
                    (item: ProductType) => item.id === productId
                );
                setProduct(productData);
            }   catch (error) {
                console.error("Error in finding product:", error);
            }
        }; 

        findProduct();
    }, [productId]);
    
    if (!product) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className={classes.container}>
            <Link to={`/product/${product.id}`} className={classes.link}>
                <img
                    src={headsetImage2}
                    alt="Headset"
                    className={classes.headset}
                />
                <div className={classes.infoText}>
                    <h1>{product.name}</h1>
                    <p className={classes.price}>
                        {`USD ${Math.round(parseFloat(product.price.replace('$', '')))}`}
                    </p>
                </div>

                {showReviews && (
                    <div className={classes.reviews}>
                        <img
                            src={starRating}
                            alt="Star"
                            className={classes.star}
                        /> 
                        <p className={classes.rating}>{product.rating}</p>
                        <p>{`${product.reviews.length} Reviews`}</p>
                        <i className="material-symbols-outlined">more_vert</i>
                    </div> 
                )}
            </Link>
        </div>
    );
};

export default ProductCard;