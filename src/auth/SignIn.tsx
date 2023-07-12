import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
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

  return (
    <>
      <LoginPage
        title="Sign In"
        footerText="Didn't have any account?"
        footerLink="/sign-up"
        onSubmit={handleSignIn}
      />
    </>
  );
};

export default SignIn;