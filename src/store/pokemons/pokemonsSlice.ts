import { simplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokeFavoriteState {
    [key: string]: simplePokemon,
}

const initialState = {
    '1': { id: '1', name: 'bulbasour' }
}

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        toggleFavorite(state, action: PayloadAction<simplePokemon>) {
            const pokemon = action.payload;
            const { id } = pokemon;
            if (!!state[id]) {
                delete state[id];
                return
            }

            state[id] = pokemon;
        }
    }
});

export const { toggleFavorite } = pokemonsSlice.actions

export default pokemonsSlice.reducer