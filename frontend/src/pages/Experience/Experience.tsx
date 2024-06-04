import ExperienceHero from "../../components/ExperienceHero/ExperienceHero";
import { ExperienceBackgroundDots } from "../../components/design/Experience/Experience";
import styles from "../../style";

const Experience = () => {
  return (
    <section>
      <div>
        <ExperienceBackgroundDots />
      </div>
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
