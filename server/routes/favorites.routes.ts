import { Router } from "express";
import { allFav, addFav, deleteFav } from "../controllers/favorites.controller";

const favRouter = Router();

favRouter.get('/', allFav);
favRouter.post('/', addFav);
favRouter.delete('/:id', deleteFav);

export default favRouter;
