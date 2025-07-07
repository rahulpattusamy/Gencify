import { MdFavoriteBorder } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import useProductstore from "../store";
import usecartLenght from "../hooks/usecartLenght";

const NavBar = () => {
  const cart = useProductstore((s) => s.productQuery.cart);
  const wishlist = useProductstore(s=>s.productQuery.wishlist)
    const cartlength = usecartLenght()

  return (
    <header className="flex shrink-0 items-center justify-between bg-red-400 p-3 text-white">
      <div>
        <Link to="/">
         <h1 className="font-Poppins text-2xl cursor-pointer">Gencify</h1>
        </Link>
       
      </div>
      <SearchInput />
      <div className="flex shrink-0 gap-8  text-3xl">
        <button className="cursor-pointer relative">
          <Link to="/wishlist">
          <MdFavoriteBorder />
          </Link>
        </button>
         <span className="text-sm bg-gray-700 w-5 text-center rounded-2xl ml-5 -mt-1  absolute">
          {wishlist ? wishlist.length : "0"}
        </span>
        <button className="cursor-pointer relative">
          <Link to="/cart">
            <LuShoppingCart />
          </Link>
        </button>
        <span className="text-sm bg-gray-700 w-5 text-center rounded-2xl ml-20 -mt-1  absolute">
          {cart ? cartlength
 : "0"}
        </span>

        <button className="cursor-pointer">
          <FaRegUserCircle />
        </button>
      </div>
    </header>
  );
};

export default NavBar;
