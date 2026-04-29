import { Metadata } from "next";
import Image, { StaticImageData } from "next/image";
import presentation from "../../../public/presentation.jpg";
import myself from "../../../public/myself.jpeg";
import Gallery from "./_components/Gallery";
import Section from "../_components/Section";
import ConnectLinks from "../_components/ConnectLinks";
import Link from "next/link";
import ItemList from "./_components/ItemList";
import att from "../../../public/att.jpg";
import myelin from "../../../public/myelin.png";
import pes from "../../../public/pes.png";
import nyu from "../../../public/nyu.jpg";

export const metadata: Metadata = {
  title: "About | Kaveesh Khattar",
  description: "Built by Kaveesh Khattar",
};

export default function About() {
  const processedWorkplaces = workplaces.map((w) => ({
    title: w.title,
    subtitle: w.company,
    imageSrc: w.imageSrc,
    imageStyle: "contain" as const,
    date: w.date.replace(" ", "\u00A0"),
    link: w.link,
  }));

  const processedEducation = education.map((e) => ({
    title: e.degree,
    subtitle: e.institution,
    imageSrc: e.imageSrc,
    imageStyle: "cover" as const,
    date: e.date?.replace(" ", "\u00A0"),
    link: e.link,
  }));

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
          About
        </h1>
        <p
          className="animate-in text-muted-foreground"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          A glimpse into me.
        </p>
      </div>

      <div className="mb-8 md:hidden">
        <div
          className="animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Image
            src={myself}
            alt={"myself"}
            width={324}
            height={139}
            className="pointer-events-none relative inset-0 h-52 w-60 -rotate-6 rounded-xl bg-neutral-400 object-cover object-right shadow-md"
            priority
          />
        </div>
        <div
          className="animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Image
            src={presentation}
            alt={"presentation"}
            width={220}
            height={260}
            className="pointer-events-none absolute inset-0 -top-44 left-[40%] w-48 rotate-6 rounded-xl bg-neutral-400 object-cover shadow-md md:left-[60%] md:w-56"
            priority
          />
        </div>
      </div>

      <div className="hidden md:block">
        <Gallery />
      </div>

      <div
        className="flex animate-in flex-col gap-16 md:gap-24"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <Section heading="About" headingAlignment="left">
          <div className="flex flex-col gap-6">
            <p>
              Hey, I&apos;m Kaveesh Khattar! Originally from Delhi, I was born
              and raised in Bangalore, with five years spent in Mumbai.
            </p>
            <p>
              I got into Computer Science through hands-on experimentation with
              home networking and early internet setups. That curiosity
              eventually grew into a deeper interest in building software.
            </p>
            <p>
              Beyond work, I&apos;ve enjoyed leading workshops and contributing
              to tech communities to foster learning and engagement in software
              development.
            </p>
            <p>
              When I&apos;m not at my desk, I am probably lifting weights,
              playing the guitar or cooking :]
            </p>
          </div>
        </Section>

        <Section heading="Education" headingAlignment="left">
        <div className="flex flex-col gap-8">
            <p>I have graduated from PES University, majoring in Computer Science with a specialisation in Machine Intelligence and Data Science.</p>
            <ItemList items={processedEducation} />
          </div>
        </Section>

        <Section heading="Work" headingAlignment="left">
          <div className="flex flex-col gap-8">
            <p>
              I am a generalist software engineer with a focus on infrastructure
              and observability. I enjoy building iOS apps on the side and am
              constantly exploring new technologies.
            </p>
            <ItemList items={processedWorkplaces} />
          </div>
        </Section>

        <Section heading="Connect" headingAlignment="left">
          <ul className="animated-list grid flex-grow grid-cols-1 gap-3 md:grid-cols-2">
            {ConnectLinks.map((link) => (
              <li className="col-span-1 transition-opacity" key={link.label}>
                <Link
                  href={link.href}
                  className="inline-grid w-full rounded-lg bg-secondary p-4 no-underline transition-opacity"
                  target="_blank"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{link.icon}</span>
                    {link.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="ml-auto h-5 w-5 text-secondary"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  );
}

const workplaces = [
  {
    title: "Software Engineer",
    company: "AT&T",
    date: "Jul 2024 - ",
    imageSrc: att,
    link: "https://att.com",
  },
  {
    title: "Software Engineer Intern",
    company: "AT&T",
    date: "Feb 2024 - Jul 2024",
    imageSrc: att,
    link: "https://att.com",
  },
  {
    title: "Machine Learning Intern",
    company: "Myelin Foundry",
    date: "Jun 2023 - Jul 2023",
    imageSrc: myelin,
    link: "https://www.myelinfoundry.com/",
  },
];

const education = [
  // {
  //   degree: "Master of Science in Computer Science",
  //   institution: "New York University",
  //   date: "Sep 2026 - May 2028",
  //   imageSrc: nyu,
  //   link: "https://www.nyu.edu/",
  // },
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "PES University",
    date: "Dec 2020 - May 2024",
    imageSrc: pes,
    link: "https://pes.edu/",
  },
];