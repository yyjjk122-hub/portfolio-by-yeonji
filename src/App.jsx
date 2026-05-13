import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import IntroPortal from "./components/IntroPortal";
import Hero from "./components/Hero";
import WorkSection from "./components/WorkSection";
import VideoSection from "./components/VideoSection";
import BannerSection from "./components/BannerSection";
import IllustrationSection from "./components/IllustrationSection";
import AboutSection from "./components/AboutSection";
import BottomBar from "./components/BottomBar";
import useLenis from "./hooks/useLenis";
function App() {
  useLenis();
  return (
    <div className="portfolio">
      <Sidebar />

      <main className="main">
        <Header />
        <IntroPortal />
        <Hero />
        <WorkSection />
        <VideoSection />
        <BannerSection />
        <IllustrationSection />
        <AboutSection />
      </main>

      <BottomBar />
    </div>
  );
}

export default App;
