'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Cookie, Settings, BarChart, Shield } from 'lucide-react'

export default function CookiePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Link 
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Torna alla home
            </Link>
            
            <div className="flex items-center mb-6">
              <Cookie className="w-12 h-12 text-blue-600 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Cookie Policy
              </h1>
            </div>
            
            <p className="text-xl text-gray-600">
              Informazioni sui cookie utilizzati su questo sito web
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Ultimo aggiornamento: 22 Luglio 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12"
          >
            <div className="prose prose-lg max-w-none">
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Cosa sono i Cookie</h2>
              <p className="text-gray-700 mb-8">
                I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti 
                un sito web. Vengono utilizzati per migliorare la tua esperienza di navigazione, ricordare le 
                tue preferenze e fornire funzionalità personalizzate.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Tipologie di Cookie Utilizzati</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Settings className="w-8 h-8 text-green-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Cookie Tecnici</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    <strong>Necessari:</strong> Questi cookie sono essenziali per il funzionamento del sito.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Gestione della sessione</li>
                    <li>Sicurezza del sito</li>
                    <li>Funzionalità di base</li>
                  </ul>
                  <div className="mt-4 px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full inline-block">
                    Non richiedono consenso
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <BarChart className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Cookie Analitici</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    <strong>Statistiche:</strong> Ci aiutano a capire come i visitatori interagiscono con il sito.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Google Analytics</li>
                    <li>Statistiche di utilizzo</li>
                    <li>Performance del sito</li>
                  </ul>
                  <div className="mt-4 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full inline-block">
                    Richiedono consenso
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Cookie di Terze Parti</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Google Analytics</h3>
                <p className="text-gray-700 mb-4">
                  Utilizziamo Google Analytics per analizzare il traffico del sito web. Questi cookie raccolgono 
                  informazioni anonime su come i visitatori utilizzano il sito.
                </p>
                <p className="text-sm text-gray-600">
                  Per maggiori informazioni: 
                  <a 
                    href="https://policies.google.com/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 ml-1"
                  >
                    Privacy Policy di Google
                  </a>
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Settings className="w-8 h-8 text-blue-600 mr-3" />
                4. Gestione delle Preferenze
              </h2>
              <p className="text-gray-700 mb-6">
                Puoi gestire le tue preferenze sui cookie in diversi modi:
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Banner Cookie</h3>
                  <p className="text-gray-700">
                    Al primo accesso al sito, ti verrà mostrato un banner per gestire le tue preferenze sui cookie.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Impostazioni del Browser</h3>
                  <p className="text-gray-700 mb-3">
                    Puoi configurare il tuo browser per:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Bloccare tutti i cookie</li>
                    <li>Accettare solo cookie di prima parte</li>
                    <li>Ricevere notifiche prima dell'installazione</li>
                    <li>Cancellare i cookie esistenti</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Durata dei Cookie</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">Tipo Cookie</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Durata</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Finalità</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Cookie di Sessione</td>
                      <td className="border border-gray-300 px-4 py-2">Fino alla chiusura del browser</td>
                      <td className="border border-gray-300 px-4 py-2">Funzionalità base del sito</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Google Analytics</td>
                      <td className="border border-gray-300 px-4 py-2">2 anni</td>
                      <td className="border border-gray-300 px-4 py-2">Analisi del traffico</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Cookie Preferenze</td>
                      <td className="border border-gray-300 px-4 py-2">1 anno</td>
                      <td className="border border-gray-300 px-4 py-2">Memorizzazione preferenze utente</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-8 h-8 text-blue-600 mr-3" />
                6. Sicurezza e Privacy
              </h2>
              <p className="text-gray-700 mb-8">
                Tutti i cookie utilizzati rispettano le normative vigenti in materia di privacy e protezione 
                dei dati personali. Non raccogliamo informazioni personali identificabili attraverso i cookie 
                senza il tuo esplicito consenso.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Aggiornamenti</h2>
              <p className="text-gray-700 mb-8">
                Questa Cookie Policy può essere aggiornata periodicamente. Ti consigliamo di consultarla 
                regolarmente per rimanere informato su come utilizziamo i cookie.
              </p>

              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Hai domande sui cookie?</h3>
                <p className="text-gray-700 mb-4">
                  Se hai domande su questa Cookie Policy o sui cookie utilizzati, non esitare a contattarci:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>Email:</strong> 
                    <a href="mailto:info@studiofulminis.it" className="text-blue-600 hover:text-blue-700 ml-2">
                      info@studiofulminis.it
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <strong>Telefono:</strong> +39 333 123 4567
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
