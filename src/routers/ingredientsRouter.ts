import { Router } from "express";
import {postIngredients, getAllIngredients} from "../controllers/ingredientsController.js";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import ingredientsSchema from "../schemas/ingredientsSchema.js";

const ingredientsRouter = Router()

ingredientsRouter.post('/ingredients', schemaValidator(ingredientsSchema), postIngredients)
ingredientsRouter.get('/ingredients', getAllIngredients)

export default ingredientsRouter