function Header() {
  const moveToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <button
              type="button"
              onClick={() => moveToSection("#work")}
            >
              WEB
            </button>
          </li>

          <li>
            <button
              type="button"
              onClick={() => moveToSection("#video")}
            >
              VIDEO
            </button>
          </li>

          <li>
            <button
              type="button"
              onClick={() => moveToSection("#design")}
            >
              DESIGN
            </button>
          </li>

          <li>
            <button
              className="about-btn"
              type="button"
              aria-label="ABOUT ME로 이동"
              onClick={() => moveToSection("#about")}
            >
              <span className="about-circle">
                <span className="about-circle-inner" />
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;