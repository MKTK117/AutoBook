import { configureStore } from "@reduxjs/toolkit";
import SavedReducer from "./reducers/SavedReducer";
import FavoriteReducer from "./reducers/FavoriteReducer";
import AuthReducer from "./reducers/AuthReducer";

export default configureStore({
    reducer:{
        booking:SavedReducer,
        favorites: FavoriteReducer,
        auth: AuthReducer
    }
})