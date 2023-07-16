import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import classes from "./SomeProducts.module.css"

interface SomeProductsProps {
    title: string;
}

const SomeProducts: React.FC<SomeProductsProps> = ({ title }) => {
    return (
        <div className={classes.container}>
            <div className={classes.infoText}>
                <p className={classes.title}>{title}</p>
                <p><Link to="/all-products" className={classes.link}>See All</Link></p>
            </div>
            <div>
                <Splide
                    options={{
                    perPage: 3,
                    perMove: 1,
                    arrows: false,
                    pagination: false,
                    gap: "165px",
                    }}>
                    <SplideSlide>
                        <ProductCard productId={4}/> 
                    </SplideSlide>
                    <SplideSlide>
                        <ProductCard productId={6}/> 
                    </SplideSlide>
                    <SplideSlide>
                        <ProductCard productId={22}/> 
                    </SplideSlide>
                    <SplideSlide>
                        <ProductCard productId={31}/> 
                    </SplideSlide>
                    <SplideSlide>
                        <ProductCard productId={22}/> 
                    </SplideSlide>
                    <SplideSlide>
                        <ProductCard productId={25}/> 
                    </SplideSlide>
                    <SplideSlide>
                        <ProductCard productId={15}/> 
                    </SplideSlide>
                    <SplideSlide>
                        <ProductCard productId={27}/> 
                    </SplideSlide>
                </Splide>
            </div>
            
        </div>
    )
}

export default SomeProducts;