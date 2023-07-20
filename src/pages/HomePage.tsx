import SomeProducts from "../components/SomeProducts";
import CategoryStore from "../components/CategoryStore";
import Search from "../components/Search";
import classes from "./HomePage.module.css";
import NavBar from "../components/NavBar";
import { motion, AnimatePresence } from "framer-motion";

interface HomePageProps {
  name: string;
  photo: string;
}

const HomePage: React.FC<HomePageProps> = ({ name, photo }) => {
    return (
        <div className={classes.container}>
            <AnimatePresence mode="wait">
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.5 }}>
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

                </motion.div>
            </AnimatePresence> 
        </div>
    );
};

export default HomePage;