import {Request, Response } from "express";
import * as productService from "../service/productService"

export async function products(req: Request, res: Response){
    const product = req.body;

    await productService.createproductsInfo(product)

    res.sendStatus(201)

}

