import styles from './page.module.scss'
import { HeaderNavigation } from '@/components/HeaderNavigation'

function Home() {
  return (
    <main className={styles.main}>
      <HeaderNavigation />

      <section>
        <p>teste</p>
      </section>
    </main>
  )
}

export default Home
