import type { Products } from "../hooks/useProducts";

export const RemoveProductInCart = (cart?: Products[], id?: number) =>
  cart?.filter((c) => c.id !== id);
