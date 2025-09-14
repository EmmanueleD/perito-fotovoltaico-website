'use client'

import { motion } from 'framer-motion'
import { Sun, Settings, BarChart3, Shield, Wrench, Calculator, Lightbulb, Check } from 'lucide-react'
import { useRouter } from 'next/router'
import { tinaField } from "tinacms/dist/react"
import { TinaMarkdown } from 'tinacms/dist/rich-text'

interface Service {
  title: string
  description: string
  icon?: string
  features?: string[]
}

interface ServiziData {
  title: string
  subtitle?: string
  description?: any
  services?: Service[]
  [key: string]: any
}

interface ServiziProps {
  data?: ServiziData
}

const iconComponents: { [key: string]: any } = {
  Sun,
  Settings,
  BarChart3,
  Shield,
  Wrench,
  Calculator,
  Lightbulb,
  Check
}

export default function Servizi({ data }: ServiziProps) {
  const services = data?.services || []
  
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    const contactSection = document.getElementById('contatti')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="servizi" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center" data-tina-field={tinaField(data, "title")}>
            {data?.title ? data.title.split(' ').map((word, index) => index <= 1 ? word + ' ' : <span key={index} className="text-blue-800">{word}</span>) : <>I Miei <span className="text-blue-800">Servizi</span></>}
          </h2>
          {data?.subtitle && (
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto" data-tina-field={tinaField(data, "subtitle")}>
              {data.subtitle}
            </p>
          )}
          {data?.description && (
            <div className="prose max-w-3xl mx-auto mt-6" data-tina-field={tinaField(data, "description")}>
              <TinaMarkdown content={data.description} />
            </div>
          )}
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon ? iconComponents[service.icon] : null;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
                data-tina-field={tinaField(data, `services.${index}`)}
              >
                {/* Icon */}
                {IconComponent && (
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-blue-600">
                    <IconComponent className="w-8 h-8" />
                  </div>
                )}

                {/* Title */}
                <h3 
                  className="text-xl font-semibold text-gray-800 mb-4"
                  data-tina-field={tinaField(data, `services.${index}.title`)}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <div 
                  className="text-gray-600 mb-6 flex-grow"
                  data-tina-field={tinaField(data, `services.${index}.description`)}
                >
                  {service.description}
                </div>

                {/* Features */}
                {service.features && service.features.length > 0 && (
                  <ul className="space-y-2 mt-auto">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span 
                          className="text-gray-700"
                          data-tina-field={tinaField(data, `services.${index}.features.${i}`)}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white border border-gray-200 p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">
              Pronto per il tuo progetto fotovoltaico?
            </h3>
            <p className="text-lg mb-8 text-gray-600 text-center">
              Contattami per una consulenza personalizzata e scopri come risparmiare con l'energia solare.
            </p>
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-800 text-white px-8 py-4 text-lg font-semibold hover:bg-blue-900 transition-colors shadow-md cursor-pointer"
            >
              Richiedi preventivo gratuito
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
