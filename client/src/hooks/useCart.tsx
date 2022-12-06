import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getRequest, postRequest } from "../services/httpRequest";
import { Toast } from "../utils/notification";

const getCart = (idCart: string) => getRequest(`/cart?idCart=${idCart}`);
const removeFromCart = (idCart: string, idProduct: string) => postRequest({},`/cart/remove?idCart=${idCart}&idProduct=${idProduct}`)
const addToCart = (idCart: string, idProduct: string) => postRequest({},`/cart/add?idCart=${idCart}&idProduct=${idProduct}`)

export const useGetCart = (idCart: string) => {
    return useQuery(["cart", idCart], () => getCart(idCart), {
      onSuccess: (data) => {
      },
      onError: (error: any) => {
        throw new Error(error.message);
      },
      refetchOnWindowFocus: true
    });
  };

export const useRemoveFromCart = (idCart: string, idProduct: string) => {
  const queryClient = useQueryClient()
  return useMutation(() => removeFromCart(idCart, idProduct), {
    onSuccess: () => {
      queryClient.invalidateQueries(['cart'])
    }
  })
}

export const useAddtoCart = (idCart: string, idProduct: string) => {
  const queryClient = useQueryClient()
  return useMutation(() => addToCart(idCart, idProduct), {
    onSuccess: () => {
      queryClient.invalidateQueries(['cart'])
      Toast('success', 'Agregado al carrito!')
    },
    onError: (error: any) => {
      Toast('error', 'Error al agregar al carrito!')
    }
  })
}