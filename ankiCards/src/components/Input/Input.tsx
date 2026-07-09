import styles from './Input.module.css'

import type { SetStateAction } from 'react'

interface Props{
    value: string,
    setValue: React.Dispatch<SetStateAction<string>>
}


function Input({value, setValue}:Props) {


    return (

     <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={styles.input}
     />

    )
}

export default Input