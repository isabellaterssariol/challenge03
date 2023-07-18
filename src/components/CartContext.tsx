import { createContext, useState, useContext } from "react";

interface ProductType {
    id: number;
}

interface CartContextProps {
    cartProducts: ProductType[];
    addToCart: (product: ProductType) => void;
}

const CartContext = createContext<CartContextProps>({
    cartProducts: [],
    addToCart: () => {},
});

const useCartContext = () => {
    return useContext(CartContext);
}

const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartProducts, setCartProducts] = useState<ProductType[]>([]);

    const addToCart = (product: ProductType) => {
        setCartProducts([...cartProducts, product]);
    };
    
    return (
        <CartContext.Provider value={{ cartProducts, addToCart }}>
        {children}
        </CartContext.Provider>
    );
};

export { useCartContext, CartProvider };

