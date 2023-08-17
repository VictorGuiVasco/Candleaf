import Image from 'next/image'
import styles from './styles.module.scss'

import { Product } from '@/products'
import { maskedToMoney } from '@/utils/currenceFormater'

type ProductsProps = {
  product: Product
}

function ProductCard({ product }: ProductsProps) {
  return (
    <div className={styles.card}>
      <Image
        src={product.imgUrl}
        width={220}
        height={220}
        alt={product.name}
        priority={false}
      />

      <div className={styles['product-info']}>
        <h1>{product?.name}</h1>
        <span>{maskedToMoney(product.price)}</span>
      </div>
    </div>
  )
}

export { ProductCard }
