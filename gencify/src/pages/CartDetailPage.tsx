import Emptycart from "../components/Emptycart";
import useProductstore from "../store";
import { MdOutlineDelete } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

const CartDetailPage = () => {
  const cart = useProductstore((s) => s.productQuery.cart);
  const removeFromCart = useProductstore((s) => s.removeFromcart);

  if (cart?.length === 0) return <Emptycart />;

  return (
    <div className="grid sm:grid-cols-1 gap-10 mt-10">
      {cart?.map((item) => (
        <div className="cartcard flex" key={item.id}>
          <div className="left">
            <img
              className="w-33 h-full object-cover"
              src={item.images}
              alt=""
            />
          </div>
          <div className="right mt-2 ml-7">
            <h1 className=" w-60 text-sm text-gray-900">{item.title}</h1>
            <h2 className="mt-1">
              <span className="text-black text-sm">&#36;</span>
              <span className="text-gray-900 text-sm">{item.price}</span>
            </h2>
            <div className="mt-2">
              <h3 className="text-sm text-gray-900 flex">
                Quantity:
                <div className="flex w-20 justify-between ml-5">
                  <button className="btn4">-</button> <p>1</p>{" "}
                  <button className="btn4">+</button>
                </div>
              </h3>
            </div>
            <div className="button flex justify-between mt-3 w-55">
              <button onClick={()=>removeFromCart(item.id)} className="btn3 bg-red-400">
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
  );
};

export default CartDetailPage;
