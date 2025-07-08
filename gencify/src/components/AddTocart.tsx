import { FaCheckCircle } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { FindproductInCart } from "../utils/FindProductIncart";
import { useNavigate } from "react-router-dom";
import type { Products } from "../hooks/useProducts";
import useShoppingStore from "../ShoppingStore";

interface Props{
     product:Products
}

const AddTocart = ({product}:Props) => {
  const setProductTocart = useShoppingStore((s) => s.setCart);
  const cart = useShoppingStore((s) => s.shoppingstatus.cart);
  const navigate = useNavigate();
  const isProductIncart = FindproductInCart(cart, product?.id);
  return (
      <div className="flex justify-between">
        <button
          type="button"
          className="btn "
          onClick={(e) => {
               e.preventDefault();
            !isProductIncart && setProductTocart({ ...product, quantity: 1 });
            isProductIncart && navigate("/cart");
          }}
        >
          {isProductIncart ? "Added" : "Add to Cart"}
          {isProductIncart ? <FaCheckCircle /> : <LuShoppingCart />}
        </button>
      </div>
  );
};

export default AddTocart;
