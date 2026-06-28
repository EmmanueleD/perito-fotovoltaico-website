import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import type { BlogPost, HomepageContent, RichTextRoot } from "@/lib/content-types";

const contentDirectory = path.join(process.cwd(), "content");
const homepagePath = path.join(contentDirectory, "homepage", "home.json");
const postsDirectory = path.join(contentDirectory, "posts");

const richTextFields = new Set([
  "description",
  "body"
]);

export async function getHomepageContent(): Promise<HomepageContent> {
  const rawContent = await readFile(homepagePath, "utf8");
  const parsed = JSON.parse(rawContent) as HomepageContent;

  return {
    ...parsed,
    hero: parsed.hero
      ? {
          ...parsed.hero,
          description: normalizeRichText(parsed.hero.description)
        }
      : undefined,
    chiSono: parsed.chiSono
      ? {
          ...parsed.chiSono,
          description: normalizeRichText(parsed.chiSono.description)
        }
      : undefined,
    servizi: parsed.servizi
      ? {
          ...parsed.servizi,
          description: normalizeRichText(parsed.servizi.description)
        }
      : undefined
  };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const entries = await readdir(postsDirectory, { withFileTypes: true });
  const markdownFiles = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => entry.name);

  const posts = await Promise.all(
    markdownFiles.map(async (fileName) => getBlogPostBySlug(fileName.replace(/\.md$/, "")))
  );

  return posts.sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0;
    const dateB = b.date ? new Date(b.date).getTime() : 0;
    return dateB - dateA;
  });
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost> {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const rawContent = await readFile(filePath, "utf8");
  const { frontmatter, body } = parseMarkdownDocument(rawContent);

  return {
    slug,
    title: readString(frontmatter.title, slug),
    tags: readStringArray(frontmatter.tags),
    date: readOptionalString(frontmatter.date),
    excerpt: readOptionalString(frontmatter.excerpt),
    coverImage: readOptionalString(frontmatter.coverImage),
    body: body.trim()
  };
}

export async function getBlogSlugs(): Promise<string[]> {
  const entries = await readdir(postsDirectory, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => entry.name.replace(/\.md$/, ""));
}

function normalizeRichText(value: unknown): RichTextRoot | undefined {
  if (typeof value !== "string") {
    return isRichTextRoot(value) ? value : undefined;
  }

  const paragraphs = value
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  if (paragraphs.length === 0) {
    return undefined;
  }

  return {
    type: "root",
    children: paragraphs.map((paragraph) => ({
      type: "p",
      children: [{ type: "text", text: paragraph }]
    }))
  } satisfies RichTextRoot;
}

function isRichTextRoot(value: unknown): value is RichTextRoot {
  return (
    typeof value === "object" &&
    value !== null &&
    "type" in value &&
    value.type === "root" &&
    "children" in value &&
    Array.isArray(value.children)
  );
}

type FrontmatterValue = string | string[];
type Frontmatter = Record<string, FrontmatterValue>;

function parseMarkdownDocument(rawContent: string): {
  frontmatter: Frontmatter;
  body: string;
} {
  if (!rawContent.startsWith("---\n")) {
    return { frontmatter: {}, body: rawContent };
  }

  const endIndex = rawContent.indexOf("\n---", 4);
  if (endIndex === -1) {
    return { frontmatter: {}, body: rawContent };
  }

  const frontmatterBlock = rawContent.slice(4, endIndex);
  const body = rawContent.slice(endIndex + 4).replace(/^\s*\n/, "");

  return {
    frontmatter: parseFrontmatter(frontmatterBlock),
    body
  };
}

function parseFrontmatter(block: string): Frontmatter {
  const lines = block.split("\n");
  const result: Frontmatter = {};

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (!line.trim()) {
      continue;
    }

    const keyValueMatch = /^([A-Za-z0-9_-]+):\s*(.*)$/.exec(line);
    if (!keyValueMatch) {
      continue;
    }

    const [, key, rawValue] = keyValueMatch;

    if (rawValue === "") {
      const values: string[] = [];
      while (lines[index + 1]?.startsWith("  - ")) {
        index += 1;
        values.push(unquote(lines[index].slice(4).trim()));
      }
      result[key] = values;
      continue;
    }

    if (rawValue === ">-") {
      const foldedLines: string[] = [];
      while (lines[index + 1]?.startsWith("  ")) {
        index += 1;
        foldedLines.push(lines[index].trim());
      }
      result[key] = foldedLines.join(" ");
      continue;
    }

    if (richTextFields.has(key) && rawValue === "|") {
      const blockLines: string[] = [];
      while (lines[index + 1]?.startsWith("  ")) {
        index += 1;
        blockLines.push(lines[index].slice(2));
      }
      result[key] = blockLines.join("\n");
      continue;
    }

    result[key] = unquote(rawValue);
  }

  return result;
}

function readString(value: FrontmatterValue | undefined, fallback: string): string {
  return typeof value === "string" && value.trim() ? value : fallback;
}

function readOptionalString(value: FrontmatterValue | undefined): string | undefined {
  return typeof value === "string" && value.trim() ? value : undefined;
}

function readStringArray(value: FrontmatterValue | undefined): string[] {
  return Array.isArray(value) ? value : [];
}

function unquote(value: string): string {
  return value.replace(/^['"]|['"]$/g, "");
}
