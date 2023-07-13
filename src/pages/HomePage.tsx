import Search from "../components/Search";
import classes from "./HomePage.module.css"

interface HomePageProps {
  name: string;
}

const HomePage: React.FC<HomePageProps> = ({ name }) => {
    return (
        <div className={classes.container}>  
            <div>
                <p className={classes.welcome}>{name ? `Hi, ${name}!` : "Hi!"}</p>
                <p className={classes.text}>
                    What are you looking for <br /> today?
                </p>
            </div>
            <Search />
        </div>
    );
};

export default HomePage;