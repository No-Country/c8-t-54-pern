import { FiSearch } from "react-icons/fi";
import { BiLogIn,BiUser,BiMenu } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isLogin, setIsLogin] = useState<Boolean>(false);
  const [open,setOpen] = useState<Boolean>(false);
  return (
    <header className="w-full flex flex-col md:flex-row  justify-between  bg-black h-20 sm:p-2 items-center  font-poppins text-2xl text-white">
      <h1 className="font-semibold text-lg md:text-2xl p-2">MOVEment</h1>
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-2  md:hidden'>
          <BiMenu className="relative left-[90%]"/>
      </div>
      <div className="flex  md:w-[500px] w-full p-4 sm:p-0 items-center justify-center">
        <div className="flex w-[220px]   hover:text-lime-400 relative md:w-[100%]  ">
          <FiSearch className="text-black absolute   bottom-2 left-2" /> <input className="rounded-[20px] text-sm md:w-full sm:w-full p-2 w-full text-center  placeholder:rgba(170,170,170,1) text-black" placeholder="Buscar en la tienda"/>
        </div>
      <div className={`md:flex md:items-center md:pb-0 pb-36 bg-black absolute md:static md:z-auto z-20 left-0 w-full md:w-auto transition-all duration-500 ease-in ${open ? 'top-12 ':'top-[-490px]'}`}>
        {isLogin ? (
          <div className="md:w-[250px] w-ful absolute right-0 md:static flex md:flex-row-reverse gap-4 p-2 md:text-lg flex-col ">
            <div className="flex items-center cursor-pointer hover:text-lime-400 gap-2">
              <BiUser/>
              <p>Mi cuenta</p>
            </div>
            <div className="flex items-center cursor-pointer hover:text-lime-400 gap-2">
              <BsCart className="hover:text-lime-400"/>
              <p >Carrito</p>
            </div>
          </div>
        ) : (
          <div className="flex absolute md:static right-4 items-center md:right-10 cursor-pointer hover:text-lime-40">
            <div className="flex items-center gap-2">
              <BiLogIn/>
              <Link to="/login">Iniciar sesión</Link>
            </div>
          </div>
        )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
