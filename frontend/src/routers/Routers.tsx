import { Route, Routes } from "react-router-dom";

import Layout from "../layouts/Layout";
import Home from "../pages/Home/Home";
import Projects from "../pages/Project/Projects";
import Education from "../pages/Education/Education";
import ContactMe from "../pages/Contact/ContactMe";
import Experience from "../pages/Experience/Experience";
import Error from "../pages/Error/Error";
import ProjectDetails from "../pages/ProjecDetails/ProjectDetails";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="education" element={<Education />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetails />} />
          <Route path="experience" element={<Experience />} />
          <Route path="contact-me" element={<ContactMe />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routers;
