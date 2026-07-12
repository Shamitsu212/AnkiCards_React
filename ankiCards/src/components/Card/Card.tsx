import styles from "./Card.module.css";

import type { Card } from "../../types/cards";

import { useEffect, useState } from "react";

import Input from "../Input/Input";

interface Props {
    card: Card;
    onNext: () => boolean;
}

function CardComponent({ card, onNext }: Props) {

    const [answer, setAnswer] = useState("");
    const [flipped, setFlipped] = useState(false);
    const [correct, setCorrect] = useState(false);

    useEffect(() => {

        setAnswer("");
        setFlipped(false);
        setCorrect(false);

    }, [card.id]);

    function handleAnswer() {

        const result = answer.trim().toLowerCase() === card.translate.trim().toLowerCase();

        setCorrect(result);
        setFlipped(true);
    }

    function handleNext() {
        const changed = onNext();
        
        if (!changed) {
            setAnswer("");
            setFlipped(false);
            setCorrect(false);
        }
    }

    return (

        <div className={styles.wrapper}>

            <div className={`${styles.card} ${flipped ? styles.flipped : ""}`}>
                
                <div className={styles.front}>

                    {card.image && (
                        <img className={styles.image} src={card.image}/>
                    )}


                    <h2>{card.original}</h2>

                    <Input value={answer} setValue={setAnswer}/>

                    <button className={styles.button} onClick={handleAnswer}>
                        Ответить
                    </button>

                </div>

                <div className={styles.back}>

                    <h2>{card.translate}</h2>

                    <p className={correct ? styles.correct : styles.wrong}>
                        {correct ? "Верно!" : "Неверно!"}
                    </p>

                    {!correct && (
                        <p>
                            Ваш ответ: <b>{answer}</b>
                        </p>
                    )}

                    <button className={styles.button} onClick={handleNext}>
                        Дальше
                    </button>
                </div>

            </div>
            
        </div>
    );
}

export default CardComponent;