import React from "react";

import "./edugraduation.css";

const EduGraduation: React.FC = () => {
  return (
    <section className="relative py-[5rem]">
      <article className="text-center">
        <h2 className="h2 text-gradient">Degrees and Under Graduation</h2>
      </article>
      <article className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
        <div className="bg-black text-center lg:text-start">hello</div>
        <div className="pb-3 col-span-2 rounded-md bg-glassEffect">
          <div className="py-3 px-4 bg-gradientR rounded-tl-md rounded-tr-md flex flex-col lg:flex-row lg:justify-between lg:items-start">
            <div className="mb-1 lg:mb-0">
              <h5 className="h5 mb-1">Green University of Bangladesh</h5>
              <h6 className="h6">
                BSc in Electrical and Electronic Engineering (EEE)
              </h6>
            </div>
            <p className="text-[13px] md:text-[14px] lg:text-[16px] font-[500]">
              Running
            </p>
          </div>
          <div className="pb-3 pt-6 px-4">
            <p className="body-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, explicabo! Blanditiis ratione quam dolores asperiores
              est praesentium laudantium saepe placeat cum, veritatis amet.
              Dignissimos sapiente veritatis quaerat consequatur dolor hic?
            </p>
            <p className="body-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, explicabo! Blanditiis ratione quam dolores asperiores
              est praesentium laudantium saepe placeat cum, veritatis amet.
              Dignissimos sapiente veritatis quaerat consequatur dolor hic?
            </p>
          </div>
        </div>
        <div></div>
      </article>
      <article className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
        <div className="bg-black text-center lg:text-start">hello</div>
        <div className="pb-3 col-span-2 rounded-md bg-glassEffect">
          <div className="py-3 px-4 bg-gradientR rounded-tl-md rounded-tr-md flex flex-col lg:flex-row lg:justify-between lg:items-start">
            <div className="mb-1 lg:mb-0">
              <h5 className="h5 mb-1">AKM Rahmatullah University College</h5>
              <h6 className="h6">HSC in Science</h6>
            </div>
            <p className="text-[13px] md:text-[14px] lg:text-[16px] font-[500]">
              2017-2019
            </p>
          </div>
          <div className="pb-3 pt-6 px-4">
            <p className="body-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, explicabo! Blanditiis ratione quam dolores asperiores
              est praesentium laudantium saepe placeat cum, veritatis amet.
              Dignissimos sapiente veritatis quaerat consequatur dolor hic?
            </p>
            <p className="body-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, explicabo! Blanditiis ratione quam dolores asperiores
              est praesentium laudantium saepe placeat cum, veritatis amet.
              Dignissimos sapiente veritatis quaerat consequatur dolor hic?
            </p>
          </div>
        </div>
        <div></div>
      </article>
    </section>
  );
};

export default EduGraduation;
