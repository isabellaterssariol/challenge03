import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../configs/firebaseConfig";

const Root = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const notLogged = onAuthStateChanged(auth, (user) => {
      if (user) {
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
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;