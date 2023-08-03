import {
  TestimonialCard,
  TestimonialCard2,
  TestimonialCard3,
} from '../CardTestimonials'
import styles from './styles.module.scss'

function Testimonials() {
  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <h1 className={styles.title}>Testimonials</h1>
        <h2>Some quotes from our happy customers</h2>

        <div className={styles['cards-list']}>
          <TestimonialCard />
          <TestimonialCard2 />
          <TestimonialCard3 />
        </div>
      </div>
    </div>
  )
}

export { Testimonials }
