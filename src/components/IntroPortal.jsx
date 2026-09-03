import { useEffect } from "react";
import { introPortalAnimation } from "../animations/introPortalAnimation";
import "../styles/introPortal.css";

function IntroPortal({ onEnter }) {
    useEffect(() => {
        const cleanup = introPortalAnimation(onEnter);

        return () => {
            if (cleanup) cleanup();
        };
    }, [onEnter]);

    return (
        <section className="intro-portal">
            <div className="portal-flower">
                <img src={`${import.meta.env.BASE_URL}images/flower.png`} alt="" />
            </div>

            <button className="portal-copy" type="button">
                <p>CLICK TO ENTER</p>
                <span>PORTFOLIO</span>
            </button>
        </section>
    );
}

export default IntroPortal;