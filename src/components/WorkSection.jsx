function WorkSection() {
  return (
    <>
      <section className="work-section" id="work">
        <div className="section-info">
          <span className="section-num">01</span>
          <h2>WEB PROJECT 01</h2>
          <p>브랜드의 가치를 담은 반응형 웹사이트입니다.</p>

          <dl>
            <div>
              <dt>TYPE</dt>
              <dd>Responsive Web</dd>
            </div>
            <div>
              <dt>TOOLS</dt>
              <dd>HTML, SCSS, JavaScript, GSAP</dd>
            </div>
            <div>
              <dt>KEY POINT</dt>
              <dd>UI/UX, Animation, Responsive</dd>
            </div>
          </dl>

          <button className="view-btn" type="button">
            VIEW PROJECT ↗
          </button>
        </div>

        <div className="work-preview">
          <div className="big-preview">WEB 01 IMAGE</div>
          <div className="small-preview">SUB IMAGE</div>
          <div className="small-preview">SUB IMAGE</div>
        </div>
      </section>

      <section className="work-section">
        <div className="section-info">
          <span className="section-num">02</span>
          <h2>WEB PROJECT 02</h2>
          <p>사용자 경험을 고려한 온라인 쇼핑몰 사이트입니다.</p>

          <dl>
            <div>
              <dt>TYPE</dt>
              <dd>E-Commerce</dd>
            </div>
            <div>
              <dt>TOOLS</dt>
              <dd>HTML, SCSS, JavaScript</dd>
            </div>
            <div>
              <dt>KEY POINT</dt>
              <dd>UI/UX, Interaction, Responsive</dd>
            </div>
          </dl>

          <button className="view-btn" type="button">
            VIEW PROJECT ↗
          </button>
        </div>

        <div className="work-preview">
          <div className="big-preview">WEB 02 IMAGE</div>
          <div className="small-preview">SUB IMAGE</div>
          <div className="small-preview">SUB IMAGE</div>
        </div>
      </section>
    </>
  );
}

export default WorkSection;
