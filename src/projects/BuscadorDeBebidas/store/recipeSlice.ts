import { StateCreator } from "zustand"
import { getCategories, getRecipies } from "../servicesDrink/RecipeServices"
import type {CategoryDrink, SearchFilter}  from '../typesDrink/index';


export type RecipesSliceType = {
    categories: CategoryDrink
    fetchCategoriesDrink: () => Promise<void>
    searchRecipes: (searchFilters : SearchFilter) =>Promise<void>
}

export const createRecipesSlices : StateCreator<RecipesSliceType> = (set) => ({
    categories: {
      drinks:[]
    },
    fetchCategoriesDrink: async () => {
      const categories = await getCategories()
      set({
        categories
      })
    },
    searchRecipes: async (searchs) => {
  await getRecipies(searchs)
  
    }

})