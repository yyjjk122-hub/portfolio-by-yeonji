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

  /* =========================
     새로고침 시 항상 최상단
  ========================= */
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  /* =========================
     INTRO SCROLL LOCK
  ========================= */
  useEffect(() => {
    document.body.style.overflow = entered ? "" : "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [entered]);

  return (
    <div className="portfolio">
      {!entered && (
        <IntroPortal onEnter={() => setEntered(true)} />
      )}

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