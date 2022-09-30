import {Router} from "express";
import ingredientsRouter from "./ingredientsRouter";
import signInRouter from "./signInRouters";
import signUpRouter from "./signupRouters";


const router = Router();

router.use(signUpRouter);
router.use(signInRouter);
router.use(ingredientsRouter)

export default router;  