import React from "react";

import "./projectlists.css";
import programminghero from "./programminghero.png";
import developers from "./developers.png";
import cyberez from "./cyberez.png";

const ProjectLists = () => {
  const styles: React.CSSProperties = {
    backgroundImage: `url(${developers})`,
  };

  return (
    <section className="relative py-[5rem]">
      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
        <div className="rounded-md bg-glassEffect">
          <div
            className="w-full h-[10rem] lg:h-[13rem] bg-top hover:bg-bottom duration-1000 ease-linear bg-no-repeat bg-cover"
            style={styles}
          ></div>
          hello
        </div>
        <div className="rounded-md bg-glassEffect">
          <div className="overflow-hidden w-full h-[13rem]">
            <img
              src={cyberez}
              alt=""
              className="hover-scrollB rounded-tl-md rounded-tr-md"
            />
          </div>
          hello
        </div>
      </article>
    </section>
  );
};

export default ProjectLists;
