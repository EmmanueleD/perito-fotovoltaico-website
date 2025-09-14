'use client'

import { motion } from 'framer-motion'
import { Award, Users, Lightbulb, Shield, Star, Check, BarChart } from 'lucide-react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { tinaField } from "tinacms/dist/react"
import Image from 'next/image'

interface Feature {
  title: string
  description: string
  icon?: any // Make icon optional since it's only used in default features
}

interface ChiSonoData {
  title: string
  description: any
  image?: string | null
  features?: Feature[]
  [key: string]: any
}

interface ChiSonoProps {
  data?: ChiSonoData
}

export default function ChiSono({ data }: ChiSonoProps) {
  // Use provided features or fallback to defaults
  const features = data?.features || [];

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
            <div className="relative w-full h-96 overflow-hidden shadow-lg border border-gray-300" data-tina-field={tinaField(data, "image")}>
              {data?.image || "/IMG_9618.jpeg" ? (
                <img 
                  src={data?.image || "/IMG_9618.jpeg"} 
                  alt="Danilo Fulminis - Perito Industriale specializzato in sistemi fotovoltaici e energie rinnovabili" 
                  data-tina-field={tinaField(data, "image")}
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center" data-tina-field={tinaField(data, "title")}>
  {data?.title ? data.title.split(' ').map((word, index) => index === 0 ? word : <span key={index} className="text-blue-800">{word}</span>) : <>Chi <span className="text-blue-800">Sono</span></>}
            </h2>
            
            <div className="text-lg text-gray-700 mb-8 leading-relaxed text-center max-w-3xl mx-auto" data-tina-field={tinaField(data, "description")}>
              <div className="prose max-w-none">
                {data?.description ? (
                  <TinaMarkdown content={data.description} />
                ) : (
                  <p>
                    Con oltre <span className="font-semibold text-blue-800">15 anni di esperienza</span> nel settore energetico,
                    mi dedico alla <span className="font-semibold text-blue-800">progettazione e installazione</span> di sistemi
                    fotovoltaici all&apos;avanguardia. La mia missione è rendere l&apos;<span className="font-semibold text-green-600">energia sostenibile</span>
                    accessibile a tutti.
                  </p>
                )}
              </div>
            </div>

            {/* Features */}
            <div className="space-y-6 mt-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start"
                  data-tina-field={tinaField(data, `features.${index}`)}
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex-shrink-0 flex items-center justify-center text-blue-600 mr-4 self-center">
                    {feature.icon === 'Award' && <Award className="w-6 h-6" />}
                    {feature.icon === 'Users' && <Users className="w-6 h-6" />}
                    {feature.icon === 'Lightbulb' && <Lightbulb className="w-6 h-6" />}
                    {feature.icon === 'Shield' && <Shield className="w-6 h-6" />}
                    {feature.icon === 'Star' && <Star className="w-6 h-6" />}
                    {feature.icon === 'Check' && <Check className="w-6 h-6" />}
                    {feature.icon === 'BarChart' && <BarChart className="w-6 h-6" />}
                    {!feature.icon && <Lightbulb className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 
                      className="text-lg font-bold text-gray-800 mb-2"
                      data-tina-field={tinaField(data, `features.${index}.title`)}
                    >
                      {feature.title}
                    </h3>
                    <p 
                      className="text-gray-600"
                      data-tina-field={tinaField(data, `features.${index}.description`)}
                    >
                      {feature.description}
                    </p>
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
