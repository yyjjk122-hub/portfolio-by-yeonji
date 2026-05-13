import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function introPortalAnimation() {
  const section = document.querySelector(".intro-portal");
  const frame = document.querySelector(".portal-frame");
  const inner = document.querySelector(".portal-inner");
  const bgText = document.querySelector(".portal-bg-text");

  if (!section || !frame) return;

  ScrollTrigger.getAll().forEach((trigger) => {
    if (trigger.vars.trigger === section) {
      trigger.kill();
    }
  });

  gsap.set(section, {
    opacity: 1,
    clearProps: "transform",
  });

  gsap.set(frame, {
    scale: 1,
    opacity: 1,
    borderRadius: 36,
    xPercent: 0,
    yPercent: 0,
  });

  gsap.set(inner, {
    opacity: 1,
    scale: 1,
  });

  gsap.set(bgText, {
    opacity: 1,
    y: 0,
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: "+=900",
      scrub: 1,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  tl.to(frame, {
    scale: 12,
    borderRadius: 0,
    duration: 1,
    ease: "none",
  });

  tl.to(
    inner,
    {
      opacity: 0,
      scale: 0.7,
      duration: 0.35,
      ease: "none",
    },
    "<",
  );

  tl.to(
    bgText,
    {
      opacity: 0,
      y: -80,
      duration: 0.35,
      ease: "none",
    },
    "<",
  );

  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 100);
}
