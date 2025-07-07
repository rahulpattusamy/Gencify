import Emptycart from "../components/Emptycart";
import PriceDetails from "../components/PriceDetails";
import useProductstore from "../store";
import { MdOutlineDelete } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { FindProductInWishlist } from "../utils/FindProductInWishlist";
import { FaCheckCircle } from "react-icons/fa";


const CartDetailPage = () => {
  const cart = useProductstore((s) => s.productQuery.cart);
  const removeFromCart = useProductstore((s) => s.removeFromcart);
  const wishlist = useProductstore(s=>s.productQuery.wishlist)
  const Setwishlist = useProductstore((s) => s.setWishlist);
  const increasequnatity = useProductstore((s)=>s.increaseQuantity)
  const decreasequantity = useProductstore(s=>s.decreaseQuantity)

  if (!cart) return <Emptycart />;
  if (cart.length == 0) return <Emptycart />;

  
  return (
    <>
      <p className="text-center text-xl mt-5">My Cart</p>
      <div className="flex mt-10 gap-20 px-30">
        <div className="flex flex-col gap-y-5">
          {cart?.map((item) =>{ 
            const isProductInWishlist = FindProductInWishlist(wishlist,item.id)
            return(
            <div className="cartcard flex" key={item.id}>
              <div className="left">
                <img
                  className="w-33 h-full object-cover"
                  src={item.images}
                  alt=""
                />
              </div>
              <div className="right mt-1.5 ml-7">
                <h1 className=" w-60 text">{item.title}</h1>
                <h2 className="mt-1">
                  <span className="text">Price: &#36;</span>
                  <span className="text">{parseInt(item.price) * item.quantity}</span>
                </h2>
                <div className="mt-1">
                  <h3 className="h-5 text-center text flex">
                    Quantity:
                    <div className="flex w-20 justify-between ml-5">
                      <button className="btn4" onClick={()=>decreasequantity(item.id)}>-</button> <p className="text-black">{item.quantity}</p>
                      <button className="btn4" onClick={()=>increasequnatity(item.id)}>+</button>
                    </div>
                  </h3>
                </div>
                <div className="button flex justify-between mt-3 w-55">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="btn3 bg-red-500"
                  >
                    <MdOutlineDelete />
                    Remove
                  </button>
                  <button
                    onClick={() => !isProductInWishlist && Setwishlist(item)}
                    className="btn2 p-1 bg-red-500"
                  >
                  
                    {isProductInWishlist?<FaCheckCircle />  :<MdFavoriteBorder/>} 
                  </button>
                </div>
              </div>
            </div>
          )})}
        </div>
        <div className="ml-10 flex">
          <PriceDetails />
        </div>
      </div>
    </>
  );
};

export default CartDetailPage;
