import { StateCreator } from "zustand"
import { getCategories } from "../servicesDrink/RecipeServices"
import type {CategoryDrink}  from '../typesDrink/index';


export type RecipesSliceType = {
    categories: CategoryDrink
    fetchCategoriesDrink: () => Promise<void>
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
    }

})