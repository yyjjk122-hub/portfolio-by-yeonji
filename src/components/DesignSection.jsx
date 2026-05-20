function ToolBadge({ icon, label }) {
  return (
    <span className="tool-badge">
      {icon && icon}
      {label}
    </span>
  );
}

function DesignSection() {
  const designTools = [
    {
      icon: null,
      label: "Photoshop",
    },
    {
      icon: null,
      label: "Illustrator",
    },
  ];

  return (
    <section className="design-section" id="design">
      <div className="section-info project-panel">
        <span className="section-num">03</span>

        <h2>DESIGN ARCHIVE</h2>

        <p className="project-desc">배너, 이벤트 페이지, 아트워크를 하나의 흐름으로 보여주는 디자인 아카이브입니다.</p>

        <div className="project-meta">
          <div>
            <span>TYPE</span>
            <strong>Visual Design</strong>
          </div>

          <div>
            <span>YEAR</span>
            <strong>2025</strong>
          </div>

          <div>
            <span>ROLE</span>
            <strong>Design · Visual · Layout</strong>
          </div>
        </div>

        <div className="project-tools">
          <span className="info-label">TOOLS</span>

          <div className="tool-list">
            {designTools.map((tool) => (
              <ToolBadge key={tool.label} icon={tool.icon} label={tool.label} />
            ))}
          </div>
        </div>

        <div className="project-keyword">
          <span className="info-label">KEYWORD</span>

          <p>Banner · Event Page · Artwork</p>
        </div>
      </div>

      <div className="design-list">
        <article className="design-card">
          <div className="design-thumbnail">
            <img src="/images/design/design-a.png" alt="Banner Design" />
          </div>

          <span>01</span>

          <h3>Banner Design</h3>

          <p>브랜드 무드와 타이포그래피를 중심으로 구성한 배너 디자인입니다.</p>
        </article>

        <article className="design-card">
          <div className="design-thumbnail">
            <img src="/images/design/design-b.png" alt="Event Page Design" />
          </div>

          <span>02</span>

          <h3>Event Page</h3>

          <p>프로모션 흐름과 사용자 시선을 고려한 이벤트 페이지 디자인입니다.</p>
        </article>

        <article className="design-card">
          <div className="design-thumbnail">
            <img src="/images/design/design-c.png" alt="Artwork" />
          </div>

          <span>03</span>

          <h3>Artwork</h3>

          <p>다양한 무드와 그래픽 스타일을 실험한 비주얼 작업입니다.</p>
        </article>
      </div>
    </section>
  );
}

export default DesignSection;
