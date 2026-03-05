import { PokemonFavGrid } from "@/pokemons/components/PokemonFavGrid"


export const metadata = {
    title:'Favorites',
    description:'Ad mini sit cupidadta consectetur'
}


const PokemonsPage = async () => {

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2"> Favorites Pokemons <small className="text-blue-400"> Global state</small></span>
     <PokemonFavGrid />
      </div>
  )
}

export default PokemonsPage