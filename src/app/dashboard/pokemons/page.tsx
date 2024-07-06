import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Lista de 151 Pokemons',
  description: 'Lista de 151 Pokemons',
 };

const getPokemons = async(limit = 10, offset=0): Promise<SimplePokemon[]>=>{
  const data:PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then(res => res.json());

  const pokemons= data.results.map(pokemon=>({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }))

  //throw new Error('error no conocido')

  return pokemons;
}

export default async function PokemonsPage() {

  const pokemons = await getPokemons(151);
  

  return (
    <div className="flex flex-col">
      <span>Lista de Pokemones <small>Estatico</small></span>
      <PokemonGrid pokemons={pokemons}/>
    </div>
  );
}