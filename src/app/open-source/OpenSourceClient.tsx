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
    title: "Server-side apply for finalizers. No more update conflicts.",
    summary:
      "Finalizer updates went through read-modify-write and failed on resourceVersion conflicts. I moved them to server-side apply, so the API server merges them and keeps field ownership in managedFields. Concurrent writers no longer conflict, and the controller stops retrying.",
    link: "https://github.com/envoyproxy/ai-gateway/pull/1930",
    github: "https://github.com/envoyproxy/ai-gateway",
    logo: "/envoy.png",
    date: "2026-03-16",
    role: "Contributor",
  },
  {
    id: "envoyproxy-ai-gateway-extproc-cache-race",
    project: "envoyproxy/ai-gateway",
    title: "Closed an informer cache race. Sidecar injection is now deterministic.",
    summary:
      "The admission webhook read routes from an informer cache that could lag, and during that lag pods came up without the extProc sidecar. Route lookups now check the cache first and fall back to an uncached API reader. Lookups stay fast, and injection no longer depends on timing.",
    link: "https://github.com/envoyproxy/ai-gateway/pull/1981",
    github: "https://github.com/envoyproxy/ai-gateway",
    logo: "/envoy.png",
    date: "2026-04-07",
    role: "Contributor",
  },
  {
    id: "vllm-semantic-router-pluggable-retriever",
    project: "vllm-project/semantic-router",
    title: "Pluggable tool retrieval with built-in observability.",
    summary:
      "Tool selection was a single hardcoded lookup. I replaced it with a strategy registry, so a new retrieval algorithm can be dropped in without touching the routing core. Every request records which strategy ran, its confidence and its latency, and a Prometheus metric exposes them.",
    link: "https://github.com/vllm-project/semantic-router/pull/1841",
    github: "https://github.com/vllm-project/semantic-router",
    logo: "/vllm-sr.png",
    date: "2026-04-29",
    role: "Contributor",
  },
  {
    id: "kserve-llmisvc-cache-inferenceservice-config",
    project: "kserve/kserve",
    title: "Moved config reads off the API server and into a scoped informer.",
    summary:
      "The LLMInferenceService controller fetched inferenceservice-config from the API server on every reconcile. Reads now come from a cached client backed by an informer scoped with a field selector to that one ConfigMap. A watch predicate requeues every LLMInferenceService when the config changes. Each reconcile now makes zero direct API server reads for that config.",
    link: "https://github.com/kserve/kserve/pull/5573",
    github: "https://github.com/kserve/kserve",
    logo: "/kserve-rect-hd.jpg",
    date: "2026-06-02",
    role: "Contributor",
  },
  {
    id: "kserve-llmisvc-filter-httproute-parent-status",
    project: "kserve/kserve",
    title: "Scoped HTTPRoute status to the owning gateway. No more spurious migrations.",
    summary:
      "HTTPRoute parent status from unrelated gateways could trigger an InferencePool migration that nothing called for. The controller now filters parent status down to the authoritative gateway before deciding anything. Migrations happen only when the real gateway says they should.",
    link: "https://github.com/kserve/kserve/pull/5583",
    github: "https://github.com/kserve/kserve",
    logo: "/kserve-rect-hd.jpg",
    date: "2026-06-12",
    role: "Contributor",
  },
  {
    id: "llm-d-remove-stale-wide-ep-override-fma-filter",
    project: "llm-d/llm-d",
    title: "One vLLM release across all GPU environments.",
    summary:
      "A stale image override was silently running wide-EP deployments on an older vLLM. I removed it and pinned all four GPU environments to the same release. I also restored FMA overlay test coverage, so missing infrastructure configs fail in CI instead of in production.",
    link: "https://github.com/llm-d/llm-d/pull/3096",
    github: "https://github.com/llm-d/llm-d",
    logo: "/llm-d-2.png",
    date: "2026-11-21",
    role: "Contributor",
  },
  {
    id: "nvke-cp-remediation-failure-domain-discovery",
    project: "dsx-ai-factory/nvke",
    title: "Control-plane remediation keeps running when failure-domain discovery fails.",
    summary:
      "Any failure-domain discovery error aborted the whole reconcile and blocked remediation, joins, upgrades and deletes. Now only the placement steps wait: scale-up, rollout, rebalance and scale-down. Returning the error would roll back the reconcile's transaction, so it is logged and requeued instead, and the remediation writes are kept. Table-driven tests cover four discovery failure modes.",
    link: "https://github.com/dsx-ai-factory/nvke/pull/2425",
    github: "https://github.com/dsx-ai-factory/nvke",
    logo: "/nvidia.png",
    date: "2026-11-23",
    role: "Contributor",
  },
] as const;

type OpenSourceContribution = (typeof openSourceContributions)[number];

const ALL_REPOS = "All";

const uniqueProjects = [
  ALL_REPOS,
  ...Array.from(new Set(openSourceContributions.map((c) => c.project))),
];

export default function OpenSourceClient() {
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
          Trying to give back to the giants I stand on
        </p>
      </div>

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
            className={`rounded-full border px-3 py-1 text-sm font-mono transition-colors ${
              activeFilter === project
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