import { Router } from "express";
import { addToCart } from "../controllers/productsInCart";

const prodInCart = Router();

prodInCart.post("/add", addToCart);

export default prodInCart;
