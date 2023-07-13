import classes from "./Search.module.css"

const Search = () => {
    return (
        <>
            <div className={classes.search}>
                <i className="material-symbols-outlined">search</i>
                <input
                    type="text"
                    placeholder="Search headphone"
                    className={classes.inputSearch}
                />
            </div>
        </>
    )
}

export default Search;