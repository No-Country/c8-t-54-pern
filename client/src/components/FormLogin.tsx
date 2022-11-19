import { useDispatch } from "react-redux";
import { login } from "../app/state/authSlice";
import { UserInfo } from "../models/userInfo";
import { FcGoogle } from "react-icons/fc"
import { Link } from "react-router-dom";

type InputEvent = React.ChangeEvent<HTMLInputElement>;
type FormEvent = React.ChangeEvent<HTMLFormElement>;

interface IProps  {
  input:UserInfo,
  setInput:React.Dispatch<React.SetStateAction<UserInfo>>
}

const FormLogin: React.FC<IProps> = ({input,setInput}:IProps) => {
    const dispatch = useDispatch();
    const handleChange = (event:InputEvent) => {
        setInput({
          ...input,
          [event.target.name]:event.target.value
        })
    }
    
    const handleSubmit = (event: FormEvent) => {
      event.preventDefault()
      dispatch(login({
        ...input
      }))
    }

  return (
    <form className="w-full flex flex-col items-center justify-center gap-20" onSubmit={handleSubmit}>
                    <div className="w-full flex flex-col items-center gap-3">
                        <input className="form-inputs" onChange={handleChange} type="email" name="email" placeholder="Ingresa tu E-mail"/>
                        <input className="form-inputs" onChange={handleChange} type="password" name="password" placeholder="Ingresa tu contraseña"/>
                    </div>
                    <div className="w-full flex flex-col items-center gap-3">
                        <button className="form-buttons bg-[#3A3A3A]  text-white" type="submit">Iniciar Sesión</button>
                        <button className="form-buttons flex items-center justify-center gap-2 bg-transparent border-[3px] border-[#3A3A3A] rounded-md text-[#383838] font-semibold" type="button"><FcGoogle className="text-xl"/>Iniciar Sesión con Google</button>
                    </div>
                </form>
  )
}

export default FormLogin