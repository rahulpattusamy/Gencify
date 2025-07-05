import { useQuery } from "@tanstack/react-query";
import apiclient from "../service/api-client";
apiclient;

export interface Products {
  id: number;
  title: string;
  price: string;
  images: string;
}

const useProducts = (id?: number) =>
  useQuery({
    queryKey: ["products", id],
    queryFn: () =>
      apiclient
        .get<Products[]>("/products", {
          params: { categoryId: id },
        })
        .then((res) => res.data),
    staleTime: 192 * 60 * 60 * 1000,
  });

export default useProducts;
