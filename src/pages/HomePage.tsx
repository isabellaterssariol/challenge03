interface HomePageProps {
  name: string;
}

const HomePage: React.FC<HomePageProps> = ({ name }) => {
    return (
        <>
            {name ? `Hi, ${name}!` : "Hi!"}
        </>
    );
};

export default HomePage;