import { prisma } from '../database.js';
import { TypeIngredientsData } from '../types/ingredientsType.js';

export async function getIngredientsByBatch(productBatch: string){
   
    const result = prisma.ingredients.findUnique({where: {productBatch}})
    
    return result
}

export async function createProduct(product: TypeIngredientsData){
    
    await prisma.ingredients.create({ data: product });
    
}

export async function getAllProducts(){

   return  prisma.ingredients.findMany()
}