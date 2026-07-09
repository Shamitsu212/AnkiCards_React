import styles from "./CardChange.module.css";

import { useState, useEffect } from "react";

import Input from "../Input/Input";

import { useAppSelector } from "../../store/hooks";
import useEditCard from "../../hooks/editCard/useEditCard";

interface Props {
    id: number;
}

function CardChange({id}: Props) {


    const card = useAppSelector((state) => state.cards.cards.find((c) => c.id == id))

    if(!card){
        return <p>Карта не выбрана</p>
    }

    const currentCard = card;

    const [translate, setTranslate] = useState(card.translate);
    const [original, setOriginal] = useState(card.original);

    useEffect(() => {
        setTranslate(card.translate);
        setOriginal(card.original);
    }, [card]);

    const updateCard = useEditCard()

    function editData() {
        updateCard(currentCard, original, translate);
    }

    return (

        <div className={styles.wrapper}>

            <div className={styles.card}>
                
                <div className={styles.front}>

                    {card.image && (
                        <img className={styles.image} src={card.image}/>
                    )}


                    <Input value={translate} setValue={setTranslate}/>

                    <Input value={original} setValue={setOriginal}/>

                    <button className={styles.button} onClick={editData}>
                        Изменить
                    </button>

                </div>

            </div>
            
        </div>
    );
}

export default CardChange;