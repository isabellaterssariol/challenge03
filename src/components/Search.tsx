import classes from "./Search.module.css"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchCard from "./SearchCard";

interface ProductType {
    id: number;
    name: string;
    price: string;
    rating: number;
    reviews: ReviewType[];
}
  
interface ReviewType {
    user: string;
    description: string;
    rating: number;
    date: string;
    id: number;
}

const apiUrl = "https://run.mocky.io/v3/8658d4c7-1a28-49a1-bfa8-801a536ba6c3";

const Search = () => {
    const navigate = useNavigate();
    const [searchProduct, setSearchProduct] = useState("");
    const [searchResult, setSearchResult] = useState<ProductType[]>([]);

    const handleInputClick = () => {
        navigate("/search-page");
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchProduct(e.target.value);
    }

    useEffect(() => {
        const findResult = async () => {
            try {
                const response = await axios.get<ProductType[]>(apiUrl);
                const results = response.data.filter(
                    (item) => item.name.toLowerCase().includes(searchProduct.toLowerCase())
                );
                setSearchResult(results);
            } catch (error) {
                console.error("Error to search result:", error);
            }
        };
    
        if (searchProduct.trim() !== "") {
            findResult();
        } else {
          setSearchResult([]);
        }
    }, [searchProduct]);

    return (
        <>
            <div className={classes.search}>
                <i className="material-symbols-outlined">search</i>
                <input
                    type="text"
                    placeholder="Search headphone"
                    onChange={handleInputChange}
                    onClick={handleInputClick}
                    className={classes.inputSearch}
                />
            </div>
            <div>
                {searchProduct.trim() !== "" ? (searchResult.length > 0 ? (searchResult.map((product) => (
                    <SearchCard key={product.id} productId={product.id} />
                ))) : (
                    <p>No product was found.</p>
                )
                ) : null}
            </div>
        </>
    );
};

export default Search;