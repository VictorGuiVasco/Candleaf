import { poppins, roboto } from '@/utils/fonts'

import styles from './styles.module.scss'

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles['card-banner']}>
        <h1>🌱</h1>
        <h1 className={poppins.className}> The nature candle</h1>

        <p className={poppins.className}>
          All handmade with natural soy wax, Candleaf is a companion for all
          your pleasure moments
        </p>

        <button className={roboto.className}>Discovery our collection</button>
      </div>
    </div>
  )
}

export { Banner }
