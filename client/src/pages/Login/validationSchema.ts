import * as Yup from "yup";

export const validationSchema = Yup.object({
  email: Yup.string().email("Email inválido").required("Email requerido"),
  password: Yup.string().required("Contraseña requerida"),
});
