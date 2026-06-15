import gsap from "gsap";

export function introPortalAnimation(onEnter) {
    const section = document.querySelector(".intro-portal");
    const copy = document.querySelector(".portal-copy");
    const flower = document.querySelector(".portal-flower");

    if (!section || !copy || !flower) return;

    gsap.set(flower, {
        x: 520,
        y: 160,
        scale: 0.55,
        rotate: -18,
        opacity: 0,
        filter: "blur(0px) saturate(1.05)",
    });

    let isOpened = false;

    const enter = () => {
        if (isOpened) return;
        isOpened = true;

        const tl = gsap.timeline({
            onComplete: () => {
                if (onEnter) onEnter();
            },
        });

        tl.to(copy, {
            opacity: 0,
            scale: 0.92,
            duration: 0.38,
            ease: "power2.out",
            pointerEvents: "none",
        })
            .to(
                flower,
                {
                    x: 0,
                    y: 0,
                    scale: 1,
                    rotate: 0,
                    opacity: 1,
                    filter: "blur(0px) saturate(1.15)",
                    duration: 0.9,
                    ease: "power4.out",
                },
                "-=0.08"
            )
            .to(flower, {
                x: -90,
                y: -30,
                scale: 1.22,
                rotate: 4,
                opacity: 0,
                filter: "blur(12px) saturate(0.9)",
                duration: 0.65,
                ease: "power2.in",
            })
            .to(
                section,
                {
                    opacity: 0,
                    duration: 0.45,
                    ease: "power2.out",
                },
                "-=0.35"
            );
    };

    copy.addEventListener("click", enter);

    return () => {
        copy.removeEventListener("click", enter);
    };
}