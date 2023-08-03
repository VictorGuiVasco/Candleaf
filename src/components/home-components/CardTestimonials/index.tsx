'use client'

import { useState } from 'react'
import Image from 'next/image'

// @ts-ignore
import { Rating, ThinStar } from '@smastrom/react-rating'

import avatarImg from '@/assets/images/avatar.png'
import avatar2Img from '@/assets/images/avatar2.png'
import avatar3Img from '@/assets/images/avatar3.png'

import styles from './styles.module.scss'

const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: '#56B280',
  inactiveFillColor: '#c3ffde',
}

function TestimonialCard() {
  const [rating] = useState(4)

  return (
    <div className={styles.card}>
      <Image src={avatarImg} alt="avatar" priority={false} />

      <Rating
        style={{ maxWidth: 140, marginTop: 14 }}
        value={rating}
        itemStyles={myStyles}
      />

      <h1 className={styles.name}>“I love it! No more air fresheners”</h1>
      <p>Luisa</p>
    </div>
  )
}

function TestimonialCard2() {
  const [rating] = useState(5)

  return (
    <div className={styles.card}>
      <Image src={avatar2Img} alt="avatar" priority={false} />

      <Rating
        style={{ maxWidth: 140, marginTop: 14 }}
        value={rating}
        itemStyles={myStyles}
      />

      <h1 className={styles.name}>“Raccomended for everyone”</h1>
      <p>Edoardo</p>
    </div>
  )
}

function TestimonialCard3() {
  const [rating] = useState(5)

  return (
    <div className={styles.card}>
      <Image src={avatar3Img} alt="avatar" priority={false} />

      <Rating
        style={{ maxWidth: 140, marginTop: 14 }}
        value={rating}
        itemStyles={myStyles}
      />

      <h1 className={styles.name}>
        “Looks very natural, the smell is awesome”
      </h1>
      <p>Mart</p>
    </div>
  )
}

export { TestimonialCard, TestimonialCard2, TestimonialCard3 }
