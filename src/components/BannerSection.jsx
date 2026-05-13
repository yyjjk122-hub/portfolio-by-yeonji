import { useEffect } from "react";
import { bannerStackAnimation } from "../animations/bannerStackAnimation";

function BannerSection() {
  useEffect(() => {
    bannerStackAnimation();
  }, []);

  return (
    <section className="banner-section">
      <div className="section-info">
        <span className="section-num">04</span>
        <h2>BANNER DESIGN</h2>
        <p>스크롤 흐름에 따라 쌓이는 배너 디자인 아카이브입니다.</p>

        <dl>
          <div>
            <dt>TOOLS</dt>
            <dd>Photoshop, Illustrator</dd>
          </div>
          <div>
            <dt>ROLE</dt>
            <dd>Design, Visual, Typography</dd>
          </div>
        </dl>
      </div>

      <div className="banner-motion-area">
        <div className="banner-stack">
          <article className="banner-stack-card card-a">
            <img src="/images/banner/banner-a.png" alt="배너 디자인 A" />
          </article>

          <article className="banner-stack-card card-b">
            <img src="/images/banner/banner-b.png" alt="배너 디자인 B" />
          </article>

          <article className="banner-stack-card card-c">
            <img src="/images/banner/banner-c.png" alt="배너 디자인 C" />
          </article>
        </div>

        <div className="banner-desc">
          <div className="banner-desc-item active">
            <span>01</span>
            <h3>Season Promotion Banner</h3>
            <p>계절감과 프로모션 메시지를 강조한 배너 디자인입니다.</p>
          </div>

          <div className="banner-desc-item">
            <span>02</span>
            <h3>Brand Event Banner</h3>
            <p>브랜드 이벤트의 분위기와 시선을 끄는 타이포그래피를 적용했습니다.</p>
          </div>

          <div className="banner-desc-item">
            <span>03</span>
            <h3>Product Visual Banner</h3>
            <p>제품 이미지와 정보 전달을 중심으로 구성한 배너입니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerSection;
