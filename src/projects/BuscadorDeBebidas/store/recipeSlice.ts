import { StateCreator } from "zustand"
import { getCategories, getRecipies } from "../servicesDrink/RecipeServices"
import type {CategoryDrink, Drink, Drinks, SearchFilter}  from '../typesDrink/index';


export type RecipesSliceType = {
    categories: CategoryDrink
    drinks : Drinks
    fetchCategoriesDrink: () => Promise<void>
    searchRecipes: (searchFilters : SearchFilter) =>Promise<void>
    selecRecipe : (id:Drink ['idDrink']) => void

}

export const createRecipesSlices : StateCreator<RecipesSliceType> = (set) => ({
    categories: {
      drinks:[]
    },
    drinks : {
      drinks:[]
    },
    fetchCategoriesDrink: async () => {
      const categories = await getCategories()
      set({
        categories
      })
    },
    searchRecipes: async (searchs) => {
  const drinks =  await getRecipies(searchs)
  set({drinks})
},
selecRecipe : async (id) => {
  console.log(id)
}
})