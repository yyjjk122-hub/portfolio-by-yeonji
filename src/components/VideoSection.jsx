function ToolBadge({ label }) {
  return <span className="tool-badge">{label}</span>;
}

function VideoSection() {
  const videoTools = [
    { label: "Premiere Pro" },
    { label: "After Effects" },
  ];

  return (
    <section className="video-section" id="video">
      <div className="section-info project-panel">
        <span className="section-num">02</span>

        <h2>VIDEO ARCHIVE</h2>

        <p className="project-desc">
          기획, 편집, 모션 작업을 중심으로 구성한 영상 아카이브입니다.
        </p>

        <div className="project-tools">
          <span className="info-label">TOOLS</span>

          <div className="tool-list">
            {videoTools.map((tool) => (
              <ToolBadge key={tool.label} label={tool.label} />
            ))}
          </div>
        </div>

        <div className="project-keyword">
          <span className="info-label">KEYWORD</span>
          <p>Motion · Editing · Storytelling</p>
        </div>
      </div>

      <div className="video-list">
        {/* 01 인생전시회 */}
        <button
          className="video-card video-card-button"
          type="button"
          onClick={() =>
            window.open(
              "https://youtu.be/Yl41CTKGLX8",
              "_blank"
            )
          }
        >
          <img
            src={`${import.meta.env.BASE_URL}images/works/video01.png`}
            alt="인생전시회 영상 썸네일"
          />

          <div className="play-btn">▶</div>

          <div className="video-card-info">
            <span className="video-label">01</span>

            <h3>인생전시회</h3>

            <p>
              팀 프로젝트 영상으로, 스토리 흐름과 컷 편집을
              중심으로 구성했습니다.
            </p>

            <div className="video-meta">
              <span>Editing · Motion</span>
              <em>07:08</em>
            </div>
          </div>
        </button>

        {/* 02 키네틱 타이포그래피 */}
        <button
          className="video-card video-card-button"
          type="button"
          onClick={() =>
            window.open(
              "https://youtu.be/zDTzvT8FE_I",
              "_blank"
            )
          }
        >
          <img
            src={`${import.meta.env.BASE_URL}images/works/video02.png`}
            alt="키네틱 타이포그래피 영상 썸네일"
          />

          <div className="play-btn">▶</div>

          <div className="video-card-info">
            <span className="video-label">02</span>

            <h3>키네틱 타이포그래피</h3>

            <p>
              타이포그래피의 움직임과 리듬을 활용해
              텍스트의 시각적 흐름을 구성한 모션 그래픽 영상입니다.
            </p>

            <div className="video-meta">
              <span>Typography · Motion</span>
              <em>01:10</em>
            </div>
          </div>
        </button>
      </div>
    </section>
  );
}

export default VideoSection;