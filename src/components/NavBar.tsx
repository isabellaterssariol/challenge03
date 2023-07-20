import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./burger-menu-style/BurgerMenu.css";
import classes from "./NavBar.module.css";

interface NavBarProps {
  photo: string;
}

const NavBar: React.FC<NavBarProps> = ({ photo }) => {
    return (
        <div className={classes.container}>  
            <div className={classes.burgerMenu}>
                <Menu>
                    <Link to="/" className={classes.link}>Home</Link>
                    <Link to="/all-products" className={classes.link}>Products</Link>
                    <Link to="/cart" className={classes.link}>Shopping Cart</Link>
                </Menu>
            </div>
            <img 
                src={photo} 
                alt="User Avatar" 
                className={classes.photoUser}
            />
        </div>
    );
};

export default NavBar;