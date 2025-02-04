import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "/public/content");
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ""),
  }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "/public/content", `${slug}.mdx`);
  const content = fs.readFileSync(filePath, "utf8");

  return (
    <article className="max-w-[800px]">
      <MDXRemote source={content} />
    </article>
  );
}
