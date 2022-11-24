import { ChangeEvent, FormEvent, useState } from "react"
import { FcGoogle } from "react-icons/fc"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { authLogin } from "../../app/state/authSlice"
import { AppDispatch } from "../../app/store"
import { dataLogin } from "../../models/dataLogin"
import { PrivateRoutes, PublicRoutes } from "../../models/routes"
import { Success } from "../../utils/notification"

const Login = () => {

    const dispatch = useDispatch<AppDispatch>();
    
    const navigate = useNavigate()
    const [state, setState] = useState<dataLogin>({
        email: "",
        password:"",
    })

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        let value: typeof state[keyof typeof state] = event.target.value
        setState({ ...state, [event.target.name]: value })
    }
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const resp = await dispatch(authLogin(state)).unwrap()

        Success(`¡Hola ${resp.data.user.userName}!`, '¡Qué bueno tenerte de nuevo en MOVEment!')
        setTimeout(() => {
            navigate(`/${PrivateRoutes.PRIVATE}`, {replace: true})
        }, 2100);

    }

  return (
    <div className="py-4 mt-4 max-w-[90%] sm:max-w-[70%] md:max-w-2xl md:py-0 lg:max-w-4xl mx-auto md:mt-20 h-fit border rounded-md drop-shadow">
        <div className="flex items-center justify-center md:h-[700px]">
            <div className="hidden md:block w-[60%] h-full">
                <div className="rounded-l-md bg-hero-login bg-center bg-cover bg-no-repeat h-full"></div>
            </div>
            <div className="flex flex-col items-center sm:w-full  md:mx-auto md:w-[40%] gap-16 px-8">
                <div className="w-full text-start">
                    <h2 className="font-semibold text-3xl">Inicia sesión</h2>
                    <p className="font-medium text-sm">¡Qué bueno tenerte de nuevo en MOVEment!</p>
                </div>
                <form className="w-full flex flex-col items-center justify-center gap-20" onSubmit={handleSubmit}>
                    <div className="w-full flex flex-col items-center gap-3">
                        <input className="form-inputs" onChange={handleChange} type="text" name="email" placeholder="Ingresa tu E-mail"/>
                        <input className="form-inputs" onChange={handleChange} type="password" name="password" placeholder="Ingresa tu contraseña"/>
                    </div>
                    <div className="w-full flex flex-col items-center gap-3">
                        <button className="form-buttons bg-[#3A3A3A]  text-white" type="submit">Iniciar Sesión</button>
                        <button className="form-buttons flex items-center justify-center gap-2 bg-transparent border-[3px] border-[#3A3A3A] rounded-md text-[#383838] font-semibold" type="button"><FcGoogle className="text-xl"/>Iniciar Sesión con Google</button>
                    </div>
                </form>
                <Link to={`/${PublicRoutes.REGISTER}`}>
                    ¿No tienes una cuenta? <span className="font-semibold text-black">Crea tu cuenta</span>
                </Link>
            </div>
        </div>
    </div>
  )
}
export default Login