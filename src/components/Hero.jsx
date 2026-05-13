import { useEffect } from "react";
import { heroAnimation } from "../animations/heroAnimation";

function Hero() {
  useEffect(() => {
    heroAnimation();
  }, []);

  return (
    <section className="hero">
      <div className="hero-text">
        <p className="now-viewing">● NOW VIEWING</p>

        <h1>
          KIM
          <br />
          YEONJI
        </h1>

        <h2>WEB PUBLISHER PORTFOLIO</h2>

        <p className="hero-desc">
          I build digital experiences
          <br />
          with clean code,
          <br />
          thoughtful structure,
          <br />
          and user-centered interaction.
        </p>

        <button className="view-btn" type="button">
          VIEW PROFILE ↗
        </button>
      </div>

      <div className="hero-visual">
        <div className="yj-logo-wrap" aria-label="YJ logo">
          <div className="yj y">
            <span className="yj-block y-1"></span>
            <span className="yj-block y-2"></span>
            <span className="yj-block y-3"></span>
            <span className="yj-block y-4"></span>
            <span className="yj-block y-5"></span>
          </div>

          <div className="yj j">
            <span className="yj-block j-1"></span>
            <span className="yj-block j-2"></span>
            <span className="yj-block j-3"></span>
            <span className="yj-block j-4"></span>
            <span className="yj-block j-5"></span>
          </div>
        </div>
      </div>

      <div className="current-card">
        <span>CURRENT SECTION</span>
        <strong>01</strong>
        <p>WEB PROJECT</p>
        <b>01 / 05</b>
      </div>
    </section>
  );
}

export default Hero;
