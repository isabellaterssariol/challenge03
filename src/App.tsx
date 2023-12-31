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
import { CartProvider } from "./components/CartContext";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <BrowserRouter>
        <CartProvider>
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
              element={<CartPage />} 
            />
            <Route 
              path="*" 
              element={<ErrorPage />}
            />
          </Routes>
        </CartProvider> 
      </BrowserRouter>
    </FirebaseAppProvider>
  );
}

export default App;
