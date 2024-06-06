import React from "react";

import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

interface ContributeSite {
  id: string;
  alt: string;
  image: string;
}

interface Props {
  contributeSites: ContributeSite[];
}

const Contribute: React.FC<Props> = ({ contributeSites }) => {
  return (
    <motion.section
      initial={{ y: 70, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.6,
        y: { type: "spring", stiffness: 50 },
        opacity: { duration: 1 },
        ease: "easeInOut",
        duration: 1.5,
      }}
      className="relative py-[3rem] lg:py-[5rem]"
    >
      <article>
        <Marquee speed={100} pauseOnHover>
          {contributeSites.map((contributeSite) => {
            const { id, alt, image } = contributeSite;
            let imageSize = "";
            // Set different width based on the id
            switch (id) {
              case "1":
                imageSize = "w-[5rem] lg:w-[8rem]";
                break;
              case "2":
                imageSize = "w-[4rem] lg:w-[7rem]";
                break;
              case "3":
                imageSize = "w-[8rem] lg:w-[11rem]";
                break;
              case "4":
                imageSize = "w-[4rem] lg:w-[7rem]";
                break;
              case "5":
                imageSize = "w-[3rem] lg:w-[6rem]";
                break;
              case "6":
                imageSize = "w-[1.5rem] lg:w-[3rem]";
                break;
              case "7":
                imageSize = "w-[3.5rem] lg:w-[5rem]";
                break;
              case "8":
                imageSize = "w-[9rem] lg:w-[12rem]";
                break;
              case "9":
                imageSize = "w-[4rem] lg:w-[7rem]";
                break;
              // Add more cases as needed
              default:
                imageSize = "w-[7rem]";
            }
            return (
              <div
                key={id}
                className="mx-[1rem] lg:mx-[2rem] bg-slate-200 px-4 py-2 rounded-sm opacity-80"
              >
                <img src={image} alt={alt} className={`${imageSize}`} />
              </div>
            );
          })}
        </Marquee>
      </article>

      <article className="mt-8">
        <Marquee speed={100} direction="right" pauseOnHover>
          {contributeSites.map((contributeSite) => {
            const { id, alt, image } = contributeSite;
            let imageSize = "";
            // Set different width based on the id
            switch (id) {
              case "1":
                imageSize = "w-[5rem] lg:w-[8rem]";
                break;
              case "2":
                imageSize = "w-[4rem] lg:w-[7rem]";
                break;
              case "3":
                imageSize = "w-[8rem] lg:w-[11rem]";
                break;
              case "4":
                imageSize = "w-[4rem] lg:w-[7rem]";
                break;
              case "5":
                imageSize = "w-[3rem] lg:w-[6rem]";
                break;
              case "6":
                imageSize = "w-[1.5rem] lg:w-[3rem]";
                break;
              case "7":
                imageSize = "w-[3.5rem] lg:w-[5rem]";
                break;
              case "8":
                imageSize = "w-[9rem] lg:w-[12rem]";
                break;
              case "9":
                imageSize = "w-[4rem] lg:w-[7rem]";
                break;
              // Add more cases as needed
              default:
                imageSize = "w-[7rem]";
            }
            return (
              <div
                key={id}
                className="mx-[1rem] lg:mx-[2rem] bg-slate-200 px-4 py-2 rounded-sm opacity-80"
              >
                <img src={image} alt={alt} className={`${imageSize}`} />
              </div>
            );
          })}
        </Marquee>
      </article>
    </motion.section>
  );
};

export default Contribute;
