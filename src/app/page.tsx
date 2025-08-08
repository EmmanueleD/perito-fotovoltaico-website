import Hero from '@/components/Hero'
import ChiSono from '@/components/ChiSono'
import Servizi from '@/components/Servizi'
import Gallery from '@/components/Gallery'
import DoveSono from '@/components/DoveSono'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ChiSono />
      <Servizi />
      <Gallery />
      <DoveSono />
      <Footer />
    </main>
  )
}
