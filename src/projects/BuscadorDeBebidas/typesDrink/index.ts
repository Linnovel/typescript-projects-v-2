import {z } from 'zod'

//Aca se esta validando las schema y respuestas

import { CategoriesAPIResponseSchema, SearchFilterSchema, DrinksApiResponse, DrinkApiResponse, RecipeAPIResponseSchema } from '../UtilsDrinks/recipes-shemma';


export type CategoryDrink = z.infer<typeof CategoriesAPIResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksApiResponse>
export type Drink = z.infer<typeof DrinkApiResponse>
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>