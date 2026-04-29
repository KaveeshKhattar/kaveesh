"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Item = {
  title: string;
  subtitle: string;
  subtitleExtra?: string;
  imageSrc: string | StaticImageData;
  imageStyle?: "cover" | "contain";
  date?: string;
  link?: string;
};

function parseDate(date: string) {
  const parts = date.split(" ");
  return parts.map((part, i) => (
    <span key={i}>
      {part}
      {i < parts.length - 1 && <span>&nbsp;</span>}
    </span>
  ));
}

function ListItem({ title, subtitle, subtitleExtra, imageSrc, imageStyle = "cover", date, link }: Item) {
  if (!date) return null;

  const content = (
    <div className="flex justify-between w-full gap-2">
      <div className="flex min-w-0 space-x-2 flex-1">
        <div className="flex-shrink-0">
          <Image
            src={imageSrc}
            alt={subtitle}
            width={48}
            height={48}
            className={`rounded-md object-${imageStyle}`}
          />
        </div>
        <div className="flex min-w-0 flex-col gap-px">
          <p className={link ? "external-arrow" : ""}>{title}</p>
          <p className="text-muted-foreground">{subtitle}</p>
          {subtitleExtra && (
            <p className="text-muted-foreground">{subtitleExtra}</p>
          )}
        </div>
      </div>
      <p className="text-end text-muted-foreground shrink-0 max-w-[80px] pl-2">
        {parseDate(date)}
      </p>
    </div>
  );

  return (
    <li className="transition-opacity">
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

export default function ItemList({ items }: { items: Item[] }) {
  return (
    <ul className="flex flex-col gap-8 animated-list">
      {items.map((item) => (
        <ListItem key={item.title + item.subtitle} {...item} />
      ))}
    </ul>
  );
}