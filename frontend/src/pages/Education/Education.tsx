import Certification from "../../components/Certification/Certification";
import { educationWebLinks } from "../../components/Constants";
import EduGraduation from "../../components/EduGraduation/EduGraduation";
import EducationHero from "../../components/EducationHero/EducationHero";
import styles from "../../style";

const Education: React.FC = () => {
  return (
    <section className="border-b-[1px]">
      <article className="relative border-b-[1px] h-auto pt-[9vh]">
        <div className={`${styles.paddingX} container mx-auto`}>
          <EducationHero educationWebLinks={educationWebLinks} />
        </div>
      </article>
      <article className="relative border-b-[1px] h-auto">
        <div className={`${styles.paddingX} container mx-auto`}>
          <EduGraduation />
        </div>
      </article>
      <article className="relative border-b-[1px] h-auto">
        <div className={`${styles.paddingX} container mx-auto`}>
          <Certification />
        </div>
      </article>
    </section>
  );
};

export default Education;
