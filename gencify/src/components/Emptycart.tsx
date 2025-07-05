import { Link } from "react-router-dom";

const Emptycart = () => {
  return (
    <div>
      <div className="text-center mt-32">
        <h1 className="text-black text-2xl">Hey, it feels so light!</h1>
        <p className="text-gray-400 font-sans mt-1">
          There is nothing in your cart. Let's add some items
        </p>
        <Link to="/">
        <button className="bg-gray-700 p-2 rounded-sm text-white text-sm mt-3 hover:bg-gray-800 cursor-pointer">
          Shop now
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Emptycart;
