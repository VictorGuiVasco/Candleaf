import Image from 'next/image'

import styles from './styles.module.scss'

import logoImg from '@/assets/images/logo-offset.svg'

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles['footer-wrapper']}>
        <div className={styles.separator}>
          <div />
        </div>

        <div className={styles.footer}>
          <div className={styles.logo}>
            <Image src={logoImg} alt="Candleaf" />

            <p>Your natural candle made for your home and for your wellness.</p>
          </div>

          <div className={styles.links}>
            <div className={styles['links-wrapper']}>
              <h1 className={styles.title}>Discovery</h1>
              <p>New season</p>
              <p>Most searched</p>
              <p>Most selled</p>
            </div>

            <div className={styles['links-wrapper']}>
              <h1 className={styles.title}>About</h1>
              <p>Help</p>
              <p>Shipping</p>
              <p>Affiliate</p>
            </div>

            <div className={styles['links-wrapper']}>
              <h1 className={styles.title}>Info</h1>
              <p>Contact us</p>
              <p>Privacy Policies</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.rights}>
        <p>©Candleaf All Rights Reserved.</p>
        <p className={styles.designer}>Designed with ❤️ by uxbly</p>
      </div>
    </footer>
  )
}

export { Footer }
