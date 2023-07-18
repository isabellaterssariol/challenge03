import Header from "../components/Header";
import { useCartContext } from "../components/CartContext";
import SearchCard from "../components/SearchCard";

const CartPage = () => {
  const { cartProducts } = useCartContext();

  const handleTrashChange = () => {
    console.log("Hello World!");
  };

  const quantityProduct: { [key: number]: number } = {};
  for (const product of cartProducts) {
    quantityProduct[product.id] = (quantityProduct[product.id] || 0) + 1;
  }

  const exclusiveId = Array.from(
    new Set(cartProducts.map((product) => product.id))
  );

  return (
    <div>
      <Header showText={true} text={"Shopping Cart"} showTrash={true} onClick={handleTrashChange}/>

      {cartProducts.length === 0 ? (
        <p>Empty shopping cart.</p>
      ) : (
        <div>
          {exclusiveId.map((productId) => (
            <div key={productId}>
              <SearchCard 
              productId={productId} 
              showQuantity={true}
              quantity={quantityProduct[productId]} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;