'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export default function BlogPage() {
  // Questi dati verranno gestiti da TinaCMS
  const blogPosts = [
    {
      slug: 'vantaggi-fotovoltaico-2024',
      title: 'I Vantaggi del Fotovoltaico nel 2024: Incentivi e Opportunità',
      excerpt: 'Scopri tutti i vantaggi economici e ambientali dell\'installazione di un impianto fotovoltaico nel 2024, inclusi gli ultimi incentivi statali.',
      date: '2024-01-15',
      readTime: '5 min',
      category: 'Incentivi',
      image: '/api/placeholder/400/250'
    },
    {
      slug: 'manutenzione-pannelli-solari',
      title: 'Come Mantenere Efficiente il Tuo Impianto Fotovoltaico',
      excerpt: 'Guida completa alla manutenzione dei pannelli solari per garantire sempre la massima efficienza e durata nel tempo.',
      date: '2024-01-08',
      readTime: '7 min',
      category: 'Manutenzione',
      image: '/api/placeholder/400/250'
    },
    {
      slug: 'dimensionamento-impianto-fotovoltaico',
      title: 'Come Dimensionare Correttamente un Impianto Fotovoltaico',
      excerpt: 'Tutti i fattori da considerare per calcolare la potenza ottimale del tuo impianto fotovoltaico in base ai consumi.',
      date: '2024-01-01',
      readTime: '6 min',
      category: 'Progettazione',
      image: '/api/placeholder/400/250'
    },
    {
      slug: 'batterie-accumulo-guida',
      title: 'Batterie di Accumulo: Guida alla Scelta',
      excerpt: 'Come scegliere le batterie di accumulo più adatte al tuo impianto fotovoltaico per massimizzare l\'autoconsumo.',
      date: '2023-12-20',
      readTime: '8 min',
      category: 'Tecnologia',
      image: '/api/placeholder/400/250'
    },
    {
      slug: 'normative-fotovoltaico-lombardia',
      title: 'Normative e Permessi per il Fotovoltaico in Lombardia',
      excerpt: 'Tutto quello che devi sapere su permessi, normative e procedure burocratiche per installare un impianto fotovoltaico in Lombardia.',
      date: '2023-12-15',
      readTime: '4 min',
      category: 'Normative',
      image: '/api/placeholder/400/250'
    },
    {
      slug: 'futuro-energia-solare',
      title: 'Il Futuro dell\'Energia Solare: Tendenze e Innovazioni',
      excerpt: 'Le ultime innovazioni tecnologiche nel settore fotovoltaico e le tendenze che definiranno il futuro dell\'energia solare.',
      date: '2023-12-10',
      readTime: '6 min',
      category: 'Innovazione',
      image: '/api/placeholder/400/250'
    }
  ]

  const categories = ['Tutti', 'Incentivi', 'Manutenzione', 'Progettazione', 'Tecnologia', 'Normative', 'Innovazione']

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Approfondimenti, guide e novità dal mondo del fotovoltaico. 
              Resta aggiornato sulle ultime tendenze dell'energia solare.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === 'Tutti' 
                    ? 'bg-gray-800 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image */}
                <div className="aspect-[16/10] bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">📝</span>
                    </div>
                    <p className="text-gray-600 font-medium">{post.category}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category and Meta */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Date and Read More */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('it-IT')}
                    </div>
                    
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="flex items-center text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors"
                    >
                      Leggi tutto
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors">
              Carica altri articoli
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
