import { useAppStore } from "../store/useAppStore"
import { Drink } from "../typesDrink"

type DrinkProps = {
    drink : Drink
}


const DrinkCard = ( {drink} : DrinkProps ) => {

  const selectRecipe =   useAppStore((state) => state.selecRecipe)

  return (
    <div className='border shadow-lg'>
        <div className="overflow-hidden">
        <img
         src={drink.strDrinkThumb}
          alt={`Imagen de ${drink.strDrinkThumb}`}
          className="hover:scale-125 transition-transform hover:rotate-2"
          />
        </div>
        <div className="p-5 ">
    <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>
    <button
    onClick={() => selectRecipe(drink.idDrink)}
    type="button" className="bg-orange-400 hover:bg-orange-600 mt-5 w-full font-bold text-white text-lg">Ver recetas</button>
        </div>
      
    </div>
  )
}

export default DrinkCard
