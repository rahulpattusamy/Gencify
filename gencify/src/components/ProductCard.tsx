import { LuShoppingCart } from "react-icons/lu";
import { MdFavoriteBorder } from "react-icons/md";
import useProducts from "../hooks/useProducts";

const ProductCard = () => {
    const{data} = useProducts()
  return (
    <div className="grid grid-cols-4 gap-y-10 gap-x-5 mt-10">
     {data?.map(product=><div className="card" key={product.id}>
        <img className="w-full h-45 object-cover" src={product.images} alt="" />
        <div className="pt-5 pl-2 flex flex-col gap-1.5">
          <p className="text ">{product.title}</p>
          <p className=" text">&#36;{product.price}</p>
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
      </div>)}
      
    </div>
  );
};

export default ProductCard;
