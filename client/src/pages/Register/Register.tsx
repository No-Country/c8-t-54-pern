import { FcGoogle } from "react-icons/fc";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik, FormikValues } from "formik";
import { useCreateUser } from "../../hooks/useUser";
import { PublicRoutes } from "../../models/routes";
import { validationSchema } from "./validationSchema";
import { useState } from "react";

type registerData = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string | null;
};

const Register = () => {
  const initialValues: registerData = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  enum inputPass {
    text = "text",
    password = "password",
  }

  const [isVisiblePass, setIsVisiblePass] = useState({
    password: inputPass.password,
    confirm: inputPass.password,
  });
 
  const { mutate, isLoading } = useCreateUser();

  const onSubmit = (values: {}, onSubmitProps: FormikValues) => {
    mutate({ ...values, confirmPassword: null });
    onSubmitProps.resetForm();
  };

  return (
    <div className="py-4 mt-4 max-w-[90%] sm:max-w-[70%] md:max-w-2xl md:py-0 lg:max-w-4xl mx-auto md:mt-20 h-fit border rounded-md drop-shadow">
      <div className="flex items-center justify-center md:h-[700px]">
        <div className="flex flex-col sm:w-full  md:mx-auto md:w-[40%] justify-around px-8 h-full">
          <div className="w-full text-start">
            <h2 className="font-semibold text-3xl">Crea tu cuenta</h2>
            <p className="font-medium text-sm">
              ¡Unite a la comunidad de MOVEment!
            </p>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            validateOnMount
          >
            {(formik) => {
              return (
                <Form className="w-full flex flex-col justify-evenly gap-5">
                  <div className="w-full flex flex-col items-center gap-3">
                    <div className="w-full">
                      <Field
                        className="form-inputs"
                        type="text"
                        name="userName"
                        placeholder="Nombre de usuario"
                      />
                      <ErrorMessage
                        name="userName"
                        className="form-error-message"
                        component={"p"}
                      />
                    </div>
                    <div className="w-full">
                      <Field
                        className="form-inputs"
                        type="email"
                        name="email"
                        placeholder="Ingresa tu E-mail"
                      />
                      <ErrorMessage
                        name="email"
                        className="form-error-message"
                        component={"p"}
                      />
                    </div>
                    <div className="w-full">
                      <div className="flex relative items-center">
                        <Field
                          className="form-inputs"
                          type={isVisiblePass.password}
                          name="password"
                          placeholder="Ingresa tu contraseña"
                        />
                        {isVisiblePass.password === inputPass.password ? (
                          <AiOutlineEye
                            className="absolute right-5 text-xl cursor-pointer"
                            onClick={() =>
                              setIsVisiblePass({
                                ...isVisiblePass,
                                password: inputPass.text,
                              })
                            }
                          />
                        ) : (
                          <AiOutlineEyeInvisible
                            className="absolute right-5 text-xl cursor-pointer"
                            onClick={() =>
                              setIsVisiblePass({
                                ...isVisiblePass,
                                password: inputPass.password,
                              })
                            }
                          />
                        )}
                      </div>
                      <ErrorMessage
                        name="password"
                        className="form-error-message"
                        component={"p"}
                      />
                    </div>
                    <div className="w-full">
                      <div className="flex relative items-center">
                        <Field
                          className="form-inputs"
                          type={isVisiblePass.confirm}
                          name="confirmPassword"
                          placeholder="Confirma tu contraseña"
                        />
                        {isVisiblePass.confirm === inputPass.password ? (
                          <AiOutlineEye
                            className="absolute right-5 text-xl cursor-pointer"
                            onClick={() =>
                              setIsVisiblePass({
                                ...isVisiblePass,
                                confirm: inputPass.text,
                              })
                            }
                          />
                        ) : (
                          <AiOutlineEyeInvisible
                            className="absolute right-5 text-xl cursor-pointer"
                            onClick={() =>
                              setIsVisiblePass({
                                ...isVisiblePass,
                                confirm: inputPass.password,
                              })
                            }
                          />
                        )}
                      </div>
                      <ErrorMessage
                        name="confirmPassword"
                        className="form-error-message"
                        component={"p"}
                      />
                    </div>
                  </div>
                  <div className="w-full flex flex-col items-center gap-3">
                    <button
                      className="form-buttons bg-[#3A3A3A]  text-white"
                      type="submit"
                      disabled={!formik.isValid || isLoading}
                    >
                      Crear cuenta
                    </button>
                    <button
                      className="form-buttons flex items-center justify-center gap-2 bg-transparent border-[3px] border-[#3A3A3A] rounded-md text-[#383838] font-semibold"
                      type="button"
                    >
                      <FcGoogle className="text-xl" />
                      Registrarse con Google
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
          <Link to={`/${PublicRoutes.LOGIN}`}>
            ¿Ya tenés una cuenta?{" "}
            <span className="font-semibold text-black">Inicia sesión</span>
          </Link>
        </div>
        <div className="hidden md:block w-[60%] h-full">
          <div className="rounded-r-md bg-hero-register bg-center bg-cover bg-no-repeat h-full"></div>
        </div>
      </div>
    </div>
  );
};
export default Register;
