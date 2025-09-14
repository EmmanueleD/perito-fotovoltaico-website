'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { client } from '../../../../tina/__generated__/client'
import { useState, useEffect } from 'react'
import { useTina } from 'tinacms/dist/react'
import TinaRichText from '../../../components/TinaRichText'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [slug, setSlug] = useState<string>('')
  const [postData, setPostData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const initializeParams = async () => {
      const resolvedParams = await params
      setSlug(resolvedParams.slug)
    }
    
    initializeParams()
  }, [params])

  useEffect(() => {
    if (!slug) return
    
    const fetchPost = async () => {
      try {
        const response = await client.queries.post({
          relativePath: `${slug}.md`
        })
        setPostData(response)
      } catch (error) {
        console.error('Errore nel caricamento del post:', error)
        setError('Articolo non trovato')
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [slug])

  const { data } = useTina(postData || { data: null, query: '', variables: {} })

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-800 mx-auto"></div>
          <p className="mt-4 text-gray-600">Caricamento articolo...</p>
        </div>
      </div>
    )
  }

  if (error || !(data as any)?.post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Articolo non trovato</h1>
          <p className="text-gray-600 mb-8">L'articolo che stai cercando non esiste o è stato rimosso.</p>
          <Link 
            href="/blog"
            className="inline-flex items-center text-blue-800 hover:text-blue-900 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Torna agli articoli
          </Link>
        </div>
      </div>
    )
  }

  const post = (data as any).post

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Link 
              href="/blog"
              className="inline-flex items-center text-blue-800 hover:text-blue-900 font-medium mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Torna agli articoli
            </Link>

            {post.coverImage && (
              <div className="aspect-[16/9] mb-8 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                {post.tags && post.tags.length > 0 ? (
                  post.tags.map((tag: string, index: number) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))
                ) : null}
              </div>
              
              <div className="flex items-center text-gray-600">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{new Date().toLocaleDateString('it-IT')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="prose prose-lg max-w-none prose-gray">
                {post.body ? (
                  <TinaRichText content={post.body} />
                ) : (
                  <p className="text-gray-800">Contenuto dell'articolo non disponibile.</p>
                )}
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Link 
              href="/blog"
              className="inline-flex items-center bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-full font-semibold transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Torna agli articoli
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
