import type { Products } from "../hooks/useProducts";

export const FindproductInCart = (cart?: Products[], id?: number) =>
  !!cart?.length && cart.some((c) => c.id == id);
