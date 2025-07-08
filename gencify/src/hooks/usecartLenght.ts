import useShoppingStore from "../ShoppingStore";

const usecartLenght = () => {
  const cart = useShoppingStore((s) => s.shoppingstatus.cart);
  return cart?.reduce((sum, item) => sum + (item.quantity || 1), 0) || 0;
};

export default usecartLenght;
