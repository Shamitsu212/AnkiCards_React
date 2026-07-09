import styles from './CardInfo.module.css'

import type { Card } from '../../types/cards'

import { XIcon } from 'lucide-react'

import { useAppDispatch } from '../../store/hooks'
import { removeCard } from '../../store/Slices/CardSlice'
import { setSelectedEditCardId } from '../../store/Slices/AppDataSlice'

interface Props {
    card: Card
}

function CardInfo({ card }: Props) {

    const dispatch = useAppDispatch();

    function delCard(e: React.MouseEvent<HTMLButtonElement>) {
        e.stopPropagation();

        dispatch(removeCard(card.id));
    }

    function setActive() {
        dispatch(setSelectedEditCardId(card.id));
    }

    return (
        <article
            className={styles.article}
            onClick={setActive}
        >
            <p className={styles.article__p}>
                {card.original} - {card.translate}
            </p>

            <button
                className={styles.article__button}
                onClick={delCard}
            >
                <XIcon />
            </button>
        </article>
    );
}

export default CardInfo;