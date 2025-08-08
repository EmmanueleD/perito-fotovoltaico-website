'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X, Settings } from 'lucide-react'
import Link from 'next/link'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('cookieConsent', JSON.stringify(consent))
    setShowBanner(false)
    
    // Initialize analytics if accepted
    if (consent.analytics) {
      initializeAnalytics()
    }
  }

  const acceptSelected = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('cookieConsent', JSON.stringify(consent))
    setShowBanner(false)
    setShowSettings(false)
    
    // Initialize analytics if accepted
    if (preferences.analytics) {
      initializeAnalytics()
    }
  }

  const rejectAll = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('cookieConsent', JSON.stringify(consent))
    setShowBanner(false)
  }

  const initializeAnalytics = () => {
    // Initialize Google Analytics here
    console.log('Analytics initialized')
  }

  const handlePreferenceChange = (type: keyof typeof preferences) => {
    if (type === 'necessary') return // Cannot be disabled
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  if (!showBanner) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg"
      >
        <div className="container mx-auto px-6 py-6">
          {!showSettings ? (
            // Main banner
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex items-start space-x-4 flex-1">
                <Cookie className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Questo sito utilizza i cookie
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Utilizziamo cookie tecnici per garantire il funzionamento del sito e cookie analitici 
                    per migliorare la tua esperienza. Puoi gestire le tue preferenze o consultare la nostra{' '}
                    <Link href="/cookie" className="text-blue-600 hover:text-blue-700 underline">
                      Cookie Policy
                    </Link>{' '}
                    per maggiori informazioni.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex items-center justify-center px-4 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg transition-colors"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Personalizza
                </button>
                <button
                  onClick={rejectAll}
                  className="px-6 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg transition-colors"
                >
                  Rifiuta tutti
                </button>
                <button
                  onClick={acceptAll}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  Accetta tutti
                </button>
              </div>
            </div>
          ) : (
            // Settings panel
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Gestisci le tue preferenze sui cookie
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="space-y-6 mb-6">
                {/* Necessary Cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">Cookie Necessari</h4>
                    <p className="text-sm text-gray-600">
                      Questi cookie sono essenziali per il funzionamento del sito web e non possono essere disabilitati.
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end px-1">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">Cookie Analitici</h4>
                    <p className="text-sm text-gray-600">
                      Ci aiutano a capire come i visitatori interagiscono con il sito raccogliendo informazioni anonime.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => handlePreferenceChange('analytics')}
                      className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                        preferences.analytics 
                          ? 'bg-blue-500 justify-end' 
                          : 'bg-gray-300 justify-start'
                      } px-1`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </button>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">Cookie di Marketing</h4>
                    <p className="text-sm text-gray-600">
                      Utilizzati per tracciare i visitatori sui siti web per mostrare annunci pertinenti e coinvolgenti.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => handlePreferenceChange('marketing')}
                      className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                        preferences.marketing 
                          ? 'bg-blue-500 justify-end' 
                          : 'bg-gray-300 justify-start'
                      } px-1`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  onClick={rejectAll}
                  className="px-6 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg transition-colors"
                >
                  Rifiuta tutti
                </button>
                <button
                  onClick={acceptSelected}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  Salva preferenze
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
