import type { ChangeEvent } from "react";

import { useAppDispatch } from "../../store/hooks";

import { setMixedCards, setSelectedTrainIndex, setSelectedEditCardId} from "../../store/Slices/AppDataSlice";

import { setCards } from "../../store/Slices/CardSlice";

function useImportCards() {
    const dispatch = useAppDispatch();

    async function importCards(e: ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];

        if (!file) return;

        const text = await file.text();
        const data = JSON.parse(text);

        dispatch(setCards(data.cards));
        dispatch(setMixedCards(data.cards.map((c: any) => c.id)));
        dispatch(setSelectedTrainIndex(0));
        dispatch(setSelectedEditCardId(null));

        e.target.value = "";
    }

    return importCards;
}

export default useImportCards;