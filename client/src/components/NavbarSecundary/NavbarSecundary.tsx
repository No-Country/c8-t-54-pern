import { useState, FC,Dispatch } from "react";
import { Link } from "react-router-dom";

interface Iprops   {
  width:number,
  setWidth:Dispatch<number>
}


const NavbarSecundary:FC<Iprops> = ({width,setWidth}) => {
  const [view, setView] = useState<Boolean>(false);

  return (
    <div>
      {width < 768 ? (
          <nav className="w-auto text-base font-poppins font-bold ">
          <ul className="flex pl-1 flex-col gap-1">
            <li>
              <Link
                to="/"
                onMouseEnter={() => setView(true)}
              >
                TIENDA
              </Link>
            </li>
            <li onMouseOut={() => setView(false)}>
              <Link  to="/" >
                NOSOTROS
              </Link>
            </li>
            <li onMouseOut={() => setView(false)}>
              <Link  to="/" >
                COMUNIDAD
              </Link>
            </li>
            <li onMouseOut={() => setView(false)}>
              <Link  to="/">
                CONTACTO
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <div>
          <nav className="w-full flex justify-center font-poppins font-bold h-24 border-2 border-b-slate-300 shadow-md">
            <ul className="flex items-center flex-wrap gap-4">
              <li>
                <Link
                  className="mx-4"
                  to="/catalogue"
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
