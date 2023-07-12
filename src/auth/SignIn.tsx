import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../configs/firebaseConfig";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
          await signInWithEmailAndPassword(auth, email, password);
          console.log("User logged in successfully!");
          setEmail("");
          setPassword("");
          navigate("/");
      } catch (error) {
          console.error("Authentication error:", error);
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

        <a href="#">Forgot Password</a>

        <button type="submit" onClick={handleSignIn}>
            Sign In
        </button>

        <div className="footer">
          <p>Didn't have any account?</p>
          <Link to="/sign-up">Sign Up here</Link>
        </div>
      </form>
    </>
  );
};

export default SignIn;