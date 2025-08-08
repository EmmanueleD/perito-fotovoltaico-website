'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Car } from 'lucide-react'

export default function DoveSono() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Indirizzo",
      content: "Via Roma 123, 20100 Milano (MI)",
      description: "Studio tecnico nel centro di Milano"
    },
    {
      icon: Phone,
      title: "Telefono",
      content: "+39 333 123 4567",
      description: "Disponibile dal lunedì al venerdì"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@studiofulminis.it",
      description: "Risposta entro 24 ore"
    },
    {
      icon: Clock,
      title: "Orari",
      content: "Lun-Ven: 9:00-18:00",
      description: "Sabato su appuntamento"
    }
  ]

  const serviceAreas = [
    "Milano e provincia",
    "Bergamo e provincia", 
    "Brescia e provincia",
    "Como e provincia",
    "Varese e provincia",
    "Lecco e provincia",
    "Monza e Brianza",
    "Pavia e provincia"
  ]

  return (
    <section id="dove-sono" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16 text-center">
            Dove <span className="text-blue-800">Sono</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Il mio studio si trova nel cuore di Milano, ma opero in tutta la Lombardia 
            per portare l'energia solare direttamente a casa tua.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Contatti
            </h3>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-gray-50 border border-gray-200 shadow-sm"
                >
                  <div className="flex-shrink-0 p-3 bg-blue-100 border border-blue-200">
                    <info.icon className="w-6 h-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      {info.title}
                    </h3>
                    <p className="text-lg font-medium text-gray-800 mb-1">
                      {info.content}
                    </p>
                    <p className="text-sm text-gray-600">
                      {info.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Service Areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 border border-gray-200 p-8 shadow-sm"
            >
              <div className="flex items-center mb-6">
                <Car className="w-8 h-8 text-blue-800 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Zone di Intervento</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Offro i miei servizi in tutta la Lombardia con particolare focus su:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-3">
                {serviceAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <span className="text-gray-700">• {area}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Posizione
            </h3>

            {/* Map placeholder */}
            <div className="bg-gray-50 border border-gray-200 shadow-sm overflow-hidden">
              <section className="py-20 bg-white">
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 text-gray-700 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Studio Fulminis
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Via Roma 123, Milano
                  </p>
                  <p className="text-sm text-gray-500">
                    Mappa interattiva - Coming Soon
                  </p>
                </div>
              </section>
              
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Come raggiungermi
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Metro: Linea M1/M3 - Fermata Duomo (10 min a piedi)</li>
                  <li>• Auto: Parcheggio disponibile nelle vicinanze</li>
                  <li>• Mezzi pubblici: Fermata bus/tram a 2 minuti</li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <div className="bg-white border-t border-gray-200 p-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Prenota una consulenza
                </h3>
                <p className="text-gray-600 mb-6">
                  Contattami per fissare un appuntamento gratuito
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-800 text-white px-6 py-3 font-semibold hover:bg-blue-900 transition-colors shadow-md"
                  >
                    Chiama ora
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-gray-400 text-gray-600 px-6 py-3 font-semibold hover:bg-gray-600 hover:text-white transition-colors"
                  >
                    Invia email
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
