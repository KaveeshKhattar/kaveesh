"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import ThemeSwitcher from "./ThemeSwitcher";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = `/${usePathname().split("/")[1]}`;
  const links = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/projects",
      title: "Projects",
    },
    {
      path: "/publications",
      title: "Publications",
    },
    {
      path: "/blog",
      title: "Blog",
    },
  ] as const;

  return (
    <>
      <header className="md:mt-6">
        <nav className="mx-auto flex max-w-[850px] items-center justify-between gap-3 px-4 py-3 md:px-6">
          <Link href="/" className="shrink-0 text-primary md:block">
            <div>
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 345.000000 425.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,425.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    fill="currentColor"
                    d="M2635 3516 c-108 -46 -370 -294 -687 -651 -107 -121 -210 -233 -228 -250 -18 -16 -78 -91 -133 -165 -162 -219 -306 -380 -338 -380 -24 0 -57 44 -70 94 -13 48 -8 105 26 271 36 179 85 484 100 622 8 67 21 147 31 179 24 82 16 190 -15 215 -40 32 -202 16 -269 -27 -32 -21 -88 -110 -123 -194 -27 -68 -31 -91 -54 -394 -29 -378 -51 -595 -71 -726 -8 -52 -19 -142 -24 -200 -12 -127 -20 -182 -72 -510 -47 -301 -49 -395 -7 -476 59 -115 158 -144 279 -82 60 31 65 37 81 85 10 29 23 87 29 130 18 127 71 347 88 366 23 26 161 117 177 117 14 0 387 -459 448 -553 57 -86 198 -229 258 -262 47 -25 62 -28 128 -26 79 2 147 15 169 34 59 48 92 226 55 297 -16 30 -31 40 -118 75 -90 36 -107 47 -175 115 -41 41 -130 147 -196 235 -130 172 -255 300 -322 331 -23 10 -42 21 -42 24 0 3 40 49 90 103 49 53 115 131 145 172 78 105 143 182 270 320 61 66 174 190 251 275 245 268 322 337 454 406 89 46 121 69 147 102 35 47 42 85 19 117 -7 11 -17 35 -21 54 -10 48 -66 104 -132 133 -76 34 -112 39 -148 24z"
                  />
                </g>
              </svg>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-1">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`${
                  pathname === link.path ? "text-primary" : "text-[#71717a]"
                } relative rounded-lg px-3 py-1.5 text-sm transition-colors`}
                style={{
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                {pathname === link.path && (
                  <motion.span
                    layoutId="bubble"
                    className="absolute inset-0 -z-10 rounded-lg bg-tertiary"
                    // style={{ borderRadius: 9999 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {link.title}
              </Link>
            ))}
          </div>

          <div className="flex justify-center items-center space-x-4">
            {/* Hamburger Menu Button */}
            <button
              className="block md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="flex justify-between">
                <FaBars />
              </div>
            </button>

            {/* Full-Page Menu */}
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed inset-0 z-50 bg-[rgb(250,250,250)] dark:bg-[#0a0a0a] text-black dark:text-white flex flex-col items-center justify-center space-y-6 font-mono"
              >
                <button
                  className="absolute top-4 right-4 text-black dark:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaXmark />
                </button>
                {links.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className="text-lg font-bold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
              </motion.div>
            )}
            <ThemeSwitcher />
          </div>
        </nav>
      </header>
    </>
  );
}
