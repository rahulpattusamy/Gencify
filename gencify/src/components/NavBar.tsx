import { MdFavoriteBorder } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import useProductstore from "../store";

const NavBar = () => {
  const cart = useProductstore((s) => s.productQuery.cart);
  return (
    <header className="flex shrink-0 items-center justify-between bg-red-400 p-3 text-white">
      <div>
        <h1 className="font-Poppins text-xl">Gencify</h1>
      </div>
      <SearchInput />
      <div className="flex shrink-0 gap-8  text-3xl font-Poppins">
        <button className="cursor-pointer">
          <MdFavoriteBorder />
        </button>
        <button className="cursor-pointer relative">
          <Link to="/cart">
            <LuShoppingCart />
          </Link>
        </button>
        <span className="text-sm bg-gray-700 w-5 text-center rounded-2xl ml-20 -mt-1  absolute">
          {cart ? cart.length : "0"}
        </span>

        <button className="cursor-pointer">
          <FaRegUserCircle />
        </button>
      </div>
    </header>
  );
};

export default NavBar;
