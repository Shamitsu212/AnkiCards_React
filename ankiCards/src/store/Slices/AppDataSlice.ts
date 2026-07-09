import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { AppData } from "../../types/appdata";

const initialState: AppData = {
    selectedTrainIndex: 0,
    selectedEditCardId: null,

    selectedMode: "create",

    mixedCards: [],
};

const AppDataSlice = createSlice({
    name: "app",

    initialState,

    reducers: {
        
        setSelectedTrainIndex(state, action: PayloadAction<number>) {
            state.selectedTrainIndex = action.payload;
        },

        setSelectedEditCardId( state, action: PayloadAction<number | null>) {
            state.selectedEditCardId = action.payload;
        },

        setSelectedMode( state, action: PayloadAction<string>) {
            state.selectedMode = action.payload;
        },

        setMixedCards( state, action: PayloadAction<number[]>) {
            state.mixedCards = action.payload;
        },

        clearMixedCards(state) {
            state.mixedCards = [];
        },

        resetApp() {
            return initialState;
        },

    },
});

export const { setSelectedTrainIndex, setSelectedEditCardId, setSelectedMode, setMixedCards, clearMixedCards, resetApp } = AppDataSlice.actions;
export default AppDataSlice.reducer;