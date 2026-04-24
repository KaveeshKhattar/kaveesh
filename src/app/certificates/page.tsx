import Link from "next/link";
import { formatDate } from "../_utils/formateDate";
import Section from "../_components/Section";
import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Certificates | Kaveesh Khattar",
  description: "Built by Kaveesh Khattar",
};

type OpenSourceContribution = (typeof openSourceContributions)[number];

export default function OpenSource() {
  const contributions: OpenSourceContribution[] = [...openSourceContributions].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
          Certificates
        </h1>
        <p
          className="animate-in text-muted-foreground"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          Credentials for the craft.
        </p>
      </div>

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
                  {formatDate(item.date)}
                </span>

              </div>
            </div>
          </Section>
        ))}
      </div>
    </div>
  );
}

const openSourceContributions = [
  {
    id: "az-900",
    project: "AZ-900",
    title: "Microsoft Certified: Azure Fundamentals",
    summary:
      "Foundational knowledge of Azure services, cloud concepts, pricing, security, and governance.",
    logo: "/azure.jpg",
    date: "2024-07-01",
  },
  {
    id: "az-204",
    project: "AZ-204",
    title: "Microsoft Certified: Azure Developer Associate",
    summary:
      "Validates ability to design, build, test, and maintain cloud-native applications on Azure using compute, storage, APIs, authentication, and monitoring services.",
    logo: "/azure.jpg",
    date: "2025-05-01",
  },
  {
    id: "az-400",
    project: "AZ-400",
    title: "Microsoft Certified: DevOps Engineer Expert",
    summary:
      "Demonstrates expertise in implementing DevOps practices on Azure, including CI/CD pipelines, infrastructure as code, monitoring, security, and collaboration across development and operations.",
    logo: "/azure.jpg",
    date: "2025-07-01",
  },
] as const;
