const { Product } = require("../models/Products");
const { User } = require("../models/Users");
const {Cart} = require("../models/Carts")
import { Request, Response } from "express";

export const addToCart = async (req: Request, res: Response) => {
//   console.log(Product);

  //* Requiere id del user y el id del producto (llegan desde query params)
  //   const { idUser, idProduct , idCart} = req.query;
  //   try {
  //     // const user = await User.findByPk(idUser);
  //     // const product = await Product.findByPk(idProduct);
  //     // const cart = await Cart.findByPk(idCart)

  //   } catch (error) {}
};
