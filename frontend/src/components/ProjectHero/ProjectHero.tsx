import React from "react";

import { motion } from "framer-motion";

import projectC from "../../assets/projects/projectC.svg";

const ProjectHero: React.FC = () => {
  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.6,
        y: { type: "spring", stiffness: 50 },
        opacity: { duration: 1.8 },
        ease: "easeInOut",
        duration: 2.5,
      }}
      className="relative pt-[3rem] lg:py-[1rem] grid grid-cols-1 lg:gap-5 lg:grid-cols-2"
    >
      <article className="order-2 lg:order-1 flex justify-center">
        <img src={projectC} alt="Project" className="w-[100%]" />
      </article>
      <article className="text-center lg:pt-[10rem] order-1 lg:order-2">
        <h2 className="h2 text-gradient font-[500]">Projects</h2>
        <p className="body-1 mt-3">
          All of my projects make use of a vast variety of the latest technology
          tools. My best experience is to create MERN Stack projects using cloud
          infrastructure and for more accuracy I use typescript etc.
        </p>
      </article>
    </motion.section>
  );
};

export default ProjectHero;
