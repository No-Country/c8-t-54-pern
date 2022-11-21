import spike from "../../../src/assets/img/spikeball.png";
import danny from "../../../src/assets/img/danny-nee-EKUugW254Y0-unsplash 1.png";
import kenny from "../../../src/assets/img/kenny-eliason-AvcBDbR-LWc-unsplash 1.png";

const SupportSport = () => {
  return (
    <section className="text-center md:px-8 font-poppins">
      <div className="py-8">
        <h1 className="text-gray-600 font-extrabold text-3xl ">
          Apoyamos el deporte
        </h1>
        <p className=" text-gray-500">
          El deporte es para todos. ¡Ayudanos a difundirlo!
        </p>
      </div>
      <div className="h-81 flex flex-col-reverse md:flex-row md:gap-5 md:text-left  ">
        <div className="bg-[#2e2e2e]  md:w-1/2 py-8 text-white leading-tight md:pl-10">
          <h1 className="hidden md:block text-6xl mt-12 w-3/4 font-extrabold ">
            UNITE A LA INICIATIVA MOVEment{" "}
          </h1>
          <p className=" block md:hidden mb-4 ">
            <strong> Con cada compra</strong> que realices <br />{" "}
            <strong>contribuís</strong> a que mas <strong>niños</strong> se
            vuelquen <br /> a las canchas.
          </p>
          <p className=" hidden md:block w-4/5 py-8">
            Con cada compra que realices vas a estar contribuyendo en las
            donaciones que realizamos para que niños y adolescentes se vuelquen
            a las canchas.
          </p>
          <button className="h-[3.25rem] w-60 text-xl border-solid rounded border-2 border-[#13C296] hover:text-black hover:hover:bg-[#19F5BE] hover:font-bold">
            TE CONTAMOS COMO
          </button>
        </div>

        <div className="h-1/2 md:w-1/2 ">
          <img src={spike} alt="childrens playing spikeball" />
          <div className="hidden md:flex pt-5 ">
            <img
              className="w-1/2 pr-2.5"
              src={danny}
              alt="a little girl running with a ball in her hand"
            />
            <img
              className="w-1/2 pl-2.5"
              src={kenny}
              alt="three kids playing football"
            />
          </div>
        </div>
      </div>
      <div className="h-44 hidden md:flex gap-5 mt-8">
        <div className=" bg-[#eeeeee] w-1/3 rounded-md flex justify-center items-center">
          <div className="h-20 flex space-x-4 mx-4">
            <div className="h-full w-20 bg-[#D9D9D9]"></div>
            <div className="h-full w-full text-left">
              <h1 className="font-bold">DEVOLUCIONES</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem.</p>
            </div>
          </div>
        </div>
        <div className=" bg-[#eeeeee] w-1/3 rounded-md flex justify-center items-center">
          <div className="h-20 flex space-x-4 mx-4">
            <div className="h-full w-20 bg-[#D9D9D9]"></div>
            <div className="h-full w-full text-left">
              <h1 className="font-bold">SEGURIDAD AL PAGAR</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem.</p>
            </div>
          </div>
        </div>
        <div className=" bg-[#eeeeee] w-1/3 rounded-md flex justify-center items-center">
          <div className="h-20 flex space-x-4 mx-4">
            <div className="h-full w-20 bg-[#D9D9D9]"></div>
            <div className="h-full w-full text-left">
              <h1 className="font-bold">ENCONTRAR TALLES</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem.</p>
            </div>
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default SupportSport;
