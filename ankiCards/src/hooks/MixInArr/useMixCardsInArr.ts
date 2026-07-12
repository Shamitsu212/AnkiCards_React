import { useAppDispatch, useAppSelector } from "../../store/hooks";

import { setMixedCards, setSelectedTrainIndex} from "../../store/Slices/AppDataSlice";

import { shuffle } from "../../utils/shuffle";

function useMixCardsInArr() {

    const dispatch = useAppDispatch();

    const cards = useAppSelector((state) => state.cards.cards);

    const selectedTrainIndex = useAppSelector(
        (state) => state.app.selectedTrainIndex
    );

    const mixedCards = useAppSelector(
        (state) => state.app.mixedCards
    );

    function nextCard(): boolean {

        if (mixedCards.length <= 1) {
            return false;
        }

        if (selectedTrainIndex < mixedCards.length - 1) {
            dispatch(setSelectedTrainIndex(selectedTrainIndex + 1));
            return true;
        }

        dispatch(
            setMixedCards(
                shuffle(cards.map(card => card.id))
            )
        );

        dispatch(setSelectedTrainIndex(0));

        return true;
    }

    return nextCard;
}

export default useMixCardsInArr;