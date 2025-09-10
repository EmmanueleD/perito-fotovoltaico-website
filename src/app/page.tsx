import TinaProvider from '@/components/TinaProvider'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ChiSono from '@/components/ChiSono'
import Servizi from '@/components/Servizi'
// import Gallery from '@/components/Gallery' // TEMPORANEAMENTE COMMENTATO - Sezione "I miei progetti"
import DoveSono from '@/components/DoveSono'
import Footer from '@/components/Footer'
import { client } from '../../tina/__generated__/client'

// Debug environment variables in production
if (typeof window !== 'undefined') {
  console.log('=== TinaCMS Environment Variables Debug ===');
  console.log('NEXT_PUBLIC_TINA_CLIENT_ID:', process.env.NEXT_PUBLIC_TINA_CLIENT_ID);
  console.log('TINA_TOKEN:', process.env.TINA_TOKEN ? 'SET (hidden)' : 'MISSING');
  console.log('GITHUB_BRANCH:', process.env.GITHUB_BRANCH);
  console.log('VERCEL_GIT_COMMIT_REF:', process.env.VERCEL_GIT_COMMIT_REF);
  console.log('NODE_ENV:', process.env.NODE_ENV);
  console.log('=======================================');
}

export default async function Home() {
  // Fetch data from TinaCMS
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
