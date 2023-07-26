import { Banner } from '@/components/home-compents'
import { HeaderNavigation } from '@/components/HeaderNavigation'

import styles from './page.module.scss'

function Home() {
  return (
    <main className={styles.main}>
      <HeaderNavigation />

      <Banner />
    </main>
  )
}

export default Home
