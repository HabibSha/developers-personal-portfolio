import React from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./certification.css";

interface Certification {
  id: string;
  title: string;
  alt: string;
  name: string;
  link: string;
  image: string;
}

interface Props {
  certifications: Certification[];
}

const Certification: React.FC<Props> = ({ certifications }) => {
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
      className="relative lg:pt-[2rem] pb-[5rem]"
    >
      <article className="text-center">
        <h2 className="h2 text-gradient font-[500]">Certifications</h2>
      </article>
      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
        {certifications.map((certification) => {
          const { id, title, alt, name, link, image } = certification;

          let backgroundColorClass = "";
          // Set different background colors based on the id
          switch (id) {
            case "1":
              backgroundColorClass = "bg-blue-400";
              break;
            case "2":
              backgroundColorClass = "bg-green-400";
              break;
            case "3":
              backgroundColorClass = "bg-blue-400";
              break;
            // Add more cases as needed
            default:
              backgroundColorClass = "bg-gray-500";
          }
          return (
            <div key={id} className="rounded-md bg-glassEffect">
              <Link
                to={link}
                target="_blank"
                className={`${backgroundColorClass} relative overflow-hidden rounded-tl-md rounded-tr-md py-4 flex justify-center`}
              >
                <img src={image} alt={alt} className="w-[6.5rem]" />
                <div className="w-full h-full hover-overlay">
                  <h5 className="h5 uppercase from-upper">Certificate</h5>
                </div>
              </Link>
              <div className="text-center my-4">
                <h5 className="h6">{title}</h5>
                <p className="text-gray-500 body-1 mt-1">{name}</p>
              </div>
            </div>
          );
        })}
      </article>
    </motion.section>
  );
};

export default Certification;
