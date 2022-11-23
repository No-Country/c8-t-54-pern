import { Router } from "express"
import { list, updateProduct, deleteProduct, saveProduct, productDetail } from "../controllers/products";
import { productSchema } from "../schemas/product"
import { checkSchema } from "express-validator";
import { handleValidator } from "../helpers/handleValidator";

const productRouter = Router()

productRouter.get('/', list) // list of every product in db    

productRouter.post('/save', checkSchema(productSchema), handleValidator, saveProduct ); // save the product in the db

productRouter.get('/:id', productDetail); // return an specific product, based in his id/UUID

productRouter.put('/update/:id', updateProduct); // save and update the changes 

productRouter.delete('/delete/:id', deleteProduct); // delete the product (>_<)

export default productRouter;