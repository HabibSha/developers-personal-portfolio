import React from "react";

import styles from "../../style";
import ProjectDetail from "../../components/ProjectDetail/ProjectDetail";
import { projectLists } from "../../components/Constants";

const ProjectDetails: React.FC = () => {
  return (
    <section>
      <article>
        <div className="blur-leftCorner absolute"></div>
        <div className="blur-rightCorner absolute"></div>
        <div className="blur-bottomCorner absolute"></div>
        <div className="blur-leftBottom absolute"></div>
        <div className="blur-rightBottom absolute"></div>
        <div className="blur-center absolute"></div>
        <div className={`container mx-auto ${styles.paddingX}`}>
          <ProjectDetail projectLists={projectLists} />
        </div>
      </article>
    </section>
  );
};

export default ProjectDetails;
