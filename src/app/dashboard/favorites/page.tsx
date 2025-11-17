
import { PokemonsResponse, simplePokemon } from "@/pokemons";
import FavoritePokemons from "@/pokemons/components/FavoritePokemons";
import Pokemongrid from "@/pokemons/components/pokemongrid";
import { useAppDispatch, useAppSelector } from "@/store";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Favoritos',
    description: 'listado pokemones favoritos'
};

const FavoritesPage = async () => {

    return (
        <>
            <div className='flex flex-col'>
                <span className='text-5xl'>Pokemons favoritos <small className="text-sky-800">global state</small></span>
                <div className='flex flex-wrap gap-10 items-center justify-center'>
                    <FavoritePokemons />
                </div>
            </div>
        </>
    )
}

export default FavoritesPage
