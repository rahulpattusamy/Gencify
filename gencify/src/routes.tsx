import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";
import CartDetailPage from "./pages/CartDetailPage";
import WishList from "./pages/WishList";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/cart", element: <CartDetailPage /> },
      {path:"/wishlist", element:<WishList/>}
    ],
  },
]);

export default router;
