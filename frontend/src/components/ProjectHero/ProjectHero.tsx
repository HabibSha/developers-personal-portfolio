import React from "react";

import projectC from "../../assets/projects/projectC.svg";

const ProjectHero: React.FC = () => {
  return (
    <section className="relative py-[1rem] grid grid-cols-1 lg:gap-5 lg:grid-cols-2">
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
    </section>
  );
};

export default ProjectHero;
