import { Product } from "../models/Products";
import { Request, Response } from "express";
import { getErrorMessage, reportError } from "../helpers/errorReport";

// List of every product in db
export const list = async (req: Request, res: Response) => {
    try {
        const products = await Product.findAll({
            order: [["productName", "asc"]]
        })
        res.status(200).json({products});
    } catch (error) {
        res.status(400).json(reportError({ message: getErrorMessage(error) }))
    }
};

// brings one product based in his id/UUID
export const productDetail = async (req: Request, res: Response) => {
     try {
        const idP = req.params.id;
         const product = await Product.findOne({
             where: {id : idP}
         });
        res.status(200).json({product});
    } catch (error) {
            res.status(400).json(reportError({ message: getErrorMessage(error) }))
     };
};

// Stores the product in the db
export const saveProduct = async (req: Request, res: Response) => {
    try {
        const { productName, description, quantityInStock, price } = req.body;
        const newProduct = await Product.create({
            productName,
            description,
            quantityInStock,
            price
        })
        res.status(201).json({message: "product added succesfully", newProduct})
    } catch (error) {
        res.status(400).json(reportError({ message: getErrorMessage(error) }))
 };
};

export const updateProduct = async (req: Request, res: Response) => {
    res.send('product updated')
};

export const deleteProduct = async (req: Request, res: Response) => {
    res.send('product deleted')
};