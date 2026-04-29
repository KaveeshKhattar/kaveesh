import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import ProjectList from "./projects/_components/ProjectList";
import Section from "./_components/Section";
import { formatDate } from "./_utils/formateDate";

export default function Home() {
  const allBlogs = blogs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const finalBlogs = allBlogs.slice(0, 3);

  return (
    <div className="flex flex-col gap-16 md:gap-24">

      {/* Hero */}
      <div className="flex flex-col gap-8">
        <div className="space-y-4">
          <div
            className="animate-in flex items-center gap-2 w-fit rounded-full border border-border bg-secondary px-3 py-1"
            style={{ "--index": 0 } as React.CSSProperties}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-xs font-mono text-muted-foreground">
              Bengaluru, India
            </span>
          </div>

          <h1
            className="animate-in text-3xl font-semibold tracking-tight"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            Hey, I&apos;m Kaveesh.
          </h1>
          <p
            className="animate-in text-muted-foreground md:w-3/4 leading-relaxed"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            I'm a software engineer focused on building AI infrastructure and currently working on cloud-native systems.
          </p>
        </div>

        <div
          className="flex animate-in flex-wrap gap-2 text-sm"
          style={{ "--index": 3 } as React.CSSProperties}
        >
          <Link
            href="https://www.linkedin.com/in/kaveeshkhattar/"
            className="flex w-fit items-center gap-1 rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary transition-colors"
            target="_blank"
          >
            LinkedIn
            <ArrowUpRightIcon className="h-3.5 w-3.5 text-muted-foreground" />
          </Link>
          <Link
            href="https://github.com/KaveeshKhattar"
            className="flex w-fit items-center gap-1 rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary transition-colors"
            target="_blank"
          >
            GitHub
            <ArrowUpRightIcon className="h-3.5 w-3.5 text-muted-foreground" />
          </Link>
          <Link
            href="mailto:kaveeshkhattar@gmail.com"
            className="flex w-fit items-center gap-1 rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary transition-colors"
            target="_blank"
          >
            Email
            <ArrowUpRightIcon className="h-3.5 w-3.5 text-muted-foreground" />
          </Link>
        </div>
      </div>

      {/* Pinned projects */}
      <div
        className="flex animate-in flex-col gap-6"
        style={{ "--index": 4 } as React.CSSProperties}
      >
        <div className="flex items-center justify-between">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Pinned
          </p>
          <Link
            href="/projects"
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            All projects
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </Link>
        </div>
        <ProjectList />
      </div>

      {/* Latest blogs */}
      <div
        className="flex animate-in flex-col gap-4"
        style={{ "--index": 5 } as React.CSSProperties}
      >
        <div className="flex items-center justify-between">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Latest writing
          </p>
          <Link
            href="/blog"
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            All posts
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="flex flex-col">
          {finalBlogs.map((blog, i) => (
            <Link
              href={`/blog/${blog.id}`}
              key={blog.id}
              className="group flex items-center justify-between gap-4 border-b border-border py-3 last:border-0 hover:opacity-80 transition-opacity"
            >
              <span className="font-medium leading-tight text-pretty group-hover:text-primary transition-colors">
                {blog.summary}
              </span>
              <span className="shrink-0 text-xs font-mono text-muted-foreground">
                {formatDate(blog.date)}
              </span>
            </Link>
          ))}
        </div>
      </div>

    </div>
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
    date: "2020-03-18",
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
    title: "Exploring Novel Image Generation via Script-Directed Scene Formation",
    summary: "Lights, Camera, AI",
    date: "2024-10-20",
  },
];