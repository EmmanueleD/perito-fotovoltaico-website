"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import type { BlogPost } from "@/lib/content-types";

interface BlogIndexClientProps {
  posts: BlogPost[];
}

export default function BlogIndexClient({ posts }: BlogIndexClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("Tutti");

  const filteredPosts =
    selectedCategory === "Tutti"
      ? posts
      : posts.filter((post) => post.tags.includes(selectedCategory));

  const categories = [
    "Tutti",
    ...Array.from(new Set(posts.flatMap((post) => post.tags).filter(Boolean)))
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
              Articoli
            </h1>
            <p className="text-xl leading-relaxed text-gray-600">
              Approfondimenti, guide e novità dal mondo del fotovoltaico.
              Resta aggiornato sulle ultime tendenze dell&apos;energia solare.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-b bg-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                  category === selectedCategory
                    ? "bg-blue-800 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          {filteredPosts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    {post.coverImage ? (
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        width={800}
                        height={500}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-100 to-green-100">
                        <div className="p-6 text-center">
                          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400">
                            <span className="text-2xl">📝</span>
                          </div>
                          <p className="font-medium text-gray-600">Articolo</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="mb-4 flex flex-wrap gap-2">
                      {post.tags.length > 0 ? (
                        post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700"
                          >
                            {tag}
                          </span>
                        ))
                      ) : (
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                          Articolo
                        </span>
                      )}
                    </div>

                    <h3 className="mb-3 line-clamp-2 text-xl font-bold text-gray-900">
                      {post.title}
                    </h3>

                    <p className="mb-4 line-clamp-3 text-gray-800">
                      {post.excerpt || "Leggi l'articolo completo..."}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="mr-1 h-4 w-4" />
                        {formatDate(post.date)}
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="flex items-center text-sm font-medium text-blue-800 transition-colors hover:text-blue-900"
                      >
                        Leggi tutto
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                {selectedCategory === "Tutti"
                  ? "Nessun Articolo Disponibile"
                  : `Nessun Articolo in "${selectedCategory}"`}
              </h2>
              <p className="text-lg text-gray-600">
                {selectedCategory === "Tutti"
                  ? "Non ci sono ancora articoli pubblicati. Torna presto per scoprire i nostri contenuti!"
                  : `Non ci sono articoli nella categoria "${selectedCategory}". Prova a selezionare una categoria diversa.`}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function formatDate(date: string | undefined): string {
  if (!date) {
    return new Date().toLocaleDateString("it-IT");
  }

  return new Date(date).toLocaleDateString("it-IT");
}
