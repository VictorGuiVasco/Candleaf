import {
  Banner,
  BenefitsPanel,
  ProductsPanel,
  Testimonials,
} from './components'
import { Footer } from '@/presentation/components/Footer'
import { HeaderNavigation } from '@/presentation/components/HeaderNavigation'

import styles from './styles.module.scss'

function HomePage() {
  return (
    <main className={styles.main}>
      <HeaderNavigation />

      <Banner />
      <ProductsPanel />
      <BenefitsPanel />
      <Testimonials />
      <ProductsPanel />

      <Footer />
    </main>
  )
}

export { HomePage }
