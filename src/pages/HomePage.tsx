import SomeProducts from "../components/SomeProducts";
import CategoryStore from "../components/CategoryStore";
import Search from "../components/Search";
import classes from "./HomePage.module.css"

interface HomePageProps {
  name: string;
}

const HomePage: React.FC<HomePageProps> = ({ name }) => {
    return (
        <div className={classes.container}>  
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