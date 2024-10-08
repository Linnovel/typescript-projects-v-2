import {z } from 'zod'

import { CategoriesAPIResponseSchema, SearchFilterSchema } from '../UtilsDrinks/recipes-shemma'

CategoriesAPIResponseSchema

export type CategoryDrink = z.infer<typeof CategoriesAPIResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
