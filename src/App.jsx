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

  const [entered, setEntered] = useState(false);

  useEffect(() => {
    document.body.style.overflow = entered ? "" : "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [entered]);

  return (
    <div className="portfolio">
      {!entered && <IntroPortal onEnter={() => setEntered(true)} />}

      <div className={`global-ui ${entered ? "show" : ""}`}>
        <Sidebar />
        <BottomBar />
      </div>

      <main className={`main ${entered ? "with-ui" : "intro-mode"}`}>
        <Header />

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