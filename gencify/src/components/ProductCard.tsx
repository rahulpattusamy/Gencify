import { LuShoppingCart } from "react-icons/lu";
import { MdFavoriteBorder } from "react-icons/md";

const ProductCard = () => {
  return (
    <div>
      <div className="card">
        <img className="w-full h-full object-cover" src={""} alt="" />
        <div className="pt-5 pl-2 flex flex-col gap-1.5">
          <p className="text">{}</p>
          <p className=" text">{}</p>
          <div className=" pt-2 flex align-middle gap-18 ">
            <button className="btn">
              <LuShoppingCart />
              Add to Cart
            </button>
            <button className="btn2">
              <MdFavoriteBorder />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
