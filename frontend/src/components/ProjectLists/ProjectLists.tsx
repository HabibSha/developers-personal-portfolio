import { useState } from "react";

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
  image: string;
  projectIcons: ProjectIcon[];
}

interface Props {
  projectLists: ProjectList[];
}

const ProjectLists: React.FC<Props> = ({ projectLists }) => {
  const [hoverState, setHoverState] = useState<{ [key: string]: boolean }>({});

  const handleMouseEnter = (id: string) => {
    setHoverState({ ...hoverState, [id]: true });
  };
  const handleMouseLeave = (id: string) => {
    setHoverState({ ...hoverState, [id]: false });
  };

  return (
    <section className="relative py-[5rem]">
      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
        {projectLists.map((projectList) => {
          const { id, title, image, projectIcons } = projectList;
          return (
            <div key={id} className="rounded-md bg-glassEffect">
              <div
                className="w-full h-[10rem] lg:h-[13rem] bg-top hover:bg-bottom duration-1000 ease-linear bg-no-repeat bg-cover rounded-tl-md rounded-tr-md"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
              <div className="p-4">
                <div className="flex justify-between items-baseline gap-4">
                  <h6 className="h6">{title}</h6>
                  <div className="flex items-center gap-5">
                    <Link to="#" target="_blank">
                      <FaGithub className="text-[1.4rem]" />
                    </Link>
                    <Link to="#" target="_blank">
                      <FaExternalLinkAlt className="text-xl" />
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="flex justify-start items-center order-2 lg:order-1">
                    <button className="btnPrimary">Details</button>
                  </div>
                  <div className="flex items-center lg:justify-end gap-4 mt-6 order-1 lg:order-2">
                    {projectIcons.map((projectIcon) => {
                      const { id, title, icon } = projectIcon;
                      return (
                        <div id={id} className="relative">
                          <img
                            src={icon}
                            alt=""
                            className="w-7 mb-[2rem]"
                            onMouseEnter={() => handleMouseEnter(id)}
                            onMouseLeave={() => handleMouseLeave(id)}
                          />
                          <span
                            className={`absolute text-[15px] -top-7 -left-4 bg-gradient px-1 ${
                              hoverState[id] ? "block" : "hidden"
                            }`}
                          >
                            {title}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </article>
      <div className="mt-10 text-center">
        <Link to="">
          <button className="btnPrimary">More Projects</button>
        </Link>
      </div>
    </section>
  );
};

export default ProjectLists;