import {Request, Response } from "express";
import * as productService from "../service/productService"

export async function postProducts(req: Request, res: Response){
    const product = req.body;

    await productService.createproductsInfo(product)

    res.sendStatus(201)

}

export async function getProducts(req: Request, res: Response){

   const productsList = await productService.getproductsInfo()

    res.status(201).send(productsList)

}