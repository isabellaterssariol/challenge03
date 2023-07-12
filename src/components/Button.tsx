import classes from "./Button.module.css"

interface ButtonProps {
    text: string;
    type?: "button" | "submit";
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, type = "button", onClick }) => {
    return (
      <button className={classes.button} type={type} onClick={onClick}>
        {text}
      </button>
    );
};
  
export default Button;