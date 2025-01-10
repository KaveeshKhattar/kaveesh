"use client";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import Link from "next/link";

type Workplace = {
  title: string;
  company: string;
  imageSrc: string | StaticImageData;
  date?: string;
  link?: string;
};

function Workplace({ title, company, imageSrc, date, link }: Workplace) {
  if (!date) return null;
  const [startMonth, startYear, _hyphen, endMonth] = date.split(" ");
  const content = (
    <>
      <div className="flex justify-between w-full gap-4">
        
        <div className="flex space-x-1">
          <div>
            <Image
              src={imageSrc}
              alt={company}
              width={48}
              height={48}
              className={clsx("rounded-md")}
            />
          </div>

          <div className="flex flex-col gap-px">
            <p className={link ? "external-arrow" : ""}>{title}</p>
            <p className="text-muted-foreground">{company}</p>
          </div>
        </div>

        <p className="text-muted-foreground text-end">
        {startMonth}
            <span>&nbsp;</span>
            {startYear}
            {_hyphen}
            <span>&nbsp;</span>
            {endMonth}
          </p>
        {/* {date && <time className="text-muted-foreground">{date}</time>} */}
      </div>
    </>
  );
  return (
    <li className="transition-opacity" key={title}>
      {link ? (
        <Link
          href={link}
          className="flex justify-between w-full px-3 py-2 -mx-3 -my-2 no-underline"
        >
          {content}
        </Link>
      ) : (
        <div className="flex justify-between ">{content}</div>
      )}
    </li>
  );
}

export default function Workplaces({ items }: { items: Workplace[] }) {
  return (
    <ul className="flex flex-col gap-8 animated-list">
      {items.map(Workplace)}
    </ul>
  );
}
