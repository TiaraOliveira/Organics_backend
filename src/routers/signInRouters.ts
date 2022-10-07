import { Router } from "express";
import signIn from "../controllers/signInControllers.js";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import signInValidator from "../middlewares/signInValidator.js";
import signInSchema from "../schemas/signInSchema.js";


const signInRouter = Router();

signInRouter.post('/signin', schemaValidator(signInSchema), signInValidator, signIn);

export default signInRouter;