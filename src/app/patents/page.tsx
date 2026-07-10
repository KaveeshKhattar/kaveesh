import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import Section from "../_components/Section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Patents | Kaveesh Khattar",
  description: "Built by Kaveesh Khattar",
};

const patents = [
  {
    id: "path-loss-iab",
    assignee: "AT&T",
    title: "Path Loss in Integrated Access and Backhaul Networks",
    summary:
      "CNN-LSTM hybrid model that predicts optimal spectrum selection for 5G mmWave IAB nodes by jointly learning spatial signal-strength patterns and temporal factors, reducing path loss and improving backhaul reliability in dense wireless deployments.",
    number: "19/724832", // placeholder for now
    logo: "/att-logo.jpg",
  },
] as const;

export default function Patents() {
  return (
    <div className="flex flex-col gap-2 md:gap-6">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
          Patents
        </h1>
        <p
          className="animate-in text-muted-foreground"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          Serve & Protect.
        </p>
      </div>

      <div className="animate-in flex flex-col gap-8">
        {patents.map((patent) => (
          <Section
            key={patent.id}
            heading={patent.assignee}
            headingAlignment="left"
            leading={
              <div className="flex flex-col items-center gap-2">
                <Image
                  src={patent.logo}
                  alt={`${patent.assignee} logo`}
                  width={120}
                  height={80}
                  className="rounded-md border border-border bg-secondary object-contain"
                />
                <span className="text-sm font-mono leading-tight text-pretty text-primary">
                  {patent.assignee}
                </span>
              </div>
            }
          >
            <div className="flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-1">
                <span className="font-medium leading-tight text-pretty">
                  {patent.title}
                </span>
                <span className="text-sm text-muted-foreground text-pretty">
                  {patent.summary}
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs text-muted-foreground">
                  Assignee: {patent.assignee}
                </span>

                <span className="text-xs font-mono text-muted-foreground">
                  {patent.number}
                </span>
              </div>
            </div>
          </Section>
        ))}
      </div>
    </div>
  );
}
