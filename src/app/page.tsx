import TinaProvider from '@/components/TinaProvider'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ChiSono from '@/components/ChiSono'
import Servizi from '@/components/Servizi'
// import Gallery from '@/components/Gallery' // TEMPORANEAMENTE COMMENTATO - Sezione "I miei progetti"
import DoveSono from '@/components/DoveSono'
import Footer from '@/components/Footer'
import { client } from '../../tina/__generated__/client'

export default function Home() {
  // Always use static content to avoid TinaCMS build issues
  return (
    <main className="min-h-screen">
      <Hero />
      <ChiSono />
      <Servizi />
      {/* <Gallery /> */} {/* TEMPORANEAMENTE COMMENTATO - Sezione "I miei progetti" */}
      <DoveSono />
      <Footer />
    </main>
  )
}
