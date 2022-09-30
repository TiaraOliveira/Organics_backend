import { Router } from "express";
import {ingredients} from "../controllers/ingredientsController";
import { postProducts, getProducts } from "../controllers/productsController";
import { schemaValidator } from "../middlewares/schemaValidator";
import productsSchema from "../schemas/productsSchema";

const productsRouter = Router()

productsRouter.post('/products', schemaValidator(productsSchema), postProducts)
productsRouter.get('/products', getProducts)


export default productsRouter