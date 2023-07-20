import AllProducts from "../components/AllProducts";
import Header from "../components/Header";
import classes from "./AllProductsPage.module.css";
import { useState } from "react";
import Filter from "../components/Filter";
import { motion, AnimatePresence } from "framer-motion";

const AllProductsPage = () => {
    const [showFilter, setShowFilter] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState("popularity");
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCloseFilter = () => {
        setShowFilter(false);
    };

    const handleOpenFilter = () => {
        setShowFilter(true);
    };

    const handleFilterChange = (filter: string) => {
        setSelectedFilter(filter);
    };

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };

    const handleApplyFilter = () => {
        handleCloseFilter();
    };
    
    return (
        <div className={classes.container}>
            <AnimatePresence mode="wait">
                <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0.5 }}
                transition={{ duration: 0.5 }}>
                    <Header showCart={true}/>
                    <p className={classes.text}>Featured products</p>
                    <h1 className={classes.title}>See all products</h1>
                    <Filter 
                        selectedFilter={selectedFilter}
                        selectedCategory={selectedCategory}
                        handleFilterClick={handleFilterChange}
                        handleCategoryClick={handleCategoryChange}
                        applyFilter={handleApplyFilter}
                        showFilter={showFilter}
                        openFilter={handleOpenFilter}
                        closeFilter={handleCloseFilter}
                    />
                    <AllProducts 
                        filter={selectedFilter}
                        category={selectedCategory}
                    />
                </motion.div>
            </AnimatePresence>  
        </div>
    );
};

export default AllProductsPage;