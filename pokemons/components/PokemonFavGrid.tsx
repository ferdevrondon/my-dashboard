
'use client'
import { useAppSelector } from "@/store";
import {PokemonCard }from "./PokemonCard";



export const PokemonFavGrid = () => {
    const favoritesPokemons = useAppSelector(state => Object.values(state.pokemons))
    



  return (
     <div className="flex flex-wrap gap-10 items-center justify-center">
        {favoritesPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
         
        ))} 
      </div>
  )
}
