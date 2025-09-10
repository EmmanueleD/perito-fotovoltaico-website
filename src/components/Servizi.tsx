'use client'

import { motion } from 'framer-motion'
import { Sun, Settings, BarChart3, Shield, Wrench, Calculator } from 'lucide-react'
import { tinaField } from "tinacms/dist/react"

interface Service {
  title: string
  description: string
  icon?: string | null
}

interface ServiziData {
  title: string
  subtitle?: string | null
  services?: Service[] | null
  [key: string]: any
}

interface ServiziProps {
  data?: ServiziData
}

export default function Servizi({ data }: ServiziProps) {
  const services = [
    {
      icon: Calculator,
      title: "Progettazione",
      description: "Analisi energetica completa e progettazione personalizzata del sistema fotovoltaico più adatto alle tue esigenze.",
      features: ["Sopralluogo gratuito", "Calcolo del fabbisogno energetico", "Dimensionamento ottimale"]
    },
    {
      icon: Settings,
      title: "Installazione",
      description: "Installazione professionale con materiali di alta qualità e nel rispetto di tutte le normative vigenti.",
      features: ["Installazione certificata", "Materiali premium", "Garanzia sui lavori"]
    },
    {
      icon: BarChart3,
      title: "Monitoraggio",
      description: "Sistemi di monitoraggio avanzati per tenere sotto controllo le performance del tuo impianto.",
      features: ["App di controllo", "Report periodici", "Ottimizzazione continua"]
    },
    {
      icon: Wrench,
      title: "Manutenzione",
      description: "Servizi di manutenzione preventiva e correttiva per garantire sempre la massima efficienza.",
      features: ["Controlli periodici", "Pulizia pannelli", "Assistenza tecnica"]
    },
    {
      icon: Shield,
      title: "Pratiche Burocratiche",
      description: "Gestione completa di tutte le pratiche amministrative e burocratiche necessarie.",
      features: ["GSE e Enel", "Permessi comunali", "Incentivi fiscali"]
    },
    {
      icon: Sun,
      title: "Consulenza Energetica",
      description: "Consulenza specializzata per ottimizzare i consumi e massimizzare il risparmio energetico.",
      features: ["Audit energetico", "Strategie di risparmio", "Efficientamento"]
    }
  ]

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
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto" data-tina-field={tinaField(data, "subtitle")}>
{data?.subtitle || "Soluzioni complete per l'energia sostenibile"}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gray-100 border border-gray-200 flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-gray-700" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-700">
                    • {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-800 text-white px-8 py-4 text-lg font-semibold hover:bg-blue-900 transition-colors shadow-md"
            >
              Richiedi preventivo gratuito
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
