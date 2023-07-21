import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import "./burger-menu-style/BurgerMenu.css";
import classes from "./NavBar.module.css";
import menuBurger from "../assets/menuBurger.png";
import logo from "../assets/audioLogo.png";

interface NavBarProps {
    photo?: string;
    showTrash?: boolean;
    onClick?: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ photo, showTrash, onClick }) => {
    return (
        <div className={classes.container}>  
            <div className={classes.burgerMenu}>
                <Menu customBurgerIcon={<img src={menuBurger} alt="Menu Burger" />}>
                    <NavLink to="/" className={classes.link}>Home</NavLink>
                    <NavLink to="/all-products" className={classes.link}>Products</NavLink>
                    <NavLink to="/cart" className={classes.link}>Shopping Cart</NavLink>
                </Menu>
            </div>
            <div className={classes.logo}>
                <img 
                    src={logo} 
                    alt="Logo Audio"
                    className={classes.logoImage}
                />
                <p className={classes.logoName}>Audio</p>
            </div>
            <div className={classes.navBar}>
                <NavLink to="/" className={`${classes.linkNav} ${window.location.pathname === "/" ? classes.active : ""}`}>Home</NavLink>

                <NavLink to="/all-products" className={`${classes.linkNav} ${window.location.pathname === "/all-products" ? classes.active : ""}`}>Products</NavLink>

                <NavLink to="/cart" className={`${classes.linkNav} ${window.location.pathname === "/cart" ? classes.active : ""}`}>Shopping Cart</NavLink>
            </div>
            {photo && (
                <div className={classes.imageNav}>
                    <img 
                        src={photo} 
                        alt="User Avatar" 
                        className={classes.photoUser}
                    />
                </div>
            )}

            <div className={classes.trashButton}>
                {showTrash && (
                    <button onClick={onClick} className={classes.button}>
                        <i className="material-symbols-outlined">delete</i>
                    </button>
                )}
            </div>
        </div>
    );
};

export default NavBar;