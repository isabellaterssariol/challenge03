import { Link } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../configs/firebaseConfig";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User account created successfully!");
      setEmail("");
      setPassword("");
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
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error creating user account with Google:", error);
      setEmail("");
      setPassword("");
    }
  };

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

        <div className="footer">
          <p>If you have an account?</p>
          <Link to="/">Sign In here</Link>
        </div>
      </form>
    </>
  );
}

export default SignUp;