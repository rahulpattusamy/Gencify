import { useQuery } from "@tanstack/react-query";
import apiclient from "../assets/service/api-client";
import type { ProductQuery } from "../App";
apiclient;
export interface Products {
  id: number;
  title: string;
  price: string;
  images: string;
}

const useProducts = (productQuery: ProductQuery) =>
  useQuery({
    queryKey: ["products", productQuery],
    queryFn: () =>
      apiclient
        .get<Products[]>("/products", {
          params: { categoryId: productQuery.category?.id },
        })
        .then((res) => res.data),
    staleTime: 192 * 60 * 60 * 1000,
  });

export default useProducts;
