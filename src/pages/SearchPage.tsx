import Search from "../components/Search"
import Header from "../components/Header";
import SearchCard from "../components/SearchCard";

const SearchPage = () => {
    return (
        <>
            <Header showText={true}/>
            <Search />
            <p>Popular product</p>
            <SearchCard productId={1} />
            <SearchCard productId={5} />
            <SearchCard productId={22} />
        </>
    )
}

export default SearchPage;