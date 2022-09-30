import {products} from '@prisma/client'

export type TypeproductsData = Omit<products, 'id'>;
