import ExperienceHero from "../../components/ExperienceHero/ExperienceHero";
import styles from "../../style";

const Experience = () => {
  return (
    <section>
      <article className="relative h-auto pt-[9vh]">
        <div className="blur-leftCorner absolute"></div>
        <div className="blur-rightCorner absolute"></div>
        <div className="blur-bottomCorner absolute"></div>
        <div className={`container mx-auto ${styles.paddingX}`}>
          <ExperienceHero />
        </div>
      </article>
    </section>
  );
};

export default Experience;
