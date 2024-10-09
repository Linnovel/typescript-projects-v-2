import {  StateCreator } from "zustand";
import { Recipe } from "../typesDrink";
import { createRecipesSlices, RecipesSliceType } from "./recipeSlice";



export type FavoriteSliceType = {
    favorites: Recipe[]
    handleClickFavorite : (recie : Recipe) => void
    favoriteExiste :(id : Recipe) => boolean
    loadFromStorage: () => void
}


export const createFavoriteSlice : StateCreator<FavoriteSliceType & RecipesSliceType, [], [], FavoriteSliceType> = (set,get, api) => ({
    favorites:[],
    handleClickFavorite:(recipe) => {
        if(get().favoriteExiste(recipe.idDrink)){
            //si existe, este codigo para que lo agregue
            set((state) => ({
                favorites : state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink )
            }))
        } else {
            //si no existe, que lo agregue revisar el redux
            // console.log('no existe')
            set((state) => ({
                favorites : [...state.favorites, recipe]
            }))
        }
        createRecipesSlices(set, get, api).closeModal()
        localStorage.setItem('favorites', JSON.stringify(get().favorites))
    },
    favoriteExiste: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)   
    },
    loadFromStorage:() => {
        const storedFavorite = localStorage.getItem('favorites')
        if(storedFavorite){
            set({
                favorites : JSON.parse(storedFavorite)
            })
        }
    }
})


//Slace Pattern
