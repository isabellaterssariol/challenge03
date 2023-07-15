import { useEffect, useState } from "react";
import axios from "axios";
import headsetImage from "../assets/headsetImage.png";
import classes from "./SearchCard.module.css"
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

interface SearchCardProps {
    productId: number;
}

const apiUrl = 'https://run.mocky.io/v3/8658d4c7-1a28-49a1-bfa8-801a536ba6c3';

const SearchCard: React.FC<SearchCardProps> = ({ productId }) => {
    const [product, setProduct] = useState<ProductType | null>(null);
    
    useEffect(() => {
        const findProduct = async () => {
            try {
                const response = await axios.get(apiUrl);
                const productData = response.data.find(
                    (item: ProductType) => item.id === productId
                );
                setProduct(productData);
            } catch (error) {
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
            <img
                src={headsetImage}
                alt="Headset"
                className={classes.headset}
            />
            <div className={classes.infoText}>
                <h1>{product.name}</h1>
                <p className={classes.price}>
                    {`USD ${Math.round(parseFloat(product.price.replace('$', '')))}`}
                </p>
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
            </div>
        </div>
    );
};

export default SearchCard;