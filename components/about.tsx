"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="mb-3">
        <p>
          I am 19 years old, too ambitious individual. I{" "}
          <span className="font-bold">graduated</span> from high school in Nitra
          (PGJKNR). I started going to{" "}
          <span className="font-bold">college</span> (FIIT), but early did i
          realize i really needed a <span className="font-bold">gap year</span>{" "}
          to try all the things i wanted because i am mad. So this year i will
          be applying again but perhaps i will find a great job to start my{" "}
          <span className="font-bold">career</span>
        </p>
        <br/>
        I started with <span className="font-bold">Python</span>, then changed to <span className="font-bold">Python</span> and slowly fell in love with it. Then i learned <span className="font-bold">HTML</span> & <span className="font-bold">CSS</span>, after that <span className="font-bold">React</span> and a lot of about it, with that i mastered <span className="font-bold">tailwind</span>. Then i moved to <span className="font-bold">NextJS</span>, which i currently use the most, with that i actively use <span className="font-bold">TypeScript</span> (<span className="font-bold">TS</span> still haunts me in my dreams). I also learnt some <span className="font-bold">databases</span>, <span className="font-bold">backend</span> and so on. For more move to section <Link href={"#skills"} className="uppercase font-bold underline hover:text-black/70 active:text-black/60 w-fit ">Skills</Link>
        <br/>
        <br/>
        <p>
          As this is intended to be my <span className="font-bold"> IT </span>{" "}
          portfolio i will just briefly tell you what i do besides programming.
          I do forex trading, know something about investing, every morning
          i do some <span className="font-bold">pushups</span>, i take care of my <span className="font-bold">chickens</span>, <span className="font-bold">cats</span> and <span className="font-bold">dogs</span>. I like <span className="font-bold">cars</span> with big engines.
          Sometimes i do <span className="font-bold">social media</span>. I have also quiet strong <span className="font-bold">discipline</span> that's why i learn a lot of stuff. I try to use my big <span className="font-bold">brain</span> a lot
          {" "}
        </p>
      </div>
    </motion.section>
  );
}
