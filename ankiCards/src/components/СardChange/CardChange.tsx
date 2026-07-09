import styles from "./CardChange.module.css";

import { useState, useEffect, useRef } from "react";

import Input from "../Input/Input";

import { useAppSelector } from "../../store/hooks";
import useEditCard from "../../hooks/editCard/useEditCard";

import { fileToBase64 } from "../../utils/fileToBase64";


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
    const [image, setImage] = useState(card.image ?? "");


    useEffect(() => {
        setTranslate(card.translate);
        setOriginal(card.original);
    }, [card]);

    const updateCard = useEditCard()

    function editData() {
        updateCard(currentCard, original, translate, image);
    }

    const inputRef = useRef<HTMLInputElement>(null);

    function openFileDialog() {
        inputRef.current?.click();
    }


    async function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];

        if (!file) return;

        const base64 = await fileToBase64(file);

        setImage(base64);
    }

    return (

        <div className={styles.wrapper}>

            <div className={styles.card}>
                
                <div className={styles.front}>

                    <div className={styles.Imgwrapper} onClick={openFileDialog}>

                        <input
                            ref={inputRef}
                            type="file"
                            accept="image/*"
                            style={{ display: "none" }}
                            onChange={handleImage}
                        />

                        {card.image && (
                            <img className={styles.image} src={image}/>
                        )}

                    </div>
                    

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