import * as productRepository from "../repositories/productsRepository.js";
import { TypeproductsData } from '../types/productsType.js';

export async function createproductsInfo(productsData: TypeproductsData) {
  const existingProductBatch = await productRepository.getProductsbyName(
    productsData.name,
  );

  
  if (existingProductBatch){
    throw {type: "error_conflict",
    message: `Product alredy exist`}
  }

  await productRepository.createProduct(productsData);
}

export async function getproductsInfo() {
 
  const productsList = await productRepository.getAllProducts()


  return productsList
  }
 
