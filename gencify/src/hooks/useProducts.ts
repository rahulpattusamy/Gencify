import { useQuery } from "@tanstack/react-query";
import apiclient from "../assets/service/api-client";
apiclient;
export interface Products {
  id: number;
  title: string;
  price: string;
  images: string;
}

const useProducts = () =>
  useQuery({
    queryKey: ["products"],
    queryFn: () =>
      apiclient.get<Products[]>("/products").then((res) => res.data),
  });

export default useProducts;
