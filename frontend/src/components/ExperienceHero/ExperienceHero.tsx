import comingsoon from "../../assets/experience/comingsoon.svg";

const ExperienceHero: React.FC = () => {
  return (
    <section>
      <article className="flex justify-center items-center mt-[8rem] md:mt-6rem lg:mt-0 flex-col">
        <img
          src={comingsoon}
          alt="Coming Soon"
          className="w-[100%] lg:w-[90%]"
        />
      </article>
    </section>
  );
};

export default ExperienceHero;
