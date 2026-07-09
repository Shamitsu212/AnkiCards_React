import { useAppDispatch } from "../../store/hooks";

import type { Card } from "../../types/cards";

import { editCard } from "../../store/Slices/CardSlice";

function useEditCard() {
    const dispatch = useAppDispatch();

    function updateCard( card: Card, original: string, translate: string) {
        dispatch(editCard({ ...card, original, translate}));
    }

    return updateCard;
}

export default useEditCard;