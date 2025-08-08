'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Shield, Eye, Lock, Mail } from 'lucide-react'

export default function PrivacyPage() {
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
              <Shield className="w-12 h-12 text-blue-600 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Privacy Policy
              </h1>
            </div>
            
            <p className="text-xl text-gray-600">
              Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR)
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
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Eye className="w-8 h-8 text-blue-600 mr-3" />
                1. Titolare del Trattamento
              </h2>
              <p className="text-gray-700 mb-8">
                Il Titolare del trattamento dei dati è <strong>Danilo Fulminis</strong>, Perito Industriale, 
                con sede in Via Roma 123, 20100 Milano (MI), contattabile all'indirizzo email 
                <a href="mailto:info@studiofulminis.it" className="text-blue-600 hover:text-blue-700">
                  info@studiofulminis.it
                </a> e al numero di telefono +39 333 123 4567.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Lock className="w-8 h-8 text-blue-600 mr-3" />
                2. Dati Raccolti e Finalità
              </h2>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">2.1 Dati di Navigazione</h3>
                <p className="text-gray-700 mb-4">
                  Durante la navigazione del sito vengono raccolti automaticamente alcuni dati tecnici necessari 
                  per il funzionamento del sito stesso, tra cui:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Indirizzo IP</li>
                  <li>Tipo di browser e versione</li>
                  <li>Sistema operativo</li>
                  <li>Pagine visitate e tempo di permanenza</li>
                  <li>Data e ora di accesso</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">2.2 Dati di Contatto</h3>
                <p className="text-gray-700 mb-4">
                  Quando ci contatti attraverso i moduli del sito o via email, raccogliamo:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Nome e cognome</li>
                  <li>Indirizzo email</li>
                  <li>Numero di telefono (se fornito)</li>
                  <li>Messaggio e contenuto della comunicazione</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Base Giuridica del Trattamento</h2>
              <p className="text-gray-700 mb-8">
                Il trattamento dei tuoi dati personali si basa su:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                <li><strong>Consenso:</strong> per l'invio di comunicazioni commerciali e newsletter</li>
                <li><strong>Interesse legittimo:</strong> per rispondere alle tue richieste di informazioni</li>
                <li><strong>Adempimento contrattuale:</strong> per la fornitura dei servizi richiesti</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Conservazione dei Dati</h2>
              <p className="text-gray-700 mb-8">
                I tuoi dati personali saranno conservati per il tempo strettamente necessario alle finalità 
                per cui sono stati raccolti e comunque non oltre 2 anni dalla cessazione del rapporto, 
                salvo diversi obblighi di legge.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Comunicazione e Diffusione</h2>
              <p className="text-gray-700 mb-8">
                I tuoi dati personali non saranno mai comunicati a terzi senza il tuo esplicito consenso, 
                ad eccezione dei casi previsti dalla legge. Non effettuiamo alcuna forma di diffusione 
                dei dati personali.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">6. I Tuoi Diritti</h2>
              <p className="text-gray-700 mb-4">
                Ai sensi del GDPR, hai il diritto di:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                <li>Accedere ai tuoi dati personali</li>
                <li>Rettificare dati inesatti o incompleti</li>
                <li>Cancellare i tuoi dati (diritto all'oblio)</li>
                <li>Limitare il trattamento</li>
                <li>Portabilità dei dati</li>
                <li>Opporti al trattamento</li>
                <li>Revocare il consenso in qualsiasi momento</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Cookie</h2>
              <p className="text-gray-700 mb-8">
                Il sito utilizza cookie tecnici necessari per il funzionamento e cookie di analytics 
                per migliorare l'esperienza utente. Per maggiori informazioni consulta la nostra 
                <Link href="/cookie" className="text-blue-600 hover:text-blue-700">
                  Cookie Policy
                </Link>.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Mail className="w-8 h-8 text-blue-600 mr-3" />
                8. Contatti
              </h2>
              <p className="text-gray-700 mb-4">
                Per esercitare i tuoi diritti o per qualsiasi domanda relativa al trattamento dei dati, 
                puoi contattarci:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> 
                  <a href="mailto:info@studiofulminis.it" className="text-blue-600 hover:text-blue-700 ml-2">
                    info@studiofulminis.it
                  </a>
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Telefono:</strong> +39 333 123 4567
                </p>
                <p className="text-gray-700">
                  <strong>Indirizzo:</strong> Via Roma 123, 20100 Milano (MI)
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
