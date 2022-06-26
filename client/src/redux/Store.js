import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './ReduxCart';

export default configureStore({
    reducer: {
        cart: cartReducer,
    }
})