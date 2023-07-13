import { Link } from "react-router-dom";
import classes from "./Header.module.css";

type HeaderProps = {
  showText?: boolean;
};

const Header: React.FC<HeaderProps> = ({ showText }) => {
  return (
    <header className={classes.header}>
        <div className={classes.homeButton}>
            <Link to="/">
                <i className="material-symbols-outlined">arrow_back_ios</i>
            </Link>
        </div> 

        <div className={classes.searchText}>
            {showText && (
                <p>Search</p>
            )}
        </div>

        <div className={classes.shoppingButton}>
            <Link to="/">
                <i className="material-symbols-outlined">shopping_cart</i>
            </Link>
        </div>
    </header>
  );
};

export default Header;
