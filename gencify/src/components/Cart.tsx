import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineDelete, MdFavoriteBorder } from "react-icons/md";
import { FindProductInWishlist } from "../utils/FindProductInWishlist";
import useShoppingStore from "../ShoppingStore";


const Cart = () => {
  const cart = useShoppingStore((s) => s.shoppingstatus.cart);
  const removeFromCart = useShoppingStore((s) => s.removeFromcart);
  const wishlist = useShoppingStore(s=>s.shoppingstatus.wishlist)
  const Setwishlist = useShoppingStore((s) => s.setWishlist);
  const increasequnatity = useShoppingStore((s)=>s.increaseQuantity)
  const decreasequantity = useShoppingStore(s=>s.decreaseQuantity)
  return (
     <div className="flex flex-col justify-around gap-y-5">
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
                        className="btn2 text-lg bg-red-500"
                      >
                      
                        {isProductInWishlist?<FaCheckCircle />  :<MdFavoriteBorder/>} 
                      </button>
                    </div>
                  </div>
                </div>
              )})}
            </div>
  )
}

export default Cart