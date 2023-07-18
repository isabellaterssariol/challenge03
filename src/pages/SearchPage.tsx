import Search from "../components/Search"
import Header from "../components/Header";
import SearchCard from "../components/SearchCard";
import classes from "./SearchPage.module.css";

const SearchPage = () => {
    return (
        <div className={classes.container}>
            <Header showText={true} text={"Search"} showCart={true}/>
            <Search />
            <p className={classes.text}>Popular product</p>
            <SearchCard productId={1} />
            <SearchCard productId={5} />
            <SearchCard productId={22} />
        </div>
    )
}

export default SearchPage;