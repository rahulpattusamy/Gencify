import { useQuery } from "@tanstack/react-query";
import apiclient from "../service/api-client";

export interface Categories {
  id: number;
  name: string;
}

export const useCategory = () =>
  useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      apiclient.get<Categories[]>("/categories").then((res) => res.data),
    staleTime: 192 * 60 * 60 * 1000,
  });
