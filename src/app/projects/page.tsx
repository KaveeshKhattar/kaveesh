"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
import Section from "../_components/Section";
import { motion } from "framer-motion";

const ALL_DOMAINS = "All";

const domains = [
  { name: "Web" }, { name: "iOS" }, { name: "AI / ML Systems" }, { name: "Distributed Systems" }, { name: "FinTech" }, { name: "Observability & Monitoring" }, { name: "Databases & Storage" }, { name: "High-Performance Systems (Rust/C++)" },
];

const uniqueDomains = [ALL_DOMAINS, ...domains.map((d) => d.name)];

// Single explicit shape for every project. Optional fields cover the
// image-vs-video split and the liveLink-only-on-web-projects split,
// so TS never has to infer a loose union from mixed array literals.
interface Project {
  slug: string;
  title: string;
  summary: string;
  domains: string[];
  hasBlog: boolean;
  gitHub?: string;
  liveLink?: string;
  image?: string;
  video?: string;
  poster?: string;
}

export default function AllProjects() {
  const [activeFilter, setActiveFilter] = useState<string>(ALL_DOMAINS);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    document.title = `Projects | Kaveesh Khattar`;
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const activeProjects: Project[] =
    activeFilter === ALL_DOMAINS
      ? allProjects
      : allProjects.filter((p) => p.domains.includes(activeFilter));

  return (
    <div className="flex flex-col gap-2 md:gap-6">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
          Projects
        </h1>
        <p
          className="animate-in text-muted-foreground"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          What I do when I&apos;m not at my 9-5
        </p>
      </div>

      {/* Filter pills */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex flex-wrap gap-2"
      >
        <div className="flex flex-wrap gap-2">
          {uniqueDomains.map((domain) => (
            <button
              key={domain}
              onClick={() => setActiveFilter(domain)}
              className={`rounded-full border px-3 py-1 text-sm font-mono transition-colors ${activeFilter === domain
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-secondary text-muted-foreground hover:border-primary hover:text-primary"
                }`}
            >
              {domain}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Projects list */}
      <div className="animate-in flex flex-col gap-8">
        {activeProjects.map((project) => (
          <Section
            key={project.slug}
            heading={project.title}
            headingAlignment="left"
            leading={
              <div className="flex flex-col items-center gap-2">
                {project.image ? (
                  <div className="relative w-[120px] h-[80px] rounded-md border border-border bg-secondary overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="relative w-[120px] rounded-md border border-border bg-secondary overflow-hidden">
                    <video
                      className="w-full h-auto"
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
                )}
              </div>
            }
          >
            <div className="flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-1">
                <span className="font-medium leading-tight text-pretty">
                  {project.title}
                </span>
                <span className="text-sm text-muted-foreground text-pretty">
                  {project.summary}
                </span>
              </div>

              {/* Domain tags */}
              <div className="flex flex-wrap gap-1">
                {project.domains.map((d) => (
                  <span
                    key={d}
                    className="rounded-full border border-border bg-secondary px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {d}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {project.liveLink && (
                  <Link href={project.liveLink} target="_blank">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <span>Live Link</span>
                    </Button>
                  </Link>
                )}

                {project.gitHub && (
                  <Link href={project.gitHub} target="_blank">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <FaGithub className="h-4 w-4" />
                      <span>GitHub</span>
                    </Button>
                  </Link>
                )}

                {project.hasBlog && (
                  <Link href={`/blog/${project.slug}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <span>Blog</span>
                    </Button>
                  </Link>
                )}

                {project.liveLink && (
                  <div className="flex items-center gap-1 ml-auto">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                    </span>
                    <span className="text-xs font-bold text-green-500">Live</span>
                  </div>
                )}
              </div>
            </div>
          </Section>
        ))}
      </div>
    </div>
  );
}

const webProjects: Project[] = [
  {
    slug: "solan",
    image: "/solan.png",
    title: "Solan",
    domains: ["Web"],
    liveLink: "https://kaveeshkhattar.pythonanywhere.com",
    gitHub: "https://github.com/KaveeshKhattar/Solan",
    hasBlog: true,
    summary:
      "Crowd-sourced question bank builder to enhance learning with over 60+ visitors.",
  },
  {
    slug: "teamfinder",
    image: "/teamfinder.png",
    title: "TeamFinder",
    domains: ["Web"],
    liveLink: "https://teamfinder-frontend.vercel.app/",
    gitHub: "https://github.com/KaveeshKhattar/TeamFinder",
    hasBlog: true,
    summary:
      "Don't let your inner circle hold you back from participating in hackathons.",
  },
  {
    slug: "teachmate",
    image: "/teachmate.png",
    title: "TeachMate",
    domains: ["Web"],
    liveLink: "https://teachmate-murex.vercel.app/",
    gitHub: "https://github.com/KaveeshKhattar/teachmate",
    hasBlog: true,
    summary:
      "Tracks students' performance and creates schedules for my Mom and her 15 students.",
  },
];

const iOSProjects: Project[] = [
  {
    slug: "weSplit",
    video: "/iOS/01-WeSplit.mov",
    poster: "/iOS/posters/01-WeSplit.png",
    title: "WeSplit",
    domains: ["iOS"],
    hasBlog: false,
    gitHub:
      "https://github.com/KaveeshKhattar/100DaysOfSwiftUI/tree/main/01-WeSplit",
    summary: "A check-splitting app.",
  },
  {
    slug: "guessTheFlag",
    video: "/iOS/02-GuessTheFlag.mov",
    poster: "/iOS/posters/02-GuessTheFlag.png",
    title: "Guess The Flag",
    domains: ["iOS"],
    hasBlog: false,
    gitHub:
      "https://github.com/KaveeshKhattar/100DaysOfSwiftUI/tree/main/02-GuessTheFlag",
    summary:
      "A guessing game that helps users learn some of the many flags of the world.",
  },
  {
    slug: "betterRest",
    video: "/iOS/04-BetterRest.mov",
    poster: "/iOS/posters/04-BetterRest.png",
    title: "BetterRest",
    domains: ["iOS"],
    hasBlog: false,
    gitHub:
      "https://github.com/KaveeshKhattar/100DaysOfSwiftUI/tree/main/04-BetterRest",
    summary:
      "An app designed to help coffee drinkers get a good night's sleep by using Machine Learning through Core ML.",
  },
  {
    slug: "wordScramble",
    video: "/iOS/05-WordScramble.mov",
    poster: "/iOS/posters/05-WordScramble.png",
    title: "WordScramble",
    domains: ["iOS"],
    hasBlog: false,
    gitHub:
      "https://github.com/KaveeshKhattar/100DaysOfSwiftUI/tree/main/05-WordScramble",
    summary:
      "An app designed to show players a random eight-letter word, and ask them to make words out of it.",
  },
  {
    slug: "iExpense",
    video: "/iOS/07-iExpense.mov",
    poster: "/iOS/posters/07-iExpense.png",
    title: "iExpense",
    domains: ["iOS"],
    hasBlog: false,
    gitHub:
      "https://github.com/KaveeshKhattar/100DaysOfSwiftUI/tree/main/07-iExpense",
    summary:
      "An app which is an expense tracker that separates personal costs from business costs.",
  },
  {
    slug: "Moonshot",
    video: "/iOS/08-Moonshot.mov",
    poster: "/iOS/posters/08-Moonshot.png",
    title: "Moonshot",
    domains: ["iOS"],
    hasBlog: false,
    gitHub:
      "https://github.com/KaveeshKhattar/100DaysOfSwiftUI/tree/main/08-Moonshot",
    summary:
      "An app that lets users learn about the missions and astronauts that formed NASA's Apollo space program.",
  },
  {
    slug: "CupcakeCorner",
    video: "/iOS/10-CupcakeCorner.mov",
    poster: "/iOS/posters/10-CupcakeCorner.png",
    title: "Cupcake Corner",
    domains: ["iOS"],
    hasBlog: false,
    gitHub:
      "https://github.com/KaveeshKhattar/100DaysOfSwiftUI/tree/main/10-CupcakeCorner",
    summary: "A multi-screen app for ordering cupcakes.",
  },
  {
    slug: "Bookworm",
    video: "/iOS/11-Bookworm.mov",
    poster: "/iOS/posters/11-Bookworm.png",
    title: "Bookworm",
    domains: ["iOS"],
    hasBlog: false,
    gitHub:
      "https://github.com/KaveeshKhattar/100DaysOfSwiftUI/tree/main/11-Bookworm",
    summary: "An app to track which books you've read and what you thought of them.",
  },
];

const systemsProjects: Project[] = [
  {
    slug: "inference-router",
    image: "/dir.jpg",
    title: "KV Cache Inference Router",
    domains: ["AI / ML Systems", "Observability & Monitoring"],
    hasBlog: false,
    gitHub: "https://github.com/KaveeshKhattar/inference-router",
    summary:
      "A queue-depth-aware inference request router for Kubernetes-hosted vLLM replicas — cuts p95 TTFT by ~44% at 15 RPS versus round-robin by scoring replicas on live queue depth and KV cache state, with a full Prometheus/Grafana/OpenTelemetry observability stack.",
  },
  {
    slug: "cacheMesh",
    image: "/meshh.jpg",
    title: "CacheMesh",
    domains: ["Distributed Systems", "AI / ML Systems", "High-Performance Systems (Rust/C++)"],
    hasBlog: false,
    gitHub: "https://github.com/KaveeshKhattar/cacheMesh",
    summary:
      "A distributed, content-addressed block store in Rust with Raft-based metadata replication, consistent-hash placement, delta+varint compression, and ARM NEON-accelerated scans — built incrementally on an 8GB M2 Air, with an LLM KV-cache offload use case as one natural consumer.",
  },
];

const fintechProjects: Project[] = [
  {
    slug: "settlemesh",
    image: "/money.jpg",
    title: "SettleMesh",
    domains: ["Distributed Systems", "FinTech"],
    hasBlog: false,
    gitHub: "https://github.com/KaveeshKhattar/settleTape",
    summary:
      "A horizontally-sharded, saga-orchestrated ledger and settlement engine in Go — implements cross-shard transfers via saga orchestration, shard-local double-entry accounting, and idempotent request handling, with failure injection and observability layered in as the project matures.",
  },
];

const allProjects: Project[] = [...systemsProjects, ...fintechProjects, ...webProjects, ...iOSProjects];
