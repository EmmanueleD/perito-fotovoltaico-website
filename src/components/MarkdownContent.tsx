import Image from "next/image";

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  const blocks = content
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  return (
    <>
      {blocks.map((block, index) => renderMarkdownBlock(block, index))}
    </>
  );
}

function renderMarkdownBlock(block: string, index: number) {
  const imageMatch = /^!\[([^\]]*)\]\(([^)]+)\)$/.exec(block);
  if (imageMatch) {
    return (
      <div key={index} className="my-8 overflow-hidden rounded-xl border border-gray-100">
        <Image
          src={imageMatch[2]}
          alt={imageMatch[1]}
          width={1200}
          height={675}
          className="h-auto w-full object-cover"
        />
      </div>
    );
  }

  if (block.startsWith("## ")) {
    return (
      <h2 key={index} className="mb-4 mt-8 text-3xl font-bold text-blue-900">
        {block.slice(3)}
      </h2>
    );
  }

  if (block.startsWith("### ")) {
    return (
      <h3 key={index} className="mb-3 mt-6 text-2xl font-bold text-blue-900">
        {block.slice(4)}
      </h3>
    );
  }

  return (
    <p key={index} className="mb-5 leading-8 text-gray-800">
      {block}
    </p>
  );
}
