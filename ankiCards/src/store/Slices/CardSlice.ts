import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { Card } from "../../types/cards";

interface CardState {
    cards: Card[]
}

const initialState:CardState = {
    cards: [
        {id: 0, translate: "Английский", original: "English", image: ""},
        {id: 1, translate: "Учиться", original: "Learn", image: ""},
    ]
}

const CardSlice = createSlice({

    name: "cards",

    initialState,

    reducers: {

        setCards(state, action:PayloadAction<Card[]>){
            state.cards = action.payload
        },

        addCard(state, action:PayloadAction<Card>){
            state.cards.push(action.payload)
        },

        removeCard(state, action:PayloadAction<number>){
            state.cards = state.cards.filter((c) => c.id != action.payload)
        },

        editCard(state, action:PayloadAction<Card>){
            const find = state.cards.find((c) => c.id == action.payload.id)

            if(find){
                Object.assign(find, action.payload)
            }
            
        }

    }

})

export const { setCards, addCard, removeCard, editCard } = CardSlice.actions
export default CardSlice.reducer