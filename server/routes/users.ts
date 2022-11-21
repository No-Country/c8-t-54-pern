import { Router } from "express"
import { protectRouters } from "../controllers/authController"
import { getUser, createUser, login } from "../controllers/users"
const userRouter = Router()

userRouter.post('/', createUser)

userRouter.post('/login', login)

userRouter.use(protectRouters)

userRouter.get('/', getUser)

userRouter.put('/:id')

userRouter.delete('/:id')


export default userRouter; 