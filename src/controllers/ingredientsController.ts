import {Request, Response } from "express";
import * as ingredientsService from "../service/ingredientsService"

export async function ingredients(req: Request, res: Response){
    const ingredientsData = req.body

    await ingredientsService.createIngredientsInfo(ingredientsData)

    res.sendStatus(201);
}