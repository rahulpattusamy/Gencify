import { MdFavoriteBorder } from "react-icons/md";
import useProducts from "../hooks/useProducts";
import { FindProductInWishlist } from "../utils/FindProductInWishlist";
import { FaCheckCircle } from "react-icons/fa";
import AddTocart from "./AddTocart";
import useShoppingStore from "../ShoppingStore";

const ProductCard = () => {
  const { data, error } = useProducts();

  const wishlist = useShoppingStore((s) => s.shoppingstatus.wishlist);
  const setProductToWishlist = useShoppingStore((s) => s.setWishlist);

  if (error)
    return (
      <p className="text-center text-2xl mt-3.5 font-Poppins">
        {error.message}
      </p>
    );

  return (
    <div className="grid grid-cols-5 pl-60 gap-y-10">
      {data?.map((product) => {
        const isProductInWishlist = FindProductInWishlist(wishlist, product.id);
        return (
          <div className="card" key={product.id}>
            <img
              className="w-full h-45 object-cover"
              src={product.images}
              alt=""
            />
            <div className="pt-4 pl-1.5  h-30 flex flex-col gap-1.5">
              <p className="text">{product.title}</p>
              <p className=" text text-lg font-bold flex justify-between items-center">
                &#36;{product.price}{" "}
                <button
                  onClick={() => {
                    !isProductInWishlist && setProductToWishlist(product);
                  }}
                  className="btn2 mr-2"
                >
                  {isProductInWishlist? <FaCheckCircle /> :<MdFavoriteBorder />}
                </button>
              </p>
              <p className="border-b mr-1 fiixed"></p>
            </div>
            <AddTocart product={product}/>
          </div>
        );
      })}
    </div>

  );
};

export default ProductCard;
