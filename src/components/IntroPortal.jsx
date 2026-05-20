import { useEffect } from "react";
import { introPortalAnimation } from "../animations/introPortalAnimation";

function IntroPortal() {
  useEffect(() => {
    const cleanup = introPortalAnimation();

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <section className="intro-portal">
      <div className="portal-muted"></div>

      <svg className="portal-holo" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden="true">
        <path className="portal-holo-path" d="M0 900 C360 900 1080 900 1440 900 V900 H0 Z" />
      </svg>

      <div className="portal-bg-text">
        <span>ENTER</span>
        <span>PORTFOLIO</span>
      </div>

      <h1 className="portal-big-name">KIM YEONJI</h1>

      <div className="portal-flower">
        <img src="/images/flower.png" alt="" />
      </div>

      <div className="portal-copy">
        <p>WEB PUBLISHER PORTFOLIO</p>
        <span>HOVER TO ENTER</span>
      </div>
    </section>
  );
}

export default IntroPortal;
