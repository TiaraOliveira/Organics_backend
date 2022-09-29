import cors from "cors";
import express, { json } from "express";
import "express-async-errors";
import router from "./routers/index";


const app = express();
app.use(json());
app.use(cors());


export default app;