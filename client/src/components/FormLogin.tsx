import { useDispatch } from "react-redux";
import { login } from "../app/state/authSlice";
import { UserInfo } from "../models/userInfo";

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
    <form className="flex flex-col gap-5 relative  w-4/5" onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Ingresa tu E-mail" className="p-3" onChange={handleChange} value={input.email}/>
        <input type="password" name="password" placeholder="ingresa tu contraseña" className="p-3" onChange={handleChange} value={input.password}/>
        <p className='text-gray-400'>¿Olvidaste tu contraseña?</p>
        <button className="bg-zinc-700 text-white p-3 rounded-sm text-lg hover:bg-white hover:text-black hover: border-4 border-zinc-700">Iniciar sesion</button>
        <button className="rounded-sm border-4 border-zinc-700 p-3 hover:bg-zinc-700 hover:text-white cursor-pointer">Iniciar sesión con Google</button>
  </form>
  )
}

export default FormLogin