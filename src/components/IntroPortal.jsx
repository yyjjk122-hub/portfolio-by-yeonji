import { useEffect } from "react";
import { introPortalAnimation } from "../animations/introPortalAnimation";
import "../styles/IntroPortal.css";

function IntroPortal({ onEnter }) {
    useEffect(() => {
        const cleanup = introPortalAnimation(onEnter);

        return () => {
            if (cleanup) cleanup();
        };
    }, [onEnter]);

    return (
        <section className="intro-portal">
            <div className="portal-transition" />

            <button className="portal-copy" type="button">
                <p>CLICK TO ENTER</p>
                <span>PORTFOLIO</span>
            </button>
        </section>
    );
}

export default IntroPortal;