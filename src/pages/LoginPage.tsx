import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../components/Button";
import classes from "./LoginPage.module.css";
import facebookLogo from "../assets/facebookAuth.png";
import googleLogo from "../assets/googleAuth.png";
import appleLogo from "../assets/appleAuth.png";
import { auth } from "../configs/firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";

interface LoginPageProps {
  title: string;
  handleGoogleSignUp?: (e: React.FormEvent) => void;
  handleFacebookSignUp?: (e: React.FormEvent) => void;
  handleGoogleSignIn?: (e: React.FormEvent) => void;
  handleFacebookSignIn?: (e: React.FormEvent) => void;
  footerText: string;
  footerLink: string;
  onSubmit: (email: string, password: string, e: React.FormEvent) => void;
}

interface FormErrors {
  [key: string]: string;
}

const LoginPage: React.FC<LoginPageProps> = ({
  title,
  handleGoogleSignUp,
  handleFacebookSignUp,
  handleGoogleSignIn,
  handleFacebookSignIn,
  footerText,
  footerLink,
  onSubmit,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState<FormErrors>({});
  const [forgotPasswordClick, setForgotPasswordClick] = useState(false);
  const [resetEmail, setResetEmail] = useState(false);

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validateFields = {
      email: {
        condition: !email.trim() || !emailRegex.test(email),
        message: "Enter a valid email address",
      },

      password: {
        condition: password.length < 6,
        message: "The password must have, at least, 6 characters",
      }
    };

    const errors: { [key: string]: string } ={};

    Object.entries(validateFields).forEach(([field, validation]) => {
      if (validation.condition) {
        errors[field] = validation.message;
      }
    });

    return errors;
  };

  const clearErrorMessage = (fieldName: string) => {
    setFormError((prevErrors: { [key: string]: string }) => {
      const newErrors = { ...prevErrors };
      delete newErrors[fieldName];
      return newErrors;
    });
  };

  useEffect(() => {
    clearErrorMessage("email");
  }, [email]);

  useEffect(() => {
    if (!validateForm().password) {
      clearErrorMessage("password");
    }
  }, [password]);


  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (forgotPasswordClick) {
      try {
        await sendPasswordResetEmail(auth, email); 
        setResetEmail(true);
      } catch (error) {
        console.error("Error sending email:", error);
      }
      setForgotPasswordClick(false);
      return;
    }

    const errors = validateForm();
      if (Object.keys(errors).length !== 0) {
        setFormError(errors);
      return;
    }
    
    onSubmit(email, password, e);
    setEmail("");
    setPassword("");
    setFormError({});
  };

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h1>Audio</h1>
        <p>It's modular and designed to last</p>
      </header>

      <form className={classes.form} onSubmit={handleFormSubmit}>
        {!forgotPasswordClick && (
          <>
            <div className={`${classes.field} ${formError.email ? classes.error : ""}`}>
              <i className="material-symbols-outlined">mail</i>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {formError.email && <span className={classes.errorMessage}>{formError.email}</span>}
          </>
        )}  
      
        {!forgotPasswordClick && (
          <>
            <div className={`${classes.field} ${formError.password ? classes.error : ""}`}>
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
            {formError.password && <span className={classes.errorMessage}>{formError.password}</span>}
          </>
        )}

        {!forgotPasswordClick && (
          title === "Sign In" && 
          <button className={classes.passwordForgotten} onClick={() => setForgotPasswordClick(true)}>
            Forgot Password
          </button>
        )}

        {forgotPasswordClick && !resetEmail && (
          <>
            <div className={`${classes.field}`}>
              <i className="material-symbols-outlined">mail</i>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {formError.email && (
              <span className={classes.errorMessage}>{formError.email}</span>
            )}
          </>
        )}

        {resetEmail && (
          <div>
            <p>Password reset email sent successfully!</p>
            <Button type="button" text="OK" onClick={() => setResetEmail(false)} />
          </div>
        )}

        <div className={classes.submit}>
          {forgotPasswordClick ? (
            <Button type="submit" text="Send"/> ) : ( 
            <Button type="submit" text={title === "Sign In" ? "Sign In" : "Sign Up"}/>
          )}
        </div>

        <div className={classes.iconCollection}>
          <button className={classes.icon}>
              <img
                src={appleLogo}
                alt="Apple Logo"
              />
            </button>

          <button className={classes.icon} onClick={handleFacebookSignUp || handleFacebookSignIn}>
            <img
              src={facebookLogo}
              alt="Facebook Logo"
            />
          </button>

          <button className={classes.icon} onClick={handleGoogleSignUp || handleGoogleSignIn}>
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
