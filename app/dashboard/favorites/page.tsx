import { PokemonsResponse, SimplePokemon,PokemonGrid } from "@/pokemons";

export const metadata = {
    title:'Favorites',
    description:'Ad mini sit cupidadta consectetur'
}


const PokemonsPage = async () => {

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2"> Favorites Pokemons <small> Global state</small></span>
     <PokemonGrid pokemons={[]}/>
      </div>
  )
}

export default PokemonsPage