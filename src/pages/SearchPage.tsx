import Search from "../components/Search";
import Header from "../components/Header";
import ProductListCard from "../components/ProductListCard";
import classes from "./SearchPage.module.css";
import { motion, AnimatePresence } from "framer-motion";

const SearchPage = () => {
  return (
    <div className={classes.container}>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0.5 }}
          transition={{ duration: 0.5 }}>
          <Header showText={true} text={"Search"} showCart={true} />
          <Search />
          <p className={classes.text}>Popular product</p>
          <ProductListCard productId={1} showReviews={true} />
          <ProductListCard productId={5} showReviews={true} />
          <ProductListCard productId={22} showReviews={true} />
        </motion.div>
      </AnimatePresence>    
    </div>
  );
};

export default SearchPage;
