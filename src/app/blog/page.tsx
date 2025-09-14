'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { client } from '../../../tina/__generated__/client'
import { useState, useEffect } from 'react'

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('Tutti')

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await client.queries.postConnection()
        setPosts(response.data.postConnection.edges || [])
      } catch (error) {
        console.error('Errore nel caricamento dei posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  // Logica filtro per tag multipli
  const filteredPosts = selectedCategory === 'Tutti' 
    ? posts 
    : posts.filter(post => 
        post.node.tags && post.node.tags.includes(selectedCategory)
      )

  // Tag unici dai posts
  const allTags = posts.flatMap(post => post.node.tags || [])
  const categories = ['Tutti', ...new Set(allTags.filter(Boolean))]

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
              Articoli
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
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === selectedCategory 
                    ? 'bg-blue-800 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts - TEMPORANEAMENTE COMMENTATA */}
      {/* 
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
                <div className="aspect-[16/10] bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">📝</span>
                    </div>
                    <p className="text-gray-600 font-medium">{post.category}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

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
      */}

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {loading ? (
            <div className="text-center">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-800 mx-auto"></div>
              <p className="mt-4 text-gray-600">Caricamento articoli...</p>
            </div>
          ) : filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post: any, index: number) => (
                <motion.article
                  key={post.node._sys.filename}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-[16/10] bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl">📝</span>
                      </div>
                      <p className="text-gray-600 font-medium">Articolo</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.node.tags && post.node.tags.length > 0 ? (
                        post.node.tags.map((tag: string, index: number) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))
                      ) : (
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                          Articolo
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.node.title}
                    </h3>

                    <p className="text-gray-800 mb-4 line-clamp-3">
                      {post.node.excerpt || 
                        (post.node.body ? 
                          (typeof post.node.body === 'string' ? 
                            post.node.body.substring(0, 150) + '...' : 
                            'Leggi l\'articolo completo...'
                          ) : 
                          'Leggi l\'articolo completo...'
                        )
                      }
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.node.date ? 
                          new Date(post.node.date).toLocaleDateString('it-IT') : 
                          new Date().toLocaleDateString('it-IT')
                        }
                      </div>
                      
                      <Link 
                        href={`/blog/${post.node._sys.filename}`}
                        className="flex items-center text-blue-800 hover:text-blue-900 font-medium text-sm transition-colors"
                      >
                        Leggi tutto
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedCategory === 'Tutti' ? 'Nessun Articolo Disponibile' : `Nessun Articolo in "${selectedCategory}"`}
              </h2>
              <p className="text-gray-600 text-lg">
                {selectedCategory === 'Tutti' 
                  ? 'Non ci sono ancora articoli pubblicati. Torna presto per scoprire i nostri contenuti!'
                  : `Non ci sono articoli nella categoria "${selectedCategory}". Prova a selezionare una categoria diversa.`
                }
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
