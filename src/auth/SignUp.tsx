import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { auth } from "../configs/firebaseConfig";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User account created successfully!");
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      console.error("Error while creating user account:", error);
      setEmail("");
      setPassword("");
    }
  };

  const handleGoogleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log("User account created successfully with Google!");
      navigate("/");
    } catch (error) {
      console.error("Error creating user account with Google:", error);
    }
  };

  const handleFacebookSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const provider = new FacebookAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log("User account created successfully with Facebook!");
      navigate("/");
    } catch (error) {
      console.error("Error creating user account with Facebook:", error);
    }
  }

  return (
    <>
      <header className="header">
        <span>Audio</span>
        <p>It's a modular and designed to last</p>
      </header>

      <form>
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

        <button type="submit" onClick={handleSignUp}>
            Sign Up
        </button>

        <button onClick={handleGoogleSignUp}>Sign Up with Google</button>
        <button onClick={handleFacebookSignUp}>Sign Up with Facebook</button>

        <div className="footer">
          <p>If you have an account?</p>
          <Link to="/sign-in">Sign In here</Link>
        </div>
      </form>
    </>
  );
}

export default SignUp;