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

  const [uiVisible, setUiVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setUiVisible(window.scrollY > window.innerHeight * 0.6);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="portfolio">
      <div className={`global-ui ${uiVisible ? "show" : ""}`}>
        <Sidebar />
        <BottomBar />
      </div>

      <main className={`main ${uiVisible ? "with-ui" : "intro-mode"}`}>
        <Header />
        <IntroPortal />
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
