import styles from './styles.module.scss'
import { ProductCard } from '../CardProduct'

import { Product } from '@/products'

type ProductsPanelProps = {
  products: Product[]
}

function ProductsPanel({ products }: ProductsPanelProps) {
  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <h1>Products</h1>
        <p>Order it for you or for your beloved ones</p>

        <div className={styles['card-container']}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export { ProductsPanel }
