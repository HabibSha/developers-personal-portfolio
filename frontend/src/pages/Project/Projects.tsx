import ProjectHero from "../../components/ProjectHero/ProjectHero";
import styles from "../../style";

const Projects = () => {
  return (
    <section className="border-b-[1px]">
      <article className="relative border-b-[1px] h-auto pt-[9vh]">
        <div className={`container mx-auto ${styles.paddingX}`}>
          <ProjectHero />
        </div>
      </article>
    </section>
  );
};

export default Projects;
