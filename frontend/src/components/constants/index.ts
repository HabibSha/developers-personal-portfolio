import nodejs from "../../assets/social/nodejs.svg";
import react from "../../assets/social/react.svg";
import tailwind from "../../assets/social/tailwind.svg";
import express from "../../assets/social/expressJS.svg";
import mongodb from "../../assets/social/mongodb.svg";
import npm from "../../assets/social/npm.svg";
import html5 from "../../assets/social/html5.svg";
import css from "../../assets/social/css.svg";
import javascript from "../../assets/social/javascript.svg";
import typescript from "../../assets/social/typescript.svg";
import redux from "../../assets/social/redux.svg";
import git from "../../assets/social/git.svg";
import firebase from "../../assets/social/firebase.svg";
import figma from "../../assets/social/figma.svg";
import aws from "../../assets/social/aws.svg";
import github from "../../assets/social/github.svg";
import lightning from "../../assets/home/lightning.svg";

import gub from "../../assets/education/gub.svg";

import hackerrank from "../../assets/website/hackerrank.svg";
import leetcode from "../../assets/website/leetcode.svg";

import greatlearning from "../../assets/education/greatlearning.png";
import simplylearn from "../../assets/education/simplylearn.png";

import developers from "../../assets/projects/developers.png";
import cyberez from "../../assets/projects/cyberez.png";
import redonion from "../../assets/projects/redonion.png";
import programminghero from "../../assets/projects/programminghero.png";

import phone from "../../assets/contact/phone.svg";
import email from "../../assets/contact/email.svg";
import location from "../../assets/contact/location.svg";

export const navLinks = [
  {
    id: "1",
    link: "/",
    title: "Home",
  },

  {
    id: "2",
    link: "education",
    title: "Education",
  },
  {
    id: "3",
    link: "projects",
    title: "Projects",
  },
  {
    id: "4",
    link: "experience",
    title: "Experience",
  },
  {
    id: "5",
    link: "contact-me",
    title: "Contact Me",
  },
];

export const mernSocials = [
  { id: "1", title: "NodeJS", icon: nodejs },
  { id: "2", title: "ExpressJS", icon: express },
  { id: "3", title: "ReactJS", icon: react },
  { id: "4", title: "MongoDB", icon: mongodb },
  { id: "5", title: "TailwindCSS", icon: tailwind },
  { id: "6", title: "NPM", icon: npm },
];

export const mernInfos = [
  {
    id: "1",
    title:
      "Building responsive website and dynamic front end using React-Redux and Tailwind CSS for styling",
    icon: lightning,
  },
  {
    id: "2",
    title:
      "Using MongoDB Database to create CRUD Rest API for serving data back end to front end",
    icon: lightning,
  },
  {
    id: "3",
    title: "Creating application backend in Node and Express JS",
    icon: lightning,
  },
];

export const frontendSocials = [
  { id: "1", title: "HTML5", icon: html5 },
  { id: "2", title: "CSS3", icon: css },
  { id: "3", title: "JavaScript", icon: javascript },
  { id: "4", title: "ReactJS", icon: react },
  { id: "5", title: "TailwindCSS", icon: tailwind },
];

export const frontendInfos = [
  {
    id: "1",
    title:
      "Building also responsive website front end using HTML, CSS and JavaScript",
    icon: lightning,
  },
  {
    id: "2",
    title:
      "For more accuracy, using React with TypeScript and for nesting style using SASS and Tailwind CSS (framework)",
    icon: lightning,
  },
  {
    id: "3",
    title: "From validation with JavaScript DOM manipulation",
    icon: lightning,
  },
];

export const backendSocials = [
  { id: "1", title: "MongoDB", icon: mongodb },
  { id: "2", title: "Firebase", icon: firebase },
  { id: "3", title: "AWS", icon: aws },
  { id: "4", title: "Figma", icon: figma },
  { id: "5", title: "Git", icon: git },
  { id: "6", title: "GitHub", icon: github },
];

export const backendInfos = [
  {
    id: "1",
    title: "For Version control system and Host of source code Git & GitHub",
    icon: lightning,
  },
  {
    id: "2",
    title:
      "Experience working on multiple cloud platforms. Hosting and maintaining website on virtual machine instances along with integration of databases",
    icon: lightning,
  },
  {
    id: "3",
    title:
      "Designing highly attractive user interface for mobile and web applications",
    icon: lightning,
  },
];

export const educationWebLinks = [
  {
    id: "1",
    title: "HackerRank",
    link: "https://www.hackerrank.com/profile/Habib_Shah",
    icon: hackerrank,
  },
  {
    id: "2",
    title: "LeetCode",
    link: "https://leetcode.com/habibshahalahi7424/",
    icon: leetcode,
  },
];

export const educationInfos = [
  {
    id: "1",
    institute: "Green University of Bangladesh",
    subject: "BSc in Electrical and Electronic Engineering (EEE)",
    accomplish: "running",
    image: gub,
    details: [
      {
        id: "1",
        desc: "I am studying electrical and electronic engineering subjects like Electronics, Electromagnetism etc.",
      },
      {
        id: "2",
        desc: "Apart from this, I have done courses on Great Learning, Front End Development, Cloud Infra Architecture and MERN Stack Development.",
      },
      {
        id: "3",
        desc: "Engineering is more than just solving code or wires and circuits – it's about problem-solving, innovation, and the relentless pursuit of progress. With the right guidance and resources.",
      },
    ],
    link: "https://green.edu.bd/",
  },
  {
    id: "2",
    institute: "AKM Rahmatullah University College",
    subject: "HSC in Science",
    accomplish: "2017-2019",
    image: gub,
    details: [
      {
        id: "1",
        desc: "I have studied science where my academic career was conducting research projects that explored pressing issues in the scientific community.",
      },
      {
        id: "2",
        desc: "Apart from this, I acquired knowledge about computer literacy which increased my skills and experience.",
      },
      {
        id: "3",
        desc: "I wanted to find a program that would not only challenge me academically but also provide me with hands-on experience in the field.",
      },
    ],
    link: "https://green.edu.bd/",
  },
];

export const certifications = [
  {
    id: "1",
    title: "MERN Stack Fundamentals",
    alt: "Great Learning",
    name: "",
    link: "https://olympus.mygreatlearning.com/courses/105615/certificate",
    image: greatlearning,
  },
  {
    id: "2",
    title: "JavaScript for Beginners",
    alt: "Simply Learn",
    name: "",
    link: "https://lms.simplilearn.com/courses/4212/JavaScript-for-Beginners/certificate/download-skillup",
    image: simplylearn,
  },
  {
    id: "3",
    title: "JavaScript Specialist",
    alt: "Great Learning",
    name: "",
    link: "https://olympus.mygreatlearning.com/courses/105615/certificate",
    image: greatlearning,
  },
];

export const projectLists = [
  {
    id: "1",
    title: "Portfolio - A Portfolio Website for Web Developers",
    image: developers,
    projectIcons: [
      { id: "1", title: "ReactJS", icon: react },
      { id: "2", title: "JavaScript", icon: javascript },
      { id: "3", title: "TypeScript", icon: typescript },
      { id: "4", title: "TailwindCSS", icon: tailwind },
    ],
    // alt: "Portfolio",
  },
  {
    id: "2",
    title: "CyberEz - A Programming Language Course Website",
    image: cyberez,
    projectIcons: [
      { id: "1", title: "HTML5", icon: html5 },
      { id: "2", title: "CSS3", icon: css },
      { id: "3", title: "JavaScript", icon: javascript },
    ],
    // alt: "CyberEz",
  },
  {
    id: "3",
    title: "RedOnion - A E-commerce Application for Foods Item",
    image: redonion,
    projectIcons: [
      { id: "1", title: "ReactJS", icon: react },
      { id: "2", title: "Redux", icon: redux },
      { id: "3", title: "TailwindCSS", icon: tailwind },
      { id: "4", title: "Firebase", icon: firebase },
    ],
    // alt: "RedOnion",
  },
  {
    id: "4",
    title: "Dummy - For Testing Purpose",
    image: programminghero,
    projectIcons: [
      { id: "1", title: "ReactJS", icon: react },
      { id: "2", title: "JavaScript", icon: javascript },
      { id: "3", title: "TypeScript", icon: typescript },
      { id: "4", title: "TailwindCSS", icon: tailwind },
    ],
    // alt: "ProgrammingHero",
  },
];

export const contactInfo = [
  {
    id: "1",
    title: "Contact Number",
    contact: "+880 1642457202",
    icon: phone,
  },
  {
    id: "2",
    title: "My Email Address",
    contact: "habibshahalahi7424@gmail.com",
    icon: email,
  },
  {
    id: "3",
    title: "My Location",
    contact: "Madani Ave, Vatara, Main Road, Gulashan, Dhaka-1212",
    icon: location,
  },
];
