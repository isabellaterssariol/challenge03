import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "./configs/firebaseConfig";
import Root from "./pages/Root";

function App() {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={<Root />} 
          />
          <Route 
            path="/sign-in" 
            element={<SignIn />} 
          />
          <Route 
            path="/sign-up" 
            element={<SignUp />} 
          />
        </Routes>
      </BrowserRouter>
    </FirebaseAppProvider>
  );
}

export default App;
