import { GoTrashcan } from "react-icons/go";
import { useSelector } from "react-redux";
import { AppStore } from "../../app/store";
import { useRemoveFromCart } from "../../hooks/useCart";
import { Product } from "../../models/Products";

const ItemCartCard = ({
  productName,
  id,
  Colours,
  Size,
  price,
  ProductImgs,
}: Product) => {
  const { cartId } = useSelector((store: AppStore) => store.auth);

  const { mutate } = useRemoveFromCart(cartId!, id);

  const handleRemoveFromCart = () => {
    mutate();
  };

  return (
    <div className="w-full bg-[#E9E9E9] p-2">
      <div className="flex gap-3">
        <div className="flex w-[50px] h-[75px] sm:w-[70px] sm:h-[102px]">
          <img
            className="flex w-[50px] h-[75px] sm:w-[70px] sm:h-[102px] object-cover"
            src={ProductImgs[0]?.imgUrl}
            alt={productName}
          />
        </div>
        <div className="flex flex-col justify-between w-full">
          <div>
            <h2 className="w-[250px] truncate text-ellipsis font-semibold text-xl md:w-[320px]">{productName}</h2>
          </div>
          <div>
            <p>Color: {Colours.length ? Colours[0].colourName : "Único"}</p>
            <p>Talle: {Size.length ? Size[0].sizeLetter : "Único"}</p>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-between py-3">
        <div className="w-[100px] flex justify-center">
          <button className="w-full text-lg border-[1px] border-[#3A3A3A] border-r-0">
            -
          </button>
          <input
            type="number"
            className="max-w-[50px] bg-transparent text-center border-[1px] border-[#3A3A3A]"
            placeholder="1"
          />
          <button className="w-full text-lg border-[1px] border-[#3A3A3A] border-l-0">
            +
          </button>
        </div>
        <div className="flex gap-3">
          <p className="font-bold text-xl">${price}</p>
          <button onClick={handleRemoveFromCart} className="font-bold text-xl">
            <GoTrashcan />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ItemCartCard;
