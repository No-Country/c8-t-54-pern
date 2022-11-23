import { FiSearch } from "react-icons/fi";
import { BiLogIn,BiUser,BiMenu } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { useState,FC,Dispatch } from "react";
import { Link } from "react-router-dom";
import NavbarSecundary from "../NavbarSecundary/NavbarSecundary";

interface HomeProps {
  width:number,
  setWidth:Dispatch<number>
}

const  Navbar:FC<HomeProps> = ({width,setWidth}) => {

  const [isLogin, setIsLogin] = useState<Boolean>(true);
  const [open,setOpen] = useState<Boolean>(false);
  
  
  
  return (
    <header className="w-full flex flex-col md:flex-row  justify-between  bg-black h-20 sm:p-2 items-center  font-poppins text-2xl text-white">
      <h1 className="font-semibold text-lg md:text-2xl p-2">MOVEment</h1>
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-2  md:hidden'>
          <BiMenu className="relative left-[90%]"/>
      </div>
      <div className="flex  md:w-[30rem] w-full p-4  sm:p-0 items-center justify-center md:gap-4 font-medium">
        <div className="flex w-[220px]   hover:text-lime-400 relative md:w-[100%]  ">
          <FiSearch className="text-black absolute   bottom-2 left-2" /> 
        </div>
      <div className={`md:flex md:items-center  h-[12rem] w-screen md:h-auto bg-black rounded-sm flex-wrap absolute md:static md:z-auto z-20 right-0  md:w-[20rem] transition-all duration-500 ease-in ${open ? 'top-12 ':'top-[-490px]'}`}>
        {isLogin ? (
          <div className="md:w-[250px] p-1 w-full text-lg font-bold absolute right-0 md:static flex md:flex-row-reverse gap-1 md:text-lg flex-col ">
            <div className="w-full flex items-center cursor-pointer hover:text-lime-400 gap-1">
              <BiUser/>
              <p className="w-full">Mi cuenta</p>
            </div>
            <div className=" w-[95%] flex items-center cursor-pointer hover:text-lime-400 gap-1">
              <BsCart className="hover:text-lime-400"/>
              <p className="w-full">Carrito</p>
            </div>
            {width < 768 && <NavbarSecundary width={width} setWidth={setWidth}/>}
          </div>
        ) : (
          <div className=" md:flex flex-col flex  justify-center md:static  items-start  md:right-10 cursor-pointer hover:text-lime-40">
            <div className="flex items-center gap-1  hover:text-lime-400 text-lg font-medium">
              <BiLogIn/>
              <Link to="/login" className="md:text-lg ">Iniciar sesión</Link>
            </div>
            {width < 768 && <NavbarSecundary width={width} setWidth={setWidth}/>}

          </div>
        )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
