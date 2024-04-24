import "./home.css";
import Hero from "../../components/Hero/Hero";
import styles from "../../style";
import {
  BackgroundBox,
  BackgroundDot,
} from "../../components/design/Home/Home";
import Profession from "../../components/Profession/Profession";

const Home: React.FC = () => {
  return (
    <section className="border-b-[1px]">
      <article className="relative border-b-[1px] h-auto pt-[9vh]">
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
      <article className="relative">
        <div className="blur-leftCorner absolute"></div>
        <div className="blur-leftMiddle absolute"></div>
        <div className="blur-leftBottom absolute"></div>
        <div className="blur-topMiddle absolute"></div>
        <div className="blur-rightMiddle absolute"></div>
        <div className="blur-rightBottom absolute"></div>
        <div>
          <BackgroundBox />
        </div>
        <div className={`container mx-auto ${styles.paddingX}`}>
          <Profession />
        </div>
      </article>
    </section>
  );
};

export default Home;
