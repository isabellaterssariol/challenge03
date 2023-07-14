import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

interface SomeProductsProps {
    title: string;
}

const SomeProducts: React.FC<SomeProductsProps> = ({ title }) => {
    return (
        <>
            <div>
                <p>{title}
                <Link to="/">See all</Link>
                </p>
            </div>
            <ProductCard productId={4}/>
        </>
    )
}

export default SomeProducts;