import { ChangeEvent, FormEvent, useState } from "react"
import { FcGoogle } from "react-icons/fc"
import { Link } from "react-router-dom"
import { useCreateUser } from "../../hooks/useUser"
import { PublicRoutes } from "../../models/routes"

type data = {
    userName: string
    email: string
    password: string
    firstName: string
    lastName: string
    phoneNumber: number
    userRole: string
    profilePic: string
    // confirmPassword: string
}

const Register = () => {

    const [dataLogin, setDataLogin] = useState<data>({
        userName: "",
        password:"",
        firstName: "Pepito",
        lastName: "Example",
        email: "",
        phoneNumber: 0,
        userRole: "admin",
        profilePic: ""
    })

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        let value: typeof dataLogin[keyof typeof dataLogin] = event.target.value
        setDataLogin({ ...dataLogin, [event.target.name]: value })
    }

    const {mutate: postRequest} = useCreateUser()
    

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        postRequest(dataLogin)
    }

  return (
    <div className="py-4 mt-4 max-w-[90%] sm:max-w-[70%] md:max-w-2xl md:py-0 lg:max-w-4xl mx-auto md:mt-20 h-fit border rounded-md drop-shadow">
        <div className="flex items-center justify-center md:h-[700px]">
            <div className="flex flex-col items-center sm:w-full  md:mx-auto md:w-[40%] gap-16 px-8">
                <div className="w-full text-start">
                    <h2 className="font-semibold text-3xl">Crea tu cuenta</h2>
                    <p className="font-medium text-sm">¡Unite a la comunidad de MOVEment!</p>
                </div>
                <form className="w-full flex flex-col items-center justify-center gap-20" onSubmit={handleSubmit}>
                    <div className="w-full flex flex-col items-center gap-3">
                        <input className="form-inputs" onChange={handleChange} type="text" name="userName" placeholder="Ingresa tu nombre de usuario"/>
                        <input className="form-inputs" onChange={handleChange} type="email" name="email" placeholder="Ingresa tu E-mail"/>
                        <input className="form-inputs" onChange={handleChange} type="password" name="password" placeholder="Ingresa tu contraseña"/>
                        {/* <input className="w-full p-2 border-[0.1px] rounded-md drop-shadow placeholder:font-medium placeholder:rgba(170,170,170,1)" onChange={handleChange} type="password" name="confirmPassword" placeholder="Confirma tu contraseña"/> */}
                    </div>
                    <div className="w-full flex flex-col items-center gap-3">
                        <button className="form-buttons bg-[#3A3A3A]  text-white" type="submit">Crear cuenta</button>
                        <button className="form-buttons flex items-center justify-center gap-2 bg-transparent border-[3px] border-[#3A3A3A] rounded-md text-[#383838] font-semibold" type="button"><FcGoogle className="text-xl"/>Registrarse con Google</button>
                    </div>
                </form>
                <Link to={`/${PublicRoutes.LOGIN}`}>
                    ¿Ya tenés una cuenta? <span className="font-semibold text-black">Inicia sesión</span>
                </Link>
            </div>
            <div className="hidden md:block w-[60%] h-full">
                <div className="rounded-r-md bg-hero-register bg-center bg-cover bg-no-repeat h-full"></div>
            </div>
        </div>
    </div>
  )
}
export default Register

