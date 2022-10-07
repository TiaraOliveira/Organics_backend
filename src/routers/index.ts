import {Router} from "express";
import ingredientsRouter from "./ingredientsRouter.js";
import productsRouter from "./productRouters.js";
import signInRouter from "./signInRouters.js";
import signUpRouter from "./signupRouters.js";


const router = Router();

router.use(signUpRouter);
router.use(signInRouter);
router.use(ingredientsRouter)
router.use(productsRouter)

export default router;  