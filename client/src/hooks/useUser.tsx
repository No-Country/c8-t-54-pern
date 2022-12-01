import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { PublicRoutes } from "../models/routes";
import { postRequest } from "../services/httpRequest";
import { Success, Error } from "../utils/notification";

const createUserFn = (user: {}) => postRequest(user, "/users");
const loginFn = (user: {}) => postRequest(user, "/users/login");

export const useCreateUser = () => {
  const navigate = useNavigate();

  return useMutation(createUserFn, {
    onSuccess: (res) => {
      Success("¡Felicitaciones!", "Tu cuenta ha sido creada con éxito.");
      setTimeout(() => {
        navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
      }, 2100);
    },
    onError: (error) => {
      Error("Error al crear la cuenta");
    },
  });
};

export const useLogin = (
  onSuccess: (data: {}) => void,
  onError: (error: {}) => void
) => {
  return useMutation(["login"], loginFn, {
    onSuccess,
    onError,
  });
};
