import useProductstore from "../store";

const CartDetailPage = () => {
  const cart = useProductstore((s) => s.productQuery.cart);
  const removeFromCart = useProductstore(s=>s.removeFromcart)
  return (
    <div>
      {cart?.map((item) => (
        <div key={item.id}>
          {item.title}
          <button onClick={()=>{
            removeFromCart(item.id)
          }} className="bg-gray-700 hover:bg-gray-900 rounded-lg text-white p-2">
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartDetailPage;
