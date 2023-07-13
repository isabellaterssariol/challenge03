import Search from "../components/Search"
import Header from "../components/Header";

const SearchPage = () => {
    return (
        <>
            <Header showText={true}/>
            <Search />
            <p>Popular product</p>
        </>
    )
}

export default SearchPage;