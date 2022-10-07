import { Router } from "express";
import { postProducts, getProducts } from "../controllers/productsController.js";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import productsSchema from "../schemas/productsSchema.js";

const productsRouter = Router()

productsRouter.post('/products', schemaValidator(productsSchema), postProducts)
productsRouter.get('/products', getProducts)


export default productsRouter