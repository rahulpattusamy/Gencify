import { create } from "zustand";
import type { Products } from "./hooks/useProducts";

export interface ProductQuery {
  categoryid?: number;
  product?: Products;
  cart?:Products[]
}
interface ProductQuerystore {
  productQuery: ProductQuery;
  setCategoryId: (categoryid: number) => void;
  setCart: (cart: Products) => void;
  
  
}

const useProductstore = create<ProductQuerystore>((set) => ({
  productQuery: {},
  setCategoryId: (categoryid) =>
    set((state) => ({ productQuery: { ...state.productQuery, categoryid } })),
  setCart: (cart) =>
    set((state) => ({ productQuery: {...state.productQuery, cart:[...(state.productQuery.cart || []), cart] } }))
}));

export default useProductstore;
