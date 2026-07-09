import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../store/hooks";

import { setMixedCards } from "../../store/Slices/AppDataSlice";

function useAddToMixArr() {

    const dispatch = useAppDispatch();

    const cards = useAppSelector((state) => state.cards.cards);
    const mixedCards = useAppSelector((state) => state.app.mixedCards);

    useEffect(() => {
        if (mixedCards.length === 0 && cards.length > 0) {
            dispatch(
                setMixedCards(cards.map((card) => card.id))
            );
        }
    }, [cards, mixedCards, dispatch]);
    
}

export default useAddToMixArr;