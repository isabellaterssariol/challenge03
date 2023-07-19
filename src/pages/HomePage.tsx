import SomeProducts from "../components/SomeProducts";
import CategoryStore from "../components/CategoryStore";
import Search from "../components/Search";
import classes from "./HomePage.module.css";
import NavBar from "../components/NavBar";

interface HomePageProps {
  name: string;
  photo: string;
}

const HomePage: React.FC<HomePageProps> = ({ name, photo }) => {
    return (
        <div className={classes.container}>
            <div>
                <NavBar photo={photo}/>
            </div> 
            <div className={classes.welcomeText}>
                <p className={classes.welcome}>{name ? `Hi, ${name}!` : "Hi, user!"}</p>
                <p className={classes.text}>
                    What are you looking for <br /> today?
                </p>
            </div>
            <Search />
            <CategoryStore />
            <SomeProducts title={"Featured Products"}/>
        </div>
    );
};

export default HomePage;