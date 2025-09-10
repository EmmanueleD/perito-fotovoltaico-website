import TinaProvider from '@/components/TinaProvider'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ChiSono from '@/components/ChiSono'
import Servizi from '@/components/Servizi'
// import Gallery from '@/components/Gallery' // TEMPORANEAMENTE COMMENTATO - Sezione "I miei progetti"
import DoveSono from '@/components/DoveSono'
import Footer from '@/components/Footer'
import DebugTina from '@/components/DebugTina'
import { client } from '../../tina/__generated__/client'

export default async function Home() {
  // Fetch data from TinaCMS
  try {
    // Debug server-side environment variables
    console.log('=== SERVER-SIDE DEBUG ===')
    console.log('NEXT_PUBLIC_TINA_CLIENT_ID:', process.env.NEXT_PUBLIC_TINA_CLIENT_ID)
    console.log('TINA_TOKEN:', process.env.TINA_TOKEN ? 'SET (hidden)' : 'MISSING')
    console.log('NODE_ENV:', process.env.NODE_ENV)
    console.log('========================')

    const { data, variables, query } = await client.queries.homepage({ relativePath: 'home.json' })

    return (
      <>
        <DebugTina />
        <TinaProvider 
          data={data} 
          variables={variables} 
          query={query}
        />
      </>
    )
  } catch (error) {
    // Fallback to static content if TinaCMS is not available
    console.error('TinaCMS error:', error)
    return (
      <>
        <DebugTina />
        <main className="min-h-screen">
          <Hero />
          <ChiSono />
          <Servizi />
          {/* <Gallery /> */} {/* TEMPORANEAMENTE COMMENTATO - Sezione "I miei progetti" */}
          <DoveSono />
          <Footer />
        </main>
      </>
    )
  }
}
