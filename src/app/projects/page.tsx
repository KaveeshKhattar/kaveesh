"use client";

import Image from "next/image";
import Halo from "../_components/Halo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Kaveesh Khattar",
  description: "Built by Kaveesh Khattar",
};

export default function AllProjects() {
  const [currentDomain, setCurrentDomain] = useState("Web");
  const handleClick = (domainName: string) => {
    setCurrentDomain(domainName); // Update currentDomain when clicked
  };

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
          Projects
        </h1>
        <p
          className="animate-in text-muted-foreground"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          What I do when I&apos;m not at my 9-5.
        </p>
      </div>

      <div className="animate-in flex justify-center gap-1">
        {domains.map((domain) => (
          <div
            key={domain.name}
            onClick={() => handleClick(domain.name)}
            className={`${
              currentDomain === domain.name ? "text-primary" : "text-[#71717a]"
            } relative rounded-lg px-3 py-1.5 text-sm transition-colors cursor-pointer`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {domain.name}
          </div>
        ))}
      </div>

      {currentDomain === "Web" ? (
        <div className="animate-in grid md:grid-cols-2 gap-4">
          {webProjects.map((project) => (
            <div
              key={project.slug}
              className="space-y-4 bg-secondary p-4 rounded-md"
            >
              <div className="aspect-video overflow-hidden rounded-md bg-secondary">
                <Halo strength={10}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="h-full w-full object-cover"
                  />
                </Halo>
              </div>

              <div className="flex-col space-y-4">
                <div className="flex-col space-y-2">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium leading-tight">
                        {project.title}
                      </p>
                    </div>

                    <div className="flex items-center space-x-1 justify-end">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <p className="text-xs font-bold text-green-500">Live</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{project.summary}</p>
                </div>

                <div className="flex justify-around space-x-2">
                  {project.liveLink && (
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      className="w-full"
                    >
                      <Button className="w-full bg-inherit text-primary border-2 border-primary hover:bg-secondary">
                        Live Link
                      </Button>
                    </Link>
                  )}

                  {project.gitHub && (
                    <Link
                      href={project.gitHub}
                      target="_blank"
                      className="w-full"
                    >
                      <Button className="w-full">
                        <FaGithub />
                      </Button>
                    </Link>
                  )}

                  <Link href={`/blog/${project.slug}`} className="w-full">
                    <Button className="w-full">Blog</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="animate-in grid md:grid-cols-2 gap-4">
          {iOSProjects.map((project) => (
            <div
              key={project.slug}
              className="flex-col items-center space-y-2 bg-secondary p-4 rounded-md"
            >
              <div className="md:min-h-[750px]">
                <video
                  className=""
                  controls
                  preload="none"
                  poster={project.poster}
                  playsInline
                >
                  <source src={project.video} type="video/mp4" />
                  <track kind="subtitles" srcLang="en" label="English" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="flex-col space-y-4">
                <div className="flex-col space-y-2 min-h-[100px]">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium leading-tight">
                        {project.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{project.summary}</p>
                </div>

                <div className="flex justify-around space-x-2">
                  {project.gitHub && (
                    <Link
                      href={project.gitHub}
                      target="_blank"
                      className="w-full"
                    >
                      <Button className="w-full">
                        <FaGithub /> GitHub
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const webProjects = [
  {
    slug: "solan",
    image: "/solan.png",
    title: "Solan",
    domain: "web",
    liveLink: "https://kaveeshkhattar.pythonanywhere.com",
    gitHub: "https://github.com/KaveeshKhattar/Solan",
    summary:
      "Crowd-sourced question bank builder to enhance learning with over 60+ visitors.",
  },
  {
    slug: "teamfinder",
    image: "/teamfinder.png",
    title: "TeamFinder",
    domain: "web",
    liveLink: "https://teamfinder-frontend.vercel.app/",
    gitHub: "https://github.com/KaveeshKhattar/TeamFinder",
    summary:
      "Don't let your inner circle hold you back from participating in hackathons.",
  },
  {
    slug: "teachmate",
    image: "/teachmate.png",
    title: "TeachMate",
    domain: "web",
    liveLink: "https://teachmate-murex.vercel.app/",
    gitHub: "https://github.com/KaveeshKhattar/teachmate",
    summary:
      "Tracks students' performance and creates schedules for my Mom and her 15 students.",
  },
];

const iOSProjects = [
  {
    slug: "weSplit",
    video: "/iOS/01-WeSplit.mov",
    poster: "/iOS/posters/01-WeSplit.png",
    title: "WeSplit",
    domain: "iOS",
    gitHub: "https://github.com/KaveeshKhattar/100DaysOfSwiftUI/tree/main/01-WeSplit",
    summary: "A check-splitting app.",
  },
  {
    slug: "guessTheFlag",
    video: "/iOS/02-GuessTheFlag.mov",
    poster: "/iOS/posters/02-GuessTheFlag.png",
    title: "Guess The Flag",
    domain: "iOS",
    gitHub: "https://github.com/KaveeshKhattar/100DaysOfSwiftUI/tree/main/02-GuessTheFlag",
    summary: "A guessing game that helps users learn some of the many flags of the world.",
  },
  {
    slug: "betterRest",
    video: "/iOS/04-BetterRest.mov",
    poster: "/iOS/posters/04-BetterRest.png",
    title: "BetterRest",
    domain: "iOS",
    gitHub: "https://github.com/KaveeshKhattar/100DaysOfSwiftUI/tree/main/04-BetterRest",
    summary: "An app designed to help coffee drinkers get a good night's sleep by using Machine Learning through Core ML.",
  },
  {
    slug: "wordScramble",
    video: "/iOS/05-WordScramble.mov",
    poster: "/iOS/posters/05-WordScramble.png",
    title: "WordScramble",
    domain: "iOS",
    gitHub: "https://github.com/KaveeshKhattar/100DaysOfSwiftUI/tree/main/05-WordScramble",
    summary: "An app designed to show players a random eight-letter word, and ask them to make words out of it.",
  },
  {
    slug: "iExpense",
    video: "/iOS/07-iExpense.mov",
    poster: "/iOS/posters/07-iExpense.png",
    title: "iExpense",
    domain: "iOS",
    gitHub: "https://github.com/KaveeshKhattar/100DaysOfSwiftUI/tree/main/07-iExpense",
    summary: "An app which is an expense tracker that separates personal costs from business costs.",
  },
  {
    slug: "Moonshot",
    video: "/iOS/08-Moonshot.mov",
    poster: "/iOS/posters/08-Moonshot.png",
    title: "Moonshot",
    domain: "iOS",
    gitHub: "https://github.com/KaveeshKhattar/100DaysOfSwiftUI/tree/main/08-Moonshot",
    summary: "An app that lets users learn about the missions and astronauts that formed NASA's Apollo space program. ",
  },
  {
    slug: "CupcakeCorner",
    video: "/iOS/10-CupcakeCorner.mov",
    poster: "/iOS/posters/10-CupcakeCorner.png",
    title: "Cupcake Corner",
    domain: "iOS",
    gitHub: "https://github.com/KaveeshKhattar/100DaysOfSwiftUI/tree/main/10-CupcakeCorner",
    summary: "A multi-screen app for ordering cupcakes.",
  },
  {
    slug: "Bookworm",
    video: "/iOS/11-Bookworm.mov",
    poster: "/iOS/posters/11-Bookworm.png",
    title: "Bookworm",
    domain: "iOS",
    gitHub: "https://github.com/KaveeshKhattar/100DaysOfSwiftUI/tree/main/11-Bookworm",
    summary: "An app to track which books you've read and what you thought of them.",
  },
];

const domains = [
  {
    name: "Web",
  },
  {
    name: "iOS",
  },
];
