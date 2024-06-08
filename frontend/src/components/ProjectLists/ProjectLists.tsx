import { useState } from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectIcon {
  id: string;
  title: string;
  icon: string;
}

interface ProjectList {
  id: string;
  title: string;
  img: string;
  link: string;
  live: string;
  projectIcons: ProjectIcon[];
}

interface Props {
  projectLists: ProjectList[];
}

const ProjectLists: React.FC<Props> = ({ projectLists }) => {
  const [hoverStates, setHoverStates] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleMouseEnter = (index: number, iconIndex: number) => {
    const key = `${index}-${iconIndex}`;
    setHoverStates((prevState) => ({ ...prevState, [key]: true }));
  };

  const handleMouseLeave = (index: number, iconIndex: number) => {
    const key = `${index}-${iconIndex}`;
    setHoverStates((prevState) => ({ ...prevState, [key]: false }));
  };

  return (
    <section className="relative py-[5rem]">
      <article className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-5">
        {projectLists.map((projectList, index) => {
          const { id, title, img, link, live, projectIcons } = projectList;
          const slug = title.toLowerCase().replace(/ /g, "-");
          return (
            <div key={id} className="rounded-md bg-glassEffect">
              <div
                className="w-full h-[10rem] sm:h-[12rem] lg:h-[14rem] bg-top hover:bg-bottom duration-1000 ease-linear bg-no-repeat bg-cover rounded-tl-md rounded-tr-md"
                style={{ backgroundImage: `url(${img})` }}
              ></div>
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.6,
                  y: { type: "spring", stiffness: 50 },
                  opacity: { duration: 1.8 },
                  ease: "easeInOut",
                  duration: 2.5,
                }}
                className="p-4"
              >
                <div className="flex justify-between items-baseline gap-4">
                  <h6 className="h6">{title}</h6>
                  <div className="flex items-center gap-5">
                    <Link to={link} target="_blank">
                      <FaGithub className="text-[1.4rem]" />
                    </Link>
                    <Link to={live} target="_blank">
                      <FaExternalLinkAlt className="text-xl" />
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="flex justify-start items-center order-2 lg:order-1">
                    <Link to={`/projects/${slug}`} className="btnPrimary">
                      Details
                    </Link>
                  </div>
                  <div className="flex items-center lg:justify-end gap-4 mt-6 order-1 lg:order-2">
                    {projectIcons.map((projectIcon, iconIndex) => {
                      const { id, title, icon } = projectIcon;
                      const key = `${index}-${iconIndex}`;
                      return (
                        <div key={id} className="relative">
                          <img
                            src={icon}
                            alt={title}
                            className="w-7 mb-[2rem]"
                            onMouseEnter={() =>
                              handleMouseEnter(index, iconIndex)
                            }
                            onMouseLeave={() =>
                              handleMouseLeave(index, iconIndex)
                            }
                          />
                          <span
                            className={`absolute text-[15px] -top-7 -left-4 bg-gradient px-1 ${
                              hoverStates[key] ? "block" : "hidden"
                            }`}
                          >
                            {title}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </article>
      <div className="mt-10 text-center">
        <Link
          to="https://github.com/HabibSha"
          target="_blank"
          className="btnPrimary"
        >
          More Projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectLists;
