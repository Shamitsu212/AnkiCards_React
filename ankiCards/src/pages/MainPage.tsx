import styles from './MainPage.module.css'

import Aside from '../components/Aside/Aside'
import Content from '../components/Content/Content'

import { useState } from 'react';

function MainPage() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.page}>

      <button className={styles.burger} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <div className={`${styles.aside} ${isOpen ? styles.open : ""}`}>
        <Aside />
      </div>

      <div className={styles.content}>
        <Content />
      </div>
      
    </div>
  )
}

export default MainPage