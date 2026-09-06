import gsap from "gsap";

export function introPortalAnimation(onEnter) {
    const section = document.querySelector(".intro-portal");
    const copy = document.querySelector(".portal-copy");
    const transition = document.querySelector(".portal-transition");

    if (!section || !copy || !transition) return;

    gsap.set(transition, {
        scale: 0,
        opacity: 0,
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

        /* 버튼 눌리는 느낌 */
        tl.to(copy, {
            scale: 0.94,
            duration: 0.14,
            ease: "power2.in",
        })

            /* 다시 살짝 펴짐 */
            .to(copy, {
                scale: 1.03,
                duration: 0.18,
                ease: "power2.out",
            })

            /* 버튼 사라짐 */
            .to(copy, {
                opacity: 0,
                scale: 0.9,
                duration: 0.28,
                ease: "power2.in",
                pointerEvents: "none",
            })

            /* 핑크 원 등장 */
            .set(transition, {
                opacity: 1,
            })

            /* 핑크가 화면 전체로 확장 */
            .to(transition, {
                scale: 30,
                duration: 0.85,
                ease: "power4.inOut",
            })

            /* 핑크 화면을 아주 잠깐 유지 */
            .to({}, {
                duration: 0.12,
            })

            /* Intro 전체가 사라지면서 Hero 노출 */
            .to(section, {
                opacity: 0,
                duration: 0.4,
                ease: "power2.out",
            });
    };

    copy.addEventListener("click", enter);

    return () => {
        copy.removeEventListener("click", enter);
    };
}