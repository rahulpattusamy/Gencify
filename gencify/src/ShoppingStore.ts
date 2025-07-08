import { create } from "zustand";
import type { Products } from "./hooks/useProducts";
interface cartProduct extends Products {
  quantity: number;
}
interface Shoppingstatus {
  product?: Products;
  cart?: cartProduct[];
  wishlist?: Products[];
}

interface shoppingStore {
  shoppingstatus: Shoppingstatus;
  setCart: (product: cartProduct) => void;
  removeFromcart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  setWishlist: (product: Products) => void;
  removeFromWishlist: (id: number) => void;
}

const useShoppingStore = create<shoppingStore>((set) => ({
  shoppingstatus: {},
  setCart: (product) =>
    set((state) => {
      const updatedCart = [
        ...(state.shoppingstatus.cart || []),
        { ...product, quantity: 1 },
      ];
      return {
        shoppingstatus: { ...state.shoppingstatus, cart: updatedCart },
      };
    }),

  removeFromcart: (id) =>
    set((state) => {
      const updatedCart = state.shoppingstatus.cart?.filter((c) => c.id !== id);
      return { shoppingstatus: { ...state.shoppingstatus, cart: updatedCart } };
    }),

  increaseQuantity: (id) =>
    set((state) => ({
      shoppingstatus: {
        ...state.shoppingstatus,
        cart: state.shoppingstatus.cart?.map((item) =>
          item.id == id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      },
    })),

  decreaseQuantity: (id) =>
    set((state) => ({
      shoppingstatus: {
        ...state.shoppingstatus,
        cart: state.shoppingstatus.cart?.map((item) =>
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
      shoppingstatus: {
        ...state.shoppingstatus,
        wishlist: [...(state.shoppingstatus.wishlist || []), product],
      },
    })),

  removeFromWishlist: (id) =>
    set((state) => {
      const updatedwishlist = state.shoppingstatus.wishlist?.filter(
        (w) => w.id !== id
      );
      return {
        shoppingstatus: { ...state.shoppingstatus, wishlist: updatedwishlist },
      };
    }),
}));

export default useShoppingStore