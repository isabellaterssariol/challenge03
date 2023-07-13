import classes from "./Search.module.css"
import { useNavigate } from "react-router-dom";

const Search = () => {
    const navigate = useNavigate();

    const handleInput = () => {
        navigate("/search-page");
    };

    return (
        <>
            <div className={classes.search}>
                <i className="material-symbols-outlined">search</i>
                <input
                    type="text"
                    placeholder="Search headphone"
                    onClick={handleInput}
                    className={classes.inputSearch}
                />
            </div>
        </>
    )
}

export default Search;