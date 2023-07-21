import Header from "../components/Header";
import { useCartContext } from "../components/CartContext";
import ProductListCard from "../components/ProductListCard";
import Button from "../components/Button";
import classes from "./CartPage.module.css";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";

const CartPage = () => {
  const { cartProducts, addToCart, removeFromCart, removeProduct, removeAll } =
    useCartContext();

  const handleTrashClick = () => {
    removeAll();
  };

  const quantityProduct: { [key: number]: number } = {};
  for (const product of cartProducts) {
    quantityProduct[product.id] = (quantityProduct[product.id] || 0) + 1;
  }

  const exclusiveId = Array.from(
    new Set(cartProducts.map((product) => product.id))
  );

  const addOneProduct = (productId: number) => {
    const productAdd = cartProducts.find((product) => product.id === productId);
    if (productAdd) {
      addToCart(productAdd);
    }
  };

  const removeOneProduct = (productId: number) => {
    removeFromCart(productId);
  };

  const removeProductFromCart = (productId: number) => {
    removeProduct(productId);
  };

  const totalItems = () => {
    return cartProducts.length;
  };

  const totalPrice = () => {
    return cartProducts.reduce((total, product) => {
      return total + Math.round(parseFloat(product.price.replace("$", "")));
    }, 0);
  };

  return (
    <>
      <Header
        showText={true}
        text={"Shopping Cart"}
        showTrash={true}
        onClick={handleTrashClick}
      />
      <div className={classes.navBar}> 
        <NavBar 
          showTrash={true}
          onClick={handleTrashClick}
        />
      </div>
      <div className={classes.container}>
        {cartProducts.length === 0 ? (
          <p>Empty shopping cart</p>
        ) : (
          <ul>
            {exclusiveId.map((productId) => (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 1 }}>
                <div key={productId}>
                  <li>
                    <ProductListCard
                      productId={productId}
                      showQuantity={true}
                      quantity={quantityProduct[productId]}
                      addOne={addOneProduct}
                      removeOne={removeOneProduct}
                      removeProduct={removeProductFromCart}
                    />
                  </li>
                </div>
              </motion.div>
            ))}
          </ul>
        )}

        <div className={classes.footer}>
          <div className={classes.total}>
            <p
              className={classes.totalItems}
            >{`Total ${totalItems()} Item(s)`}</p>
            <p className={classes.totalPrice}>{`USD ${totalPrice()}`}</p>
          </div>
          <div className={classes.button}>
            <Button text={"Proceed to Checkout"} showArrow={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
