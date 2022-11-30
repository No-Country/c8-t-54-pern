import { Router } from "express";
import { list, oneColour, saveColour, update, deleteColour } from "../controllers/colours.controller";

const route = Router();

route.get('/', list);
route.post('/save', saveColour);
route.put('/update', update);
route.delete('/delete', deleteColour);
route.get('/:id', oneColour);

export { route as colourRouter }