import * as productRepository from "../repositories/productsRepository";
import { TypeproductsData } from '../types/productsType';

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