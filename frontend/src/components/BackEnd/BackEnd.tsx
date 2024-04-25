import { useState } from "react";

import heroC from "../../assets/home/heroC.svg";

interface backendSocial {
  id: string;
  title: string;
  icon: string;
}

interface Props {
  backendSocials: backendSocial[];
}

const BackEnd: React.FC<Props> = ({ backendSocials }) => {
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
        <div className="order-2 lg:order-1">
          <img src={heroC} alt="" className="max-w-[100%]" />
        </div>
        <div className="pt-[10%] lg:pt-[28%] order-1 lg:order-2">
          <h2 className="h2 text-gradient mb-8">
            Backend Tools | Cloud Infra-Architecture | UI/UX design
          </h2>
          <div className="flex items-center gap-6 justify-center lg:justify-start lg:px-[2rem] ">
            {backendSocials.map((backendSocial) => {
              const { id, title, icon } = backendSocial;
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
      </article>
    </section>
  );
};

export default BackEnd;
