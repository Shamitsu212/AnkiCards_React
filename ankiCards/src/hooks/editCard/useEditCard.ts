import { useAppDispatch } from "../../store/hooks";

import type { Card } from "../../types/cards";

import { editCard } from "../../store/Slices/CardSlice";

function useEditCard() {
    const dispatch = useAppDispatch();

    function updateCard( card: Card, original: string, translate: string, image: string) {
        dispatch(editCard({ ...card, original, translate, image}));
    }

    return updateCard;
}

export default useEditCard;