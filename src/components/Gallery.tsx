'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface GalleryProject {
  title: string
  description?: string
  image: string
  location?: string
  year?: string
}

interface GalleryData {
  title: string
  subtitle?: string
  projects?: GalleryProject[]
}

interface GalleryProps {
  data?: GalleryData
}

export default function Gallery({ data }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Placeholder images - questi saranno gestiti tramite TinaCMS
  const projects = [
    {
      id: 1,
      title: "Impianto Residenziale 6kW",
      location: "Villa privata, Milano",
      image: "/api/placeholder/400/300",
      description: "Sistema fotovoltaico da 6kW per abitazione privata con accumulo"
    },
    {
      id: 2,
      title: "Impianto Industriale 50kW",
      location: "Azienda manifatturiera, Bergamo",
      image: "/api/placeholder/400/300",
      description: "Grande impianto industriale per riduzione costi energetici"
    },
    {
      id: 3,
      title: "Impianto Agricolo 20kW",
      location: "Azienda agricola, Brescia",
      image: "/api/placeholder/400/300",
      description: "Soluzione fotovoltaica per settore agricolo con incentivi GSE"
    },
    {
      id: 4,
      title: "Impianto Commerciale 15kW",
      location: "Centro commerciale, Como",
      image: "/api/placeholder/400/300",
      description: "Sistema integrato per attività commerciale"
    },
    {
      id: 5,
      title: "Impianto Condominio 30kW",
      location: "Condominio, Varese",
      image: "/api/placeholder/400/300",
      description: "Impianto condominiale con ripartizione intelligente"
    },
    {
      id: 6,
      title: "Impianto con Accumulo 8kW",
      location: "Casa indipendente, Lecco",
      image: "/api/placeholder/400/300",
      description: "Sistema completo con batterie di accumulo Tesla"
    }
  ]

  const openModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % projects.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? projects.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-blue-800 mb-6 text-center uppercase tracking-wider drop-shadow-lg">
{data?.title ? data.title.toUpperCase().split(' ').map((word, index) => index <= 1 ? word + ' ' : <span key={index} className="text-green-500">{word}</span>) : <>I MIEI <span className="text-green-500">PROGETTI</span></>}
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto font-medium">
{data?.subtitle || "Scopri alcuni dei progetti fotovoltaici che ho realizzato per privati e aziende."}
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="relative overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                {/* Image placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-6xl mb-4">☀️</div>
                    <p className="text-gray-600 font-medium">{project.title}</p>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end">
                  <div className="p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm opacity-90 mb-2">{project.location}</p>
                    <p className="text-sm opacity-80">{project.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-4xl w-full">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Image and content */}
              <div className="bg-white overflow-hidden" onClick={(e) => e.stopPropagation()}>
                {/* Image placeholder */}
                <div className="aspect-[16/10] bg-gradient-to-br from-gray-100 to-green-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-8xl mb-6">☀️</div>
                    <p className="text-gray-600 text-xl font-medium">{projects[selectedImage].title}</p>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {projects[selectedImage].title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-4">
                    {projects[selectedImage].location}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {projects[selectedImage].description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
