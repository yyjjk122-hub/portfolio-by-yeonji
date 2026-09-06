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
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

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

  const isLastSection =
    activeIndex === sections.length - 1;

  const nextSection = isLastSection
    ? null
    : sections[activeIndex + 1];

  const moveToSection = (index) => {
    const targetSection = sections[index];

    if (!targetSection) return;

    document.getElementById(targetSection.id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handlePrev = () => {
    const prevIndex =
      activeIndex === 0
        ? sections.length - 1
        : activeIndex - 1;

    moveToSection(prevIndex);
  };

  const handleNext = () => {
    if (isLastSection) return;

    moveToSection(activeIndex + 1);
  };

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
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
          <button
            type="button"
            aria-label="이전 섹션"
            onClick={handlePrev}
          >
            |‹
          </button>

          <div className="progress">
            <span
              style={{
                width: `${((activeIndex + 1) / sections.length) * 100
                  }%`,
              }}
            />
          </div>

          <button
            type="button"
            aria-label="다음 섹션"
            onClick={handleNext}
            disabled={isLastSection}
          >
            ›|
          </button>
        </div>

        <div className="bottom-right">
          <span>
            {isLastSection
              ? "END OF PORTFOLIO"
              : "NEXT SECTION"}
          </span>

          <strong>
            {isLastSection
              ? "THANK YOU"
              : nextSection.label}
          </strong>
        </div>
      </div>

      <button
        className="top-btn"
        type="button"
        aria-label="맨 위로 이동"
        onClick={handleTop}
      >
        <span>↑</span>
        TOP
      </button>
    </>
  );
}

export default BottomBar;