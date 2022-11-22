import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosOptions, IoMdClose} from "react-icons/io";
function NavbarSecundary() {
  const [view, setView] = useState<Boolean>(false);
  const [width, setWhidth] = useState(window.innerWidth);
  const [viewMobile, setViewMobile]= useState<Boolean>(false)

  const viewWindow = () => {
    setWhidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", viewWindow);
  }, [])


  return (
    <div>
      {width < 1024 ? (
        <div className="h-14 flex justify-end p-1 drop-shadow-md absolute w-full " >
          <IoIosOptions className="text-[32px] relative left-[90%] " onClick={() => setViewMobile(true)}/>
            <div className={`relative p-2 w-screen bg-white h-screen transition-all ${viewMobile? 'left-[-2px]': 'left-[-800px]'}`}>
                <IoMdClose className="absolute top-0 right-0 text-xl" onClick={() => setViewMobile(false)}/>
                <ul className="w-full flex flex-col gap-4 pt-3">
                  <li><Link to={'/'} className=" border-black border-b-2 ">Tienda</Link></li>
                  <li><Link to={'/'} className=" border-black border-b-2">Nosotros</Link></li>
                  <li><Link to={'/'} className=" border-black border-b-2">Comunidad</Link></li>
                  <li><Link to={'/'} className=" border-black border-b-2">Contacto</Link></li>
                </ul>
            </div>
        </div>
      ) : (
        <div>
          <nav className="w-full flex justify-center font-poppins font-bold h-24 border-2 border-b-slate-300 shadow-md">
            <ul className="flex items-center flex-wrap gap-4">
              <li>
                <Link
                  className="mx-4"
                  to="/"
                  onMouseEnter={() => setView(true)}
                >
                  TIENDA
                </Link>
              </li>
              <li onMouseOut={() => setView(false)}>
                <Link className="mx-4" to="/" >
                  NOSOTROS
                </Link>
              </li>
              <li onMouseOut={() => setView(false)}>
                <Link className="mx-4" to="/" >
                  COMUNIDAD
                </Link>
              </li>
              <li onMouseOut={() => setView(false)}>
                <Link className="mx-4" to="/">
                  CONTACTO
                </Link>
              </li>
            </ul>
          </nav>
          {view && (
            <div className="absolute z-[2] w-full bg-white p-14  flex justify-around drop-shadow-md" >
              <div className="flex flex-col gap-2">
                <Link to={""} className="text-[#3056D3] font-bold">
                  Superiores
                </Link>
                <ul className="text-[#637381] flex flex-col gap-2">
                  <li>cosas</li>
                  <li>cosas</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <Link to={""} className="text-[#3056D3] font-bold">
                  Inferiores
                </Link>
                <ul className="text-[#637381] flex flex-col gap-2">
                  <li>cosas</li>
                  <li>cosas</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <Link to={""} className="text-[#3056D3] font-bold">
                  Camperas
                </Link>
                <ul className="text-[#637381] flex flex-col gap-2">
                  <li>cosas</li>
                  <li>cosas</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <Link to={""} className="text-[#3056D3] font-bold">
                  Zapatillas
                </Link>
                <ul className="text-[#637381] flex flex-col gap-2">
                  <li>cosas</li>
                  <li>cosas</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <Link to={""} className="text-[#3056D3] font-bold">
                  Accesorios
                </Link>
                <ul className="text-[#637381] flex flex-col gap-2">
                  <li>cosas</li>
                  <li>cosas</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default NavbarSecundary;
