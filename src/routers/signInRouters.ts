import { Router } from "express";
import signIn from "../controllers/signInControllers";
import { schemaValidator } from "../middlewares/schemaValidator";
import signInValidator from "../middlewares/signInValidator";
import signInSchema from "../schemas/signInSchema";


const signInRouter = Router();

signInRouter.post('/signin', schemaValidator(signInSchema), signInValidator, signIn);

export default signInRouter;