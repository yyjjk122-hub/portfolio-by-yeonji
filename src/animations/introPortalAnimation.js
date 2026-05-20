import gsap from "gsap";

export function introPortalAnimation() {
  const section = document.querySelector(".intro-portal");
  const path = document.querySelector(".portal-holo-path");
  const name = document.querySelector(".portal-big-name");
  const flower = document.querySelector(".portal-flower");
  const copy = document.querySelector(".portal-copy");
  const bgText = document.querySelector(".portal-bg-text");

  if (!section || !path || !name || !flower || !copy || !bgText) {
    console.log("intro 요소 못 찾음", {
      section,
      path,
      name,
      flower,
      copy,
      bgText,
    });
    return;
  }

  const hiddenPath = "M0 900 C360 900 1080 900 1440 900 V900 H0 Z";
  const showPath = "M0 80 C360 -120 1080 190 1440 0 V900 H0 Z";

  gsap.set(path, {
    attr: { d: hiddenPath },
  });

  gsap.set(name, {
    x: "-120vw",
    yPercent: -50,
    opacity: 0,
  });

  gsap.set(flower, {
    x: 180,
    y: 90,
    scale: 0.65,
    rotate: -12,
    opacity: 0.2,
    filter: "grayscale(0.9) blur(1px)",
  });

  gsap.set(copy, {
    xPercent: -50,
    yPercent: -50,
    opacity: 1,
    scale: 1,
  });

  gsap.set(bgText, {
    x: 0,
    opacity: 1,
  });

  const enter = () => {
    console.log("intro hover enter");

    gsap.killTweensOf([path, name, flower, copy, bgText]);

    gsap.to(path, {
      attr: { d: showPath },
      duration: 1,
      ease: "power3.inOut",
    });

    gsap.to(name, {
      x: "0vw",
      opacity: 1,
      duration: 1,
      ease: "expo.out",
    });

    gsap.to(flower, {
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      opacity: 0.85,
      filter: "grayscale(0) blur(0px)",
      duration: 1.1,
      ease: "back.out(1.5)",
    });

    gsap.to(copy, {
      opacity: 0,
      yPercent: -62,
      scale: 0.92,
      duration: 0.35,
      ease: "power2.out",
    });

    gsap.to(bgText, {
      opacity: 0.25,
      x: -40,
      duration: 0.7,
      ease: "power2.out",
    });
  };

  const leave = () => {
    console.log("intro hover leave");

    gsap.killTweensOf([path, name, flower, copy, bgText]);

    gsap.to(path, {
      attr: { d: hiddenPath },
      duration: 0.8,
      ease: "power3.inOut",
    });

    gsap.to(name, {
      x: "-120vw",
      opacity: 0,
      duration: 0.7,
      ease: "power3.inOut",
    });

    gsap.to(flower, {
      x: 180,
      y: 90,
      scale: 0.65,
      rotate: -12,
      opacity: 0.2,
      filter: "grayscale(0.9) blur(1px)",
      duration: 0.7,
      ease: "power3.inOut",
    });

    gsap.to(copy, {
      opacity: 1,
      yPercent: -50,
      scale: 1,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(bgText, {
      opacity: 1,
      x: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  section.addEventListener("mouseenter", enter);
  section.addEventListener("mouseleave", leave);

  return () => {
    section.removeEventListener("mouseenter", enter);
    section.removeEventListener("mouseleave", leave);
  };
}
