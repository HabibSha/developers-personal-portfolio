import React from "react";

import "./certification.css";
import greatlearning from "../../assets/education/greatlearning.png";

const Certification: React.FC = () => {
  return (
    <section className="relative py-[5rem]">
      <article className="text-center">
        <h2 className="h2 text-gradient font-[500]">Certifications</h2>
      </article>
      <article className="grid grid-cols-3 gap-10 mt-5">
        <div className="rounded-md bg-glassEffect">
          <div className="bg-blue-500 relative overflow-hidden rounded-tl-md rounded-tr-md py-4 flex justify-center">
            <img
              src={greatlearning}
              alt="Great Learning"
              className="w-[6.5rem]"
            />
            <div className="w-full h-full hover-overlay">
              <h5 className="h5 uppercase from-upper">Certificate</h5>
            </div>
          </div>
          <div className="text-center my-4">
            <h5 className="h6">MERN Stack</h5>
            <p className="text-gray-500 mt-1">-Name Here</p>
          </div>
        </div>
        <div>hello2</div>
        <div>hello3</div>
      </article>
    </section>
  );
};

export default Certification;
