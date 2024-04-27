import { projectLists } from "../../components/Constants";
import ProjectHero from "../../components/ProjectHero/ProjectHero";
import ProjectLists from "../../components/ProjectLists/ProjectLists";
import styles from "../../style";

const Projects = () => {
  return (
    <section className="border-b-[1px]">
      <article className="relative border-b-[1px] h-auto pt-[9vh]">
        <div className={`container mx-auto ${styles.paddingX}`}>
          <ProjectHero />
        </div>
      </article>
      <article className="relative border-b-[1px] h-auto">
        <div className={`container mx-auto ${styles.paddingX}`}>
          <ProjectLists projectLists={projectLists} />
        </div>
      </article>
    </section>
  );
};

export default Projects;
