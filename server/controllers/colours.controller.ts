import { Colour } from "../models/Colours";
import { Request, Response } from "express";
import { getErrorMessage, reportError } from "../helpers/errorReport";
import { Op } from "sequelize";

//
export const list = async (req: Request, res: Response) => {
    try {
        const allColours = await Colour.findAll();
        res.status(200).json({ allColours })
    } catch (error) {
        res.status(400).json(reportError({ message: getErrorMessage(error) }))
    }
};

//
export const oneColour = async (req: Request, res: Response) => {
    try {
        const colourWanted = req.params.id
        console.log(colourWanted)
        if (colourWanted !== undefined) {
            const oneColour = Colour.findOne({
                attributes: ["colourName", "colourValue", "id"],
                where: { 
                    [Op.or]: [
                        {colourName: colourWanted},
                        {colourValue: colourWanted}
                    ]
                }
            });
            res.status(200).json({ oneColour })
        }

    } catch (error) {
        res.status(400).json(reportError({ message: getErrorMessage(error) }))
    };
};

//
export const saveColour = async (req: Request, res: Response) => {
    try {
        const { colourName, colourValue } = req.body;
        console.log(colourName, colourValue);

        const newColour = await Colour.create({
            colourName: colourName,
            colourValue: colourValue
        })
        res.status(201).json({ message: "Colour added succesfully", newColour })
    } catch (error) {
        res.status(400).json(reportError({ message: getErrorMessage(error) }))
    };
};




//
export const update = async (req: Request, res: Response) => {
    const colourId = req.params.id;

    try {
        const colourToUpdate = await Colour.findByPk(colourId, {});

        if (colourToUpdate !== null) {
            await colourToUpdate.update({
                colourName: req.body.colourName,
                colourValue: req.body.colourValue,
            });
            return res.status(200).json(colourToUpdate)
        }



    } catch (error) {
        res.status(400).json({ errorMessage: "Colour could't be saved" })
    }
};

//
export const deleteColour = async (req: Request, res: Response) => {
};