import {z } from 'zod'

import { CategoriesAPIResponseSchema, SearchFilterSchema, DrinksApiResponse, DrinkApiResponse } from '../UtilsDrinks/recipes-shemma';


export type CategoryDrink = z.infer<typeof CategoriesAPIResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksApiResponse>
export type Drink = z.infer<typeof DrinkApiResponse>