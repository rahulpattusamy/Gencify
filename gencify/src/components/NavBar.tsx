import { MdFavoriteBorder } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
  <header className="flex shrink-0 items-center justify-between bg-red-400 p-3 text-white">
      <div>
        <h1 className="font-Poppins text-xl">Gencify</h1>
      </div>
      <SearchInput />
      <div className="flex shrink-0 gap-8  text-xl font-Poppins">
        <button className="cursor-pointer">
          <MdFavoriteBorder />
        </button>
        <button className="cursor-pointer">
          <Link to="/cart">
           <LuShoppingCart />
          </Link>
         
        </button>
        <button className="cursor-pointer">
          <FaRegUserCircle />
        </button>
      </div>
    </header>
  );
};

export default NavBar;
