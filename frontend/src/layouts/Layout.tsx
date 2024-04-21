import { Outlet } from "react-router-dom";

import "./layout.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import { navLinks } from "../components/Constants/index.ts";

const Layout = () => {
  return (
    <>
      <Header navLinks={navLinks} />
      <main className="relative min-h-[calc(100vh)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
