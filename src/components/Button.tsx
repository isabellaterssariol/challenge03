import classes from "./Button.module.css"

interface ButtonProps {
  text: string;
  type?: "button" | "submit";
  onClick?: () => void;
  showArrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, type = "button", onClick, showArrow }) => {
  return (
    <div className={classes.container}>
      <button className={classes.button} type={type} onClick={onClick}>
        {text}
        {showArrow && (
          <div className={classes.arrow}>
            <i className="material-symbols-outlined">arrow_forward_ios</i>
          </div>
        )}
      </button>
    </div>
  );
};
  
export default Button;