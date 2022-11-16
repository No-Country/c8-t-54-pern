import { Router } from "express"
import { getUser, createUser, login } from "../controllers/users"
const userRouter = Router()

userRouter.get('/', getUser)

userRouter.post('/', createUser)

userRouter.put('/:id')

userRouter.delete('/:id')

userRouter.post('/login', login)

export default userRouter; 