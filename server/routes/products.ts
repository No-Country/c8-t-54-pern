import { Router } from "express"
import { index, createProduct, updateProduct, deleteProduct, editProduct, storeProduct, productDetail } from "../controllers/products";

const productRouter = Router()

productRouter.get('/', index) // list of every product in db 

productRouter.get('/create', createProduct ); // return the createProduct Form
productRouter.post('/create', storeProduct ); // save the product in the db


productRouter.get('/edit/:id', editProduct ); // return the form to editProduct
productRouter.put('/:id', updateProduct); // save and update the changes

productRouter.get('/:id', productDetail); // return an specific product, based in his ID

productRouter.delete('/:id', deleteProduct); // delete the product (>_<)

export default productRouter; 