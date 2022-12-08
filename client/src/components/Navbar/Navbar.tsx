import { FiSearch } from "react-icons/fi";
import { BiLogIn, BiUser, BiMenu } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { useState, FC, Dispatch } from "react";
import { Link } from "react-router-dom";
import NavbarSecundary from "../NavbarSecundary/NavbarSecundary";
import { AppStore } from "../../app/store";
import { useSelector } from "react-redux";
import { FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { logout } from "../../app/state/authSlice";

interface HomeProps {
  width: number;
  setWidth: Dispatch<number>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: FC<HomeProps> = ({ width, setWidth, setIsOpen }) => {
  const [open, setOpen] = useState<Boolean>(false);
  const { logged } = useSelector((store: AppStore) => store.auth);
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout());
  };
  return (
    <header className="w-full flex  md:flex-row relative flex-wrap   justify-center md:justify-between  bg-black h-20 sm:p-2 items-center  font-poppins  text-white">
      <h1 className="font-semibold  text-2xl md:text-2xl absolute left-3 top-6 md:static">
        MOVEment
      </h1>

       { width < 768 ? (
          <div className="text-3xl flex gap-2  items-center absolute top-6 right-2  ">
           {logged&&<div
              onClick={() => setIsOpen(true)}
              className=" flex items-center cursor-pointer  hover:text-lime-400 gap-1"
            >
              <BsCart className="hover:text-lime-400 text-xl" />
              <button className="text-lg">Carrito</button>
            </div>}
            <BiMenu onClick={() => setOpen(!open)} className="md:hidden " />
          </div>
        ) : (
          logged && (
            <div className=" flex items-center font-bold absolute top-6.5 right-4 md:gap-3">
            <div
              className="hover:text-lime-400 text-xl items-center gap-1 cursor-pointer flex"
              onClick={() => setIsOpen(true)}
            >
              <BsCart />
              <button className="text-lg">Carrito</button>
            </div>
            <button
              className="text-lg font-bold hover:text-lime-400"
              onClick={logoutUser}
            >
              <FiLogOut />
            </button>
          </div>
          )

        )}
      <div className="flex  md:w-[30rem] w-full p-4  sm:p-0 items-center justify-center md:gap-4 font-medium">
        <div className="flex w-[220px]   hover:text-lime-400 relative md:w-[100%]  ">
          <FiSearch className="text-black absolute   bottom-2 left-2" />
        </div>
        <div
          className={`md:flex md:items-center  h-[12rem] w-screen md:h-auto bg-black rounded-sm flex-wrap absolute md:static md:z-auto z-20 right-0  md:w-[20rem] transition-all duration-500 ease-in ${
            open ? "top-14 " : "top-[-490px]"
          }`}
        >
          {logged ? (
            <div className="md:w-[250px] p-1 w-full text-lg font-bold absolute right-0 md:static flex md:flex-row-reverse gap-1 md:text-lg flex-col ">
              <div className="w-full flex items-center cursor-pointer hover:text-lime-400 gap-1">
                <BiUser />
                <p className="w-full">Mi cuenta</p>
              </div>

              {width < 768 && (
                <NavbarSecundary width={width}  logoutUser={logoutUser}/>
              )}
            </div>
          ) : (
            <div className=" md:flex flex-col flex  justify-center md:static  items-start  md:right-10 cursor-pointer hover:text-lime-40 gap-1 pt-2">
              <div className="flex items-center gap-1  hover:text-lime-400 text-lg font-medium">
                <BiLogIn />
                <Link to="/login" className="md:text-lg ">
                  Iniciar sesión
                </Link>
              </div>
              {width < 768 && (
                <NavbarSecundary width={width}  logoutUser={logoutUser}/>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
