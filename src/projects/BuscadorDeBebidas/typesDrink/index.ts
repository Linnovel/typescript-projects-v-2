import {z } from 'zod'

import { CategoriesAPIResponseSchema } from '../UtilsDrinks/recipes-shemma'

CategoriesAPIResponseSchema

export type CategoryDrink = z.infer<typeof CategoriesAPIResponseSchema>
