import React from "react";

function FirstView() {
  return (
    <div className="flex my-8 w-full justify-center">
      <div className="flex h-[623px] bg-black lg:w-[90%] md:w-[100%]">
        <div className="hidden md:block w-[65%]">
          <div className="bg-football bg-center bg-cover bg-no-repeat h-full"></div>
        </div>
        <div className="flex flex-col justify-center font-poppins text-white w-[35%] text-center md:items-center">
          <div className="text-4xl font-black">
            NUEVOS ARRIBOS <br /> EN CALZADO
          </div>
          <div className="my-8">
            Nueva linea de calzado <br /> deportivo profesional
          </div>
          <div className="flex flex-col items-center">
            <button className="my-2 h-10 w-44 border-solid rounded border-2 border-green-400 hover:text-black hover:bg-green-500 hover:font-bold">
              EXPLORAR TIENDA
            </button>
            <button className="my-2 h-10 w-44 border-solid rounded border-2 border-green-400 hover:text-black hover:bg-green-500 hover:font-bold">
              EXPLORAR CALZADO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstView;
