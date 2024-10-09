import {create} from 'zustand';
import {devtools} from 'zustand/middleware'

//store de zustand principal
//types de los slices
import {createRecipesSlices, RecipesSliceType} from './recipeSlice'
import { createFavoriteSlice, FavoriteSliceType } from './favoriteSlice';
import { createNotificationSlice, NotificationSliceType } from './notificationSlice';



export const useAppStore = create<RecipesSliceType & FavoriteSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createRecipesSlices(...a),
    ...createFavoriteSlice(...a),
    ...createNotificationSlice(...a),
})))

