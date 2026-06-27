import Image from "next/image";
import Link from "next/link";

export default function MepaBanner() {
  return (
    <section
      id="mepa"
      aria-labelledby="mepa-title"
      className="bg-white py-16 md:py-20"
    >
      <div className="container mx-auto px-6">
        <div className="overflow-hidden rounded-2xl border border-amber-200 bg-gradient-to-br from-white via-amber-50 to-white shadow-xl">
          <div className="grid items-center gap-8 p-5 md:grid-cols-[1.1fr_0.9fr] md:p-10 lg:p-12">
            <div className="md:col-start-1">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-amber-600 md:text-sm md:tracking-[0.3em]">
                Nuovo traguardo
              </p>
              <h2
                id="mepa-title"
                className="mb-5 text-3xl font-bold text-gray-900 md:text-5xl"
              >
                Studio Fulminis è abilitato al MePA
              </h2>
              <p className="mb-6 max-w-2xl text-lg leading-relaxed text-gray-700">
                Da oggi Danilo Fulminis può operare direttamente con Enti
                Pubblici e Pubbliche Amministrazioni tramite il Mercato
                Elettronico della Pubblica Amministrazione.
              </p>
            </div>

            <div className="relative md:col-start-2 md:row-span-2 md:row-start-1">
              <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-lg">
                <Image
                  src="/images/mepa-banner.jpeg"
                  alt="Studio Fulminis abilitato al Mercato Elettronico della Pubblica Amministrazione"
                  width={1280}
                  height={682}
                  className="h-auto w-full rounded-lg object-contain"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
            </div>

            <div className="md:col-start-1">
              <div className="mb-6 flex flex-wrap gap-3 text-sm font-semibold uppercase tracking-wide text-gray-700 md:mb-8">
                <span className="border border-amber-200 bg-white px-4 py-2">
                  Impianti elettrici
                </span>
                <span className="border border-amber-200 bg-white px-4 py-2">
                  Energie rinnovabili
                </span>
                <span className="border border-amber-200 bg-white px-4 py-2">
                  Consulenza tecnica
                </span>
                <span className="border border-amber-200 bg-white px-4 py-2">
                  Verifiche industriali
                </span>
              </div>
              <Link
                href="#contatti"
                className="inline-flex bg-blue-800 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-blue-900 md:px-8 md:py-4 md:text-base"
              >
                Richiedi una consulenza
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
