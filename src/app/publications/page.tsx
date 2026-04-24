import Link from "next/link";
import { formatDate } from "../_utils/formateDate";
import Section from "../_components/Section";
import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Publications | Kaveesh Khattar",
  description: "Built by Kaveesh Khattar",
};

type Publication = (typeof publications)[number];

export default function Publications() {
  const items: Publication[] = [...publications].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
          Publications
        </h1>
        <p
          className="animate-in text-muted-foreground"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          Trying to make a dent in the universe.
        </p>
      </div>

      <div className="animate-in flex flex-col gap-8">
        {items.map((item: Publication) => (
          <Section
            key={item.slug}
            heading={item.journal}
            headingAlignment="left"
            leading={
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm font-mono leading-tight text-pretty text-primary text-center">
                  {item.journal}
                </span>

                <div className="flex gap-2 hidden md:flex">
                  <Link href={item.paper} target="_blank">
                    <Button variant="outline" size="sm">
                      Paper
                    </Button>
                  </Link>

                  <Link href={`/blog/${item.slug}`}>
                    <Button size="sm">Blog</Button>
                  </Link>
                </div>
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

                <div className="flex gap-2 md:hidden">
                  <Link href={item.paper} target="_blank">
                    <Button variant="outline" size="sm">
                      Paper
                    </Button>
                  </Link>

                  <Link href={`/blog/${item.slug}`}>
                    <Button size="sm">Blog</Button>
                  </Link>
                </div>
              </div>
            </div>
          </Section>
        ))}
      </div>
    </div>
  );
}

const publications = [
  {
    slug: "disinformation",
    image: "/disinformation.png",
    title: "Understanding the Psychological Needs at Play in Disinformation",
    paper: "/files/disinformation.pdf",
    summary:
      "Paper on motivations behind misleading content on social media using Maslow's Theory.",
    date: "2024-09-30",
    journal: "SSIC 2023 (Springer SIST)",
    authors: "Kaveesh Khattar, Bhaskarjyoti Das",
    journalLink: "https://doi.org/10.1007/978-981-97-1322-2_1",
  },
  {
    slug: "comparative-analysis",
    image: "/comparative-analysis.png",
    title:
      "Advancements in Text-to-Image Generation: A Comparative Study of Model Architectures, Datasets, and Performance Metrics",
    paper: "/files/comparative-analysis.pdf",
    summary:
      "Comparative analysis of text-to-image models, providing an overview of their capabilities.",
    date: "2024-01-15",
    journal: "CEUR-WS.org (Vol-3706)",
    authors:
      "Tejas Goyal, Kaveesh Khattar, Kubtoor Patel Dhruv, Aditya Hombal, Mamatha Hosalli Ramappa",
    journalLink: "https://ceur-ws.org/Vol-3706/Paper5",
  },
  {
    slug: "text-to-scene",
    image: "/text-to-scene.png",
    title:
      "Exploring Novel Image Generation via Script-Directed Scene Formation",
    paper: "/files/text-to-scene.pdf",
    summary:
      "Create unique representations of real world entities using diffusion based GANs.",
    date: "2025-08-30",
    journal:
      "CoMeSySo 2024 (Springer LNNS)",
    authors:
      "Kaveesh Khattar, Tejas Goyal, K. P. Dhruv, Aditya Hombal, H. R. Mamatha",
    journalLink: "https://doi.org/10.1007/978-3-031-78934-8_45",
  },
] as const;