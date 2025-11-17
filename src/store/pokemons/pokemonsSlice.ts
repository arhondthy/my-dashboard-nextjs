import { simplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonsState {
    [key: string]: simplePokemon
}

const getInitialState = (): PokemonsState => {
    const favorites = JSON.parse(localStorage.getItem('favorites') ?? '{}');
    console.log(favorites);
    return favorites;
}

const initialState: PokemonsState = {
    ...getInitialState,
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
                //  return
            } else {
                state[id] = pokemon;
            }



        }
    }
});

export const { toggleFavorite } = pokemonsSlice.actions

export default pokemonsSlice.reducer