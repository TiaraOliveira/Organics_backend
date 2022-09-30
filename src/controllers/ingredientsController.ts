import {Request, Response } from "express";
import * as ingredientsService from "../service/ingredientsService"

export async function postIngredients(req: Request, res: Response){
    const ingredientsData = req.body

    await ingredientsService.createIngredientsInfo(ingredientsData)

    res.sendStatus(201);
}


export async function getAllIngredients(req: Request, res: Response){

    const ingredientsList = await ingredientsService.getAllIngredients()
 
     res.status(201).send(ingredientsList)
 
 }