import Emptycart from "../components/Emptycart";
import useProductstore from "../store";
import { MdOutlineDelete } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import PriceDetails from "../components/priceDetails";

const CartDetailPage = () => {
  const cart = useProductstore((s) => s.productQuery.cart);
  const removeFromCart = useProductstore((s) => s.removeFromcart);

  if (cart?.length === 0) return <Emptycart />;

  return (
    <>
    <p className="text-center font-bold">My Cart</p>
    <div className="flex items-center justify-center mt-10 gap-10">
    <div className="grid sm:grid-cols-1 gap-y-3.5 relative">
      {cart?.map((item) => (
        <div className="cartcard flex" key={item.id}>
          <div className="left">
            <img
              className="w-33 h-full object-cover"
              src={item.images}
              alt=""
            />
          </div>
          <div className="right mt-1.5 ml-7">
            <h1 className=" w-60 text-xs text-gray-500">{item.title}</h1>
            <h2 className="mt-1">
              <span className="text-gray-500 text-xs">Price: &#36;</span>
              <span className="text-gray-500 text-xs">{item.price}</span>
            </h2>
            <div className="mt-1">
              <h3 className="text-xs h-5 text-center text-gray-500 flex">
                Quantity:
                <div className="flex w-20 justify-between ml-5">
                  <button className="btn4">-</button> <p>1</p>{" "}
                  <button className="btn4">+</button>
                </div>
              </h3>
            </div>
            <div className="button flex justify-between mt-3 w-55">
              <button
                onClick={() => removeFromCart(item.id)}
                className="btn3 bg-red-400"
              >
                <MdOutlineDelete />
                Remove
              </button>
              <button className="btn3 bg-red-400">
                Move to <MdFavoriteBorder />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="ml-10 flex">
      <PriceDetails/>
    </div>
    </div>
    </>
  );
};

export default CartDetailPage;
