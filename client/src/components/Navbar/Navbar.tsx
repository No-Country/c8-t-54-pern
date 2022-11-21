import { FaSearch } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { BiLogIn } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isLogin, setIsLogin] = useState<Boolean>(false);
  return (
    <div className="w-full flex px-8 bg-black h-16 items-center font-poppins font-semibold text-2xl text-white justify-between">
      <Link to="/">MOVEment</Link>
      <div className="flex w-80 text-base font-normal justify-between">
        <div className="flex items-center cursor-pointer hover:text-lime-400">
          <FaSearch className="mr-1" /> <p>Buscar</p>{" "}
        </div>
        {isLogin ? (
          <>
            <div className="flex items-center cursor-pointer hover:text-lime-400">
              <BiUser className="mr-1" />
              <p>Mi cuenta</p>
            </div>
            <div className="flex items-center cursor-pointer hover:text-lime-400">
              <BsCart className="mr-1" />
              <p>Carrito</p>
            </div>
          </>
        ) : (
          <div className="flex items-center cursor-pointer hover:text-lime-400 justify-end">
            <BiLogIn className="mr-1" />
            <div>
              <Link to="/login">Login</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
