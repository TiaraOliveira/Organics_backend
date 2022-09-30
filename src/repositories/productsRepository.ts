import { prisma } from '../database';
import { TypeproductsData } from '../types/productsType';

export async function getProductsbyName(name: string){
   
    const result = prisma.products.findUnique({where: {name}})
    
    return result
}

export async function createProduct(product: TypeproductsData){
    
    await prisma.products.create({ data: product });
    
}

export function getAllProducts() {

  return  prisma.products.findMany()
}
