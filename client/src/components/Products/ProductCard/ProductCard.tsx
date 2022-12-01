import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FC } from "react";
import { Product } from "../../../models/Products";

const ProductCard = (product: Product) => {
  return (
    <div className="my-4">
      <div className="relative w-[9.2rem] h-[11.2rem] md:w-[17rem] md:h-[19rem]">
        <AiOutlineHeart className="absolute top-2 right-2 text-[#3056D3] text-xl cursor-pointer" />
        <img
          src={product.ProductImgs[0].imgUrl}
          alt={product.id}
          className="h-full w-full"
        />
      </div>
      <div className="flex flex-col font-poppins">
        <p className="font-bold text-lg pt-1">{product.productName}</p>
        <p className="w-[9.2rem] text-xs truncate text-ellipsis overflow-hidden pt-0.5">
          {product.description}
        </p>
        <p className="font-extrabold text-[#3056D3] pt-1">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
