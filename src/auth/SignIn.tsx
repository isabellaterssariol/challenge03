import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { auth } from "../configs/firebaseConfig";
import LoginPage from "../pages/LoginPage";

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = async (email: string, password: string, e: React.FormEvent) => {
      e.preventDefault();
      try {
          await signInWithEmailAndPassword(auth, email, password);
          console.log("User logged in successfully!");
          navigate("/");
      } catch (error) {
          console.error("Authentication error:", error);
      }
  };

  const handleGoogleSignIn = async (e: React.FormEvent) => {
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

  const handleFacebookSignIn = async (e: React.FormEvent) => {
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
      <LoginPage
        title="Sign In"
        footerText="Didn't have any account?"
        footerLink="/sign-up"
        onSubmit={handleSignIn}
        handleGoogleSignIn={handleGoogleSignIn}
        handleFacebookSignIn={handleFacebookSignIn}
      />
    </>
  );
};

export default SignIn;