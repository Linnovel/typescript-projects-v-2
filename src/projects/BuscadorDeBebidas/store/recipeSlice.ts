import { StateCreator } from "zustand"
import { getCategories, getRecipesById, getRecipies } from "../servicesDrink/RecipeServices"
import type {CategoryDrink, Drink, Drinks, Recipe, SearchFilter}  from '../typesDrink/index';
import { FavoriteSliceType } from "./favoriteSlice";

//aca es un slice del store

export type RecipesSliceType = {
    categories: CategoryDrink
    drinks : Drinks
    selectRecipies: Recipe
    modal: boolean
    fetchCategoriesDrink: () => Promise<void>
    searchRecipes: (searchFilters : SearchFilter) =>Promise<void>
    selecRecipe : (id:Drink ['idDrink']) => void
    closeModal: () => void
}


export const createRecipesSlices : StateCreator<RecipesSliceType & FavoriteSliceType, [], [], RecipesSliceType> = (set) => ({
    categories: {
      drinks:[]
    },
    drinks : {
      drinks:[]
    },
    selectRecipies: {} as Recipe,
    modal: false,
    
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
  const selectRecipies =   await getRecipesById(id)
  set({
    selectRecipies,
    modal: true
  })
},
closeModal: () => {
  set({
    modal: false,
    selectRecipies: {} as Recipe
  })
}
})