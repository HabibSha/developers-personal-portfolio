import { motion } from "framer-motion";

import MernStack from "../MernStack/MernStack";
import {
  backendInfos,
  backendSocials,
  contributeSites,
  frontendInfos,
  frontendSocials,
  mernInfos,
  mernSocials,
} from "../Constants";
import "./profession.css";
import FrontEnd from "../FrontEnd/FrontEnd";
import BackEnd from "../BackEnd/BackEnd";
import Contribute from "../Contribute/Contribute";

const Profession: React.FC = () => {
  return (
    <section className="pt-[5rem] ">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0,
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 0.6 },
          ease: "easeInOut",
          duration: 1,
        }}
        className="text-center"
      >
        <p className="text-xl">Services</p>
        <h2 className="h1 mt-1 mb-4 font-bold">What I do_?</h2>
        <span className="gradient-line"></span>
      </motion.div>
      <article>
        <MernStack mernSocials={mernSocials} mernInfos={mernInfos} />
      </article>
      <article>
        <FrontEnd
          frontendSocials={frontendSocials}
          frontendinfos={frontendInfos}
        />
      </article>
      <article>
        <BackEnd backendSocials={backendSocials} backendInfos={backendInfos} />
      </article>
      <article className="overflow-hidden">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.6,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.5 },
            ease: "easeInOut",
            duration: 1,
          }}
          className="text-center"
        >
          <h2 className="h2 mt-1 mb-4 font-semibold">Learning Organizations</h2>
          <p className="body-1">
            Some organizations that helped me a lots to learn latest technology
            tools.
          </p>
          <span className="gradient-line"></span>
        </motion.div>
        <Contribute contributeSites={contributeSites} />
      </article>
    </section>
  );
};

export default Profession;
