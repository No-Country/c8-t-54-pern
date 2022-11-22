import { Router } from "express"
import { getUser, createUser, login, updateUser } from "../controllers/users.controller"
const userRouter = Router()

userRouter.post('/', createUser)

userRouter.put('/:id')

userRouter.delete('/:id')


export default userRouter; 