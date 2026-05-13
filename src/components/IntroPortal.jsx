import { useEffect } from "react";
import { introPortalAnimation } from "../animations/introPortalAnimation";

function IntroPortal() {
  useEffect(() => {
    introPortalAnimation();
  }, []);

  return (
    <section className="intro-portal">
      <div className="portal-bg-text">
        <span>ENTER</span>
        <span>PORTFOLIO</span>
      </div>

      <div className="portal-frame">
        <div className="portal-inner">
          <p>WEB PUBLISHER PORTFOLIO</p>
          <strong>KIM YEONJI</strong>
        </div>
      </div>
    </section>
  );
}

export default IntroPortal;
