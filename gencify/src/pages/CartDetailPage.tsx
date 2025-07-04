
import useProductstore from "../store"


const CartDetailPage = () => {
const cart = useProductstore(s=>s.productQuery.cart)
  return (
    <div>
      {cart?.map(Product=><div>{Product.title} </div>)}
    </div>
  )
}

export default CartDetailPage