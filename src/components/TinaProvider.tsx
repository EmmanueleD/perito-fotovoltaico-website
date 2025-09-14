"use client";

import { useTina } from "tinacms/dist/react";
import Hero from "@/components/Hero";
import ChiSono from "@/components/ChiSono";
import Servizi from "@/components/Servizi";
// import Gallery from '@/components/Gallery' // TEMPORANEAMENTE COMMENTATO - Sezione "I miei progetti"
import Contatti from "@/components/Contatti";
import Footer from "@/components/Footer";

interface TinaProviderProps {
  data: any;
  variables: any;
  query: string;
}

export default function TinaProvider({
  data,
  variables,
  query
}: TinaProviderProps) {
  // Use the useTina hook to enable visual editing
  const { data: tinaData } = useTina({
    query,
    variables,
    data
  });

  const content = tinaData.homepage;

  return (
    <main className="min-h-screen">
      <Hero data={content?.hero || undefined} />
      <ChiSono data={content?.chiSono || undefined} />
      <Servizi data={content?.servizi || undefined} />
      {/* <Gallery data={content?.gallery || undefined} /> */}{" "}
      {/* TEMPORANEAMENTE COMMENTATO - Sezione "I miei progetti" */}
      <Contatti data={content?.contatti || undefined} />
      <Footer data={content} />
    </main>
  );
}
