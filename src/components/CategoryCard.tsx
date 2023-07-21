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

const apiUrl = "https://run.mocky.io/v3/2e274c48-e3d7-4b21-820a-c5c3de9f53f5";

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
            <div>
                <h1>{product.name}</h1>
                <Link to={`/product/${product.id}`} className={classes.productLink}>
                    <p className={classes.shopText}>Shop now</p>
                    <i className="material-symbols-outlined">arrow_forward</i>
                </Link>
            </div>
            <Link to={`/product/${product.id}`}>
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