import MernStack from "../MernStack/MernStack";
import {
  backendInfos,
  backendSocials,
  frontendInfos,
  frontendSocials,
  mernInfos,
  mernSocials,
} from "../Constants";
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
    </section>
  );
};

export default Profession;
