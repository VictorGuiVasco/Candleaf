import { Footer } from '@/presentation/components/Footer'
import { HeaderNavigation } from '@/presentation/components/HeaderNavigation'
import { Panel } from './components/Panel'

function ProductPage() {
  return (
    <main>
      <HeaderNavigation />

      <Panel />

      <Footer />
    </main>
  )
}

export { ProductPage }
