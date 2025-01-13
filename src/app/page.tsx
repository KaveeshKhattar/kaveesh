// import Image from "next/image";

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
      <div className="flex flex-col gap-8">
        <div className="space-y-4">
          <h1 className="animate-in text-3xl font-semibold">
            hey, Kaveesh here!
          </h1>
          <p className="animate-in text-muted-foreground md:w-3/4">
            I&apos;m a software engineer in Bangalore with an interest in using technology to solve problems I come across in my world.
          </p>
        </div>

        <div className="flex animate-in gap-3 text-sm">
          <Link
            href="https://www.linkedin.com/in/kaveeshkhattar/"
            className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
            target="_blank"
          >
            LinkedIn
            <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
          </Link>

          <Link
            href="https://github.com/KaveeshKhattar"
            className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
            target="_blank"
          >
            GitHub
            <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
          </Link>

          <Link
            href="mailto:kaveeshkhattar@gmail.com"
            className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
            target="_blank"
          >
            Email
            <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
          </Link>
        </div>
      </div>

      <div className="flex animate-in flex-col gap-8">
        <p className="text-muted-foreground">Pinned</p>
        <ProjectList />
      </div>

      <div className="flex animate-in flex-col gap-4">
        <div>
          <Link
            className="group flex items-center gap-2 tracking-tight text-muted-foreground"
            href="/blog"
          >
            Latest blogs
            <ArrowUpRightIcon className="h-5 w-5 text-tertiary transition-all group-hover:text-primary" />
          </Link>
          <p className="max-w-lg text-muted-foreground text-pretty">
            I occassionally write about the projects I am working on, check it
            out.
          </p>
        </div>

        {finalBlogs.map((blog) => {
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
    title:
      "Exploring Novel Image Generation via Script-Directed Scene Formation",
    summary: "Lights, Camera, AI",
    date: "2024-10-20",
  },
];
