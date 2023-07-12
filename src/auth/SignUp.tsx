import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { auth } from "../configs/firebaseConfig";
import LoginPage from "../pages/LoginPage";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUp = async (email: string, password: string, e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User account created successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error while creating user account:", error);
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
      <LoginPage
        title="Sign Up"
        handleGoogleSignUp={handleGoogleSignUp}
        handleFacebookSignUp={handleFacebookSignUp}
        footerText="If you have an account?"
        footerLink="/sign-in"
        onSubmit={handleSignUp}
      />
    </>
  );
}

export default SignUp;