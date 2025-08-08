'use client'

import { useTina } from 'tinacms/dist/react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ChiSono from '@/components/ChiSono'
import Servizi from '@/components/Servizi'
import Gallery from '@/components/Gallery'
import DoveSono from '@/components/DoveSono'
import Footer from '@/components/Footer'

interface TinaProviderProps {
  data: any
  variables: any
  query: string
}

export default function TinaProvider({ data, variables, query }: TinaProviderProps) {
  // Use the useTina hook to enable visual editing
  const { data: tinaData } = useTina({
    query,
    variables,
    data,
  })

  const content = tinaData.homepage

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 md:pt-20">
        <Hero data={content?.hero || undefined} />
        <ChiSono data={content?.chiSono || undefined} />
        <Servizi data={content?.servizi || undefined} />
        <Gallery data={content?.gallery || undefined} />
        <DoveSono data={content?.doveSono || undefined} />
        <Footer />
      </main>
    </>
  )
}
