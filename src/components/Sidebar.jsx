function Sidebar() {
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
        <strong>ACTIVE ●</strong>
      </div>
    </aside>
  );
}

export default Sidebar;
