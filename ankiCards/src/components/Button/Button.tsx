import styles from './Button.module.css'

import type { ReactNode } from 'react'

interface Props {
    icon: ReactNode,
    color: string,  
    onClick?: () => void;
}

function Button({ icon, color, onClick}:Props) {

  return (
    <button 
        className={styles.button}
        style={{backgroundColor: color}}
        onClick={onClick}    
    >
        {icon}
    </button>
  )
}

export default Button