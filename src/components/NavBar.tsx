interface NavBarProps {
  photo: string;
}

const NavBar: React.FC<NavBarProps> = ({ photo }) => {
    return (
        <>  
            <img src={photo} 
                alt="User Avatar" 
            />
        </>
    );
};

export default NavBar;