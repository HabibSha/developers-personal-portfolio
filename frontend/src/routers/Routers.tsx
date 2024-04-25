import { Route, Routes } from "react-router-dom";

import Layout from "../layouts/Layout";
import Home from "../pages/Home/Home";
import Projects from "../pages/Project/Projects";
import Education from "../pages/Education/Education";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="education" element={<Education />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routers;
