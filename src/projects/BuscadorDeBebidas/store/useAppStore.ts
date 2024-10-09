import {create} from 'zustand';
import {devtools} from 'zustand/middleware'

//store de zustand principal

import {createRecipesSlices, RecipesSliceType} from './recipeSlice'

export const useAppStore = create<RecipesSliceType>()(devtools((...a) => ({
    ...createRecipesSlices(...a)
})))

