import type { Products } from "../hooks/useProducts";
import useProductstore from "../store";

const PriceDetails = () => {
  const cart = useProductstore((s) => s.productQuery.cart);
  const totalPrice = (cart?: Products[]) =>
    cart?.reduce((acc, result) => acc + parseInt(result.price), 0);
  const total = totalPrice(cart);
  const platformfee = 7;
  return (
    <div className="priceCard ">
      <p className=" font-bold text-xl text-black border-b-2 text-center">
        Price Details
      </p>
      <p className="pricedetails">
        Price:<span>&#36;{total}</span>
      </p>
      <p className="pricedetails">
        Total Item: <span></span>
        {cart?.length}
      </p>
      <p className="pricedetails">
        Delivery Fee: <span>0</span>
      </p>
      <p className="pricedetails border-b-2 border-black">
        Platform Fee:<span>&#36;{platformfee}</span>
      </p>
      <p className="pricedetails font-bold text-black">
        Total Amount:<span>&#36;{(total ?? 0) + (platformfee ?? 0)}</span>
      </p>

      <button className="btn ml-15">Proceed to Checkout</button>
    </div>
  );
};

export default PriceDetails;
