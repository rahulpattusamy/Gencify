import { Link } from "react-router-dom";
import emptycartimg from "../assets/empty cart img.jpg"

const Emptycart = () => {
  return (
    <div className=" flex flex-col items-center">
     
      <div>
        <img className="h-50" src={emptycartimg} alt="" />
      </div>
      
      <div className="text-center mt-3">
        <h1 className="text-black text-2xl">Hey, it feels so light!</h1>
        <p className="text-gray-400 font-sans mt-1">
          There is nothing in your cart. Let's add some items
        </p>
        <Link to="/">
        <button className="bg-gray-700 p-2 rounded-sm text-white text-sm mt-3 hover:bg-gray-800 transition transform active:scale-110 cursor-pointer">
          Shop now
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Emptycart;
