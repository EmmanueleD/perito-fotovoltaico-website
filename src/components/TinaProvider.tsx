"use client";

import { useTina } from "tinacms/dist/react";
import Hero from "@/components/Hero";
import MepaBanner from "@/components/MepaBanner";
import ChiSono from "@/components/ChiSono";
import Servizi from "@/components/Servizi";
// import Gallery from '@/components/Gallery' // TEMPORANEAMENTE COMMENTATO - Sezione "I miei progetti"
import Contatti from "@/components/Contatti";
import Footer from "@/components/Footer";
import type { HomepageContent } from "@/lib/content-types";

interface TinaProviderProps {
  data: {
    homepage?: HomepageContent;
  };
  variables?: Record<string, unknown>;
  query?: string;
}

export default function TinaProvider({
  data,
  variables,
  query,
}: TinaProviderProps) {
  const shouldUseTina = Boolean(query && variables);
  if (!shouldUseTina) {
    return <HomeSections content={data.homepage} />;
  }

  return (
    <TinaEditableHome
      data={data}
      variables={variables ?? {}}
      query={query ?? ""}
    />
  );
}

function TinaEditableHome({
  data,
  variables,
  query
}: Required<TinaProviderProps>) {
  const { data: tinaData } = useTina(
    {
      query,
      variables,
      data
    }
  );

  return <HomeSections content={tinaData.homepage} />;
}

function HomeSections({ content }: { content?: HomepageContent }) {
  return (
    <main className="min-h-screen">
      <Hero data={content?.hero || undefined} />
      <MepaBanner />
      <ChiSono data={content?.chiSono || undefined} />
      <Servizi data={content?.servizi || undefined} />
      {/* <Gallery data={content?.gallery || undefined} /> */}{" "}
      {/* TEMPORANEAMENTE COMMENTATO - Sezione "I miei progetti" */}
      <Contatti data={content?.contatti || undefined} />
      <Footer data={content} />
    </main>
  );
}
