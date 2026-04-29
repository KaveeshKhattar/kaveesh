"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ThemeSwitcher from "./ThemeSwitcher";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = `/${usePathname().split("/")[1]}`;

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);
  const links = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/projects", title: "Projects" },
    { path: "/publications", title: "Publications" },
    { path: "/certificates", title: "Certificates" },
    { path: "/open-source", title: "Open Source" },
    { path: "/blog", title: "Blog" },
  ] as const;

  return (
    <>
      <header className="md:mt-6">
        <nav className="mx-auto flex max-w-[950px] items-center justify-between gap-3 px-4 py-3 md:px-6">
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
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                {pathname === link.path && (
                  <motion.span
                    layoutId="bubble"
                    className="absolute inset-0 -z-10 rounded-lg bg-tertiary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {link.title}
              </Link>
            ))}
          </div>

          <div className="flex justify-center items-center space-x-4">
            {/* Hamburger button */}
            <button
              className="block md:hidden p-1.5 rounded-lg text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.15 }}
                  >
                    <FaXmark className="h-4 w-4" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.15 }}
                  >
                    <FaBars className="h-4 w-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <ThemeSwitcher />
          </div>
        </nav>
      </header>

      {/* Full-page mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center md:hidden"
          >
            {/* Close button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-3 right-4 p-1.5 rounded-lg text-muted-foreground hover:text-primary transition-colors"
              aria-label="Close menu"
            >
              <FaXmark className="h-4 w-4" />
            </button>

            <nav className="flex flex-col items-center gap-1 w-full px-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.2 }}
                  className="w-full"
                >
                  <Link
                    href={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-mono transition-colors ${
                      pathname === link.path
                        ? "bg-tertiary text-primary font-medium"
                        : "text-muted-foreground hover:text-primary hover:bg-secondary"
                    }`}
                  >
                    <span>{link.title}</span>
                    {pathname === link.path && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}