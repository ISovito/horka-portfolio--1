"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[6.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-[2.2rem] left-[2rem] font-extrabold tracking-wider font-mono hidden lg:block text-2xl drop-shadow-[0_0_25px_rgb(0,0,0)] dark:drop-shadow-[0_0_25px_rgb(365,365,365)]"
      >
        Lukas
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-[2.2rem] right-[2rem] font-extrabold tracking-wider font-mono hidden lg:block text-2xl drop-shadow-[0_0_25px_rgb(0,0,0)] dark:drop-shadow-[0_0_25px_rgb(365,365,365)]"
      >
        Horka
      </motion.h1>

      <nav className="flex fixed top-[0.8rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1rem] sm:h-[initial] sm:py-0 ">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-4 text-[1.2rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-x-8">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative p-3"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-300 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="hidden sm:block border-b-4 border-neutral-500 absolute inset-0 -z-10 dark:border-neutral-200"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
