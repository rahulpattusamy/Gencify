import { MdFavoriteBorder } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <header className="flex items-center justify-between bg-red-400 p-3 text-white">
      <div>
        <h1 className="font-Poppins text-xl">Gencify</h1>
      </div>
      <SearchInput />
      <div className="flex gap-8  text-xl font-Poppins">
        <button className="cursor-pointer">
          <MdFavoriteBorder />
        </button>
        <button className="cursor-pointer">
          <LuShoppingCart />
        </button>
        <button className="cursor-pointer">
          <FaRegUserCircle />
        </button>
      </div>
    </header>
  );
};

export default NavBar;
