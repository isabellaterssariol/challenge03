import { createContext, useState, useContext } from "react";

interface ProductType {
    id: number;
}

interface CartContextProps {
    cartProducts: ProductType[];
    addToCart: (product: ProductType) => void;
    removeFromCart: (productId: number) => void;
}

const CartContext = createContext<CartContextProps>({
    cartProducts: [],
    addToCart: () => {},
    removeFromCart: () => {},
});

const useCartContext = () => {
    return useContext(CartContext);
}

const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartProducts, setCartProducts] = useState<ProductType[]>([]);

    const addToCart = (product: ProductType) => {
        setCartProducts([...cartProducts, product]);
    };

    const removeFromCart = (productId: number) => {
        const productIndex = cartProducts.findIndex((product) => product.id === productId);
      
        if (productIndex !== -1) {
            const newCartProducts = [...cartProducts];
            newCartProducts.splice(productIndex, 1);
            setCartProducts(newCartProducts);
        }
    };
    
    return (
        <CartContext.Provider value={{ cartProducts, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    );
};

export { useCartContext, CartProvider };

