import { Footer } from '@/components/Footer'
import { Banner } from '@/components/home-compents'
import { HeaderNavigation } from '@/components/HeaderNavigation'

import styles from './page.module.scss'

function Home() {
  return (
    <main className={styles.main}>
      <HeaderNavigation />

      <Banner />

      <Footer />
    </main>
  )
}

export default Home
