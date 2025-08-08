'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Sun, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center px-4 overflow-hidden">


      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Icons */}
          <div className="flex justify-center space-x-4 mb-8">
            <div className="p-4 bg-white border-2 border-blue-800 shadow-lg">
              <Sun className="w-10 h-10 text-blue-800" />
            </div>
            <div className="p-4 bg-white border-2 border-green-500 shadow-lg">
              <Zap className="w-10 h-10 text-green-500" />
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-6 text-center uppercase tracking-wider">
            DANILO <span className="text-blue-800">FULMINIS</span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-blue-800 mb-4 text-center font-bold uppercase tracking-wide">
            PERITO INDUSTRIALE
          </p>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 text-center font-semibold uppercase tracking-wide">
            SPECIALISTA IN SISTEMI FOTOVOLTAICI
          </p>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-700 mb-12 text-center font-medium leading-relaxed max-w-4xl mx-auto">
            Progettazione e installazione di 
            <span className="text-green-600 font-bold">soluzioni energetiche innovative</span> per privati e aziende.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-800 hover:bg-blue-900 text-white px-10 py-5 text-xl font-bold transition-all shadow-lg"
            >
              SCOPRI I MIEI SERVIZI
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white px-10 py-5 text-xl font-bold transition-all shadow-lg"
            >
              CONTATTAMI
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-yellow-500">
            <span className="text-lg mb-2 font-bold">SCOPRI DI PIÙ</span>
            <ArrowDown className="w-8 h-8 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
