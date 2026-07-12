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

    const [translate, setTranslate] = useState("");
    const [original, setOriginal] = useState("");
    const [image, setImage] = useState("");
    const [info, setInfo] = useState("")


    useEffect(() => {
        if (!card) return;
        
        setTranslate(card.translate);
        setOriginal(card.original);
        setImage(card.image ?? "");
        setInfo("");
    }, [card]);

    const updateCard = useEditCard()

    const inputRef = useRef<HTMLInputElement>(null);

    function openFileDialog() {
        inputRef.current?.click();
    }

    if(!card){
        return <p>Карта не выбрана</p>
    }

    function editData() {
        if (!card) return;

        updateCard(card, original, translate, image);

        setInfo("Изменения приняты")
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

                        {image && (
                            <img className={styles.image} src={image}/>
                        )}

                    </div>
                    

                    <Input value={translate} setValue={setTranslate}/>

                    <Input value={original} setValue={setOriginal}/>

                    <button className={styles.button} onClick={editData}>
                        Изменить
                    </button>

                    {info &&
                        <p style={{color: "green"}}>
                            {info}
                        </p>
                    }
                </div>

            </div>
            
        </div>
    );
}

export default CardChange;