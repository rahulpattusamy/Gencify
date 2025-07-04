import { useReducer, type ReactNode } from "react";
import cartcontext from "./cartContext";
import CartReducer from "../reducer/CartReducer";

interface Props {
  children: ReactNode;
}

const cartProvider = ({ children }: Props) => {
  const [cart, dispatch] = useReducer(CartReducer, []);
  return (
    <cartcontext.Provider value={{ cart, dispatch }}>
      {children}
    </cartcontext.Provider>
  );
};

export default cartProvider;
