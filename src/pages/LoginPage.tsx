import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "../components/Button";

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
    <>
      <header className="header">
        <span>Audio</span>
        <p>It's a modular and designed to last</p>
      </header>

      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {title === "Sign In" && <a href="#">Forgot Password</a>}

        <Button type="submit" text={title === "Sign In" ? "Sign In" : "Sign Up"}></Button>

        {handleGoogleSignUp && (
          <button onClick={handleGoogleSignUp}>Sign Up with Google</button>
        )}

        {handleFacebookSignUp && (
          <button onClick={handleFacebookSignUp}>Sign Up with Facebook</button>
        )}
      </form>

      <div className="footer">
        <p>{footerText}</p>
        <Link to={footerLink}>{title === "Sign In" ? "Sign Up here" : "Sign In here"}</Link>
      </div>
    </>
  );
};

export default LoginPage;
