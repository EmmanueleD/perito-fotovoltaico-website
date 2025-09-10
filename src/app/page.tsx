import TinaProvider from '@/components/TinaProvider'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ChiSono from '@/components/ChiSono'
import Servizi from '@/components/Servizi'
// import Gallery from '@/components/Gallery' // TEMPORANEAMENTE COMMENTATO - Sezione "I miei progetti"
import DoveSono from '@/components/DoveSono'
import Footer from '@/components/Footer'
import { client } from '../../tina/__generated__/client'

export default async function Home() {
  // Always use fallback during build - TinaCMS only works at runtime
  const isBuildTime = typeof window === 'undefined' && process.env.NODE_ENV === 'production';
  
  if (isBuildTime) {
    console.log('Build time detected - using static fallback');
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

  // Fetch data from TinaCMS only at runtime
  try {
    const { data, variables, query } = await client.queries.homepage({ relativePath: 'home.json' })

    return (
      <TinaProvider 
        data={data} 
        variables={variables} 
        query={query}
      />
    )
  } catch (error) {
    // Fallback to static content if TinaCMS is not available
    console.error('TinaCMS error:', error)
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
}
