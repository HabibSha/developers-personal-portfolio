import { useEffect, useState } from "react";

import "./App.css";
import Routers from "./routers/Routers";
import Intro from "./components/Intro/Intro";

function App() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const hasSeenIntro = localStorage.getItem("hasSeenIntro");

    if (!hasSeenIntro) {
      setShowIntro(true); // Show intro
      localStorage.setItem("hasSeenIntro", "true"); // Mark intro as seen
      // Automatically hide the intro after 6 seconds
      setTimeout(() => {
        setShowIntro(false);
      }, 6000);
    }
  }, []);

  return (
    <>
      {showIntro && <Intro />}
      {!showIntro && <Routers />}
    </>
  );
}

export default App;
