import { useEffect, useState } from "react";
import axios from "axios";
import headsetImage from "../assets/headsetImage.png";
import classes from "./ProductListCard.module.css"
import starRating from "../assets/starFilled.png"
import { Link } from "react-router-dom";

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

interface ProductListProps {
    productId: number;
    showReviews?: boolean;
    showQuantity?: boolean;
    quantity?: number;
    addOne?: (productId: number) => void;
    removeOne?: (productId: number) => void;
    removeProduct?: (productId: number) => void;
}

const apiUrl = "https://run.mocky.io/v3/2e274c48-e3d7-4b21-820a-c5c3de9f53f5";

const ProductListCard: React.FC<ProductListProps> = ({ 
    productId, 
    showReviews, 
    showQuantity, 
    quantity, 
    addOne, 
    removeOne, 
    removeProduct }) => {

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
                    src={headsetImage}
                    alt="Headset"
                    className={classes.headset}
                />
            </Link>    
            <div className={classes.infoText}>
                <Link to={`/product/${product.id}`} className={classes.link}>
                    <div>
                        <h1>{product.name}</h1>
                        <p className={classes.price}>
                            {`USD ${Math.round(parseFloat(product.price.replace('$', '')))}`}
                        </p>
                    </div>    
                </Link>

                {showReviews && (
                    <Link to={`/product/${product.id}`} className={classes.link}>
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
                    </Link>
                )}
                
                {showQuantity && (
                    <div className={classes.quantity}>
                        {quantity && quantity > 1 ? 
                        <button className={classes.button} onClick={() => removeOne && removeOne(product.id)}>
                            <i className="material-symbols-outlined">remove</i>
                        </button> :
                        <button className={classes.buttonDisabled} disabled>
                            <i className="material-symbols-outlined">remove</i>
                        </button>}

                        <p className={classes.text}>{quantity}</p>

                        {quantity && 
                        <button className={classes.button} onClick={() => addOne && addOne(product.id)}>
                            <i className="material-symbols-outlined">add</i>
                        </button>}

                        {quantity && 
                        <button className={classes.buttonTrash} onClick={() => removeProduct && removeProduct(productId)}>
                            <i className="material-symbols-outlined">delete</i>
                        </button>}
                    </div>
                )}
            </div>                  
        </div>
    );
};

export default ProductListCard;