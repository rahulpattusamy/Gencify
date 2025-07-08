import { FaCheckCircle } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { FindproductInCart } from "../utils/FindProductIncart";
import useShoppingStore from "../ShoppingStore";

const Wishlist = () => {
  const wishlist = useShoppingStore((s) => s.shoppingstatus.wishlist);
  const removeProductInwishlist = useShoppingStore((s) => s.removeFromWishlist);
  const cart = useShoppingStore((s) => s.shoppingstatus.cart);
  const addTocart = useShoppingStore((s) => s.setCart);
  return (
    <div className="grid grid-cols-5 pl-22 content-center gap-y-4">
      {wishlist?.map((item) => {
        const ProductIncart = FindproductInCart(cart, item.id);
        return (
          <div className="wishlistcard" key={item.id}>
            <img
              className="w-full h-45 object-cover"
              src={item.images}
              alt=""
            />
            <div className="pt-4 pl-1 flex flex-col gap-1.5">
              <p className="text ">{item.title}</p>
              <p className=" text flex justify-between items-center text-lg font-bold">
                &#36;{item.price}{" "}
                <button
                  onClick={() => !ProductIncart && addTocart({...item, quantity:1})}
                  className="text-lg btn3 cursor-pointer bg-gray-800 p-2 rounded-lg text-white mr-1"
                >
                  {ProductIncart ? <FaCheckCircle /> : <LuShoppingCart />}
                </button>
              </p>
              <div className="border-b"></div>
              <div className="flex justify-between">
                <button
                  onClick={() => {
                    removeProductInwishlist(item.id);
                  }}
                  type="button"
                  className="btn3"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Wishlist;
