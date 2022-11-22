import { Router } from "express"
const userRouter = Router()
import { getUser, createUser, login, updateUser } from "../controllers/users.controller"
import { user } from "../schemas/users"
import { loginSchema } from "../schemas/login"
import { checkSchema } from "express-validator";
import { handleValidator } from "../helpers/handleValidator";

userRouter.get('/', getUser)

userRouter.post(
  '/',
  checkSchema(user),
  handleValidator,
  createUser
);

userRouter.put(
    '/:id', 
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
