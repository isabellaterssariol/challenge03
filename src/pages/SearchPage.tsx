import Search from "../components/Search";
import Header from "../components/Header";
import ProductListCard from "../components/ProductListCard";
import classes from "./SearchPage.module.css";
import NavBar from "../components/NavBar";

const SearchPage = () => {
  return (
      <div className={classes.container}>
        <Header showText={true} text={"Search"} showCart={true} />
        <div className={classes.navBar}> 
          <NavBar />
        </div>
        <Search />
        <p className={classes.text}>Popular product</p>
        <ProductListCard productId={1} showReviews={true} />
        <ProductListCard productId={5} showReviews={true} />
        <ProductListCard productId={22} showReviews={true} />
      </div>  
  );
};

export default SearchPage;
