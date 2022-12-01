import * as Yup from "yup";

const passwordPattern =
  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/;

export const validationSchema = Yup.object({
  userName: Yup.string()
    .min(3, "Debe tener al menos 3 caracteres")
    .max(20, "Debe tener un máximo de 20 caracteres")
    .required("Nombre de usuario requerido"),
  email: Yup.string().email("Email inválido").required("Email requerido"),
  password: Yup.string()
    .matches(
      passwordPattern,
      "La contraseña debe tener al menos 8 caracteres e incluir mayúsculas, minúsculas, números y caracteres especiales"
    )
    .required("Contraseña requerida"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Las contraseñas deben coincidir")
    .required("Contraseña requerida"),
});
