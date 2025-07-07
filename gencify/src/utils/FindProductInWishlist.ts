import type { Products } from "../hooks/useProducts";

export const  FindProductInWishlist = (wishlist?: Products[], id?: number) =>
  !!wishlist?.length && wishlist.some((w) => w.id == id);
