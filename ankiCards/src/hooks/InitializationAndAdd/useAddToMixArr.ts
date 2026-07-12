import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../store/hooks";

import { setMixedCards, setSelectedTrainIndex,} from "../../store/Slices/AppDataSlice";

function useAddToMixArr() {
    const dispatch = useAppDispatch();

    const cards = useAppSelector((state) => state.cards.cards);
    const mixedCards = useAppSelector((state) => state.app.mixedCards);
    const selectedTrainIndex = useAppSelector((state) => state.app.selectedTrainIndex)

    useEffect(() => {

        const cardIds = cards.map((card) => card.id);
        const actualMixed = mixedCards.filter((id) =>cardIds.includes(id))
        const newIds = cardIds.filter((id) =>!actualMixed.includes(id))
        const result = [...actualMixed, ...newIds];

        if ( result.length !== mixedCards.length || result.some((id, index) => id !== mixedCards[index])) {
            dispatch(setMixedCards(result));
        }

    }, [cards, mixedCards, dispatch]);

    useEffect(() => {

        if (mixedCards.length === 0) {
            return;
        }

        if (selectedTrainIndex >= mixedCards.length) {
            dispatch(setSelectedTrainIndex(0));
        }

    }, [mixedCards, selectedTrainIndex, dispatch]);
}

export default useAddToMixArr;