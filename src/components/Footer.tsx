'use client'

import { motion } from 'framer-motion'
import { Sun, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { tinaField } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

interface FooterData {
  name: string
  title: string
  description: any
  copyright: string
  [key: string]: any
}

interface FooterProps {
  data?: {
    footer: FooterData
    contatti?: {
      phone?: string
      email?: string
      address?: string
    }
  }
}

const quickLinks = [
  { name: 'Chi Sono', href: '#chi-sono' },
  { name: 'Servizi', href: '#servizi' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contatti', href: '#contatti' },
  { name: 'Blog', href: '/blog' }
]

export default function Footer({ data }: FooterProps) {
  const currentYear = new Date().getFullYear()
  
  // Default values in case data is not available
  const footerData = data?.footer || {
    name: 'Danilo Fulminis',
    title: 'Perito Industriale',
    description: 'Specializzato nella progettazione e installazione di sistemi fotovoltaici. Il tuo partner per l\'indipendenza energetica e un futuro sostenibile.',
    copyright: `© ${currentYear} Danilo Fulminis. Tutti i diritti riservati.`
  }
  
  const contactData = data?.contatti || {
    phone: '+39 333 123 4567',
    email: 'info@studiofulminis.it',
    address: 'Via Roma 123, 20100 Milano (MI)'
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-yellow-500 mr-4">
                <Sun className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 
                  className="text-2xl font-bold"
                  data-tina-field={tinaField(footerData, 'name')}
                >
                  {footerData.name}
                </h3>
                <p 
                  className="text-gray-400"
                  data-tina-field={tinaField(footerData, 'title')}
                >
                  {footerData.title}
                </p>
              </div>
            </div>
            
            <div 
              className="text-gray-300 mb-6 leading-relaxed max-w-md"
              data-tina-field={tinaField(footerData, 'description')}
            >
              <TinaMarkdown content={footerData.description} />
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-yellow-400 flex-shrink-0" />
                <span data-tina-field={tinaField(contactData, 'phone')}>
                  {contactData.phone}
                </span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-yellow-400 flex-shrink-0" />
                <a 
                  href={`mailto:${contactData.email}`}
                  className="hover:text-yellow-400 transition-colors"
                  data-tina-field={tinaField(contactData, 'email')}
                >
                  {contactData.email}
                </a>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span data-tina-field={tinaField(contactData, 'address')}>
                  {contactData.address}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6">Menu</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6">Servizi</h4>
            <ul className="space-y-3">
              {[
                'Progettazione Fotovoltaico',
                'Installazione Pannelli',
                'Manutenzione Impianti',
                'Pratiche Burocratiche',
                'Consulenza Energetica'
              ].map((service: string, index: number) => (
                <li key={index} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p 
              className="text-center text-gray-400 text-sm"
              data-tina-field={tinaField(footerData, 'copyright')}
            >
              {footerData.copyright || `© ${currentYear} Danilo Fulminis. Tutti i diritti riservati.`}
            </p>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookie" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Cookie Policy
              </Link>
              <Link href="/termini" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Termini di Servizio
              </Link>
            </div>

            {/* Developer Credit */}
            <div className="text-gray-500 text-sm flex items-center">
              <span className="mr-2">Sviluppato da</span>
              <Link 
                href="https://emmanueledurante.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center"
              >
                Emmanuel Durante
                <ExternalLink className="w-3 h-3 ml-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
