import useProductstore from "../store";
import { LuShoppingCart } from "react-icons/lu";
import { FindproductInCart } from "../utils/FindProductIncart";
import { FaCheckCircle } from "react-icons/fa";

const WishList = () => {
  const wishlist = useProductstore((s) => s.productQuery.wishlist);
  const removeProductInwishlist = useProductstore(s=>s.removeFromWishlist)
  const cart = useProductstore(s=>s.productQuery.cart)
  const addTocart = useProductstore(s=>s.setCart)
  return (
    <>
    <h1 className="text-center text-3xl mt-3">Wishlist</h1>
    <div className="grid sm:grid-cols-4 gap-y-10 gap-x-5 p-10">
      {wishlist?.map((item) =>{ 
        const ProductIncart = FindproductInCart(cart,item.id) 
        return (
        <div className="card" key={item.id}>
          <img className="w-full h-45 object-cover" src={item.images} alt="" />
          <div className="pt-4 pl-1 flex flex-col gap-1.5">
            <p className="text ">{item.title}</p>
            <p className=" text flex justify-between items-center text-lg font-bold">&#36;{item.price} <button onClick={()=>
              !ProductIncart&&addTocart(item)} className="text-lg btn3 cursor-pointer bg-gray-800 p-2 rounded-lg text-white mr-1">
               { ProductIncart?<FaCheckCircle /> : <LuShoppingCart/> }
              </button></p>
              <div className="border-b"></div>
            <div className="flex justify-between">
              <button onClick={()=>{removeProductInwishlist(item.id)
              }} type="button" className="btn3">
                Remove
              </button>
            </div>
          </div>
        </div>
      )})}
    </div>
    </>
  );
};

export default WishList;
