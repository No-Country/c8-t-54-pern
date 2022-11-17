import { Product } from "../models/Products";
import { Request, Response } from "express";

export const index = async (req: Request, res: Response) => {
    try {
        const products = await Product.findAll({
            order: [["productName", "asc"]]
        });
    } catch (error) {
        res.send(error)
    }
    res.send()
};

export const createProduct = (req: Request, res: Response) => {};

export const updateProduct = (req: Request, res: Response) => {};

export const deleteProduct = (req: Request, res: Response) => {};

export const editProduct = (req: Request, res: Response) => {};

export const storeProduct = (req: Request, res: Response) => {};

export const productDetail = (req: Request, res: Response) => {};