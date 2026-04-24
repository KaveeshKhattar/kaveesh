"use client";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import Link from "next/link";

type Education = {
  degree: string;
  institution: string;
  fieldOfStudy?: string;
  imageSrc: string | StaticImageData;
  date?: string;
  link?: string;
};

function EducationItem({ degree, institution, fieldOfStudy, imageSrc, date, link }: Education) {
  if (!date) return null;
  const [startMonth, startYear, _hyphen, endMonth] = date.split(" ");

  const content = (
    <div className="flex justify-between w-full gap-4">
      <div className="flex min-w-0 space-x-2">
        <div className="flex-shrink-0">
          <Image
            src={imageSrc}
            alt={institution}
            width={48}
            height={48}
            className="rounded-md object-cover"
          />
        </div>

        <div className="flex min-w-0 flex-col gap-px">
          <p className={link ? "external-arrow" : ""}>{degree}</p>
          <p className="text-muted-foreground">{institution}</p>
          {fieldOfStudy && (
            <p className="text-muted-foreground text-sm">{fieldOfStudy}</p>
          )}
        </div>
      </div>

      
      <p className="pl-4 text-end text-muted-foreground">
        {startMonth}
        <span>&nbsp;</span>
        {startYear}
        <span>&nbsp;</span>
        {_hyphen}
        <span>&nbsp;</span>
        {endMonth}
      </p>
    </div>
  );

  return (
    <li className="transition-opacity" key={degree}>
      {link ? (
        <Link
          href={link}
          className="flex justify-between w-full px-3 py-2 -mx-3 -my-2 no-underline"
        >
          {content}
        </Link>
      ) : (
        <div className="flex justify-between">{content}</div>
      )}
    </li>
  );
}

export default function EducationList({ items }: { items: Education[] }) {
  return (
    <ul className="flex flex-col gap-8 animated-list">
      {items.map((item) => (
        <EducationItem key={item.degree} {...item} />
      ))}
    </ul>
  );
}
