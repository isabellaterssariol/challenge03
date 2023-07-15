import AllProducts from "../components/AllProducts";
import Header from "../components/Header";
import classes from "./AllProductsPage.module.css"

const AllProductsPage = () => {
    return (
        <div className={classes.container}>
            <Header />
            <p className={classes.text}>Featured products</p>
            <h1 className={classes.title}>See all products</h1>
            <AllProducts />
        </div>
    )
}

export default AllProductsPage;