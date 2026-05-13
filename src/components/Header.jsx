function Header() {
  const moveToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <button onClick={() => moveToSection("#about")}>ABOUT</button>
          </li>
          <li>
            <button onClick={() => moveToSection("#work")}>WORKS</button>
          </li>
          <li>
            <button onClick={() => moveToSection("#contact")}>CONTACT</button>
          </li>
        </ul>
      </nav>

      <button className="mode-btn" type="button">
        ○
      </button>
    </header>
  );
}

export default Header;
