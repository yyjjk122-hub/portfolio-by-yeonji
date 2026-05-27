import gsap from "gsap";

export function heroAnimation() {
  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out",
    },
  });

  tl.to(".hero-bg-glow", {
    opacity: 1,
    scale: 1,
    duration: 1,
  })
    .to(
      ".hero-orb",
      {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        duration: 1.3,
      },
      "-=0.6",
    )
    .to(
      ".hero-text",
      {
        opacity: 1,
        y: 0,
        duration: 1,
      },
      "-=0.5",
    )
    .to(
      ".hero-ui",
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
      },
      "-=0.4",
    );

  gsap.to(".hero-orb", {
    scale: 1,
    duration: 2.8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  gsap.to(".hero-diamond", {
    rotation: 8,
    duration: 8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  gsap.to(".hero-diamond", {
    scale: 1,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  gsap.to(".orb-glow", {
    scale: 1.2,
    opacity: 0.9,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  return () => {
    tl.kill();
    gsap.killTweensOf(".hero-orb");
    gsap.killTweensOf(".hero-diamond");
    gsap.killTweensOf(".orb-glow");
    gsap.killTweensOf(".hero-bg-glow");
    gsap.killTweensOf(".hero-text");
    gsap.killTweensOf(".hero-ui");
  };
}
