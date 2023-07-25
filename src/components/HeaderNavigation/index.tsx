import Image from 'next/image'

import styles from './styles.module.scss'

import logoImg from '../../../public/assets/images/logo.svg'
import userIcon from '../../../public/assets/icons/user.svg'
import cartIcon from '../../../public/assets/icons/cart.svg'

function HeaderNavigation() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Image src={logoImg} alt={'Candleleaf'} />

        <div className={styles['middle-buttons']}>
          <p>Discovery</p>
          <p>About</p>
          <p>Contact Us</p>
        </div>

        <div className={styles['icons-buttons']}>
          <Image src={userIcon} alt={'Perfil'} />
          <Image src={cartIcon} alt={'Carrinho'} />
        </div>
      </div>
    </div>
  )
}

export { HeaderNavigation }
