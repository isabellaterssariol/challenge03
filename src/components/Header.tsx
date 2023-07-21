import { Link, useNavigate } from "react-router-dom";
import classes from "./Header.module.css";

type HeaderProps = {
  showText?: boolean;
  text?: string;
  showCart?: boolean;
  showTrash?: boolean;
  onClick?: () => void;
};

const Header: React.FC<HeaderProps> = ({ showText, text, showCart, showTrash, onClick }) => {
    const navigate = useNavigate();
  
    const goBack = () => {
        navigate(-1); 
    };

    return (
        <header className={classes.header}>
            <div className={classes.homeButton}>
                <button onClick={goBack} className={classes.button}>
                    <i className="material-symbols-outlined">arrow_back_ios</i>
                </button>
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
