import AllProducts from "../components/AllProducts";
import Header from "../components/Header";

const AllProductsPage = () => {
    return (
        <>
            <Header />
            <p>Featured products</p>
            <h1>See all products</h1>
            <AllProducts />
        </>
    )
}

export default AllProductsPage;