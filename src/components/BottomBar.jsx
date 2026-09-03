import { useEffect, useState } from "react";

const allSections = [
  { id: "work01", label: "HOME START" },
  { id: "work02", label: "CHAPANDA" },
  { id: "video", label: "VIDEO ARCHIVE" },
  { id: "design", label: "DESIGN ARCHIVE" },
  { id: "about", label: "ABOUT ME" },
];

function BottomBar() {
  const [sections, setSections] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const existingSections = allSections.filter((section) =>
      document.getElementById(section.id)
    );

    setSections(existingSections);
  }, []);

  useEffect(() => {
    if (sections.length === 0) return;

    let scrollTimer;

    const getActiveIndex = () => {
      let closestIndex = 0;
      let closestDistance = Infinity;

      const viewportCenter = window.innerHeight / 2;

      sections.forEach((section, index) => {
        const el = document.getElementById(section.id);

        if (!el) return;

        const rect = el.getBoundingClientRect();

        const sectionCenter =
          rect.top + rect.height / 2;

        const distance =
          Math.abs(sectionCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      return closestIndex;
    };

    const handleScroll = () => {
      setIsScrolling(true);

      clearTimeout(scrollTimer);

      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 150);

      setActiveIndex(getActiveIndex());
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      clearTimeout(scrollTimer);
    };
  }, [sections]);

  if (sections.length === 0) return null;

  const currentSection = sections[activeIndex];

  const nextSection =
    sections[activeIndex + 1] || sections[0];

  return (
    <div className="bottom-bar">
      <div className="bottom-left">
        <span
          className={`now-viewing ${isScrolling ? "scrolling" : ""
            }`}
        >
          ● NOW VIEWING
        </span>

        <strong>{currentSection.label}</strong>
      </div>

      <div className="bottom-center">
        <button type="button">|‹</button>

        <p>
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(sections.length).padStart(2, "0")}
        </p>

        <div className="progress">
          <span
            style={{
              width: `${((activeIndex + 1) / sections.length) *
                100
                }%`,
            }}
          ></span>
        </div>

        <button type="button">›|</button>
      </div>

      <div className="bottom-right">
        <span>NEXT SECTION</span>

        <strong>{nextSection.label}</strong>
      </div>
    </div>
  );
}

export default BottomBar;