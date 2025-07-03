import { create } from "zustand";
import type { Products } from "./hooks/useProducts";

export interface ProductQuery {
  categoryid?: number;
  product?: Products | null;
  cart?: Products[] 
}
interface ProductQuerystore {
  productQuery: ProductQuery;
  setCategoryId: (categoryid: number) => void;
  setProduct: (product: Products) => void;
  setCart:(cart:Products)=>void;
}

const useProductstore = create<ProductQuerystore>((set) => ({
  productQuery: {},
  setCategoryId: (categoryid) =>
    set((store) => ({ productQuery: { ...store.productQuery, categoryid } })),
  setProduct: (product) =>
    set((store) => ({ productQuery: { ...store.productQuery, product } })),
  setCart:(cartProduct)=>set((store)=>({productQuery:{...store.productQuery, cart:store.productQuery.cart?[...store.productQuery.cart, cartProduct]:[cartProduct]}}))
}));

export default useProductstore