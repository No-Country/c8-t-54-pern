import { Router } from "express"
const userRouter = Router()
import { getUser, createUser, login, updateUser } from "../controllers/users.controller"
import { user } from "../schemas/users"
import { loginSchema } from "../schemas/login"
import { checkSchema } from "express-validator";
import { handleValidator } from "../helpers/handleValidator";
import { checkMultipart } from "../middlewares/uploadImg"

userRouter.get('/', getUser)

userRouter.post(
  "/",
  checkMultipart,
  checkSchema(user),
  handleValidator,
  createUser
);

userRouter.put(
  '/:id',
  checkMultipart,
  checkSchema(user),
  handleValidator,
  updateUser
)

userRouter.delete('/:id')

userRouter.post(
  '/login',
  checkSchema(loginSchema),
  handleValidator,
  login
)

export default userRouter; 
