import { StateCreator } from "zustand"
import { getCategories } from "../servicesDrink/RecipeServices"


type CategoryApi = {}

export type RecipesSliceType = {
    categories: CategoryApi[]
    fetchCategoriesDrink: () => Promise<void>
}

export const createRecipesSlices : StateCreator<RecipesSliceType> = () => ({
    categories: [],
    fetchCategoriesDrink: async () => {
        getCategories()
    }

})