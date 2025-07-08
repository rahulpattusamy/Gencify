import { create } from "zustand";
import type { Products } from "./hooks/useProducts";



export interface ProductQuery {
  categoryid?: number;
  product?: Products;
}
interface ProductQuerystore {
  productQuery: ProductQuery;
  setCategoryId: (categoryid: number) => void;
  
}



const useProductstore = create<ProductQuerystore>((set) => ({
  productQuery: {},
  setCategoryId: (categoryid) =>
    set((state) => ({ productQuery: { ...state.productQuery, categoryid } })),
}));

export default useProductstore;
