import { useState } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import educationA from "../../assets/education/educationA.svg";
import styles from "../../style";

interface EducationWebLink {
  id: string;
  title: string;
  link: string;
  icon: string;
}

interface Props {
  educationWebLinks: EducationWebLink[];
}

const EducationHero: React.FC<Props> = ({ educationWebLinks }) => {
  const [hoverState, setHoverState] = useState<{ [key: string]: boolean }>({});

  const handleMouseEnter = (id: string) => {
    setHoverState({ ...hoverState, [id]: true });
  };
  const handleMouseLeave = (id: string) => {
    setHoverState({ ...hoverState, [id]: false });
  };

  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.6,
        y: { type: "spring", stiffness: 50 },
        opacity: { duration: 1.8 },
        ease: "easeInOut",
        duration: 2.5,
      }}
      className="relative py-[4rem] lg:py-[2rem]  grid grid-cols-1 lg:gap-5 lg:grid-cols-2"
    >
      <article className="order-2 lg:order-1 flex justify-center">
        <img src={educationA} alt="Education" className="w-[80%]" />
      </article>
      <article className="text-center lg:pt-[5rem] order-1 lg:order-2">
        <h2 className="h2 text-gradient font-[500]">Education</h2>
        <h4 className="h4 mt-3">Basic Qualification and Certifications</h4>
        <div className={`${styles.flexCenter} gap-6 lg:px-[2rem] pt-[2rem]`}>
          {educationWebLinks.map((eduWebLink) => {
            const { id, title, link, icon } = eduWebLink;
            return (
              <Link to={link} key={id} target="_blank" className="relative">
                <img
                  src={icon}
                  alt={title}
                  className="w-10 lg:w-14 mb-[2rem]"
                  onMouseEnter={() => handleMouseEnter(id)}
                  onMouseLeave={() => handleMouseLeave(id)}
                />
                <span
                  className={`absolute -top-7 -left-4 bg-gradient px-1 ${
                    hoverState[id] ? "block" : "hidden"
                  }`}
                >
                  {title}
                </span>
              </Link>
            );
          })}
        </div>
      </article>
    </motion.section>
  );
};

export default EducationHero;
