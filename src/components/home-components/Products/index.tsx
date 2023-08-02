import { poppins } from '@/utils/fonts'
import styles from './styles.module.scss'
import { ProductCard } from '../Card'

function ProductsPanel() {
  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <h1 className={poppins.className}>Products</h1>
        <p className={poppins.className}>
          Order it for you or for your beloved ones
        </p>

        <div className={styles['card-container']}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  )
}

export { ProductsPanel }
