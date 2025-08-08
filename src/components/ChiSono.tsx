'use client'

import { motion } from 'framer-motion'
import { Award, Users, Lightbulb, Shield } from 'lucide-react'
import TinaRichText from './TinaRichText'

interface ChiSonoData {
  title: string
  description: any
  image?: string | null
}

interface ChiSonoProps {
  data?: ChiSonoData
}

export default function ChiSono({ data }: ChiSonoProps) {
  const features = [
    {
      icon: Award,
      title: "ESPERIENZA CERTIFICATA",
      description: "Oltre 15 anni nel settore dell'energia rinnovabile con certificazioni professionali riconosciute."
    },
    {
      icon: Users,
      title: "APPROCCIO PERSONALIZZATO",
      description: "Specializzato nell'installazione e manutenzione di impianti fotovoltaici, con particolare attenzione all'efficienza energetica e alla sostenibilità ambientale."
    },
    {
      icon: Lightbulb,
      title: "SOLUZIONI INNOVATIVE",
      description: "Utilizzo delle tecnologie più avanzate per garantire prestazioni ottimali e durature."
    },
    {
      icon: Shield,
      title: "GARANZIA TOTALE",
      description: "Assistenza completa dalla progettazione alla manutenzione con garanzie estese."
    }
  ]

  return (
    <section id="chi-sono" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-96 overflow-hidden shadow-lg border border-gray-300">
              {data?.image ? (
                <img 
                  src={data.image} 
                  alt="Danilo Fulminis" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-100/90 to-blue-100/90"></div>
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-600 text-2xl font-bold">FOTO DI DANILO FULMINIS</span>
                  </div>
                </>
              )}
            </div>
          </motion.div>

          {/* Right column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
  {data?.title ? data.title.split(' ').map((word, index) => index === 0 ? word : <span key={index} className="text-blue-800">{word}</span>) : <>Chi <span className="text-blue-800">Sono</span></>}
            </h2>
            
            <div className="text-lg text-gray-700 mb-8 leading-relaxed text-center max-w-3xl mx-auto">
              {data?.description ? (
                <TinaRichText content={data.description} className="text-center" />
              ) : (
                <p>
                  Con oltre <span className="font-semibold text-blue-800">15 anni di esperienza</span> nel settore energetico,
                  mi dedico alla <span className="font-semibold text-blue-800">progettazione e installazione</span> di sistemi
                  fotovoltaici all&apos;avanguardia. La mia missione è rendere l&apos;<span className="font-semibold text-green-600">energia sostenibile</span>
                  accessibile a tutti.
                </p>
              )}
            </div>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 p-3 bg-gray-100 border border-gray-300 shadow-sm">
                    <feature.icon className="w-8 h-8 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
