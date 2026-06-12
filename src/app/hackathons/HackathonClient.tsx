"use client";

import Link from "next/link";
import { formatDate } from "../_utils/formateDate";
import Section from "../_components/Section";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const hackathons = [
  {
    id: "tars-tetrate-ai-buildathon",
    event: "Tetrate AI Buildathon",
    title: "TARS — Autonomous Inference Traffic Agent",
    summary:
      "Built an autonomous SRE agent that detects, diagnoses, and remediates failures in Kubernetes-hosted LLM inference clusters. Used a Node.js orchestration layer, a Python fault simulator, and a live SSE dashboard to surface real-time remediation actions without human intervention.",
    link: "https://github.com/kaveeshkhattar/tars-traffic-agent",
    github: "https://github.com/kaveeshkhattar/tars-traffic-agent",
    logo: "/tetrate-square-sm.png",
    date: "2026-06-12",
    role: "🏆 Top 5 · Special Judges Award — AI Infrastructure Innovation",
  },
] as const;

type Hackathon = (typeof hackathons)[number];

export default function HackathonsClient() {
  return (
    <div className="flex flex-col gap-2 md:gap-6">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
          Hackathons
        </h1>
        <p
          className="animate-in text-muted-foreground"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          Move fast and build things
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex flex-col gap-8"
      >
        {hackathons.map((item: Hackathon) => (
          <Section
            key={item.id}
            heading={item.event}
            headingAlignment="left"
            leading={
              <div className="flex flex-col items-center gap-2">
                <Image
                  src={item.logo}
                  alt={item.event}
                  width={120}
                  height={80}
                  className="rounded-md border border-border bg-secondary object-contain"
                />
                <span className="text-sm font-mono leading-tight text-pretty text-primary">
                  {item.event}
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
      </motion.div>
    </div>
  );
}