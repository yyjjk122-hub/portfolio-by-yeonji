import gsap from "gsap";

export function introPortalAnimation(onEnter) {
  const section = document.querySelector(".intro-portal");
  const path = document.querySelector(".portal-holo-path");
  const name = document.querySelector(".portal-big-name");
  const flower = document.querySelector(".portal-flower");
  const copy = document.querySelector(".portal-copy");
  const bgText = document.querySelector(".portal-bg-text");

  if (!section || !path || !name || !flower || !copy || !bgText) return;

  const showPath = "M0 80 C360 -120 1080 190 1440 0 V900 H0 Z";
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

  let isOpened = false;

  const openIntro = () => {
    if (isOpened) return;
    isOpened = true;

    const tl = gsap.timeline({
      onComplete: () => {
        if (onEnter) onEnter();
      },
    });

    tl.to(path, {
      attr: { d: showPath },
      duration: 1,
      ease: "power3.inOut",
    })
      .to(
        copy,
        {
          opacity: 0,
          scale: 1.18,
          duration: 0.65,
          ease: "power3.out",
        },
        "<",
      )
      .to(
        name,
        {
          x: "0vw",
          opacity: 1,
          duration: 0.95,
          ease: "expo.out",
        },
        "-=0.65",
      )
      .to(
        flower,
        {
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
          opacity: 0.85,
          filter: "grayscale(0) blur(0px)",
          duration: 1.1,
          ease: "back.out(1.5)",
        },
        "-=0.85",
      )
      .to(
        bgText,
        {
          opacity: 0.18,
          x: -40,
          duration: 0.7,
        },
        "-=0.9",
      )
      .to(
        section,
        {
          opacity: 0,
          y: -40,
          scale: 1.02,
          filter: "blur(10px)",
          duration: 1,
          ease: "power2.inOut",
        },
        "-=0.2",
      );
  };

  section.addEventListener("click", openIntro);

  return () => {
    section.removeEventListener("click", openIntro);
  };
}
