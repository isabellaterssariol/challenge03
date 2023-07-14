import { useEffect, useState } from "react";
import axios from "axios";
import headsetImage2 from "../assets/headsetImage2.png";
import classes from "./CategoryCard.module.css"
import { Link } from "react-router-dom";

interface ProductType {
    id: number;
    name: string;
}

interface CategoryCardProps {
    productId: number;
}

const apiUrl = 'https://run.mocky.io/v3/8658d4c7-1a28-49a1-bfa8-801a536ba6c3';

const CategoryCard: React.FC<CategoryCardProps> = ({ productId }) => {
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
            <div className={classes.infoText}>
                <h1>{product.name}</h1>
                <Link to="/" className={classes.productLink}>
                    <p className={classes.shopText}>Shop now</p>
                    <i className="material-symbols-outlined">arrow_forward</i>
                </Link>
            </div>
            <Link to="/">
                <img
                src={headsetImage2}
                alt="Headset"
                className={classes.headset}
                />
            </Link>
        </div>
    );
};

export default CategoryCard;