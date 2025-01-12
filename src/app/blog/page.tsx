import Link from "next/link";
import { formatDate } from "../_utils/formateDate";
import Section from "../_components/Section";

export default function Blog() {
  const allBlogs = blogs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <div className="flex flex-col gap-16 md:gap-24">
        <div>
          <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
            Blog
          </h1>
          <p
            className="animate-in text-muted-foreground"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            {allBlogs.length} posts so far. Stay tuned for more!
          </p>
        </div>

        <div className="animate-in flex flex-col gap-8">
          {allBlogs.map((blog) => {
            return (
              <Link href={`/blog/${blog.id}`} key={blog.id} className="flex">
                <Section heading={formatDate(blog.date)}>
                  <span className="font-medium leading-tight text-pretty">
                    {blog.summary}
                  </span>
                </Section>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

const blogs = [
  {
    id: "solan",
    title: "Solan",
    summary: "Why should students only come up with the answers?",
    date: "2019-01-20",
  },
  {
    id: "teamfinder",
    title: "TeamFinder",
    summary: "Combining Tinder & Loopt for team finding",
    date: "2022-04-15",
  },
  {
    id: "swiftui",
    title: "iOS",
    summary: "Taming Apple's bald eagle",
    date: "2021-10-18",
  },
  {
    id: "teachmate",
    title: "TeachMate",
    summary: "Helping my Mom manage her tuition classes better.",
    date: "2024-11-09",
  },
  {
    id: "disinformation",
    title: "Understanding the Psychological Needs at Play in Disinformation",
    summary: "NLP & Maslow's Human Needs Theory",
    date: "2023-06-30",
  },
  {
    id: "comparative-analysis",
    title: "Analysis-Paralysis",
    summary: "Analysis-Paralysis",
    date: "2023-12-30",
  },
  {
    id: "text-to-scene",
    title:
      "Exploring Novel Image Generation via Script-Directed Scene Formation",
    summary: "Lights, Camera, AI",
    date: "2024-10-20",
  },
];
