import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "./configs/firebaseConfig";
import Root from "./pages/Root";
import SearchPage from "./pages/SearchPage";
import AllProductsPage from "./pages/AllProductsPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

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
          <Route 
            path="/search-page" 
            element={<SearchPage />} 
          />
          <Route 
            path="/all-products" 
            element={<AllProductsPage />} 
          />
          <Route
            path="/product/:productId"
            element={<ProductPage />}
          />
          <Route 
            path="/cart" 
            element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </FirebaseAppProvider>
  );
}

export default App;
