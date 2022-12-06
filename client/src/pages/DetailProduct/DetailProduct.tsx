import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
const DetailProduct = () => {
  return (
    <div className="  font-poppins">
      <Link to="/"> &#60; Volver a la tienda</Link>
      <div className="px-8 ">
        <div className=" flex gap-2 flex-col md:flex-row  ">
          <div className="flex gap-2 justify-center 1">
            <div className="md:hidden flex flex-col items-center justify-end gap-1">
              <div className="h-8 w-8 rounded-sm border-2 border-[#666666] flex- items-center justify-center bg-[#131215] hover:border-[#13C296] "></div>
              <div className="h-8 w-8 rounded-sm border-2 border-[#666666] flex- items-center justify-center bg-[#32557B] hover:border-[#13C296]"></div>
              <div className="h-8 w-8 rounded-sm border-2 border-[#666666] flex- items-center justify-center bg-[#D5B9B3] hover:border-[#13C296]"></div>
              <div className="h-8 w-8 rounded-sm border-2 border-[#666666] flex- items-center justify-center bg-white hover:border-[#13C296]"></div>
              <div className="h-8 w-8 rounded-sm border-2 border-[#666666] flex- items-center justify-center bg-[#807B5F] hover:border-[#13C296]"></div>
            </div>
            <div className="hidden md:flex flex-col justify-between">
              <img
                className="h-37 w-24"
                src="https://firebasestorage.googleapis.com/v0/b/db-demo-e7d23.appspot.com/o/productDetails%2Fimage%2040.png?alt=media&token=952f45eb-345c-4512-bbd2-85191a106281"
                alt=""
              />
              <img
                className="h-37 w-24"
                src="https://firebasestorage.googleapis.com/v0/b/db-demo-e7d23.appspot.com/o/productDetails%2Fimage%2041.png?alt=media&token=1dc919a6-5075-4a07-8745-7744bfa65442"
                alt=""
              />
              <img
                className="h-37 w-24"
                src="https://firebasestorage.googleapis.com/v0/b/db-demo-e7d23.appspot.com/o/productDetails%2Fimage%2042.png?alt=media&token=84eeef99-b616-47a5-8281-cd7c802070ce"
                alt=""
              />
              <img
                className="h-37 w-24"
                src="https://firebasestorage.googleapis.com/v0/b/db-demo-e7d23.appspot.com/o/productDetails%2Fimage%2043.png?alt=media&token=b1704085-8ae1-47a9-8576-73f4cac4cf73"
                alt=""
              />
            </div>
            <div className="">
              <img
              className=" h-76 w-50 md:h-auto object-cover "
                src="https://firebasestorage.googleapis.com/v0/b/db-demo-e7d23.appspot.com/o/productDetails%2Fmainproduct.png?alt=media&token=57e72a3b-7a72-49b6-8b52-6301325ef662"
                alt=""
              />
            </div>
          </div>
          <div className="md:w-1/3">
            <h2 className=" hidden md:block text-xl font-bold ">
              Camiseta manga corta con bolsillo
            </h2>
            <p className="hidden md:flex align-middle">
              <span>4.5</span>
              <FaStar className="inline-block" /> <span>120 comentarios</span>{" "}
            </p>
            <h2 className="text-3xl font-extrabold text-[#3056D3] text-center md:text-left">$ 350</h2>
            <p className="text-sm hidden md:block">(mas costos de envío)</p>
              <hr className="hidden md:block"/>
            <p className="hidden md:block">
              Seleccionar talle
              <span className="text-sm text-[#3056D3]">
                Referencia de talles &#62;
              </span>
            </p>
            <div className="flex items-center justify-center md:justify-start gap-1">
              <div className="h-8 w-8 rounded-sm border-2 border-black flex items-center justify-center hover:border-[#13C296] hover:text-[#13C296]">
                XS
              </div>
              <div className="h-8 w-8 rounded-sm border-2 border-black flex items-center justify-center hover:border-[#13C296] hover:text-[#13C296]">
                S
              </div>
              <div className="h-8 w-8 rounded-sm border-2 border-black flex items-center justify-center hover:border-[#13C296] hover:text-[#13C296]">
                M
              </div>
              <div className="h-8 w-8 rounded-sm border-2 border-black flex items-center justify-center hover:border-[#13C296] hover:text-[#13C296]">
                L
              </div>
              <div className="h-8 w-8 rounded-sm border-2 border-black flex items-center justify-center hover:border-[#13C296] hover:text-[#13C296]">
                XL
              </div>
              <div className="h-8 w-8 rounded-sm border-2 border-black flex items-center justify-center hover:border-[#13C296] hover:text-[#13C296]">
                XLL
              </div>
            </div>
            <p className="hidden md:block">Seleccionar color</p>
            <div className="hidden md:flex items-center gap-1">
              <div className="h-8 w-8 rounded-sm border-2 border-[#666666] flex- items-center justify-center bg-[#131215] hover:border-[#13C296] "></div>
              <div className="h-8 w-8 rounded-sm border-2 border-[#666666] flex- items-center justify-center bg-[#32557B] hover:border-[#13C296]"></div>
              <div className="h-8 w-8 rounded-sm border-2 border-[#666666] flex- items-center justify-center bg-[#D5B9B3] hover:border-[#13C296]"></div>
              <div className="h-8 w-8 rounded-sm border-2 border-[#666666] flex- items-center justify-center bg-white hover:border-[#13C296]"></div>
              <div className="h-8 w-8 rounded-sm border-2 border-[#666666] flex- items-center justify-center bg-[#807B5F] hover:border-[#13C296]"></div>
            </div>
            <div className="flex gap-2 justify-center md:justify-start mt-2">
              <button className="rounded-md border border-gray-600 w-8 flex justify-center items-center">
                <FaRegHeart />
              </button>
              <span className="border border-gray-600 rounded-md flex justify-center items-center">
                Cant.:
                <input className="w-8 " type="number" value="1" />
              </span>
              <button className="bg-[#19F5BE] rounded-md py-2 px-6 drop-shadow-md">
                COMPRAR
              </button>
            </div>
            <p className="text-center md:text-left">
              Con testa compra, donamos <strong>5 moves</strong>
            </p>
            <Link className="text-blue-500" to="/">
              {" "}
              Te contamos a quien beneficia &#62;
            </Link>
            <hr />
            <p className="hidden md:block">Artículo #120800</p>
            <p className="font-extrabold">Descripción</p>
            <p className="text-xs hidden md:block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              repellat ratione pariatur dolore beatae dolores magni modi debitis,
              placeat est incidunt tempore expedita hic, ullam iste a explicabo
              sint laboriosam vero sequi. Veritatis dolorem, eius architecto
              maxime magnam nihil, quos explicabo fugiat cum enim accusantium
              eaque earum. Quos ipsa magni rem voluptate deleniti, libero illum
              accusantium adipisci dignissimos vero voluptatum esse enim. Eius non
              distinctio obcaecati. Qui nam non numquam nisi aliquam adipisci amet
              dignissimos, maiores, tenetur error id praesentium similique at unde
              et ex? Quas, totam sit. Illo, officiis.
            </p>
            <p className="md:hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, harum blanditiis. Tempore quos facere dicta voluptate provident aliquam consectetur perspiciatis.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 ">
          <div className="md:w-1/2"></div>
          <div className="md:w-1/2">
            <p className="font-extrabold">Métodos y costos de envío</p>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              beatae autem ducimus, ullam laudantium ad non repellendus dolor
              laborum debitis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
