import { Router } from "express"
import { Response, Request } from "express";
import productRouter from "./products";
import userRouter from "./users";
const router = Router()

router.use("/users", userRouter);
router.get('/products', productRouter);
router.get("/", (_req: Request, res: Response) => res.send("OK"));

export default router;