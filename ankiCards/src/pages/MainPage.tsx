import styles from './MainPage.module.css'

import Aside from '../components/Aside/Aside'
import Content from '../components/Content/Content'

function MainPage() {

  return (
    <div className={styles.page}>

      <Aside/>
      <Content/>

    </div>
  )
}

export default MainPage