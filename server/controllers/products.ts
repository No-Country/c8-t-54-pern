import { Product, ProductImgsAssoc } from "../models/Products";
import { Request, Response } from "express";
import { getErrorMessage, reportError } from "../helpers/errorReport";
import { Size } from "../models/Sizes";


// List of every product in db
export const list = async (req: Request, res: Response) => {
    try {
        const products = await Product.findAll({
            order: [["productName", "asc"]],
            include: [{ association: "ProductImgs" }]
        })
        res.status(200).json({ products });
    } catch (error) {
        res.status(400).json(reportError({ message: getErrorMessage(error) }))
    }
};

// brings one product based in his id/UUID
export const productDetail = async (req: Request, res: Response) => {
    try {
        const idP = req.params.id;
        const product = await Product.findOne({
            where: { id: idP },
            include: [{ association: "ProductImgs" }]
        });
        res.status(200).json({ product });
    } catch (error) {
        res.status(400).json(reportError({ message: getErrorMessage(error) }))
    };
};

// Stores the product in the db
export const saveProduct = async (req: Request, res: Response) => {
    try {
        const { productName, description, quantityInStock, price, pics, sizeId } = req.body;
        //const pics = req.body.pic ? req.body.pic : "null"
        let picsUrls: Array<any> = []
        pics.forEach((url: any) => {
            picsUrls.push({ status: "active", imgUrl: url })
        });
        const newProduct = await Product.create({
            productName,
            description,
            quantityInStock,
            price,
            ProductImgs: picsUrls
        }, {
            include: [{
                association: ProductImgsAssoc,
                as: "ProductImgs",
            }]
        })
        console.log("Product methods: ",Object.keys(Product.prototype))
        console.log("Size methods: ",Object.keys(Size.prototype))
        const np = await Product.findOne({
            where: { id: newProduct.dataValues.id }
        });
        const size = await Size.findOne({
            where: { id: sizeId }
        });
        console.log("Product np: ",np)
        console.log("Size size: ",size)
        await np?.dataValues.addSize(size)
        //     const product = await Product.findByPk(idProduct);
        // const cart = await Cart.findByPk(idCart);
        // if (product.quantityInStock > 0) {
        // const productAdd = cart.addProducts(product);
        // cart.increment({ totalPrice: product.price });
        // res.status(200).json(productAdd);
        // } 
        //np?.setSizes()
        res.status(201).json({ message: "New Product created", newProduct })
    } catch (error) {
        res.status(400).json(reportError({ message: getErrorMessage(error) }))
    };
};

export const updateProduct = async (req: Request, res: Response) => {
    const productId = req.params.id;

    try {
        const productToUpdate = await Product.findByPk(productId, {});

        if (productToUpdate !== null) {
            await productToUpdate.update({
                productName: req.body.productName,
                description: req.body.description,
                price: req.body.price,
                quantityInStock: req.body.quantityInStock
            });
            return res.status(200).json(productToUpdate)
        }

    } catch (error) {
        res.status(400).json({ errorMessage: "Product could't be saved" })
    }
};

export const deleteProduct = async (req: Request, res: Response) => {

};