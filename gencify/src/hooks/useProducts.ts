import { useQuery } from "@tanstack/react-query";
import apiclient from "../assets/service/api-client"
import type { ProductQuery } from "../store";
apiclient;

export interface Products {
  id: number;
  title: string;
  price: string;
  images: string;
}

const useProducts = (id?: ProductQuery) =>
  useQuery({
    queryKey: ["products",id],
    queryFn: () =>
      apiclient
        .get<Products[]>("/products", {
          params: { categoryId: id?.categoryid },
        })
        .then((res) => res.data),
    staleTime: 192 * 60 * 60 * 1000,
  });

export default useProducts;
