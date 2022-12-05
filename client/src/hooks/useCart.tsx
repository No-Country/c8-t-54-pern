import { useQuery } from "@tanstack/react-query";
import { getRequest } from "../services/httpRequest";

const getCart = () => getRequest("/cart");

export const useGetCart = () => {
    return useQuery(["cart"], getCart, {
      onSuccess: (data) => {
      },
      onError: (error) => {
      }
    });
  };