"use client";

import Link from "next/link";
import { formatDate } from "../_utils/formateDate";
import Section from "../_components/Section";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";


const openSourceContributions = [
  {
    id: "envoyproxy-ai-gateway-ssa-finalizers",
    project: "envoyproxy/ai-gateway",
    title: "Server-side apply for controller finalizers",
    summary:
      "Switched the controller's finalizer updates to Kubernetes server-side apply so finalizers are merged safely without resourceVersion checks while preserving managed field ownership.",
    link: "https://github.com/envoyproxy/ai-gateway/pull/1930",
    github: "https://github.com/envoyproxy/ai-gateway",
    logo: "/envoy.png",
    date: "2026-03-16",
    role: "Contributor",
  },
  {
    id: "envoyproxy-ai-gateway-extproc-cache-race",
    project: "envoyproxy/ai-gateway",
    title: "Fix webhook cache race causing missing extProc sidecar injection",
    summary:
      "Fixed a race condition in the gateway admission webhook where informer cache lag could cause extProc sidecar injection to be skipped. Introduced a noCacheReader fallback using the API server and refactored route lookups to use a cache-first, API-reader-second pattern.",
    link: "https://github.com/envoyproxy/ai-gateway/pull/1981",
    github: "https://github.com/envoyproxy/ai-gateway",
    logo: "/envoy.png",
    date: "2026-04-07",
    role: "Contributor",
  },
  {
    id: "vllm-semantic-router-pluggable-retriever",
    project: "vllm-project/semantic-router",
    title: "Wire pluggable retriever registry into extproc tool selection flow",
    summary:
      "Replaced a hardcoded tool lookup with a pluggable strategy registry, allowing different retrieval algorithms to be swapped in without changing core routing logic. Added per-request observability fields (strategy name, confidence, latency) and a Prometheus metric to surface tool selection performance.",
    link: "https://github.com/vllm-project/semantic-router/pull/1841",
    github: "https://github.com/vllm-project/semantic-router",
    logo: "/vllm-sr.png",
    date: "2026-04-29",
    role: "Contributor",
  },
] as const;

type OpenSourceContribution = (typeof openSourceContributions)[number];

const ALL_REPOS = "All";

const uniqueProjects = [
  ALL_REPOS,
  ...Array.from(new Set(openSourceContributions.map((c) => c.project))),
];

export default function OpenSource() {
  const [activeFilter, setActiveFilter] = useState<string>(ALL_REPOS);

  const contributions: OpenSourceContribution[] = [...openSourceContributions]
    .filter((c) => activeFilter === ALL_REPOS || c.project === activeFilter)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (

    <div className="flex flex-col gap-2 md:gap-6">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
          Open Source
        </h1>
        <p
          className="animate-in text-muted-foreground"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          Trying to give back to the giants I stand on.
        </p>
      </div>

      {/* Filter buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex flex-wrap gap-2"
      >
          {uniqueProjects.map((project) => (
            <button
              key={project}
              onClick={() => setActiveFilter(project)}
              className={`rounded-full border px-3 py-1 text-sm font-mono transition-colors ${activeFilter === project
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-secondary text-muted-foreground hover:border-primary hover:text-primary"
                }`}
            >
              {project}
            </button>
          ))}
      </motion.div>

      <div className="animate-in flex flex-col gap-8">
        {contributions.map((item: OpenSourceContribution) => (
          <Section
            key={item.id}
            heading={item.project}
            headingAlignment="left"
            leading={
              <div className="flex flex-col items-center gap-2">
                <Image
                  src={item.logo}
                  alt={item.project}
                  width={120}
                  height={80}
                  className="rounded-md border border-border bg-secondary object-contain"
                />
                <span className="text-sm font-mono leading-tight text-pretty text-primary">
                  {item.project}
                </span>
              </div>
            }
          >
            <div className="flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-1">
                <span className="font-medium leading-tight text-pretty">
                  {item.title}
                </span>
                <span className="text-sm text-muted-foreground text-pretty">
                  {item.summary}
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs text-muted-foreground">
                  {formatDate(item.date)} · {item.role}
                </span>

                {item.github && (
                  <Link href={item.link} target="_blank">
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
              </div>
            </div>
          </Section>
        ))}
      </div>
    </div>
  );
}
