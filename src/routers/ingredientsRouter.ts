import { Router } from "express";
import {ingredients} from "../controllers/ingredientsController";
import { schemaValidator } from "../middlewares/schemaValidator";
import ingredientsSchema from "../schemas/ingredientsSchema";

const ingredientsRouter = Router()

ingredientsRouter.post('/ingredients', schemaValidator(ingredientsSchema), ingredients)

export default ingredientsRouter