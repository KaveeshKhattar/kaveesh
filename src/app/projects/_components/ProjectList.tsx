import Halo from "@/app/_components/Halo";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function ProjectList() {
  const projects = [
    {
      slug: "solan",
      image: "/solan.png",
      title: "Solan",
      kind: "project",
      liveLink: "https://kaveeshkhattar.pythonanywhere.com",
      gitHub: "https://github.com/KaveeshKhattar/Solan",
      summary:
        "Crowd-sourced question bank builder to enhance learning with over 60+ visitors.",
    },
    {
      slug: "teamfinder",
      image: "/teamfinder.png",
      title: "TeamFinder",
      kind: "project",
      liveLink: "https://teamfinder-frontend.vercel.app/",
      gitHub: "https://github.com/KaveeshKhattar/TeamFinder",
      summary:
        "Don't let your inner circle hold you back from participating in hackathons.",
    },
    {
      slug: "teachmate",
      image: "/teachmate.png",
      title: "TeachMate",
      kind: "project",
      liveLink: "https://teachmate-murex.vercel.app/",
      gitHub: "https://github.com/KaveeshKhattar/teachmate",
      summary:
        "Tracks students' performance and creates schedules for my Mom and her 15 students.",
    },
    {
      slug: "disinformation",
      image: "/disinformation.png",
      title: "Psychological Needs at Play in Disinformation",
      kind: "paper",
      paper: "/files/disinformation.pdf",
      summary:
        "Paper on motivations behind misleading content on social media using Maslow's Theory.",
    },
  ];

  return (
    <ul className="animated-list -mx-6 flex snap-x snap-mandatory scroll-pl-6 grid-cols-2 flex-nowrap gap-4 overflow-x-scroll px-6 md:grid md:overflow-auto">
      {projects.map((project) => (
        <li
          key={project.slug}
          className="col-span-1 min-w-80 snap-start transition-opacity bg-secondary p-4 rounded-md"
        >
          <div className="space-y-4">
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
              <div className="space-y-1">
                <p className="font-medium leading-tight min-h-[50px] md:min-h-0">{project.title}</p>
                <p className="text-muted-foreground min-h-[80px] md:min-h-0">{project.summary}</p>
              </div>

              {project.kind === "project" ? (
                <div className="flex space-x-1">
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
              ) : (
                <div className="flex space-x-1">
                  {project.paper && (
                    <Link
                      href={project.paper}
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
                  )}

                  <Link href={`/blog/${project.slug}`} className="w-full">
                    <Button className="w-full">Blog</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
