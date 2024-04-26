import { useState } from "react";

import heroD from "../../assets/home/heroD.svg";

interface frontendSocial {
  id: string;
  title: string;
  icon: string;
}

interface Props {
  frontendSocials: frontendSocial[];
}

const FrontEnd: React.FC<Props> = ({ frontendSocials }) => {
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
        <div className="pt-[10%] lg:pt-[28%]">
          <h2 className="h2 text-gradient mb-8">
            Responsive Frontend Development
          </h2>
          <div className="flex items-center gap-3 lg:gap-6 justify-center lg:justify-start lg:px-[2rem] ">
            {frontendSocials.map((frontendSocial) => {
              const { id, title, icon } = frontendSocial;
              return (
                <div id={id} className="relative">
                  <img
                    src={icon}
                    alt=""
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
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            illum necessitatibus nihil officiis voluptatibus iure? Vitae
            incidunt laboriosam quidem ipsa similique aliquam atque magnam
            exercitationem? Sint error voluptate fugit eveniet?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            dolore expedita reprehenderit doloremque consectetur est debitis
            laboriosam assumenda molestias tenetur?
          </p>
        </div>
        <div>
          <img src={heroD} alt="" className="max-w-[100%]" />
        </div>
      </article>
    </section>
  );
};

export default FrontEnd;
