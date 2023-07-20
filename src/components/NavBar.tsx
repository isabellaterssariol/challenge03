import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./burger-menu-style/BurgerMenu.css";
import classes from "./NavBar.module.css";
import menuBurger from "../assets/menuBurger.png";
import logo from "../assets/audioLogo.png";

interface NavBarProps {
  photo: string;
}

const NavBar: React.FC<NavBarProps> = ({ photo }) => {
    return (
        <div className={classes.container}>  
            <div className={classes.burgerMenu}>
                <Menu customBurgerIcon={<img src={menuBurger} alt="Menu Burger" />}>
                    <Link to="/" className={classes.link}>Home</Link>
                    <Link to="/all-products" className={classes.link}>Products</Link>
                    <Link to="/cart" className={classes.link}>Shopping Cart</Link>
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
            <div>
                <img 
                    src={photo} 
                    alt="User Avatar" 
                    className={classes.photoUser}
                />
            </div>
        </div>
    );
};

export default NavBar;