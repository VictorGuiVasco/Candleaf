import Image from 'next/image'
import styles from './styles.module.scss'

import candleImg from '@/assets/images/candle.png'
import { poppins, roboto } from '@/utils/fonts'

function ProductCard() {
  return (
    <div className={styles.card}>
      <Image src={candleImg} alt="candle" priority={false} />

      <div className={styles['product-info']}>
        <h1 className={poppins.className}>Spiced Mint</h1>
        <span className={roboto.className}>9.99$</span>
      </div>
    </div>
  )
}

export { ProductCard }
