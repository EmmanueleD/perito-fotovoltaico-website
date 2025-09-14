'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Car } from 'lucide-react'
import { tinaField } from "tinacms/dist/react"

interface ContattiData {
  title: string
  address: string
  phone?: string
  email?: string
  description?: string
  [key: string]: any
}

export default function Contatti({ data }: { data?: ContattiData }) {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Indirizzo",
      content: data?.address || "Via Roma 123, 20100 Milano (MI)",
      field: "address"
    },
    {
      icon: Phone,
      title: "Telefono",
      content: data?.phone || "+39 123 456 7890",
      field: "phone"
    },
    {
      icon: Mail,
      title: "Email",
      content: data?.email || "info@studiofulminis.it",
      field: "email"
    },
    {
      icon: Clock,
      title: "Orari",
      content: data?.workingHours || "Lun-Ven: 9:00 - 18:00",
      field: "workingHours"
    },
  ]

  return (
    <section id="contatti" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-tina-field={tinaField(data, 'title')}>
            {data?.title || 'Contattaci'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" data-tina-field={tinaField(data, 'description')}>
            {data?.description || 'Siamo qui per rispondere alle tue domande e fornirti le soluzioni migliori per le tue esigenze energetiche.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info Contatti */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {contactInfo.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100"
                data-tina-field={item.field ? tinaField(data, item.field) : undefined}
              >
                <div className="p-2.5 bg-blue-50 rounded-lg text-blue-600 flex-shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-medium text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.content}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Mappa */}
          <motion.div
            className="bg-gray-200 rounded-xl overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative w-full h-full" data-tina-field={tinaField(data, 'mapUrl')}>
              <iframe
                src={data?.mapUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22319.06120399748!2d9.1903116!3d45.4654219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6a5221e4e8d%3A0x3bff0b3f5114c8a1!2sDuomo%20di%20Milano!5e0!3m2!1sit!2sit!4v1620000000000!5m2!1sit!2sit"}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="min-h-[300px] w-full"
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* Zone di Intervento */}
        <div className="mt-20">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4" data-tina-field={tinaField(data, 'zonesTitle')}>
              {data?.zonesTitle || 'Zone di Intervento'}
            </h3>
            <div data-tina-field={tinaField(data, 'zonesDescription')}>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                {data?.zonesDescription || 'Offro i miei servizi in tutta la Lombardia con particolare focus su:'}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {(data?.zonesList?.length ? data.zonesList : [
                { name: 'Milano e provincia' },
                { name: 'Bergamo e provincia' },
                { name: 'Brescia e provincia' },
                { name: 'Como e provincia' },
                { name: 'Varese e provincia' },
                { name: 'Lecco e provincia' },
                { name: 'Monza e Brianza' },
                { name: 'Pavia e provincia' }
              ]).map((zone: { name: string }, index: number) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm border border-gray-100"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Car className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{zone.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Prenota una consulenza */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4" data-tina-field={tinaField(data, 'appointmentTitle')}>
            {data?.appointmentTitle || 'Prenota una consulenza'}
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto" data-tina-field={tinaField(data, 'appointmentDescription')}>
            {data?.appointmentDescription || 'Contattami per fissare un appuntamento gratuito e senza impegno per valutare la soluzione migliore per le tue esigenze energetiche.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={`tel:${data?.phone?.replace(/\D/g, '') || '39123456789'}`}
              className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>{data?.callButtonText || 'Chiama ora'}</span>
            </a>
            <a 
              href={`mailto:${data?.email || 'info@studiofulminis.it'}`}
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>{data?.emailButtonText || 'Invia email'}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
