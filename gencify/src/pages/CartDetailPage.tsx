import Cart from "../components/Cart";
import Emptycart from "../components/Emptycart";
import PriceDetails from "../components/PriceDetails";
import useShoppingStore from "../ShoppingStore";
const CartDetailPage = () => {
  const cart = useShoppingStore((s) => s.shoppingstatus.cart);

  if (!cart) return <Emptycart />;
  if (cart.length == 0) return <Emptycart />;

  
  return (
    <>
      <p className="text-center text-xl mt-5">My Cart</p>
      <div className="flex mt-10 justify-around px-30">
        <div className="ml-10">
           <Cart/>
        </div>
          <PriceDetails />
      </div>
    </>
  );
};

export default CartDetailPage;
