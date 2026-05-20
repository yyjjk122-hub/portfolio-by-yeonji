import { useEffect, useState } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import IntroPortal from "./components/IntroPortal";
import Hero from "./components/Hero";
import WorkSection from "./components/WorkSection";
import VideoSection from "./components/VideoSection";
import DesignSection from "./components/DesignSection";
import AboutSection from "./components/AboutSection";
import BottomBar from "./components/BottomBar";

import useLenis from "./hooks/useLenis";

function App() {
  useLenis();

  const [entered, setEntered] = useState(() => {
    return sessionStorage.getItem("introEntered") === "true";
  });

  const [uiVisible, setUiVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setUiVisible(window.scrollY > window.innerHeight * 0.3);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleEnter = () => {
    sessionStorage.setItem("introEntered", "true");
    setEntered(true);
  };

  return (
    <div className="portfolio">
      <div className={`global-ui ${uiVisible ? "show" : ""}`}>
        <Sidebar />
        <BottomBar />
      </div>

      <main className={`main ${uiVisible ? "with-ui" : "intro-mode"}`}>
        <Header />

        {!entered && <IntroPortal onEnter={handleEnter} />}

        <Hero />
        <WorkSection />
        <VideoSection />
        <DesignSection />
        <AboutSection />
      </main>
    </div>
  );
}

export default App;
