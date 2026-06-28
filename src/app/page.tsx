import TinaProvider from "@/components/TinaProvider";
import Hero from "@/components/Hero";
import MepaBanner from "@/components/MepaBanner";
import ChiSono from "@/components/ChiSono";
import Servizi from "@/components/Servizi";
// import Gallery from '@/components/Gallery' // TEMPORANEAMENTE COMMENTATO - Sezione "I miei progetti"
import Contatti from "@/components/Contatti";
import Footer from "@/components/Footer";
import { getHomepageContent } from "@/lib/content";

export default async function Home() {
  try {
    const homepage = await getHomepageContent();

    return <TinaProvider data={{ homepage }} />;
  } catch (error) {
    // Fallback to static content if TinaCMS is not available
    console.error("TinaCMS error:", error);
    // Fallback data in case TinaCMS is not available
    const fallbackData = {
      contatti: {
        phone: "+39 333 123 4567",
        email: "info@studiofulminis.it",
        address: "Via Roma 123, 20100 Milano (MI)",
        workingHours: "Lun-Ven: 9:00 - 18:00",
      },
    };

    return (
      <main className="min-h-screen">
        <Hero />
        <MepaBanner />
        <ChiSono />
        <Servizi />
        {/* <Gallery /> */}{" "}
        {/* TEMPORANEAMENTE COMMENTATO - Sezione "I miei progetti" */}
        <Contatti />
        <Footer data={fallbackData} />
      </main>
    );
  }
}
