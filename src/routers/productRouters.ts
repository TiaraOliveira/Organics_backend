import { Router } from "express";
import {ingredients} from "../controllers/ingredientsController";
import { products } from "../controllers/productsController";
import { schemaValidator } from "../middlewares/schemaValidator";
import productsSchema from "../schemas/productsSchema";

const productsRouter = Router()

productsRouter.post('/products', schemaValidator(productsSchema), products)

export default productsRouter