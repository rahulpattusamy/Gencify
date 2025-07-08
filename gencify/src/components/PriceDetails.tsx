import usecartLenght from "../hooks/usecartLenght";
import useShoppingStore from "../ShoppingStore";
const PriceDetails = () => {
  const total = useShoppingStore((s) =>
    s.shoppingstatus.cart?.reduce(
      (acc, result) => acc + parseInt(result.price) * result.quantity,
      0
    )
  );
  const platformfee = 7;
  const cartlength = usecartLenght();
  const cart = useShoppingStore((s) => s.shoppingstatus.cart);
  if (cart)
    return (
      <div className="priceCard  ">
        <p className=" text-lg  text-black border-b-1 text-center">
          Price Details
        </p>
        <p className="pricedetails">
          Price:<span>&#36;{total}</span>
        </p>
        <p className="pricedetails">
          Total Item: <span>{cartlength}</span>
          {}
        </p>
        <p className="pricedetails">
          Delivery Fee: <span className="text-green-500">Free</span>
        </p>
        <p className="pricedetails border-b-1 border-black">
          Platform Fee:<span>&#36;{platformfee}</span>
        </p>
        <p className="pricedetails  text-black">
          Total Amount:<span>&#36;{(total ?? 0) + (platformfee ?? 0)}</span>
        </p>

        <button className="btn ml-15">Proceed to Checkout</button>
      </div>
    );
};

export default PriceDetails;
