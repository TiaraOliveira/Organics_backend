import { Router } from "express";
import  {schemaValidator } from "../middlewares/schemaValidator";
import signUpSchema from "../schemas/signUpSchema";
import signUpValidator from "../middlewares/signUpValidator";
import signUp from "../controllers/signUpControllers";



const signUpRouter = Router();

signUpRouter.post('/signup', schemaValidator(signUpSchema), signUpValidator, signUp);

export default signUpRouter;