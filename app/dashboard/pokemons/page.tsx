import { PokemonsResponse, SimplePokemon,PokemonGrid } from "@/pokemons";


export const metadata = {
 title: 'Pokemons',
 description: 'Pokemons',
};

const getPokemons = async (limit: number = 20, offset: number = 0):Promise<SimplePokemon[]> => {
    const data:PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then( res => res.json());
    const pokemons = data.results.map((pokemon) => ({
        id: Number(pokemon.url.split("/").at(-2)),
        name: pokemon.name,
    }));

    // throw new Error("Esto es un error que no debia suceder");
    return pokemons;
}

const PokemonsPage = async () => {
const pokemons = await getPokemons(151);

console.log("pokemons",pokemons)
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2"> Listado de Pokemons <small className="text-blue-400"> Estaticos</small></span>
     <PokemonGrid pokemons={pokemons}/>
      </div>
  )
}

export default PokemonsPage