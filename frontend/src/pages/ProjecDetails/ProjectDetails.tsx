import React from "react";

import styles from "../../style";
import ProjectDetail from "../../components/ProjectDetail/ProjectDetail";
import { projectLists } from "../../components/Constants";

const ProjectDetails: React.FC = () => {
  return (
    <section>
      <article>
        <div className={`container mx-auto ${styles.paddingX}`}>
          <ProjectDetail projectLists={projectLists} />
        </div>
      </article>
    </section>
  );
};

export default ProjectDetails;
