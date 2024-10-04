import {create} from 'zustand';
import {createRecipesSlices, RecipesSliceType} from './recipeSlice'

export const useAppStore = create<RecipesSliceType>((...a) => ({
    ...createRecipesSlices(...a)
}))