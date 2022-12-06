import { GoTrashcan } from "react-icons/go";
import { useSelector } from "react-redux";
import { AppStore } from "../../app/store";
import { useRemoveFromCart } from "../../hooks/useCart";
export type CartItem = {
    productName: string
    quantityInStock?: number
    id: string
    color: string
    size: string
    price: number
    img?: string | undefined
}
const ItemCartCard = ({productName, id, color, size, price, img}: CartItem) => {

    const { cartId } = useSelector((store: AppStore) => store.auth)

    const { mutate } = useRemoveFromCart(cartId!, id)

    const handleRemoveFromCart = () => {
        mutate()
    }

  return (
    <div className="w-full bg-[#E9E9E9] p-2">
        <div className="flex gap-3">
            <div className="w-[50px] h-[75px] sm:w-[100px] sm:h-[150px]">
                <img className="object-center object-cover" src={img} alt={productName} />
            </div>
            <div className="flex flex-col justify-between">
                <div>
                    <h2 className="font-semibold text-xl">{productName}</h2>
                    <p className="font-normal text-[#666666] underline">{id}</p>
                </div>
                <div>
                    <p>Color: {color ? color : 'Único'}</p>
                    <p>Talle: {size ? size : 'Único'}</p>
                </div>
            </div>
        </div>
        <div className="w-full flex items-center justify-between py-3">
            <div className="w-[100px] flex justify-center">
                <button className="w-full text-lg border-[1px] border-[#3A3A3A] border-r-0">-</button>
                <input type="number" className="max-w-[50px] bg-transparent text-center border-[1px] border-[#3A3A3A]" placeholder="1"/>
                <button className="w-full text-lg border-[1px] border-[#3A3A3A] border-l-0">+</button>
            </div>
            <div className="flex gap-3">
                <p className="font-bold text-xl">${price}</p>
                <button onClick={handleRemoveFromCart} className="font-bold text-xl"><GoTrashcan/></button>
            </div>
        </div>
    </div>
  )
}
export default ItemCartCard