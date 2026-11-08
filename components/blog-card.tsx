import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { formatDate } from "@/lib/posts";

export function BlogCard({ post, index }: { post: PostMeta; index: number }) {
  return (
    <article className="group relative flex min-h-80 flex-col justify-between overflow-hidden border border-stone-950 bg-[#fffdf8] p-6 transition duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#ffcf5a] sm:p-7">
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border-[18px] border-[#e5dcff] transition duration-300 group-hover:scale-125" aria-hidden="true" />
      <div>
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">{formatDate(post.publishedAt)}</p>
          <span className="font-serif text-2xl font-bold text-stone-300">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <h2 className="relative mt-7 max-w-sm font-serif text-3xl font-bold leading-[1.06] text-stone-950">
          <Link href={`/blog/${post.slug}`} className="outline-offset-4 group-hover:underline">
            {post.title}
          </Link>
        </h2>
        <p className="relative mt-5 max-w-md text-sm leading-6 text-stone-600">{post.description}</p>
      </div>
      <div className="relative mt-8 flex items-end justify-between gap-4 border-t border-stone-200 pt-5">
        <ul className="flex flex-wrap gap-2" aria-label="Post tags">
          {post.tags.slice(0, 2).map((tag) => (
            <li key={tag} className="bg-stone-100 px-2 py-1 text-xs text-stone-600">{tag}</li>
          ))}
        </ul>
        <Link href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-stone-950 text-lg text-white transition group-hover:bg-[#ff6b4a]">
          →
        </Link>
      </div>
    </article>
  );
}
