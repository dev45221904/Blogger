import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content", "blogs");

export type PostMeta = {
  title: string;
  description: string;
  publishedAt: string;
  tags: string[];
  slug: string;
};

export type Post = PostMeta & { content: string };

function asPostMeta(data: Record<string, unknown>, slug: string): PostMeta {
  const publishedAt =
    typeof data.publishedAt === "string"
      ? data.publishedAt
      : data.publishedAt instanceof Date
        ? data.publishedAt.toISOString().slice(0, 10)
        : null;

  if (
    typeof data.title !== "string" ||
    typeof data.description !== "string" ||
    !publishedAt ||
    !Array.isArray(data.tags) ||
    !data.tags.every((tag) => typeof tag === "string")
  ) {
    throw new Error(`Invalid frontmatter in ${slug}.mdx`);
  }

  return { title: data.title, description: data.description, publishedAt, tags: data.tags, slug };
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const files = await readdir(postsDirectory);
  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const slug = file.replace(/\.mdx$/, "");
        const source = await readFile(path.join(postsDirectory, file), "utf8");
        return asPostMeta(matter(source).data, slug);
      }),
  );

  return posts.toSorted((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!/^[a-z0-9-]+$/.test(slug)) return null;

  try {
    const source = await readFile(path.join(postsDirectory, `${slug}.mdx`), "utf8");
    const { data, content } = matter(source);
    return { ...asPostMeta(data, slug), content };
  } catch {
    return null;
  }
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}
