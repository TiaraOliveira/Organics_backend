import { Router } from "express";
import {postIngredients, getAllIngredients} from "../controllers/ingredientsController";
import { schemaValidator } from "../middlewares/schemaValidator";
import ingredientsSchema from "../schemas/ingredientsSchema";

const ingredientsRouter = Router()

ingredientsRouter.post('/ingredients', schemaValidator(ingredientsSchema), postIngredients)
ingredientsRouter.get('/ingredients', getAllIngredients)

export default ingredientsRouter