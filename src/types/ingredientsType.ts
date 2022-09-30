import {ingredients} from '@prisma/client'

export type TypeIngredientsData = Omit<ingredients, 'id'>;
