import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function bannerStackAnimation() {
  const section = document.querySelector(".banner-section");
  const cards = gsap.utils.toArray(".banner-stack-card");
  const texts = gsap.utils.toArray(".banner-desc-item");

  if (!section || cards.length < 3 || texts.length < 3) return;

  ScrollTrigger.getAll().forEach((trigger) => {
    if (trigger.vars.trigger === section) {
      trigger.kill();
    }
  });

  gsap.killTweensOf(cards);
  gsap.killTweensOf(texts);

  gsap.set(cards, {
    opacity: 0,
    y: 180,
    x: 0,
  });

  gsap.set(cards[0], {
    zIndex: 3,
  });

  gsap.set(cards[1], {
    zIndex: 2,
  });

  gsap.set(cards[2], {
    zIndex: 1,
  });

  gsap.set(texts, {
    opacity: 0,
    y: 20,
  });

  gsap.set(texts[0], {
    opacity: 1,
    y: 0,
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: "+=1600",
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  // 1. 아래에서 카드 3장 올라오기
  tl.to(cards, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
  });

  // 2. 세 장이 카드 영역 안에서만 오른쪽으로 살짝 모이기
  tl.to(cards, {
    x: 80,
    duration: 0.7,
    ease: "none",
  });

  // 3. B가 A 위로 올라오기
  tl.to(cards[1], {
    x: 40,
    y: -16,
    zIndex: 4,
    duration: 0.7,
    ease: "none",
  });

  tl.to(
    texts[0],
    {
      opacity: 0,
      y: -20,
      duration: 0.25,
    },
    "<",
  );

  tl.to(
    texts[1],
    {
      opacity: 1,
      y: 0,
      duration: 0.25,
    },
    "<0.15",
  );

  // 4. C가 B 위로 올라오기
  tl.to(cards[2], {
    x: 0,
    y: -32,
    zIndex: 5,
    duration: 0.7,
    ease: "none",
  });

  tl.to(
    texts[1],
    {
      opacity: 0,
      y: -20,
      duration: 0.25,
    },
    "<",
  );

  tl.to(
    texts[2],
    {
      opacity: 1,
      y: 0,
      duration: 0.25,
    },
    "<0.15",
  );

  ScrollTrigger.refresh();
}
