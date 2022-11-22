import { Request, Response } from "express";
import { Favorites } from "../models/Favorites";
import { getErrorMessage } from "../helpers/errorReport";

                // DEVUELVE TODOS LOS FAVORITOS
export const allFav = async (req: Request, res: Response) => {
    try {
        const allFavorites = await Favorites.findAll({
        where: {userId: req.params.id}
        });

        res.status(200).json({allFavorites})

    } catch (error) {
        res.status(400).json({error: error})
    }
};

                // AGREGAR A FAVORITOS 
export const addFav = async (req: Request, res: Response) => {

    try { 
        const newFavorite = await Favorites.create({
        userId: req.body.userId,
        productId: req.body.productId,
        });

        res.status(200).json({newFavorite})

    } catch (error) {
        res.status(400).json(reportError({ message: getErrorMessage(error) }))
    }
};

                // BORRA UN FAVORITO
export const deleteFav = async (req: Request, res: Response) => {
    res.status(200).json("dalee")
};