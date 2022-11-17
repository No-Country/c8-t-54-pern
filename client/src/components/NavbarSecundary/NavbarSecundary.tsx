import { Link } from "react-router-dom";

function NavbarSecundary() {
  return (
    <div className='w-full flex justify-center items-center font-poppins font-bold h-20'>
        <Link className="mx-4" to="/">TIENDA</Link>
        <Link className="mx-4" to="/">NOSOTROS</Link>
        <Link className="mx-4" to="/">COMUNIDAD</Link>
        <Link className="mx-4" to="/">CONTACTO</Link>
    </div>
  )
}

export default NavbarSecundary