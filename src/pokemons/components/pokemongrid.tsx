import { simplePokemon } from '../interfaces/simplePokemon';
import Image from 'next/image'
import PokemonCard from './pokemonCard';

interface Props {
    pokemons: simplePokemon[];
}
const Pokemongrid = ({ pokemons }: Props) => {

    return (
        <div>
            <div className='flex flex-wrap gap-10 items-center justify-center'>
                {
                    pokemons.map(pokemon => (
                        <PokemonCard key={pokemon.id} pokemons={pokemon} />
                    ))
                }

            </div>
        </div>
    )
}

export default Pokemongrid
