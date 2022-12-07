import { useState, FC, Dispatch } from "react";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { useSelector } from "react-redux";
import { AppStore } from "../../app/store";
interface Iprops {
  width: number;
  setWidth: Dispatch<number>;
  logoutUser: React.MouseEventHandler<HTMLButtonElement>;
}

const NavbarSecundary: FC<Iprops> = ({ width, setWidth, logoutUser }) => {
  const [view, setView] = useState<Boolean>(false);
  const { logged } = useSelector((store: AppStore) => store.auth);

  return (
    <div>
      {width < 768 ? (
        <nav className="w-auto text-base font-poppins font-bold ">
          <ul className="flex pl-1 flex-col gap-1 ml-4">
            <li>
              <Link to="/catalogue">TIENDA</Link>
            </li>
            <li>
              <Link to="/">NOSOTROS</Link>
            </li>
            <li>
              <Link to="/">COMUNIDAD</Link>
            </li>
            <li>
              <Link to="/">CONTACTO</Link>
            </li>
            {logged && (
              <li>
                <button
                  className="text-lg font-bold flex  items-center gap-1 hover:text-lime-400"
                  onClick={logoutUser}
                >
                  <FiLogOut />
                  Cerrar sesion
                </button>
              </li>
            )}
          </ul>
        </nav>
      ) : (
        <div>
          <nav className="w-full flex justify-center font-poppins font-bold h-24 border-2 border-b-slate-300 shadow-md">
            <ul className="flex items-center flex-wrap gap-4 ml-4">
              <li>
                <Link className="mx-4" to="/catalogue">
                  TIENDA
                </Link>
              </li>
              <li>
                <Link className="mx-4" to="/">
                  NOSOTROS
                </Link>
              </li>
              <li>
                <Link className="mx-4" to="/">
                  COMUNIDAD
                </Link>
              </li>
              <li>
                <Link className="mx-4" to="/">
                  CONTACTO
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default NavbarSecundary;
