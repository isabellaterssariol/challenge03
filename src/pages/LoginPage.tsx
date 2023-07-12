import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "../components/Button";
import classes from "./LoginPage.module.css";
import facebookLogo from "../assets/facebookAuth.png";
import googleLogo from "../assets/googleAuth.png"

interface LoginPageProps {
  title: string;
  handleGoogleSignUp?: (e: React.FormEvent) => void;
  handleFacebookSignUp?: (e: React.FormEvent) => void;
  footerText: string;
  footerLink: string;
  onSubmit: (email: string, password: string, e: React.FormEvent) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({
  title,
  handleGoogleSignUp,
  handleFacebookSignUp,
  footerText,
  footerLink,
  onSubmit,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password, e);
    setEmail("");
    setPassword("");
  };

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h1>Audio</h1>
        <p>It's modular and designed to last</p>
      </header>

      <form className={classes.form} onSubmit={handleFormSubmit}>
        <div className={classes.field}>
          <i className="material-symbols-outlined">mail</i>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={classes.field}>
          <i className="material-symbols-outlined">lock</i>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {title === "Sign In" && <a href="#" className={classes.passwordForgotten}>Forgot Password</a>}

        <Button type="submit" text={title === "Sign In" ? "Sign In" : "Sign Up"}></Button>

        <div className={classes.iconCollection}>
          <button className={classes.icon} onClick={handleFacebookSignUp}>
            <img
              src={facebookLogo}
              alt="Facebook Logo"
            />
          </button>

          <button className={classes.icon} onClick={handleGoogleSignUp}>
            <img
              src={googleLogo}
              alt="Google Logo"
            />
          </button>
        </div>

        <div className={classes.footer}>
          <p className={classes.footerText}>{footerText} <Link to={footerLink} className={classes.signLink}>{title === "Sign In" ? "Sign Up here" : "Sign In here"}</Link></p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
