import React from "react";

const ProjectHero: React.FC = () => {
  return (
    <section className="relative py-[2rem] grid grid-cols-1 lg:gap-5 lg:grid-cols-2">
      <article className="order-2 lg:order-1 flex justify-center">
        <img src="" alt="Project" className="w-[80%]" />
      </article>
      <article className="text-center lg:pt-[5rem] order-1 lg:order-2">
        <h2 className="h2 text-gradient font-[500]">Projects</h2>
        <p className="body-1 mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et deserunt
          recusandae qui maiores quo debitis, repellendus rerum, veniam eius in
          dolores. Expedita nemo nesciunt accusamus.
        </p>
      </article>
    </section>
  );
};

export default ProjectHero;
