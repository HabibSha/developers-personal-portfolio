import { useState } from "react";

import { NavLink } from "react-router-dom";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

import styles from "../../style";

type NavLink = {
  id: string;
  title: string;
};
type HeaderProps = {
  navLinks: NavLink[];
};

const Header: React.FC<HeaderProps> = ({ navLinks }) => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enableBodyScroll;
    } else {
      setOpenNavigation(true);
      disableBodyScroll;
    }
  };

  return (
    <section
      className={`bg-transparent w-full h-[9vh] ${styles.borderBottom} ${styles.flexCenter} fixed z-50`}
    >
      <nav
        className={`${styles.flexBetween} ${styles.resContainer} ${styles.paddingX}`}
      >
        <div className="text-2xl font-bold">Portfolio</div>
        <ul className={`${styles.flexBetween} hidden md:flex`}>
          {navLinks.map((navLink, index) => {
            const { id, title } = navLink;
            return (
              <li key={id} className={`${styles.flexBetween} gap-4`}>
                <NavLink
                  to={id}
                  className={`${
                    index === navLinks.length - 1
                      ? "mr-0"
                      : "mr-[2.8rem] lg:mr-[4rem]"
                  }`}
                >
                  {title}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <article onClick={toggleNavigation} className="md:hidden">
          {openNavigation ? (
            <RiCloseFill className="text-3xl cursor-pointer" />
          ) : (
            <RiMenu4Fill className="text-3xl cursor-pointer" />
          )}
        </article>

        {/* className={({ isActive }) =>
              isActive ? "font-bold" : "font-medium"
            } */}

        {/* Mobile Menu */}
        <div
          className={`${
            !openNavigation ? "translate-x-[100%]" : "translate-x-[0]"
          } md:hidden transition duration-500 w-3/6 h-screen absolute py-12 top-[9vh] right-0 bg-orange-500 `}
        >
          <ul className={`flex flex-col items-center `}>
            {navLinks.map((navLink, index) => {
              const { id, title } = navLink;
              return (
                <li key={id} className={`${styles.flexBetween}`}>
                  <NavLink
                    to={id}
                    className={`${
                      index === navLinks.length - 1 ? "mb-0" : "mb-[2.8rem]"
                    }`}
                  >
                    {title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Header;
