import { Router } from "express"
import { Response, Request } from "express";
import favRouter from "./favorites.routes";
import productRouter from "./products";
import prodInCart from "./productsInCart";
import userRouter from "./users.routes";
const router = Router()

router.use("/users", userRouter);
router.use('/products', productRouter);
router.use('/addToCart', prodInCart);
router.use('/favorites', favRouter);
router.get("/", (_req: Request, res: Response) => res.send("OK"));

export default router;