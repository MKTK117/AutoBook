import { createSlice } from "@reduxjs/toolkit"

export const FavoritesSlice = createSlice({
    name:"favorites",
    initialState: {
        favorites:[],
    },
    reducers:{
        favoritePlaces:(state, action) => {
            state.favorites.push({...action.payload})
        }
    }
})

export const {favoritePlaces} = FavoritesSlice.actions

export default FavoritesSlice.reducer