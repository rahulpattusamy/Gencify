import { LuShoppingCart } from "react-icons/lu";
import { MdFavoriteBorder } from "react-icons/md";
import useProducts from "../hooks/useProducts";
import useProductstore from "../store";
import { FindproductInCart } from "../utils/FindProductIncart";
import { FaCheckCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = () => {
  const productQuery = useProductstore((s) => s.productQuery.categoryid);
  const { data, error } = useProducts(productQuery);
  const setProductTocart = useProductstore((s) => s.setCart);
  const cart = useProductstore(s=>s.productQuery.cart)
  const navigate = useNavigate();


  if (error)
    return (
      <p className="text-center text-2xl mt-3.5 font-Poppins">
        {error.message}
      </p>
    );

  return (
    <div className="grid sm:grid-cols-4 gap-y-10 gap-x-5 mt-10 ml-5 ">
      {data?.map((product) =>{ 
        const isProductIncart = FindproductInCart(cart, product.id)
        return(
        <div className="card" key={product.id}>
          <img
            className="w-full h-45 object-cover"
            src={product.images}
            alt=""
          />
          <div className="pt-5 pl-2 flex flex-col gap-1.5">
            <p className="text ">{product.title}</p>
            <p className=" text">&#36;{product.price}</p>
            <div className=" p-2  flex justify-between shrink-0 align-middle  ">
              <button
                type="button"
                className="btn "
                onClick={() => {
                  !isProductIncart 
                  && setProductTocart(product);
                  isProductIncart && navigate("/cart")
                }}
              >
               {isProductIncart? "Added to cart"  : "Add to Cart"}
               {isProductIncart?<FaCheckCircle/>:<LuShoppingCart /> }
              </button>
              <Link to="/wishlist">
               <button className="btn2">
                <MdFavoriteBorder/>
              </button>
              </Link>
             
            </div>
          </div>
        </div>
      )})}
    </div>
  );
};

export default ProductCard;
