import { PokemonsResponse, simplePokemon } from "@/pokemons";
import Pokemongrid from "@/pokemons/components/pokemongrid";



const FavoritesPage = async () => {

    return (
        <>
            <div className='flex flex-col'>
                <span className='text-5xl'>Pokemons favoritos <small className="text-sky-800">global state</small></span>
                <div className='flex flex-wrap gap-10 items-center justify-center'>
                    <Pokemongrid pokemons={[]} />

                </div>
            </div>
        </>
    )
}

export default FavoritesPage
