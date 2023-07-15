import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";

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
        <button onClick={openFilter}>Filtro</button>
        <BottomSheet 
            open={showFilter} 
            onDismiss={closeFilter}>

            <h1>Filter</h1>
            <button onClick={closeFilter}>X</button>

            <div>
                <h2>Category</h2>
                <label>
                    <input
                        type="radio"
                        name="category"
                        value=""
                        checked={selectedCategory === ""}
                        onChange={() => handleCategoryClick("")}
                    />
                    All
                </label>

                <label>
                    <input
                        type="radio"
                        name="category"
                        value="Headphones"
                        checked={selectedCategory === "Headphones"}
                        onChange={() => handleCategoryClick("Headphones")}
                    />
                    Headphones
                </label>

                <label>
                    <input
                        type="radio"
                        name="category"
                        value="Headsets"
                        checked={selectedCategory === "Headsets"}
                        onChange={() => handleCategoryClick("Headsets")}
                    />
                    Headsets
                </label>

                <h2>Sort by</h2>
                <label>
                    <input
                        type="radio"
                        name="filter"
                        value="popularity"
                        checked={selectedFilter === "popularity"}
                        onChange={() => handleFilterClick("popularity")}
                    />
                    Popularity
                </label>

                <label>
                    <input
                        type="radio"
                        name="filter"
                        value="newest"
                        checked={selectedFilter === "newest"}
                        onChange={() => handleFilterClick("newest")}
                    />
                    Newest
                </label>

                <label>
                    <input
                        type="radio"
                        name="filter"
                        value="oldest"
                        checked={selectedFilter === "oldest"}
                        onChange={() => handleFilterClick("oldest")}
                    />
                    Oldest
                </label>

                <label>
                    <input
                        type="radio"
                        name="filter"
                        value="high-price"
                        checked={selectedFilter === "high-price"}
                        onChange={() => handleFilterClick("high-price")}
                    />
                    High Price
                </label>

                <label>
                    <input
                        type="radio"
                        name="filter"
                        value="low-price"
                        checked={selectedFilter === "low-price"}
                        onChange={() => handleFilterClick("low-price")}
                    />
                    Low price
                </label>

                <label>
                    <input
                        type="radio"
                        name="filter"
                        value="review"
                        checked={selectedFilter === "review"}
                        onChange={() => handleFilterClick("review")}
                    />
                    Review
                </label>

                <button onClick={applyFilter}>Aplly Filter</button>
            </div>
        </BottomSheet>
    </div>
    );
};

export default Filter;
