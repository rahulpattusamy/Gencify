import { useQuery } from "@tanstack/react-query";
import apiclient from "../service/api-client";
import useProductstore from "../store";
apiclient;

export interface Products {
  id: number;
  title: string;
  price: string;
  images: string;
  
}

const useProducts = () =>{
  const productQuery = useProductstore(s=>s.productQuery)
  return useQuery({
    queryKey: ["products", productQuery],
    queryFn: () =>
      apiclient
        .get<Products[]>("/products", {
          params: { categoryId:productQuery?.categoryid },
        })
        .then((res) => res.data),
    staleTime: 192 * 60 * 60 * 1000,
  });
}
  

export default useProducts;
