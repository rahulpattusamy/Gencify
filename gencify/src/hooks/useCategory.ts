import { useQuery } from "@tanstack/react-query";
import apiclient from "../assets/service/api-client";

interface categories {
  id: number;
  name: string;
}

export const useCategory = () =>
  useQuery({
    queryKey: ["categories"],
    queryFn: () => apiclient.get<categories[]>("/categories").then((res) => res.data),
  });
