import axios from 'axios';
import { CategoriesAPIResponseSchema, DrinksApiResponse } from '../UtilsDrinks/recipes-shemma';
import { SearchFilter } from '../typesDrink';


export async function getCategories() {

    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

    const {data } = await axios(url)
    // console.log(data)
    const result = CategoriesAPIResponseSchema.safeParse(data)
    // console.log(result)
    
    if(result.success){
        return result.data
    }

}

export async function getRecipies(filters: SearchFilter){

    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
    const {data } = await axios(url)

    console.log(data)
    const result = DrinksApiResponse.safeParse(data)
    console.log(result)
    
    if(result.success){
        return result.data
    }
}

