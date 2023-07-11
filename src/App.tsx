import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "./configs/firebaseConfig";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
         index: true,
         element: <SignIn/>,
      },
      {
         path: "/sign-up",
         element: <SignUp />,
      },
      {
        // path: "/home",
        // element: <HomePage />,
      },
      {
        // path: "/products",
        // element: <AllProducts />,
      },
      {
        // path: "/product",
        // children: [
         // {
          //  path: ":productId",
          //  element: <ProductPage />,
          // },
        //],
      },
      {
        // path: "/shopping",
        // element: <ShoppingCart />,
      },
    ],
  },
  {
    // path: "*",
    // element: <ErrorPage />,
  }
]);

function App() {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <RouterProvider router={router} />
    </FirebaseAppProvider>
  );
}

export default App;
