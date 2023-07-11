import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
         index: true,
         element: <HomePage />,
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
  return <RouterProvider router={router} />;
}

export default App;
