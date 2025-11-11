import { PokemonsResponse, simplePokemon } from '@/app/pokemons';
import Pokemongrid from '../../pokemons/components/pokemongrid';

const getPokemons = async (limit = 20, offset = 0): Promise<simplePokemon[]> => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => res.json());

    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    }));
    //throw new Error('no deberia suceder')
    return pokemons;
}

const pokemonsPage = async () => {
    const poke = await getPokemons(151);
    return (
        <>
            <div className='flex flex-col'>
                <span className='text-5xl'>Listado de pokemon<small>estatico</small></span>
                <div className='flex flex-wrap gap-10 items-center justify-center'>
                    <Pokemongrid pokemons={poke} />

                </div>
            </div>
        </>
    )
}

export default pokemonsPage
