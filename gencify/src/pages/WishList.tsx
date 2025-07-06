import useProductstore from "../store";
import { LuShoppingCart } from "react-icons/lu";

const WishList = () => {
  const wishlist = useProductstore((s) => s.productQuery.wishlist);
  const removeProduct = useProductstore(s=>s.removeFromWishlist)
  const addTocart = useProductstore(s=>s.setCart)
  return (
    <div className="grid sm:grid-cols-4 gap-y-10 gap-x-5 p-10">
      {wishlist?.map((item) => (
        <div className="card2" key={item.id}>
          <img className="w-full h-35 object-cover" src={item.images} alt="" />
          <div className="pt-4 pl-1 flex flex-col gap-1.5">
            <p className="text ">{item.title}</p>
            <p className=" text">&#36;{item.price}</p>
            <div className="flex justify-between">
              <button onClick={()=>{removeProduct(item.id)
                addTocart(item)
              }} type="button" className="btn3">
                Remove
              </button>
              <button className="btn3 mr-2">
                <LuShoppingCart/>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishList;
