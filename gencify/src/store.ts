import { create } from "zustand";
import type { Products } from "./hooks/useProducts";

export interface ProductQuery {
  categoryid?: number;
  product?: Products;
  cart?: Products[];
  wishlist?: Products[];
}
interface ProductQuerystore {
  productQuery: ProductQuery;
  setCategoryId: (categoryid: number) => void;
  setCart: (cart: Products) => void;
  removeFromcart: (id: number) => void;
  setWishlist: (wishlist: Products) => void;
  removeFromWishlist:(id:number)=>void
}

const useProductstore = create<ProductQuerystore>((set) => ({
  productQuery: {},
  setCategoryId: (categoryid) =>
    set((state) => ({ productQuery: { ...state.productQuery, categoryid } })),
  setCart: (cart) =>
    set((state) => ({
      productQuery: {
        ...state.productQuery,
        cart: [...(state.productQuery.cart || []), cart],
      },
    })),
  removeFromcart: (id) =>
    set((state) => {
      const updatedCart = state.productQuery.cart?.filter((c) => c.id !== id);
      return { productQuery: { ...state.productQuery, cart: updatedCart } };
    }),
  setWishlist: (wishlist) =>
    set((state) => ({
      productQuery: {
        ...state.productQuery,
        wishlist: [...(state.productQuery.wishlist || []), wishlist],
      },
    })),
    removeFromWishlist:(id) =>
    set((state) => {
      const updatedwishlist = state.productQuery.wishlist?.filter((w) => w.id !== id);
      return { productQuery: { ...state.productQuery, wishlist: updatedwishlist } };
    }),
}));

export default useProductstore;
