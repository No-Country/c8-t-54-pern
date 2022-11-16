import { ChangeEvent, FormEvent, useState } from "react"
import { FcGoogle } from "react-icons/fc"
import { Link } from "react-router-dom"
import { createUser } from "../../services/httpRequest"

type data = {
    email: string
    password: string
    confirmPassword: string
}

const Register = () => {

    const [state, setState] = useState<data>({
        email: "",
        password: "",
        confirmPassword: "",
    })

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        let value: typeof state[keyof typeof state] = event.target.value
        setState({ ...state, [event.target.name]: value })
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(state)
        const resp = createUser(state, '/api/register/')
        console.log(resp)
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
                        <input className="w-full p-2 border-[0.1px] rounded-md drop-shadow placeholder:font-medium placeholder:rgba(170,170,170,1)" onChange={handleChange} type="email" name="email" placeholder="Ingresa tu E-mail"/>
                        <input className="w-full p-2 border-[0.1px] rounded-md drop-shadow placeholder:font-medium placeholder:rgba(170,170,170,1)" onChange={handleChange} type="password" name="password" placeholder="Ingresa tu contraseña"/>
                        <input className="w-full p-2 border-[0.1px] rounded-md drop-shadow placeholder:font-medium placeholder:rgba(170,170,170,1)" onChange={handleChange} type="password" name="confirmPassword" placeholder="Confirma tu contraseña"/>
                    </div>
                    <div className="w-full flex flex-col items-center gap-3">
                        <button className="w-full p-2 bg-[#3A3A3A] rounded-md text-white" type="submit">Crear cuenta</button>
                        <button className="w-full flex items-center justify-center gap-2  p-2 bg-transparent border-[3px] border-[#3A3A3A] rounded-md text-[#383838] font-semibold" type="button"><FcGoogle className="text-xl"/>Registrarse con Google</button>
                    </div>
                </form>
                <Link to="/login">
                    ¿Ya tenés una cuenta? <span className="font-semibold text-black">Inicia sesión</span>
                </Link>
            </div>
            <div className="hidden md:block w-[60%] h-full">
                <div className="rounded-r-md bg-[url('https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80')] bg-center bg-cover bg-no-repeat h-full"></div>
            </div>
        </div>
    </div>
  )
}
export default Register

