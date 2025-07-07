import { LuShoppingCart } from "react-icons/lu";
import { MdFavoriteBorder } from "react-icons/md";
import useProducts from "../hooks/useProducts";
import useProductstore from "../store";
import { FindproductInCart } from "../utils/FindProductIncart";
import { FindProductInWishlist } from "../utils/FindProductInWishlist";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductCard = () => {
  const productQuery = useProductstore((s) => s.productQuery.categoryid);
  const { data, error } = useProducts(productQuery);
  const setProductTocart = useProductstore((s) => s.setCart);
  const cart = useProductstore((s) => s.productQuery.cart);
  const wishlist = useProductstore((s) => s.productQuery.wishlist);
  const navigate = useNavigate();
  const setProductToWishlist = useProductstore((s) => s.setWishlist);

  if (error)
    return (
      <p className="text-center text-2xl mt-3.5 font-Poppins">
        {error.message}
      </p>
    );

  return (
    <div className="grid sm:grid-cols-4 p-15 gap-y-10">
      {data?.map((product) => {
        const isProductIncart = FindproductInCart(cart, product.id);
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
              <p className=" text text-sm font-bold flex justify-between items-center">
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
              <div className="flex justify-between">
                <button
                  type="button"
                  className="btn "
                  onClick={() => {
                    !isProductIncart && setProductTocart(product);
                    isProductIncart && navigate("/cart");
                  }}
                >
                  {isProductIncart ? "Added" : "Add to Cart"}
                  {isProductIncart ? <FaCheckCircle /> : <LuShoppingCart />}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
