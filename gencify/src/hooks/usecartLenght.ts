import useProductstore from "../store";

const usecartLenght = () => {
  const cart = useProductstore((s) => s.productQuery.cart);
  return cart?.reduce((sum, item) => sum + (item.quantity || 1), 0) || 0;
};

export default usecartLenght;
