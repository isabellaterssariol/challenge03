import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../configs/firebaseConfig";
import { useNavigate, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";

const Root = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  useEffect(() => {
    const notLogged = onAuthStateChanged(auth, (user) => {
      if (user) {
        let name = "";
        if (user.displayName) {
          name = user.displayName.split(" ")[0];
        } else if (user.email) {
          name = user.email.split("@")[0];
        }
        setName(name); 
        navigate("/");
      } else {
        navigate("/sign-in");
      }
    });

    return () => {
      notLogged();
    };
  }, [navigate]);

  return (
    <Routes>
      <Route 
        path="/" 
        element={<HomePage name={name} />} 
      />
    </Routes>
  );
};

export default Root;