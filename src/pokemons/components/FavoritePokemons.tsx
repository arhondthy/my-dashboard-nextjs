'use client'
import React, { useState } from 'react'
import Pokemongrid from './pokemongrid'
import { useAppSelector } from '@/store';


const FavoritePokemons = () => {
    const favoritePokemons = useAppSelector(state => Object.values(state.pokemons));
    const [pokemons, setPokemons] = useState(favoritePokemons)
    return (

        <Pokemongrid pokemons={favoritePokemons} />

    )
}

export default FavoritePokemons

