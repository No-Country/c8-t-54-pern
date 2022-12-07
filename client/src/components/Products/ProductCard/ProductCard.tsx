import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Product } from "../../../models/Products";

const ProductCard = (product: Product) => {
  return (
    <div className="my-2 shadow-md">
      <Link to={`/catalogue/product/${product.id}`}>
        <div className="relative w-[9.2rem] h-[11.2rem] md:w-[17rem] md:h-[19rem]">
          {/* <AiOutlineHeart className="absolute top-2 right-2 text-[#3056D3] text-xl cursor-pointer z-40" /> */}
          <img
            src={product.ProductImgs[0].imgUrl}
            alt={product.id}
            className="flex h-full w-full object-cover justify-start hover:scale-110 hover:duration-300 cursor-pointer"
          />
        </div>
      </Link>
      <div className="flex flex-col font-poppins p-2">
        <p className="w-[9.2rem] md:w-[16rem] font-bold text-lg pt-1 truncate text-ellipsis">{product.productName}</p>
        <p className="w-[9.2rem] md:w-[16rem] text-xs truncate text-ellipsis overflow-hidden pt-0.5">
          {product.description}
        </p>
        <p className="font-extrabold text-[#3056D3] pt-1">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
