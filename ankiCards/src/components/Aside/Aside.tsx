import styles from './Aside.module.css'

import Button from '../Button/Button'
import CardInfo from '../CardInfo/CardInfo'

import { BrainIcon, DownloadIcon, ToolCaseIcon, UploadIcon } from 'lucide-react'

import useImportCards from '../../hooks/ImportFromApp/useImportCards'
import { exportCards } from '../../utils/exportCards'

import { useAppSelector } from '../../store/hooks'

import useAppMode from '../../hooks/AppMode/useAppMode'
import useAddCard from '../../hooks/createNew/useAddCard'




function Aside() {

    const selectedMode = useAppSelector((state) => state.app.selectedMode)
    const cards = useAppSelector((state) => state.cards.cards)

    const { setCreate, setTrain } = useAppMode();
    const importCards = useImportCards();
    const addNew = useAddCard()


  return (
    <aside className={styles.aside}>

        <div className={styles.aside__container}>
            
            <div className={styles.container__row}>

                <input id="import-file" type="file" accept=".json" style={{ display: "none" }} onChange={importCards}/>

                <Button color='#4BB34B' icon={<DownloadIcon/>} onClick={() => document.getElementById("import-file")?.click()}/>
                <Button color='#2688EB' icon={<UploadIcon/>} onClick={exportCards}/>

            </div>

            <div className={styles.container__row}>

                <Button color='#FFB300' icon={<ToolCaseIcon/>} onClick={setCreate}/>
                <Button color='#7B61FF' icon={<BrainIcon/>} onClick={setTrain}/>

            </div>

        </div>

        <div className={selectedMode == "create" ? styles.aside__container : styles.hidden}>

            <button onClick={addNew} className={styles.button}>Добавить карточку</button>

            {cards.map((c) => (
                <CardInfo card={c} key={c.id}/>
            ))}

        </div>
      
    </aside>
  )
}

export default Aside