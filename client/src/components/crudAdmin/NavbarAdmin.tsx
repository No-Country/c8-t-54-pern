import { Link } from "react-router-dom"
import { PrivateRoutesAdmin } from "../../models/routes"
import Decoration from "./Decoration"
import {HiOutlineMenuAlt2} from 'react-icons/hi'
import {useState} from 'react'
import { useDispatch } from "react-redux"
import { logout } from "../../app/state/authSlice"

const NavbarAdmin = () => {
  const [toggle,setToggle] = useState<Boolean>()

  const dispatch = useDispatch();
  const logoutAdmin = () => {
    dispatch(logout())
  }
  return (

    <aside className={`md:w-[30%] md:h-[100vh]  fixed  z-[2] md:shadow md:drop-shadow-2xl ${toggle? 'w-[100vw] h-[100vh]' :'w-[10vw] h-[10vh]'}  flex flex-col `}>
      <HiOutlineMenuAlt2 className=" top-2 left-2  z-[3] text-[2.3rem] md:hidden  z-2" onClick={() => setToggle(!toggle)}/>
    <div className={`flex flex-col h-[100%] w-full md:static  md:w-[100%] absolute z-[2] bg-white justify-center gap-10 items-center ${toggle? 'left-[0.3rem]': 'left-[-1200px]'} transition-all ease-in-out`}>
      <Decoration/>
      <Link to={'/'}  className="cursor-pointer bg-transparent md:w-3/4 w-[8.5rem] text-center hover:-emerald-600/75 text-emerald-600/75 font-semibold hover:bg-emerald-600/75 py-2 md:px-4 border-x-2 border-emerald-600/75 hover:text-white rounded">
        Agregar
      </Link>
      <Link 
      to={PrivateRoutesAdmin.DELETECREATE}
      className="cursor-pointer bg-transparent md:w-3/4 w-[8.6rem] text-center  hover:-emerald-600/75 text-[#004dff] font-semibold hover:bg-[#004dff] py-2 md:px-4 border-x-2 border-[#004dff] hover:text-white rounded">
        Editar y Borrar
      </Link>
      <button onClick={logoutAdmin} className="cursor-pointer bg-transparent md:w-3/4 w-[8.6rem] text-center  hover:-emerald-600/75 text-[#7d0038] font-semibold hover:bg-[#7d0038] py-2 md:px-4 border-x-2 border-[#7d0038] hover:text-white rounded">
        Cerrar sesión
      </button>
    </div>

  </aside>

  )
}

export default NavbarAdmin