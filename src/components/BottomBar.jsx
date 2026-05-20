import { useEffect } from "react";

function BottomBar() {
  useEffect(() => {
    let scrollTimer;

    const handleScroll = () => {
      const nowViewing = document.querySelector(".now-viewing");
      if (!nowViewing) return;

      nowViewing.classList.add("scrolling");

      clearTimeout(scrollTimer);

      scrollTimer = setTimeout(() => {
        nowViewing.classList.remove("scrolling");
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  return (
    <div className="bottom-bar">
      <div className="bottom-left">
        <span className="now-viewing">● NOW VIEWING</span>
        <strong>WEB PROJECT 01</strong>
      </div>

      <div className="bottom-center">
        <button type="button">|‹</button>
        <p>01 / 05</p>
        <div className="progress">
          <span></span>
        </div>

        <button type="button">›|</button>
      </div>

      <div className="bottom-right">
        <span>NEXT SECTION</span>
        <strong>VIDEO ARCHIVE</strong>
      </div>
    </div>
  );
}

export default BottomBar;
