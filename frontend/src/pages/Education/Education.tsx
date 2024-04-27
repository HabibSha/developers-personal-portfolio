import Certification from "../../components/Certification/Certification";
import { certifications, educationWebLinks } from "../../components/Constants";
import EduGraduation from "../../components/EduGraduation/EduGraduation";
import EducationHero from "../../components/EducationHero/EducationHero";
import styles from "../../style";

const Education: React.FC = () => {
  return (
    <section>
      <article className="relative h-auto pt-[9vh]">
        <div className={`${styles.paddingX} container mx-auto`}>
          <EducationHero educationWebLinks={educationWebLinks} />
        </div>
      </article>
      <article className="relative h-auto">
        <div className={`${styles.paddingX} container mx-auto`}>
          <EduGraduation />
        </div>
      </article>
      <article className="relative h-auto">
        <div className={`${styles.paddingX} container mx-auto`}>
          <Certification certifications={certifications} />
        </div>
      </article>
    </section>
  );
};

export default Education;
