import { Router } from "express";
const userRouter = Router();
import {
  getUser,
  createUser,
  login,
  updateUser,
} from "../controllers/users.controller";
import { user } from "../schemas/users";
import { loginSchema } from "../schemas/login";
import { checkSchema } from "express-validator";
import { handleValidator } from "../helpers/handleValidator";
import { protectRouters } from "../controllers/authController";
import { checkMultipart, esperaMierda } from "../middlewares/uploadImg"

userRouter.post(
  "/",
  checkMultipart,
  esperaMierda,
  checkSchema(user),
  handleValidator,
  createUser
);

userRouter.post(
  '/login',
  checkSchema(loginSchema),
  handleValidator,
  login
)

userRouter.use(protectRouters);

userRouter.get('/', getUser)

userRouter.put(
  '/:id',
  checkMultipart,
  checkSchema(user),
  handleValidator,
  updateUser
)

userRouter.delete("/:id");

export default userRouter;
