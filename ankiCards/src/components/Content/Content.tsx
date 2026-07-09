import styles from "./Content.module.css";

import CardComponent from "../Card/Card";
import CardChange from "../СardChange/CardChange";

import { useAppSelector } from "../../store/hooks";

import useAddToMixArr from "../../hooks/InitializationAndAdd/useAddToMixArr";
import useMixCardsInArr from "../../hooks/MixInArr/useMixCardsInArr";

function Content() {

    const selectedMode = useAppSelector((state) => state.app.selectedMode)

    useAddToMixArr();

    const nextCard = useMixCardsInArr();

    const cards = useAppSelector((state) => state.cards.cards);
    const selectedTrainIndex = useAppSelector((state) => state.app.selectedTrainIndex)
    const selectedEditCardId = useAppSelector((state) => state.app.selectedEditCardId)
    const mixedCards = useAppSelector((state) => state.app.mixedCards)

    const currentId = mixedCards[selectedTrainIndex];
    const card = cards.find((c) => c.id === currentId);

    if (selectedMode === "train") {

        if (!card) {
            return (
                <div className={styles.content}>
                    <p>Нет карточек</p>
                </div>
            );
        }

        return (
            <div className={styles.content}>
                <CardComponent
                    key={card.id}
                    card={card}
                    onNext={nextCard}
                />
            </div>
        );
    }

    return (
        <div className={styles.content}>

            {selectedEditCardId !== null ? 
            (
                <CardChange id={selectedEditCardId} />
            ) 
            : 
            (
                <p>Выберите карточку</p>
            )
            }

        </div>
    );
}

export default Content;