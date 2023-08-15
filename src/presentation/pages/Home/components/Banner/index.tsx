import styles from './styles.module.scss'

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles['card-banner']}>
        <h1>🌱</h1>
        <h1> The nature candle</h1>

        <p>
          All handmade with natural soy wax, Candleaf is a companion for all
          your pleasure moments
        </p>

        <button>Discovery our collection</button>
      </div>
    </div>
  )
}

export { Banner }
