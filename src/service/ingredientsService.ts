import * as ingredientsRepository from "../repositories/ingredientsRepository.js";
import { TypeIngredientsData } from "../types/ingredientsType.js";

export async function createIngredientsInfo(ingredientsData: TypeIngredientsData) {
  const existingProductBatch = await ingredientsRepository.getIngredientsByBatch(
    ingredientsData.productBatch
  );

  
  if (existingProductBatch){
    throw {type: "error_conflict",
    message: `Product Bacth alredy exist`}
  }

  await ingredientsRepository.createProduct(ingredientsData);
}



export async function getAllIngredients() {
 
  const productsList = await ingredientsRepository.getAllProducts()


  return productsList
  }
