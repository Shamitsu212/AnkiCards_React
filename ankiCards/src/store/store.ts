import { configureStore } from "@reduxjs/toolkit";

import CardSlice from './Slices/CardSlice'
import AppDataSlice from './Slices/AppDataSlice'

export const store = configureStore({

    reducer: {
        cards: CardSlice,
        app: AppDataSlice
    }

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch