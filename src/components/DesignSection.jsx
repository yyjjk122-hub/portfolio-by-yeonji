import { useEffect } from "react";
import { designStackAnimation } from "../animations/designStackAnimation";

function DesignSection() {
  useEffect(() => {
    designStackAnimation();
  }, []);

  return (
    <section className="design-section" id="design">
      <div className="section-info">
        <span className="section-num">03</span>
        <h2>DESIGN ARCHIVE</h2>
        <p>배너, 이벤트 페이지, 아트워크를 하나의 흐름으로 보여주는 디자인 아카이브입니다.</p>
      </div>

      <div className="design-motion-area">
        <div className="design-stack">
          <article className="design-stack-card card-a">
            <img src="/images/design/design-a.png" alt="Banner Design" />
          </article>

          <article className="design-stack-card card-b">
            <img src="/images/design/design-b.png" alt="Event Page Design" />
          </article>

          <article className="design-stack-card card-c">
            <img src="/images/design/design-c.png" alt="Artwork" />
          </article>
        </div>

        <div className="design-desc">
          <div className="design-desc-item active">
            <span>01</span>
            <h3>Banner Design</h3>
            <p>브랜드 무드와 타이포그래피를 중심으로 구성한 배너 디자인입니다.</p>
          </div>

          <div className="design-desc-item">
            <span>02</span>
            <h3>Event Page</h3>
            <p>프로모션 흐름과 사용자 시선을 고려한 이벤트 페이지 디자인입니다.</p>
          </div>

          <div className="design-desc-item">
            <span>03</span>
            <h3>Artwork</h3>
            <p>다양한 무드와 그래픽 스타일을 실험한 비주얼 작업입니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesignSection;
