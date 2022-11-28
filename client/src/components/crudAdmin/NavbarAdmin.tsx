import { Link } from "react-router-dom"
import { PrivateRoutesAdmin } from "../../models/routes"

const NavbarAdmin = () => {
  return (
    <aside className="w-[20%] border-r-2 h-screen  flex flex-col  items-center justify-center gap-10">
    <Link to={'/'}  className="cursor-pointer bg-transparent w-3/4 hover:-emerald-600/75 text-emerald-600/75 font-semibold hover:bg-emerald-600/75 py-2 px-4 border border-emerald-600/75 hover:text-white rounded">
      Agregar
    </Link>
    <Link 
     to={PrivateRoutesAdmin.DELETECREATE}
     className="cursor-pointer bg-transparent w-3/4 hover:-emerald-600/75 text-emerald-600/75 font-semibold hover:bg-emerald-600/75 py-2 px-4 border border-emerald-600/75 hover:text-white rounded">
      Editar y Borrar
    </Link>
  </aside>
  )
}

export default NavbarAdmin