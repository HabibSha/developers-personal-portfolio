import { motion } from "framer-motion";

import comingsoon from "../../assets/experience/comingsoon.svg";

const ExperienceHero: React.FC = () => {
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
    >
      <article className="flex justify-center items-center mt-[8rem] md:mt-6rem lg:mt-0 flex-col">
        <img
          src={comingsoon}
          alt="Coming Soon"
          className="w-[100%] lg:w-[90%]"
        />
      </article>
    </motion.section>
  );
};

export default ExperienceHero;
