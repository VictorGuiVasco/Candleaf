import Image from 'next/image'
import styles from './styles.module.scss'

import candleImg from '@/presentation/assets/images/candle.png'

function ProductCard() {
  return (
    <div className={styles.card}>
      <Image src={candleImg} alt="candle" priority={false} />

      <div className={styles['product-info']}>
        <h1>Spiced Mint</h1>
        <span>9.99$</span>
      </div>
    </div>
  )
}

export { ProductCard }
