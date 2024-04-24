import MernStack from "../MernStack/MernStack";
import { backendSocials, frontendSocials, mernSocials } from "../Constants";
import "./profession.css";
import FrontEnd from "../FrontEnd/FrontEnd";
import BackEnd from "../BackEnd/BackEnd";

const Profession: React.FC = () => {
  return (
    <section className="pt-[5rem] ">
      <div className="text-center">
        <p className="text-xl">Services</p>
        <h2 className="h1 mt-1 mb-4 font-bold">What I do_?</h2>
        <span className="gradient-line"></span>
      </div>
      <article>
        <MernStack mernSocials={mernSocials} />
      </article>
      <article>
        <FrontEnd frontendSocials={frontendSocials} />
      </article>
      <article>
        <BackEnd backendSocials={backendSocials} />
      </article>
    </section>
  );
};

export default Profession;
