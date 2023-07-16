import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import classes from "./Filter.module.css";
import Button from "./Button";

interface FilterProps {
    selectedFilter: string;
    selectedCategory: string;
    handleFilterClick: (filter: string) => void;
    handleCategoryClick: (category: string) => void;
    applyFilter: () => void;
    showFilter: boolean;
    openFilter: () => void;
    closeFilter: () => void;
}

const Filter: React.FC<FilterProps> = ({
    selectedFilter,
    selectedCategory,
    handleFilterClick,
    handleCategoryClick,
    applyFilter,
    showFilter,
    openFilter,
    closeFilter, }) => {

  return (
    <div>
        <button onClick={openFilter} className={classes.filterButton}>
            <i className="material-symbols-outlined">instant_mix</i>
            Filter
        </button>
        <BottomSheet 
            open={showFilter} 
            onDismiss={closeFilter}>

            <div className={classes.filterOpened}>
                <div className={classes.header}>
                    <h1>Filter</h1>
                    <button onClick={closeFilter}>X</button>
                </div>

                <div className={classes.categories}>
                    <h2>Category</h2>
                    <label className={`${classes.labelCategory} ${selectedCategory === "" ? classes.active : ""}`}>
                        <input
                            type="radio"
                            name="category"
                            value=""
                            checked={selectedCategory === ""}
                            onChange={() => handleCategoryClick("")}
                        />
                        All
                    </label>

                    <label className={`${classes.labelCategory} ${selectedCategory === "Headphones" ? classes.active : ""}`}>
                        <input
                            type="radio"
                            name="category"
                            value="Headphones"
                            checked={selectedCategory === "Headphones"}
                            onChange={() => handleCategoryClick("Headphones")}
                        />
                        Headphones
                    </label>

                    <label className={`${classes.labelCategory} ${selectedCategory === "Headsets" ? classes.active : ""}`}>
                        <input
                            type="radio"
                            name="category"
                            value="Headsets"
                            checked={selectedCategory === "Headsets"}
                            onChange={() => handleCategoryClick("Headsets")}
                        />
                        Headsets
                    </label>
                </div>    

                <div className={classes.filter}>
                    <h2>Sort By</h2>
                    <label className={`${classes.labelFilter} ${selectedFilter === "popularity" ? classes.active : ""}`}>
                        <input
                            type="radio"
                            name="filter"
                            value="popularity"
                            checked={selectedFilter === "popularity"}
                            onChange={() => handleFilterClick("popularity")}
                        />
                        Popularity
                    </label>

                    <label className={`${classes.labelFilter} ${selectedFilter === "newest" ? classes.active : ""}`}>
                        <input
                            type="radio"
                            name="filter"
                            value="newest"
                            checked={selectedFilter === "newest"}
                            onChange={() => handleFilterClick("newest")}
                        />
                        Newest
                    </label>

                    <label className={`${classes.labelFilter} ${selectedFilter === "oldest" ? classes.active : ""}`}>
                        <input
                            type="radio"
                            name="filter"
                            value="oldest"
                            checked={selectedFilter === "oldest"}
                            onChange={() => handleFilterClick("oldest")}
                        />
                        Oldest
                    </label>

                    <label className={`${classes.labelFilter} ${selectedFilter === "high-price" ? classes.active : ""}`}>
                        <input
                            type="radio"
                            name="filter"
                            value="high-price"
                            checked={selectedFilter === "high-price"}
                            onChange={() => handleFilterClick("high-price")}
                        />
                        High Price
                    </label>

                    <label className={`${classes.labelFilter} ${selectedFilter === "low-price" ? classes.active : ""}`}>
                        <input
                            type="radio"
                            name="filter"
                            value="low-price"
                            checked={selectedFilter === "low-price"}
                            onChange={() => handleFilterClick("low-price")}
                        />
                        Low price
                    </label>

                    <label className={`${classes.labelFilter} ${selectedFilter === "review" ? classes.active : ""}`}>
                        <input
                            type="radio"
                            name="filter"
                            value="review"
                            checked={selectedFilter === "review"}
                            onChange={() => handleFilterClick("review")}
                        />
                        Review
                    </label>
                </div>    

                <Button text={"Apply Filter"} onClick={applyFilter}></Button>
            </div>
        </BottomSheet>
    </div>
    );
};

export default Filter;
