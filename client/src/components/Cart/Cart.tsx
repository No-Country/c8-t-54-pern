import { useSelector } from "react-redux";
import { AppStore } from "../../app/store";
import { useGetCart } from "../../hooks/useCart";
import Spinner from "../Spinner/Spinner";
import ItemCartCard, { CartItem } from "./ItemCartCard";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const Cart = ({ isOpen, setIsOpen }: Props) => {
  const { cartId } = useSelector((store: AppStore) => store.auth);

  const { data, isLoading, isFetching, refetch } = useGetCart(cartId!);

  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-full max-w-[350px] sm:max-w-sm md:max-w-md right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-[350px] sm:max-w-sm md:max-w-md pb-10 flex flex-col space-y-6 h-full">
          <header className="w-full text-center mt-5 font-bold text-3xl text-[#212B36] border-b">
            Tu carrito
          </header>
          {isLoading || isFetching ? (
            <Spinner windowSize="full" />
          ) : (
            <div className="w-full px-3 flex flex-col justify-around gap-4">
                <div className="w-full flex flex-col justify-evenly gap-4">
                  {data?.Products?.length > 0 ? (
                    data.Products.map((item: CartItem) => (
                      <ItemCartCard
                        key={item.id}
                        productName={item.productName}
                        id={item.id}
                        color={item.color}
                        size={item.size}
                        price={item.price}
                      />
                    ))
                    
                    
                  ) : (
                    <p className="text-center">No hay artículos en el carrito</p>
                  )}
                {data?.Products?.length > 0 ? <div>
                  <h2 className="text-right font-semibold text-xl">Importe total ${data?.totalPrice}</h2>
                </div> : null}
              </div>
              {data?.Products?.length > 0 ? (
                <div className="w-full flex flex-col gap-4 items-center">
                  <button className="cart-buttons bg-[#19F5BE] font-semibold text-xs text-[#121212] drop-shadow-lg">
                    FINALIZAR COMPRA
                  </button>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className="cart-buttons bg-transparent border-[3px] border-[#19F5BE] text-xs font-semibold text-[#121212] drop-shadow-lg"
                  >
                    CONTINUAR EN EL SITIO
                  </button>
                </div>
              ) : null}
            </div>
          )}
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
};
export default Cart;
