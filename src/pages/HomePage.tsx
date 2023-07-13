import Search from "../components/Search";


interface HomePageProps {
  name: string;
}

const HomePage: React.FC<HomePageProps> = ({ name }) => {
    return (
        <>  
            <div>
                <p>{name ? `Hi, ${name}!` : "Hi!"}</p>
                <p>What are you looking for today?</p>
            </div>
            <Search />
        </>
    );
};

export default HomePage;