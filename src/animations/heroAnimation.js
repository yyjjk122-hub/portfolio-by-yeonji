import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function heroAnimation() {
  const tl = gsap.timeline();

  tl.fromTo(
    ".yj-block",
    {
      opacity: 0,
      y: 80,
      rotate: 20,
      scale: 0.6,
    },
    {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      duration: 1,
      stagger: 0.05,
      ease: "power3.out",
    },
  );

  gsap.to(".yj-logo-wrap", {
    scale: 2.8,
    opacity: 0,
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
  });

  gsap.to(".hero-text", {
    y: -80,
    opacity: 0,
    scrollTrigger: {
      trigger: ".hero",
      start: "40% top",
      end: "bottom top",
      scrub: 1,
    },
  });
}
