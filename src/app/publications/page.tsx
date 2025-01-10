import Link from "next/link";
import Halo from "../_components/Halo";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AllPublications() {
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
      <div className="animate-in grid md:grid-cols-2 gap-4">
        {allPublications.map((publication) => (
          <div
            key={publication.slug}
            className="space-y-4 bg-secondary p-4 rounded-md"
          >
            <div className="aspect-video overflow-hidden rounded-md bg-secondary">
              <Halo strength={10}>
                <Image
                  src={publication.image}
                  alt={publication.title}
                  fill
                  className="h-full w-full object-cover"
                />
              </Halo>
            </div>

            <div className="flex-col space-y-4">
              <div>
                <p className="font-medium leading-tight">{publication.title}</p>
                <p className="text-muted-foreground">{publication.summary}</p>
              </div>

              <div className="flex justify-between space-x-2">
                <Link
                  href={publication.paper}
                  target="_blank"
                  className="w-full"
                >
                  <Button className="w-full border-2 border-primary text-primary bg-inherit hover:bg-secondary">
                    <div className="flex items-center space-x-2 text-md">
                      <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023"
                        />
                      </svg>
                      <p>Paper</p>
                    </div>
                  </Button>
                </Link>

                <Link href={`/blog/${publication.slug}`} className="w-full">
                  <Button className="w-full">Blog</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const allPublications = [
  {
    slug: "disinformation",
    image: "/disinformation.png",
    title: "Psychological Needs at Play in Disinformation",
    paper: "/files/disinformation.pdf",
    summary:
      "Paper on motivations behind misleading content on social media using Maslow's Theory.",
  },
  {
    slug: "comparative-analysis",
    image: "/comparative-analysis.png",
    title: "Advancements in Text-to-Image Generation",
    paper: "/files/comparative-analysis.pdf",
    summary:
      "Comparative analysis of text-to-image models, providing an overview of their capabilities.",
  },
  {
    slug: "text-to-scene",
    image: "/text-to-scene.png",
    title:
      "Exploring Novel Image Generation via Script-Directed Scene Formation",
    paper: "/files/text-to-scene.pdf",
    summary:
      "Create unique representations of real world entities using a pretrained DF GAN.",
  },
];
