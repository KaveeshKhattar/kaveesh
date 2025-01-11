import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';

type Params = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), '/public/content');
  const filenames = fs.readdirSync(postsDirectory);
  
  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ''),
  }));
}

export default async function BlogPost({ params }: Params) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), '/public/content', `${slug}.mdx`);
  const content = fs.readFileSync(filePath, 'utf8');

  return (
    <article>
      <MDXRemote source={content} />
    </article>
  );
}
