'use client'
import React, { useState } from 'react'
import Pokemongrid from './pokemongrid'
import { useAppSelector } from '@/store';
import { IoHeartOutline } from 'react-icons/io5';


const FavoritePokemons = () => {
    const favoritePokemons = useAppSelector(state => Object.values(state.pokemons));
    console.log(favoritePokemons)
    const [pokemones, setPokemons] = useState(favoritePokemons)
    return (
        <>
            {pokemones.length === 0
                ? (<NoFavorites />)
                : (<Pokemongrid pokemons={pokemones} />)
            }

        </>


    )
}

export default FavoritePokemons

export const NoFavorites = () => {
    return (
        <div className='flex flex-col h-[50vh] items-center justify-center'>
            <IoHeartOutline size={100} className='text-red-600' />
            <span>No hay favoritos</span>
        </div>
    )
}