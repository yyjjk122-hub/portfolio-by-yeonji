import { useEffect } from "react";
import { heroAnimation } from "../animations/heroAnimation";

function Hero() {
  useEffect(() => {
    heroAnimation();
  }, []);

  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          KIM
          <br />
          YEONJI
        </h1>

        <h2>WEB PUBLISHER PORTFOLIO</h2>

        <p className="hero-desc">
          Designing smooth digital flows
          <br />
          with thoughtful interaction
          <br />
          and clean publishing.
        </p>

        <button className="view-btn" type="button">
          VIEW PROFILE ↗
        </button>
      </div>

      {/* 
      
      */}
    </section>
  );
}

export default Hero;
