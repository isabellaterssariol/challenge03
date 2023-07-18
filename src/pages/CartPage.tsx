import Header from '../components/Header';

const CartPage = () => {
  const handleTrashChange = () => {
    console.log("Hello World!");
  };

  return (
    <div>
      <Header showText={true} text={"Shopping Cart"} showTrash={true} onClick={handleTrashChange}/>
    </div>
  );
};

export default CartPage;
