// import Image from "next/image";

import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import ProjectList from "./projects/_components/ProjectList";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-8">
        <div className="space-y-4">
          <h1 className="animate-in text-3xl font-semibold">hey, Kaveesh here!</h1>
          <p className="animate-in text-muted-foreground">
            I&apos;m a software engineer in Bangalore with an interest in using <br />
            technology to solve problems I come across in my world.
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

      <div>
        <div>
        <Link
            className="group flex items-center gap-2 tracking-tight text-muted-foreground"
            href="/blog"
          >
            Latest blogs
            <ArrowUpRightIcon className="h-5 w-5 text-tertiary transition-all group-hover:text-primary" />
          </Link>
          <p className="max-w-lg text-[#a1a1aa] text-pretty">
            Coming soon...
          </p>
        </div>
      </div>
    </div>
  );
}
