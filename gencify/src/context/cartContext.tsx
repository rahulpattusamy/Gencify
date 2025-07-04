import type { Dispatch } from "react";
import React from "react";

import type { Products } from "../hooks/useProducts";

interface addToCart {
  type: "ADD TO CART";
  carts: Products;
}

interface removeFromCart {
  type: "REMOVE FROM CART";
  cartid: number;
}

export type CartAction = addToCart | removeFromCart;

export const CartReducer = (carts: Products[], action: CartAction): Products[] => {
  if (action.type === "ADD TO CART") return [action.carts, ...carts];
  if (action.type === "REMOVE FROM CART")
    return carts.filter((c) => c.id !== action.cartid);
};

interface CartContext{
     cart:Products[]
     dispatch:Dispatch<CartAction>
}

const cartcontext = React.createContext<CartContext>({}as CartContext);

export default  cartcontext