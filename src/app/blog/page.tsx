import BlogIndexClient from "@/components/BlogIndexClient";
import { getBlogPosts } from "@/lib/content";

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <BlogIndexClient posts={posts} />
  )
}
