import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

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
            <div>
                <Splide
                    options={{
                    perPage: 2,
                    perMove: 1,
                    arrows: false,
                    pagination: false,
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
            
        </>
    )
}

export default SomeProducts;