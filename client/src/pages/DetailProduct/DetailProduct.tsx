import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProductsById } from "../../app/state/productsSlice";
import { AppDispatch, AppStore } from "../../app/store";
import { IoIosArrowBack } from "react-icons/io";
import { useAddtoCart } from "../../hooks/useCart";

const DetailProduct = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();

  const product = useSelector((store: AppStore) => store.products.detail);
  const { cartId } = useSelector((store: AppStore) => store.auth)

  useEffect(() => {
    if (id) {
      dispatch(getProductsById(id));
    }
  }, []);

  const { mutate } = useAddtoCart(cartId!, id!)

    const handleAddToCart = () => {
        mutate()
    }

  return (
    <div className="font-poppins">
      <Link className="flex items-center m-4" to="/catalogue">
        <IoIosArrowBack className="mr-2" /> Volver a la tienda
      </Link>

      <div className="p-4 ">
        <div className=" flex gap-2 flex-col md:flex-row justify-center">
          <div className="flex gap-2 justify-center 1">
            <div className="md:hidden flex flex-col items-center justify-end gap-1">
              {product?.Colours?.map((color) => (
                <div
                  key={color.id}
                  className={`bg-[${color.colourValue}] h-8 w-8 rounded-sm border-2 border-[#666666] flex- items-center justify-center hover:border-[#13C296]`}
                ></div>
              ))}
            </div>
            <div className="hidden md:flex flex-col justify-between">
              {product?.ProductImgs?.map((image, index) => {
                if (index !== 0) {
                  return (
                    <img
                      key={index}
                      id={index.toString()}
                      className="h-37 w-24"
                      src={image.imgUrl}
                      alt={
                        product?.productName ? product.productName : "sin foto"
                      }
                    />
                  );
                }
              })}
            </div>
            <div>
              <img
                className=" h-75 w-50 md:h-[38rem] object-cover "
                src={
                  product?.ProductImgs ? product?.ProductImgs[0]?.imgUrl : ""
                }
                alt={product?.productName ? product.productName : "sin foto"}
              />
            </div>
          </div>
          <div className="md:w-1/3 md:ml-8">
            <h2 className=" hidden md:block text-xl font-bold ">
              {product?.productName}
            </h2>
            <h2 className="text-3xl font-extrabold text-[#3056D3] text-center mt-2 md:text-left md:text-xl">
              $ {product?.price}
            </h2>
            <p className="text-xs hidden md:block">(mas costos de envío)</p>
            <hr className="hidden md:block" />
            <p className="mt-4 hidden md:block">
              <span>Seleccionar talle</span> 
              <span className="ml-2 text-xs font-bold text-[#3056D3]">
                Referencia de talles &#62;
              </span>
            </p>
            <div className="flex items-center justify-center md:justify-start gap-1">
              {product?.Size?.map((siz) => (
                <div
                  key={siz.id}
                  className="h-8 w-8 rounded-sm border-2 border-black flex items-center justify-center hover:border-[#13C296] hover:text-[#13C296]"
                >
                  {siz.sizeLetter}
                </div>
              ))}
            </div>
            <p className="mt-4 hidden md:block">Seleccionar color</p>
            <div className="hidden md:flex items-center gap-1">
              {product.Colours?.map((color) => (
                <div
                  key={color.id}
                  className={`bg-[${color.colourValue}] h-8 w-8 rounded-sm border-2 border-[#666666] flex items-center justify-center hover:border-[#13C296]`}
                ></div>
              ))}
            </div>
            <div className="flex gap-2 justify-center md:justify-start mt-2">
              <span className="border border-gray-600 rounded-md flex justify-center items-center pl-2">
                Cant.:
                <input className="w-16 text-right px-2" type="number" />
              </span>
              <button onClick={handleAddToCart} className="bg-[#19F5BE] rounded-md py-2 px-6 drop-shadow-md">
                COMPRAR
              </button>
            </div>
            <p className="text-center mt-2 md:text-left">
              Con esta compra, donamos{" "}
              <strong>{(product?.price / 1000).toFixed(2)} Moves</strong>
            </p>
            <Link className="text-xs font-bold text-[#3056D3]" to="/home">
              Te contamos a quien beneficia &#62;
            </Link>
            <hr />
            <div className="py-4">
              <p className="font-extrabold">Descripción</p>
              <p className="text-xs sm:block text-justify">
                {product?.description}
              </p>
            </div>
            <div className="py-4">
              <p className="font-extrabold">Métodos y costos de envío</p>
              <p className="text-xs text-justify">
                Consulte los costos de envio{" "}
                <a className="font-bold" href="#">
                  aqui
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
