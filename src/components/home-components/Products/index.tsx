import styles from './styles.module.scss'
import { ProductCard } from '../CardProduct'

function ProductsPanel() {
  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <h1>Products</h1>
        <p>Order it for you or for your beloved ones</p>

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
