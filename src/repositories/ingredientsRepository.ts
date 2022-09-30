import { prisma } from '../database';
import { TypeIngredientsData } from '../types/ingredientsType';

export async function getIngredientsByBatch(productBatch: string){
   
    const result = prisma.ingredients.findUnique({where: {productBatch}})
    
    return result
}

export async function createProduct(product: TypeIngredientsData){
    
    await prisma.ingredients.create({ data: product });
    
}