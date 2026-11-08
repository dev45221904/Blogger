import { BlogCard } from "@/components/blog-card";
import { getAllPosts } from "@/lib/posts";

export default async function HomePage() {
  const posts = await getAllPosts();

  return (
    <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-8 border-b-2 border-stone-950 pb-12 sm:grid-cols-[0.7fr_2fr_0.7fr] sm:items-end">
          <div className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-stone-500 sm:block">01 — Daily learning log</div>
          <div className="font-helvetica">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#bd3d26]">PureSol journal</p>
            <h1 className="mt-4 max-w-2xl text-5xl font-bold leading-[0.95] tracking-[-0.055em] text-stone-950 sm:text-7xl">Blogs for <span className="relative inline-block"><span className="relative z-10">Solidity</span><span className="absolute inset-x-0 bottom-1 h-3 bg-[#ffcf5a]" aria-hidden="true" /></span></h1>
            <p className="mt-6 max-w-xl text-base italic leading-7 text-stone-500 sm:text-lg">Turns out Solidity isn&apos;t just writing smart contracts.</p>
          </div>
          <p className="border-l border-stone-300 pl-4 text-sm leading-6 text-stone-600">One concept, one practical note, every day.</p>
        </div>
        <div className="mb-9 mt-12 flex items-end justify-between gap-4 sm:mt-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">The archive</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-stone-950">Latest posts</h2>
          </div>
          <p className="text-sm text-stone-600">{posts.length} post{posts.length === 1 ? "" : "s"}</p>
        </div>
        {posts.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => <BlogCard key={post.slug} post={post} index={index} />)}
          </div>
        ) : (
          <p className="border border-dashed border-stone-400 bg-white p-8 text-stone-600">Your first post is on its way.</p>
        )}
    </section>
  );
}
