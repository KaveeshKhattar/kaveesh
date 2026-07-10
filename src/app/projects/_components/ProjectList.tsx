import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

export default function ProjectList() {
  const projects = [
    {
      slug: "path-loss-iab-patent",
      image: "/att-logo.jpg",
      title: "Path Loss Mitigation in Integrated Access and Backhaul Networks",
      kind: "patent",
      repo: "AT&T · Filed",
      link: "#",
      summary:
        "CNN-LSTM hybrid model that predicts optimal spectrum selection for 5G mmWave IAB nodes by jointly learning spatial signal-strength patterns and temporal factors, reducing path loss in wireless backhaul.",
    },
    {
      slug: "tars-tetrate-ai-buildathon",
      image: "/tetrate-square-sm.png",
      title: "TARS — Autonomous Inference Traffic Agent",
      kind: "hackathon",
      repo: "Tetrate AI Buildathon · 🏆 Top 5",
      link: "https://github.com/KaveeshKhattar/tars-traffic-agent",
      summary:
        "An AI gateway agent that reasons across signals, reroutes traffic, and explains its decisions — instead of reacting to thresholds. Built with a Node.js orchestrator, Python fault simulator, and live SSE dashboard.",
    },
    {
      slug: "kserve-llmisvc-cache-inferenceservice-config",
      image: "/kserve.png",
      title: "Reduced API server load by caching ConfigMaps for LLM Services",
      kind: "open-source",
      repo: "kserve/kserve",
      link: "https://github.com/kserve/kserve/pull/5573",
      summary:
        "Replaced direct API server reads with a cached controller-runtime client, reducing API server pressure under high reconciliation load.",
    },
    // {
    //   slug: "vllm-semantic-router-pluggable-retriever",
    //   image: "/vllm-sr.png",
    //   title: "Enabled dynamic retrieval strategies for AI tool selection",
    //   kind: "open-source",
    //   repo: "vllm-project/semantic-router",
    //   link: "https://github.com/vllm-project/semantic-router/pull/1841",
    //   summary:
    //     "Replaced a hardcoded tool lookup with a pluggable strategy registry with per-request observability.",
    // },
    // {
    //   slug: "envoyproxy-ai-gateway-extproc-cache-race",
    //   image: "/envoy.png",
    //   title: "Eliminated Cache-Induced Sidecar Injection Failures",
    //   kind: "open-source",
    //   repo: "envoyproxy/ai-gateway",
    //   link: "https://github.com/envoyproxy/ai-gateway/pull/1981",
    //   summary:
    //     "Fixed a race condition that caused extProc sidecar injection to fail ~90% of the time on initial deployment.",
    // },
    // {
    //   slug: "solan",
    //   image: "/solan.png",
    //   title: "Solan",
    //   kind: "project",
    //   repo: null,
    //   link: "https://kaveeshkhattar.pythonanywhere.com",
    //   summary:
    //     "Crowd-sourced question bank builder to enhance learning with over 60+ visitors.",
    // },
    // {
    //   slug: "disinformation",
    //   image: "/disinformation.png",
    //   title: "Psychological Needs at Play in Disinformation",
    //   kind: "paper",
    //   repo: null,
    //   link: "/files/disinformation.pdf",
    //   summary:
    //     "Paper on motivations behind misleading content on social media using Maslow's Theory.",
    // },
  ];

  return (
    <ul className="flex flex-col">
      {projects.map((project) => (
        <li key={project.slug}>
          <Link
            href={project.link}
            target="_blank"
            className="group flex items-center gap-4 border-b border-border py-3 first:border-t hover:opacity-80 transition-opacity"
          >
            {/* Text */}
            <div className="flex min-w-0 flex-col gap-0.5">
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm leading-tight group-hover:text-primary transition-colors">
                  {project.title}
                </span>
                <span className="shrink-0 text-xs font-mono text-muted-foreground border border-border rounded-full px-1.5 py-0.5 leading-none">
                  {project.kind}
                </span>
              </div>
              {project.repo ? (
                <span className="text-xs font-mono text-muted-foreground truncate">
                  {project.repo}
                </span>
              ) : (
                <span className="text-xs text-muted-foreground truncate">
                  {project.summary}
                </span>
              )}
            </div>

            {/* Arrow */}
            <ArrowUpRightIcon className="ml-auto h-3.5 w-3.5 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
        </li>
      ))}
    </ul>
  );
}