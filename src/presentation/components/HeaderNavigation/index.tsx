import Link from 'next/link'
import Image from 'next/image'

import logoImg from '@/presentation/assets/images/logo.svg'
import userIcon from '@/presentation/assets/icons/user.svg'
import cartIcon from '@/presentation/assets/icons/cart.svg'
import menuIcon from '@/presentation/assets/icons/hamburger-menu.svg'
import chevronDownIcon from '@/presentation/assets/icons/chevron-down.svg'

import styles from './styles.module.scss'

function HeaderNavigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        <button className={styles.menu}>
          <Image src={menuIcon} alt={'menu'} priority />
        </button>

        <Link href={''} className={styles.logo}>
          <Image src={logoImg} alt={'Candleleaf'} priority />
        </Link>

        <div className={styles['middle-buttons']}>
          <Link href={''}>
            Discovery <Image src={chevronDownIcon} alt={''} />
          </Link>
          <Link href={'about'}>About</Link>
          <Link href={'contact'}>Contact Us</Link>
        </div>

        <div className={styles['icons-buttons']}>
          <Link href={'profile'}>
            <Image src={userIcon} alt={'Perfil'} />
          </Link>

          <Link href={'cart'}>
            <Image src={cartIcon} alt={'Carrinho'} />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export { HeaderNavigation }
