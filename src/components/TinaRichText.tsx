'use client'

import { TinaMarkdown } from 'tinacms/dist/rich-text'

interface TinaRichTextProps {
  content: any
  className?: string
}

export default function TinaRichText({ content, className = '' }: TinaRichTextProps) {
  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      <style jsx>{`
        /* Stili personalizzati per il rich-text TinaCMS */
        :global(.prose ul) {
          list-style-type: disc !important;
          padding-left: 1.5rem !important;
          margin: 1rem 0 !important;
        }
        
        :global(.prose ol) {
          list-style-type: decimal !important;
          padding-left: 1.5rem !important;
          margin: 1rem 0 !important;
        }
        
        :global(.prose li) {
          margin: 0.5rem 0 !important;
          display: list-item !important;
        }
        
        :global(.prose p) {
          margin: 1rem 0 !important;
          color: #1F2937 !important; /* Gray-800 per il testo principale */
        }
        
        :global(.prose strong) {
          font-weight: 700 !important;
          color: #1E3A8A !important; /* Deep blue per enfasi */
        }
        
        :global(.prose em) {
          font-style: italic !important;
        }
        
        :global(.prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6) {
          color: #1E3A8A !important; /* Deep blue per i titoli */
          font-weight: 700 !important;
        }
        
        :global(.prose a) {
          color: #00A878 !important; /* Energy green per i link */
          text-decoration: underline !important;
        }
        
        :global(.prose a:hover) {
          color: #22C55E !important; /* Energy green alt per hover */
        }
      `}</style>
      <TinaMarkdown content={content} />
    </div>
  )
}
