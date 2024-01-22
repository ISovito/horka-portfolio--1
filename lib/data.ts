import React from "react";
import { TbSchoolOff } from "react-icons/tb";
import { FaUserGraduate } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { LuGraduationCap } from "react-icons/lu";
import { PiStudentBold } from "react-icons/pi";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import comingSoon from '@/public/Untitled.png'

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "High School Graduation",
    location: "Nitra (Piarist Gymnasium)",
    description:"",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Faculty of Informatics and Information Technologies",
    location: "Bratislava (STU)",
    description:
      "",
    icon: React.createElement(PiStudentBold),
    date: "2023",
  },
  {
    title: "Quit University",
    location: "Bratislava (STU)",
    description:
      "I have not been satisfied with study program and decided to quit my studies of my own free will",
    icon: React.createElement(TbSchoolOff),
    date: "2023",
  },
  {
    title: "Self Study",
    location: "",
    description:
      "Studying programming on my own. I am also working a regular job until i get a job at programming industry. Heavily focusing on web development",
    icon: React.createElement(BiCodeAlt),
    date: "2023 - ???",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: comingSoon,
  },
  // {
  //   title: "rmtDev",
  //   description:
  //     "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
  //   tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  //   imageUrl: '',
  // },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: '',
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "SCSS",
  "shadcn/ui",
  "Lua",
] as const;
