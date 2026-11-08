import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { formatDate, getAllPosts, getPostBySlug } from "@/lib/posts";

type BlogPageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const post = await getPostBySlug((await params).slug);
  return post ? { title: post.title, description: post.description } : {};
}

export default async function BlogPage({ params }: BlogPageProps) {
  const post = await getPostBySlug((await params).slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <Link href="/" className="text-sm font-semibold text-stone-700 underline underline-offset-4 hover:text-stone-950">← All posts</Link>
      <header className="mt-12 border-b border-stone-300 pb-10">
        <ul className="flex flex-wrap gap-2" aria-label="Post tags">
          {post.tags.map((tag) => <li key={tag} className="bg-[#eaddbd] px-2 py-1 text-xs font-medium text-stone-700">{tag}</li>)}
        </ul>
        <h1 className="mt-6 font-serif text-4xl font-bold leading-tight tracking-tight text-stone-950 sm:text-6xl">{post.title}</h1>
        <p className="mt-5 text-lg leading-8 text-stone-600">{post.description}</p>
        <p className="mt-6 text-sm font-medium text-stone-500">Published {formatDate(post.publishedAt)}</p>
      </header>
      <div className="prose-post mt-12"><MDXRemote source={post.content} /></div>
    </article>
  );
}
