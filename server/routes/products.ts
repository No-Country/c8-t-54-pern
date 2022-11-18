import { Router } from "express"
import { list, updateProduct, deleteProduct, saveProduct, productDetail } from "../controllers/products";

const productRouter = Router()

// no me deja solo con "/" 
productRouter.get('/', list) // list of every product in db    

productRouter.post('/save', saveProduct ); // save the product in the db

productRouter.get('/:id', productDetail); // return an specific product, based in his id/UUID

productRouter.put('/update/:id', updateProduct); // save and update the changes 

productRouter.delete('/delete/:id', deleteProduct); // delete the product (>_<)

export default productRouter;