import { Router } from "express"
import { Response, Request } from "express";
import userRouter from "./users";
const router = Router()

router.use("/users", userRouter);
router.get("/", (_req: Request, res: Response) => res.send("OK"));

export default router;