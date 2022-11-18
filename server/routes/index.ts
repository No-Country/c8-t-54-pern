import { Router } from "express"
import { Response, Request } from "express";
import productRouter from "./products";
import userRouter from "./users.routes";
const router = Router()

router.use("/users", userRouter);
router.use('/products', productRouter);
router.get("/", (_req: Request, res: Response) => res.send("OK"));

export default router;