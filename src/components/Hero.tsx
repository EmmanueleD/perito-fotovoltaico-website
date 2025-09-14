"use client";

import { motion } from "framer-motion";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import { Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface HeroData {
  name: string;
  surname: string;
  title: string;
  subtitle: string;
  description: any;
  ctaPrimary: string;
  ctaSecondary: string;
  scrollText: string;
  heroIcon: string;
  [key: string]: any;
}

interface HeroProps {
  data?: HeroData;
}

export default function Hero({ data }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center px-4 overflow-hidden"
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Icons */}
          <div className="flex justify-center gap-4 mb-12">
            <div className="p-6 bg-white border-2 border-blue-800 shadow-lg">
              {data?.heroIcon ? (
                <div data-tina-field={tinaField(data, 'heroIcon')} className="w-20 h-20 flex items-center justify-center">
                  <Image 
                    src={data.heroIcon} 
                    alt="" 
                    width={80} 
                    height={80} 
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <Sun className="w-20 h-20 text-blue-800" />
              )}
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-6 text-center uppercase tracking-wider">
            <span data-tina-field={tinaField(data, "name")}>
              {data?.name || "DANILO"}
            </span>
            <br />
            <span data-tina-field={tinaField(data, "surname")}>
              {data?.surname || "FULMINIS"}
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-2xl md:text-3xl text-blue-800 mb-4 text-center font-bold uppercase tracking-wide"
            data-tina-field={tinaField(data, "title")}
          >
            {data?.title || "PERITO INDUSTRIALE"}
          </p>
          <p
            className="text-xl md:text-2xl text-gray-600 mb-12 text-center font-semibold uppercase tracking-wide"
            data-tina-field={tinaField(data, "subtitle")}
          >
            {data?.subtitle || "SPECIALISTA IN SISTEMI FOTOVOLTAICI"}
          </p>

          {/* Description */}
          <div
            className="text-lg md:text-xl text-gray-700 mb-12 text-center max-w-4xl mx-auto leading-relaxed"
            data-tina-field={tinaField(data, "description")}
          >
            {data?.description ? (
              <TinaMarkdown
                content={data.description}
                components={{
                  p: (props: any) => (
                    <p className="text-lg md:text-xl text-gray-700 mb-4">
                      {props.children}
                    </p>
                  ),
                }}
              />
            ) : (
              <p>
                Con oltre{" "}
                <span className="font-semibold text-blue-800">
                  15 anni di esperienza
                </span>{" "}
                nel settore energetico, mi dedico alla{" "}
                <span className="font-semibold text-blue-800">
                  progettazione e installazione
                </span>{" "}
                di sistemi fotovoltaici all&apos;avanguardia. La mia missione è
                rendere l&apos;
                <span className="font-semibold text-green-600">
                  energia sostenibile
                </span>
                accessibile a tutti.
              </p>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#servizi" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-800 hover:bg-blue-900 text-white px-10 py-5 text-xl font-bold transition-all shadow-lg"
                data-tina-field={tinaField(data, "ctaPrimary")}
              >
                {data?.ctaPrimary || "SCOPRI I MIEI SERVIZI"}
              </motion.button>
            </Link>
            <Link href="#contatti" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white px-10 py-5 text-xl font-bold transition-all shadow-lg"
                data-tina-field={tinaField(data, "ctaSecondary")}
              >
                {data?.ctaSecondary || "CONTATTAMI"}
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
