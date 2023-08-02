import Image from 'next/image'

import styles from './styles.module.scss'

import mockupImg from '@/assets/images/mockups.png'
import checkCircleIcon from '@/assets/icons/check-circle.svg'

function BenefitsPanel() {
  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <div className={styles.list}>
          <h1>Clean and fragrant soy wax</h1>
          <h2>Made for your home and for your wellness</h2>

          <div className={styles['mockup-mobile']}>
            <Image src={mockupImg} alt="mockups" />
          </div>

          <div className={styles.list}>
            <div className={styles['text-container']}>
              <Image src={checkCircleIcon} alt="" />
              <p>
                <span>Eco-sustainable:</span> All recyclable materials, 0% CO2
                emissions
              </p>
            </div>

            <div className={styles['text-container']}>
              <Image src={checkCircleIcon} alt="" />
              <p>
                <span>Eco-sustainable:</span> All recyclable materials, 0% CO2
                emissions
              </p>
            </div>

            <div className={styles['text-container']}>
              <Image src={checkCircleIcon} alt="" />
              <p>
                <span>Handmade:</span> All candles are craftly made with love.
              </p>
            </div>

            <div className={styles['text-container']}>
              <Image src={checkCircleIcon} alt="" />
              <p>
                <span>Long burning:</span> No more waste. Created for last long.
              </p>
            </div>

            <button>Learn more</button>
          </div>
        </div>

        <div className={styles.mockup}>
          <Image src={mockupImg} alt="mockups" />
        </div>
      </div>
    </div>
  )
}

export { BenefitsPanel }
