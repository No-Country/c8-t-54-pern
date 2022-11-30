import { Link } from "react-router-dom"
import { PrivateRoutesAdmin } from "../../models/routes"
import Decoration from "./Decoration"
import {HiOutlineMenuAlt2} from 'react-icons/hi'
import {useState} from 'react'

const NavbarAdmin = () => {
  const [toggle,setToggle] = useState<Boolean>()

  return (
    <aside className={`md:w-[30%] w-[30 realtive md:shadow md:drop-shadow-2xl `}>
      <HiOutlineMenuAlt2 className=" top-2 left-2 absolute z-[3] text-[2.3rem] md:hidden  bg-white z-2" onClick={() => setToggle(!toggle)}/>
    <div className={`flex flex-col h-[100%] w-full md:static  md:w-[100%] absolute z-[2] bg-white justify-center gap-10 items-center ${toggle? 'left-[0.3rem]': 'left-[-1200px]'} transition-all ease-in-out`}>
      <Decoration/>
      <Link to={'/'}  className="cursor-pointer bg-transparent md:w-3/4 w-[8.5rem] text-center hover:-emerald-600/75 text-emerald-600/75 font-semibold hover:bg-emerald-600/75 py-2 md:px-4 border border-emerald-600/75 hover:text-white rounded">
        Agregar
      </Link>
      <Link 
      to={PrivateRoutesAdmin.DELETECREATE}
      className="cursor-pointer bg-transparent md:w-3/4 w-[8.6rem] text-center  hover:-emerald-600/75 text-[#004dff] font-semibold hover:bg-[#004dff] py-2 md:px-4 border border-[#004dff] hover:text-white rounded">
        Editar y Borrar
      </Link>
    </div>

  </aside>
  )
}

export default NavbarAdmin