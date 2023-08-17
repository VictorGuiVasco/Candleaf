import {
  Banner,
  BenefitsPanel,
  ProductsPanel,
  Testimonials,
} from './components'
import { Footer } from '@/presentation/components/Footer'
import { HeaderNavigation } from '@/presentation/components/HeaderNavigation'

import styles from './styles.module.scss'

import { products } from '@/products'

function HomePage() {
  return (
    <main className={styles.main}>
      <HeaderNavigation />

      <Banner />
      <ProductsPanel products={products} />
      <BenefitsPanel />
      <Testimonials />

      <Footer />
    </main>
  )
}

export { HomePage }
