import Header from "../components/Header";
import { useCartContext } from "../components/CartContext";
import SearchCard from "../components/SearchCard";
import Button from "../components/Button";

const CartPage = () => {
  const { cartProducts, addToCart, removeFromCart, removeProduct, removeAll } = useCartContext();

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
    <div>
      <Header showText={true} text={"Shopping Cart"} showTrash={true} onClick={handleTrashClick}/>

      {cartProducts.length === 0 ? (
        <p>Empty shopping cart.</p>
      ) : (
        <div>
          {exclusiveId.map((productId) => (
            <div key={productId}>
              <SearchCard 
              productId={productId} 
              showQuantity={true}
              quantity={quantityProduct[productId]} 
              addOne={addOneProduct}
              removeOne={removeOneProduct}
              removeProduct={removeProductFromCart}
              />
            </div>
          ))}
        </div>
      )}

    <p>{`Total ${totalItems()} item(s)`}</p>
    <p>{`USD ${totalPrice()}`}</p>
    <Button text={"Proceed to Checkout"}/>
    </div>
  );
};

export default CartPage;
