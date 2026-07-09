import { useAppDispatch } from "../../store/hooks";

import { addCard } from "../../store/Slices/CardSlice";

import { setSelectedEditCardId } from "../../store/Slices/AppDataSlice";

function useAddCard() {

    const dispatch = useAppDispatch();

    function addNew() {
        const newCard = { id: Date.now(), original: "New Word", translate: "Новое слово", image: ""}

        dispatch(addCard(newCard))
        dispatch(setSelectedEditCardId(newCard.id))
    }

    return addNew;
}

export default useAddCard;