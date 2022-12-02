import { useCreateUser } from "../../hooks/useUser";
import { ErrorMessage, Field, Form, Formik, FormikValues } from "formik";
import { validationSchema } from "../Login/validationSchema";
import { useState } from "react";

type profileData = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string | null;
};

const Profile = () => {
  const initialValues: profileData = {
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
    <div className="container md:px-32 md:py-4 font-poppins ">
      <div className="container-header border rounded-md border-gray-200 flex justify-start p-8 mb-4 shadow">
        <img
          className="profile-image  h-36 w-36"
          src="https://firebasestorage.googleapis.com/v0/b/db-demo-e7d23.appspot.com/o/Rectangle%2090.png?alt=media&token=e22140f1-d23c-4e84-a2a3-16355aad6b67"
          alt=""
        />
        <div className=" ml-4 flex flex-col justify-center">
          <h2 className="text-2xl font-extrabold">Susana Bejarano</h2>
          <p>Verifica los datos relacionados con tu perfil</p>
        </div>

        
      </div>

      <div className="container-boxes rounded-md border border-gray-200 shadow">
        <div className=" justify-around py-8">
          <div className=" w-full flex flex-col  gap-3 items-center md:items-start">
            <div className=" w-full md:w-1/2 flex justify-center gap-4">
              <p>JPG, PNG o GIF. Peso Máximo de 1mb</p>
            </div>
            <div className=" w-full md:w-1/2 flex justify-center gap-4">
              <button
                className="rounded-md px-4 py-2 cursor-pointer bg-[#3A3A3A]  text-white"
                type="submit"
              >
                Subir foto nueva
              </button>
              <button
                className="rounded-md px-4 py-2 cursor-pointer bg-[#3A3A3A]  text-white"
                type="submit"
              >
                Suprimir
              </button>
            </div>
          </div>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          validateOnMount
        >
          {(formik) => {
            return (
              <Form className=" w-full flex flex-col justify-evenly gap-5 ">
                <div className="w-full flex flex-col items-start gap-3 px-8">
                  <Field
                    className="w-full cursor-pointer md:w-1/2 p-2 border-2 rounded-md border-gray-200 drop-shadow "
                    type="text"
                    name="userName"
                    placeholder="Nombre de usuario"
                  />
                  <ErrorMessage
                    className="form-error-message"
                    name="userName"
                    component={"p"}
                  ></ErrorMessage>
                  <Field
                    className="w-full cursor-pointer md:w-1/2 p-2 border-2 rounded-md border-gray-200 drop-shadow"
                    type="text"
                    name="lastName"
                    placeholder="Apellido de usuario"
                  />
                  <ErrorMessage
                    className="form-error-message"
                    name="lastName"
                    component={"p"}
                  ></ErrorMessage>
                  <Field
                    className="w-full cursor-pointer md:w-1/2 p-2 border-2 rounded-md border-gray-200 drop-shadow"
                    type="number"
                    name="phoneNumber"
                    placeholder="Teléfono"
                  />
                  <ErrorMessage
                    className="form-error-message"
                    name="phoneNumber"
                    component={"p"}
                  ></ErrorMessage>
                  <div className=" w-full md:w-1/2 flex justify-center gap-4 py-8">
                    <button
                      className=" rounded-md px-4 py-2 cursor-pointer bg-[#3A3A3A]  text-white"
                      type="submit"
                      disabled={!formik.isValid || isLoading}
                    >
                      Guardar
                    </button>
                    <button
                      className=" rounded-md px-4 py-2 cursor-pointer bg-[#3A3A3A]  text-white"
                      type="submit"
                      disabled={!formik.isValid || isLoading}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Profile;
