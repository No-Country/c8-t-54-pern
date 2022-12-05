import { FcGoogle } from "react-icons/fc";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage, FormikValues } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../app/state/authSlice";
import { AppDispatch } from "../../app/store";
import { dataLogin } from "../../models/dataLogin";
import { PrivateRoutes, PublicRoutes } from "../../models/routes";
import { Error, Success } from "../../utils/notification";
import { validationSchema } from "./validationSchema";
import { useLogin } from "../../hooks/useUser";
import { useState } from "react";

const Login = () => {
  const initialValues: dataLogin = {
    email: "",
    password: "",
  };

  const onSuccess = (data: any) => {
    dispatch(login(data.data));
    Success(
      `¡Hola ${data.data.user.userName}!`,
      "¡Qué bueno tenerte de nuevo en MOVEment!"
    );
    setTimeout(() => {
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
    }, 2100);
  };
  const onError = () => {
    Error("Error al iniciar sesión");
  };

  enum inputPass {
    text = "text",
    password = "password",
  }

  const [isVisiblePass, setIsVisiblePass] = useState<inputPass>(inputPass.password);

  const { mutate, isLoading } = useLogin(onSuccess, onError);

  const onSubmit = (values: {}, onSubmitProps: FormikValues) => {
    mutate(values);
    onSubmitProps.resetForm();
  };

  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  return (
    <div className="py-4 mt-4 max-w-[90%] sm:max-w-[70%] md:max-w-2xl md:py-0 lg:max-w-4xl mx-auto md:mt-20 h-fit border rounded-md drop-shadow">
      <div className="flex items-center justify-center md:h-[700px]">
        <div className="hidden md:block w-[60%] h-full">
          <div className="rounded-l-md bg-hero-login bg-center bg-cover bg-no-repeat h-full"></div>
        </div>
        <div className="flex flex-col items-center sm:w-full  md:mx-auto md:w-[40%] gap-16 px-8">
          <div className="w-full text-start">
            <h2 className="font-semibold text-3xl">Inicia sesión</h2>
            <p className="font-medium text-sm">
              ¡Qué bueno tenerte de nuevo en MOVEment!
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
                <Form className="w-full flex flex-col items-center justify-center gap-20">
                  <div className="w-full flex flex-col items-center gap-3">
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
                          type={isVisiblePass}
                          name="password"
                          placeholder="Ingresa tu contraseña"
                        />
                        {isVisiblePass === inputPass.password ? (
                          <AiOutlineEye
                            className="absolute right-5 text-xl cursor-pointer"
                            onClick={() => setIsVisiblePass(inputPass.text)}
                          />
                        ) : (
                          <AiOutlineEyeInvisible
                            className="absolute right-5 text-xl cursor-pointer"
                            onClick={() => setIsVisiblePass(inputPass.password)}
                          />
                        )}
                      </div>
                      <ErrorMessage
                        name="password"
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
                      Iniciar Sesión
                    </button>
                    <button
                      className="form-buttons flex items-center justify-center gap-2 bg-transparent border-[3px] border-[#3A3A3A] rounded-md text-[#383838] font-semibold"
                      type="button"
                    >
                      <FcGoogle className="text-xl" />
                      Iniciar Sesión con Google
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
          <Link to={`/${PublicRoutes.REGISTER}`}>
            ¿No tienes una cuenta?{" "}
            <span className="font-semibold text-black">Crea tu cuenta</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
