import { useState } from "react";

import { NavLink } from "react-router-dom";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

import "./header.css";

type NavLink = {
  id: string;
  title: string;
};
type HeaderProps = {
  flexItems: string;
  navLinks: NavLink[];
};

const Header: React.FC<HeaderProps> = ({ flexItems, navLinks }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <section className="bg-slate-700 w-full h-[8vh] flex items-center fixed">
      <nav
        className={`${flexItems} container mx-auto md:container lg:container xl:container xl:px-8`}
      >
        <div className="text-2xl font-bold">Portfolio</div>
        <ul className={`${flexItems} hidden md:flex`}>
          {navLinks.map((navLink, index) => {
            const { id, title } = navLink;
            return (
              <li key={id} className={`${flexItems} gap-4`}>
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

        <article onClick={() => setToggle(!toggle)} className="md:hidden">
          {toggle ? (
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
            !toggle ? "translate-x-[100%]" : "translate-x-[0]"
          } md:hidden transition duration-500 w-3/6 h-screen absolute py-12 top-[8vh] right-0 bg-orange-500 `}
        >
          <ul className={`flex flex-col items-center `}>
            {navLinks.map((navLink, index) => {
              const { id, title } = navLink;
              return (
                <li key={id} className={`${flexItems}`}>
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
