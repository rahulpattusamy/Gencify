import { LuShoppingCart } from "react-icons/lu";
import { MdFavoriteBorder } from "react-icons/md";
import useProducts from "../hooks/useProducts";
import useProductstore from "../store";
import { FindproductInCart } from "../utils/FindProductIncart";
import { FaCheckCircle } from "react-icons/fa";
import {  useNavigate } from "react-router-dom";

const ProductCard = () => {
  const productQuery = useProductstore((s) => s.productQuery.categoryid);
  const { data, error } = useProducts(productQuery);
  const setProductTocart = useProductstore((s) => s.setCart);
  const cart = useProductstore((s) => s.productQuery.cart);
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
        return (
          <div className="card" key={product.id}>
            <img
              className="w-full h-45 object-cover"
              src={product.images}
              alt=""
            />
            <div className="pt-4 pl-1 h-30 flex flex-col gap-1.5">
              <p className="text">{product.title}</p>
              <p className=" text">&#36;{product.price}</p>
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
                  <button
                    onClick={() => setProductToWishlist(product)}
                    className="btn2 mr-2.5"
                  >
                    <MdFavoriteBorder />
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
