import { useEffect } from "react";

function Sidebar() {
  useEffect(() => {
    let scrollTimer;

    const handleScroll = () => {
      const dot = document.querySelector(".status-dot");
      if (!dot) return;

      dot.classList.add("scrolling");

      clearTimeout(scrollTimer);

      scrollTimer = setTimeout(() => {
        dot.classList.remove("scrolling");
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  const moveToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <strong>KIM YEONJI</strong>
        <span>WEB PUBLISHER</span>
        <span>PORTFOLIO</span>
      </div>

      <nav className="side-nav">
        <p>NAVIGATION</p>

        <ul>
          <li>
            <button onClick={() => moveToSection("#work")}>
              <span>01</span>
              WEB PROJECT
            </button>
          </li>

          <li>
            <button onClick={() => moveToSection("#video")}>
              <span>02</span>
              VIDEO ARCHIVE
            </button>
          </li>

          <li>
            <button onClick={() => moveToSection("#design")}>
              <span>03</span>
              DESIGN ARCHIVE
            </button>
          </li>

          <li>
            <button onClick={() => moveToSection("#about")}>
              <span>04</span>
              ABOUT ME
            </button>
          </li>
        </ul>
      </nav>

      <div className="interface-mode">
        <span>INTERFACE MODE</span>
        <strong className="interface-status">
          ACTIVE <span className="status-dot"></span>
        </strong>
      </div>
    </aside>
  );
}

export default Sidebar;
