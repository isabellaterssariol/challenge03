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
                <p>
                    <Link to="/all-products" className={classes.link}>
                        See All
                    </Link>
                </p>
            </div>
            <div>
                <Splide
                    options={{
                        autoWidth: true,
                        rewind: true,
                        arrows: false,
                        pagination: false,
                    }}>
                    <SplideSlide>
                        <ProductCard productId={17}/> 
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
                        <ProductCard productId={5}/> 
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
                    <SplideSlide>
                        <ProductCard productId={19}/> 
                    </SplideSlide>
                    <SplideSlide>
                        <ProductCard productId={7}/> 
                    </SplideSlide>
                    <SplideSlide>
                        <ProductCard productId={23}/> 
                    </SplideSlide>
                    <SplideSlide>
                        <ProductCard productId={29}/> 
                    </SplideSlide>
                    <SplideSlide>
                        <ProductCard productId={4}/> 
                    </SplideSlide>
                    <SplideSlide>
                        <ProductCard productId={26}/> 
                    </SplideSlide>
                    <SplideSlide>
                        <ProductCard productId={16}/> 
                    </SplideSlide>
                    <SplideSlide>
                        <ProductCard productId={28}/> 
                    </SplideSlide>
                </Splide>
            </div>  
        </div>
    );
};

export default SomeProducts;