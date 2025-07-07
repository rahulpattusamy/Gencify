import { create } from "zustand";
import type { Products } from "./hooks/useProducts";

interface cartProduct extends Products {
  quantity: number;
}

export interface ProductQuery {
  categoryid?: number;
  product?: Products;
  cart?: cartProduct[];
  wishlist?: Products[];
}
interface ProductQuerystore {
  productQuery: ProductQuery;
  setCategoryId: (categoryid: number) => void;
  setCart: (product: cartProduct) => void;
  removeFromcart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  setWishlist: (product: Products) => void;
  removeFromWishlist: (id: number) => void;
}

const useProductstore = create<ProductQuerystore>((set) => ({
  productQuery: {},
  setCategoryId: (categoryid) =>
    set((state) => ({ productQuery: { ...state.productQuery, categoryid } })),

  setCart: (product) =>
    set((state) => {
      const updatedCart = [
        ...(state.productQuery.cart || []),
        { ...product, quantity: 1 },
      ];
      return {
        productQuery: { ...state.productQuery, cart: updatedCart },
      };
    }),

  removeFromcart: (id) =>
    set((state) => {
      const updatedCart = state.productQuery.cart?.filter((c) => c.id !== id);
      return { productQuery: { ...state.productQuery, cart: updatedCart } };
    }),

  increaseQuantity: (id) =>
    set((state) => ({
      productQuery: {
        ...state.productQuery,
        cart: state.productQuery.cart?.map((item) =>
          item.id == id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      },
    })),

  decreaseQuantity: (id) =>
    set((state) => ({
      productQuery: {
        ...state.productQuery,
        cart: state.productQuery.cart?.map((item) =>
          item.id == id
            ? {
                ...item,
                quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
              }
            : item
        ),
      },
    })),

  setWishlist: (product) =>
    set((state) => ({
      productQuery: {
        ...state.productQuery,
        wishlist: [...(state.productQuery.wishlist || []), product],
      },
    })),
    
  removeFromWishlist: (id) =>
    set((state) => {
      const updatedwishlist = state.productQuery.wishlist?.filter(
        (w) => w.id !== id
      );
      return {
        productQuery: { ...state.productQuery, wishlist: updatedwishlist },
      };
    }),
}));

export default useProductstore;
