function IllustrationSection() {
  return (
    <section className="illustration-section" id="illustration">
      <div className="section-info">
        <span className="section-num">05</span>
        <h2>ILLUSTRATION WORK</h2>
        <p>아이디어와 메시지를 시각적으로 표현한 작업입니다.</p>

        <dl>
          <div>
            <dt>TOOLS</dt>
            <dd>Photoshop, Illustrator</dd>
          </div>
          <div>
            <dt>ROLE</dt>
            <dd>Illustration, Color, Composition</dd>
          </div>
        </dl>

        <button className="view-btn" type="button">
          VIEW ALL ↗
        </button>
      </div>

      <div className="illust-list">
        <div className="illust-card">ILLUSTRATION 01</div>
        <div className="illust-card">ILLUSTRATION 02</div>
      </div>
    </section>
  );
}

export default IllustrationSection;
