import { Router } from "express"
import { getUser, createUser, updateUSer, loginUser, deleteUSer } from "../controllers/users"
const userRouter = Router()

userRouter.get('/', getUser)

userRouter.post('/', createUser)

userRouter.put('/:id', updateUSer)

userRouter.delete('/:id', deleteUSer)

userRouter.post('/login', loginUser)

export default userRouter; 