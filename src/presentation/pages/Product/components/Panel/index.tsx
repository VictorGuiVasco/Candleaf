import Image from 'next/image'

import styles from './styles.module.scss'

import candleImg from '../../../../../../public/assets/candles/clean_lavender.png'

function Panel() {
  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <div className={styles['img-container']}>
          <div className={styles['img-wrapper']}>
            <Image src={candleImg} alt="candle" />
          </div>

          <h2>
            All hand-made with natural soy wax, Candleaf is made for your
            pleasure moments.
          </h2>
          <h2>🚚 FREE SHIPPING</h2>
        </div>

        <div className={styles.details}>
          <h1>Spiced Mint</h1>
          <p className={styles.price}>R$ 9.99</p>

          <div>
            <div>
              <p>Quantity</p>
              <p>+ 1 -</p>
            </div>

            <button>+ Add to cart</button>
          </div>

          <div>
            <div>
              <span>Wax: </span>
              <p>
                Top grade Soy wax that delivers a smoke less, consistent burn
              </p>
            </div>

            <div>
              <span>Fragrance: </span>
              <p>Premium quality ingredients with natural essential oils</p>
            </div>

            <div>
              <div>
                <span>Burning Time: </span>
                <p>70-75 hours</p>
              </div>

              <div>
                <span>Dimension: </span>
                <p>10cm x 5cm</p>
              </div>

              <div>
                <span>Weight: </span>
                <p>400g</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Panel }
