import Certification from "../../components/Certification/Certification";
import {
  certifications,
  educationInfos,
  educationWebLinks,
} from "../../components/Constants";
import EduGraduation from "../../components/EduGraduation/EduGraduation";
import EducationHero from "../../components/EducationHero/EducationHero";
import { EducationBackgroundDots } from "../../components/design/Education/Education";
import styles from "../../style";

const Education: React.FC = () => {
  return (
    <section>
      <div>
        <EducationBackgroundDots />
      </div>
      <article className="relative h-auto pt-[9vh]">
        <div className="blur-leftCorner absolute"></div>
        <div className="blur-rightCorner absolute"></div>
        <div className="blur-bottomCorner absolute"></div>
        <div className={`${styles.paddingX} container mx-auto`}>
          <EducationHero educationWebLinks={educationWebLinks} />
        </div>
      </article>
      <article className="relative h-auto">
        <div className="blur-leftCorner absolute"></div>
        <div className="blur-leftMiddle absolute"></div>
        <div className="blur-topMiddle absolute"></div>
        <div className="blur-rightMiddle absolute"></div>
        <div className={`${styles.paddingX} container mx-auto`}>
          <EduGraduation educationInfos={educationInfos} />
        </div>
      </article>
      <article className="relative h-auto">
        <div className="blur-leftBottom absolute"></div>
        <div className="blur-rightBottom absolute"></div>
        <div className={`${styles.paddingX} container mx-auto`}>
          <Certification certifications={certifications} />
        </div>
      </article>
    </section>
  );
};

export default Education;
