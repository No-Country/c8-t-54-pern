import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../app/state/authSlice";
import FormLogin from "../components/FormLogin";
import { UserInfo } from "../models/userInfo";

interface stateForm  {
  user:UserInfo
}

function Login() {
  const [input, setInput] = useState<stateForm['user']>({
    email:"",
    password: "",
  });
  return (
    <main className="flex h-screen">
      <div className="w-2/4 h-full bg-hero-login bg-no-repeat bg-cover bg-center flex justify-center items-center"></div>
      <div className="w-2/4 h-full items-center p-2 flex gap-16 flex-col">
        <div className="w-4/5 mt-2">
          <h2 className="text-3xl font-bold">Inicia sesión</h2>
          <p className="text-gray-800">¡Qué bueno tenerte de nuevo en MOVEment!</p>
        </div>
          <FormLogin input={input} setInput={setInput}/>
        <div className="flex gap-3">
          <p>¿No tienes una cuenta?</p>
          <p className="font-semibold">Crea tu cuenta</p>
        </div>
      </div>
    </main>
  );
}

export default Login;
