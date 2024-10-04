import axios from 'axios';
import { CategoriesAPIResponseSchema } from '../UtilsDrinks/recipes-shemma';


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