import { Pokemon } from "@/pokemons";
import { Metadata } from "next";

interface Props {
    params: {id: string}
}

export async function generateMetadata({ params }:Props): Promise<Metadata> {
  const {id, name} = await getPokemon(params.id);
  return{
    title: `Pokemon numero: ${id}`,
    description: `Esta es la pagina del pokemon: ${name}`
  }
}


const getPokemon = async(id:string): Promise<Pokemon>=>{
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`,{cache: "force-cache"}).then(res => res.json());
  return pokemon;
}

export default async function PokemonPage({params}: Props) {
  const pokemon = await getPokemon(params.id);
  return (
    <div>
      <h1>Hello Page {params.id}</h1>
      <div>{pokemon.name}</div>
    </div>
  );
}