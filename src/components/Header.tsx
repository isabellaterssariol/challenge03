import { Link } from "react-router-dom";
import classes from "./Header.module.css";

type HeaderProps = {
  showText?: boolean;
  text?: string;
  showCart?: boolean;
  showTrash?: boolean;
  onClick?: () => void;
};

const Header: React.FC<HeaderProps> = ({ showText, text, showCart, showTrash, onClick }) => {
    return (
        <header className={classes.header}>
            <div className={classes.homeButton}>
                <Link to="/">
                    <i className="material-symbols-outlined">arrow_back_ios</i>
                </Link>
            </div> 

            <div className={classes.text}>
                {showText && (
                    <p>{text}</p>
                )}
            </div>

            <div className={classes.shoppingButton}>
                {showCart && (
                    <Link to="/cart">
                        <i className="material-symbols-outlined">shopping_cart</i>
                    </Link>
                )}
            </div>

            <div className={classes.trashButton}>
                {showTrash && (
                    <button onClick={onClick} className={classes.button}>
                        <i className="material-symbols-outlined">delete</i>
                    </button>
                )}
            </div>
        </header>
    );
};

export default Header;
