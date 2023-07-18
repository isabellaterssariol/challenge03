import Header from "../components/Header";
import { useCartContext } from "../components/CartContext";
import SearchCard from "../components/SearchCard";

const CartPage = () => {
  const { cartProducts } = useCartContext();

  const handleTrashChange = () => {
    console.log("Hello World!");
  };

  return (
    <div>
      <Header showText={true} text={"Shopping Cart"} showTrash={true} onClick={handleTrashChange}/>

      {cartProducts.length === 0 ? (
        <p>Empty shopping cart.</p>
      ) : (
        <div>
          {cartProducts.map((product) => (
            <SearchCard key={product.id} productId={product.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
