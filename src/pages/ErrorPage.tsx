import errorImage from "../assets/errorImage1.png";
import classes from "./ErrorPage.module.css";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const ErrorPage = () => {
  return (
    <div className={classes.container}>
        <img 
            src={errorImage} 
            alt="Robo Error" 
            className={classes.image} 
        />
        <h1 className={classes.title}>ERROR 404: <br /> Page Not Found</h1>
        <p className={classes.text}>Sorry, the page you are looking for cannot be found. This can happen for various reasons, such as an invalid link, a removed or renamed page, or a typing error in the URL.</p>
        <p className={classes.text}>In the meantime, you can return to the homepage and explore other interesting content we have available.</p>
        <div className={classes.button}>
            <Link to="/" className={classes.link}>
                <Button text={"Home"}/> 
            </Link>
        </div>    
    </div>
  )
}

export default ErrorPage;