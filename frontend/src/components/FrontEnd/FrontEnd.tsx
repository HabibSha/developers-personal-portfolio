import { useState } from "react";

import { motion } from "framer-motion";
import { BsLightningFill } from "react-icons/bs";

import heroD from "../../assets/home/heroD.svg";

interface frontendSocial {
  id: string;
  title: string;
  icon: string;
}

interface frontendInfo {
  id: string;
  title: string;
  icon: string;
}

interface Props {
  frontendSocials: frontendSocial[];
  frontendinfos: frontendInfo[];
}

const FrontEnd: React.FC<Props> = ({ frontendSocials, frontendinfos }) => {
  const [hoverState, setHoverState] = useState<{ [key: string]: boolean }>({});

  const handleMouseEnter = (id: string) => {
    setHoverState({ ...hoverState, [id]: true });
  };
  const handleMouseLeave = (id: string) => {
    setHoverState({ ...hoverState, [id]: false });
  };

  return (
    <section>
      <article className="grid text-center gap-0 lg:text-start lg:grid-cols-2 lg:gap-5">
        <div className="pt-[10%] lg:pt-[24%]">
          <motion.h2
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.6,
              duration: 2,
              x: { type: "spring", stiffness: 50 },
              opacity: { duration: 1 },
              ease: "easeInOut",
            }}
            className="h2 text-gradient mb-8"
          >
            Responsive Frontend Development
          </motion.h2>
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.6,
              duration: 2,
              x: { type: "spring", stiffness: 50 },
              opacity: { duration: 1 },
              ease: "easeInOut",
            }}
            className="flex items-center gap-3 lg:gap-6 justify-center lg:justify-start lg:px-[2rem] "
          >
            {frontendSocials.map((frontendSocial) => {
              const { id, title, icon } = frontendSocial;
              return (
                <div id={id} className="relative">
                  <img
                    src={icon}
                    alt={title}
                    className="w-10 mb-[2rem]"
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
                </div>
              );
            })}
          </motion.div>
          {frontendinfos.map((frontend, index) => {
            const { id, title } = frontend;
            return (
              <motion.div
                initial={{ x: -150, opacity: 0.5 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 1.5 + index * 0.5,
                  duration: 2,
                  x: { type: "spring", stiffness: 50 },
                  opacity: { duration: 1 },
                  ease: "easeInOut",
                }}
                key={id}
                className="flex gap-3 mb-4"
              >
                <div className="mt-[6px] lg:mt-2">
                  <BsLightningFill className="text-colorPink text-[19px] animate-pulse" />
                </div>
                <p className="body-1 text-start">{title}</p>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.6,
            duration: 2,
            x: { type: "spring", stiffness: 50 },
            opacity: { duration: 1 },
            ease: "easeInOut",
          }}
        >
          <img src={heroD} alt="FrontEnd" className="w-[100%] z-50" />
        </motion.div>
      </article>
    </section>
  );
};

export default FrontEnd;
