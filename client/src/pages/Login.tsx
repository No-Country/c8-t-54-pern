import { useState } from "react";
import FormLogin from "../components/FormLogin";
import { UserInfo } from "../models/userInfo";
import { Link } from "react-router-dom";
interface stateForm {
  user: UserInfo;
}

function Login() {
  const [input, setInput] = useState<stateForm["user"]>({
    email: "",
    password: "",
  });
  return (
    <main className="flex h-screen justify-center items-center sm:w-full md:gap-4 lg:gap-6 ">
      <div className=" w-2/4 h-5/6 md:h-[700px] bg-hero-login bg-no-repeat bg-cover bg-center justify-center items-center hidden md:block"></div>
      <div className="items-center flex  flex-col sm:w-full gap-4 md:w-2/5 md:h-auto md:gap-2 lg:gap-4 lg:w-[30%] lg:h-[70%] xl:w-2/5 xl:h-[full] xl:justify-center ">
        <div className="w-4/5 sm:-w-full flex flex-col md:gap-3">
          <h2 className="text-3xl font-bold">Inicia sesión</h2>
          <p className=" font-medium text-sm">
            ¡Qué bueno tenerte de nuevo en MOVEment!
          </p>
        </div>
        <FormLogin input={input} setInput={setInput} />
        <div className="flex gap-3">
          <p>¿No tienes una cuenta?</p>
          <Link to={"/register"} className="font-semibold">
            Crea tu cuenta
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Login;
