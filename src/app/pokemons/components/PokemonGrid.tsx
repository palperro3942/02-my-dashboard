import Image from "next/image"
import { PokemonsResponse } from "../interfaces/pokemons-response"

export const PokemonGrid = (pokemons:PokemonsResponse) => {
    return (
        <div className="flex flex-wrap gap-10 items-center justify-center">
            {
                pokemons.map(item => (
                    <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`}
                        width={100}
                        height={100}
                        alt={item.name}
                    />
                ))
            }
        </div>
    )
}
