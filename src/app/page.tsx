import { Footer } from '@/components/Footer'
import {
  Banner,
  BenefitsPanel,
  ProductsPanel,
} from '@/components/home-components'
import { HeaderNavigation } from '@/components/HeaderNavigation'

import styles from './page.module.scss'

function Home() {
  return (
    <main className={styles.main}>
      <HeaderNavigation />

      <Banner />
      <ProductsPanel />
      <BenefitsPanel />

      <Footer />
    </main>
  )
}

export default Home
