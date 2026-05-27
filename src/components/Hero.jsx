import { useEffect } from "react";
import { heroAnimation } from "../animations/heroAnimation";
import "../styles/hero.css";

function Hero() {
  useEffect(() => {
    const cleanup = heroAnimation();

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-copy">
        <p>Thoughtfully Structured Designed with Intention Publishing & Design</p>

        <a href="#about" className="hero-about-btn">
          About me
        </a>
      </div>

      <div className="hero-connector">
        <span></span>
      </div>

      <div className="hero-hex"></div>

      <div className="hero-object">
        <iframe
          title="3D Diamond"
          src="https://my.spline.design/diamond3dcopycopy-V5ows1M18TXbzAU8mFJ9SYJa-c2W/?v=2"
          frameBorder="0"
          allowFullScreen
        />
      </div>

      <div className="hero-bottom">
        <p className="hero-now">
          <span className="hero-dot"></span>
          NOW VIEWING
        </p>

        <p className="hero-page">01 / 05</p>

        <p className="hero-scroll">SCROLL TO ENTER</p>
      </div>
    </section>
  );
}

export default Hero;
