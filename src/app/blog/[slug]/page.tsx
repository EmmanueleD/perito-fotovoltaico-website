import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar } from "lucide-react";
import MarkdownContent from "@/components/MarkdownContent";
import { getBlogPostBySlug, getBlogSlugs } from "@/lib/content";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();

  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await loadPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center font-medium text-blue-800 transition-colors hover:text-blue-900"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Torna agli articoli
            </Link>

            {post.coverImage && (
              <div className="mb-8 aspect-[16/9] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  width={1200}
                  height={675}
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              {post.title}
            </h1>

            <div className="flex flex-col gap-4">
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex items-center text-gray-600">
                <Calendar className="mr-2 h-5 w-5" />
                <span>{formatDate(post.date)}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <article className="mx-auto max-w-4xl">
            <div className="rounded-2xl bg-white p-8 shadow-lg md:p-12">
              <div className="prose prose-lg max-w-none prose-gray">
                {post.body ? (
                  <MarkdownContent content={post.body} />
                ) : (
                  <p className="text-gray-800">
                    Contenuto dell&apos;articolo non disponibile.
                  </p>
                )}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <Link
              href="/blog"
              className="inline-flex items-center rounded-full bg-blue-800 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-900"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Torna agli articoli
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

async function loadPost(slug: string) {
  try {
    return await getBlogPostBySlug(slug);
  } catch {
    return null;
  }
}

function formatDate(date: string | undefined): string {
  if (!date) {
    return new Date().toLocaleDateString("it-IT");
  }

  return new Date(date).toLocaleDateString("it-IT");
}
