import "./home.css";
import Hero from "../../components/Hero/Hero";
import styles from "../../style";
import {
  BackgroundBox,
  BackgroundDot,
  ProfessionBackgroundDot,
} from "../../components/design/Home/Home";
import Profession from "../../components/Profession/Profession";
import Contribute from "../../components/Contribute/Contribute";

const Home: React.FC = () => {
  return (
    <section>
      <article className="border-b-2 relative h-auto pt-[9vh]">
        <div className="blur-leftCorner absolute"></div>
        <div className="blur-rightCorner absolute"></div>
        <div className="blur-bottomCorner absolute"></div>
        <div>
          <BackgroundDot />
        </div>
        <div className={`container mx-auto ${styles.paddingX}`}>
          <Hero />
        </div>
      </article>
      <article className="relative overflow-y-hidden">
        <div className="blur-leftCorner absolute"></div>
        <div className="blur-leftMiddle absolute"></div>
        <div className="blur-leftBottom absolute"></div>
        <div className="blur-topMiddle absolute"></div>
        <div className="blur-rightMiddle absolute"></div>
        <div className="blur-rightBottom absolute"></div>
        <div>
          <ProfessionBackgroundDot />
        </div>
        <div>
          <BackgroundBox />
        </div>
        <div className={`container mx-auto ${styles.paddingX}`}>
          <Profession />
        </div>
      </article>
      <article>
        <div className={`container overflow-hidden mx-auto ${styles.paddingX}`}>
          <Contribute />
        </div>
      </article>
    </section>
  );
};

export default Home;
