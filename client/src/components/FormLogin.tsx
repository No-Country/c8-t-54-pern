import { useDispatch } from "react-redux";
import { login } from "../app/state/authSlice";
import { UserInfo } from "../models/userInfo";
import { FcGoogle } from "react-icons/fc"

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
    <form className="flex flex-col gap-5 relative  w-4/5 sm:w-full lg:items-center" onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Ingresa tu E-mail" className="p-3 placeholder:rgba(170,170,170,1) drop-shadow sm:w-full lg:w-4/5" onChange={handleChange} value={input.email}/>
        <input type="password" name="password" placeholder="ingresa tu contraseña" className="p-3 placeholder:rgba(170,170,170,1) drop-shadow sm:w-full lg:w-4/5" onChange={handleChange} value={input.password}/>
        <p className='text-gray-400'>¿Olvidaste tu contraseña?</p>
        <button className="bg-zinc-700 text-white p-3 rounded-sm text-lg hover:bg-white hover:text-black hover: border-4 border-zinc-700 lg:w-4/5 sm:w-full">Iniciar sesion</button>
        <button className="rounded-sm border-4 border-zinc-700 p-3 hover:bg-zinc-700 hover:text-white cursor-pointer flex items-center justify-center gap-2 sm:w-full lg:w-4/5 ">
          <FcGoogle className="text-xl"/>
          Iniciar sesión con Google
        </button>
  </form>
  )
}

export default FormLogin