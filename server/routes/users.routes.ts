import { Router } from "express"
import { getUser, createUser, login, updateUser } from "../controllers/users.controller"
const userRouter = Router()

userRouter.get('/', getUser)

userRouter.post('/', createUser)

userRouter.put('/:id', updateUser)

userRouter.delete('/:id')

userRouter.post('/login', login)

export default userRouter; 