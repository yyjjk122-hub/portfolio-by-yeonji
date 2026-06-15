function ToolBadge({ label }) {
  return <span className="tool-badge">{label}</span>;
}

function VideoSection() {
  const videoTools = [{ label: "Premiere Pro" }, { label: "After Effects" }];

  return (
    <section className="video-section" id="video">
      <div className="section-info project-panel">
        <span className="section-num">02</span>

        <h2>VIDEO ARCHIVE</h2>

        <p className="project-desc">기획, 편집, 모션 작업을 중심으로 구성한 영상 아카이브입니다.</p>

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
        <button className="video-card video-card-button" type="button" onClick={() => window.open("https://youtu.be/Yl41CTKGLX8", "_blank")}>
          <div className="video-thumb-placeholder">YOUTUBE VIDEO</div>

          <div className="play-btn">▶</div>

          <div className="video-card-info">
            <span className="video-label">01</span>
            <h3>인생전시회</h3>
            <p>팀 프로젝트 영상으로, 스토리 흐름과 컷 편집을 중심으로 구성했습니다.</p>

            <div className="video-meta">
              <span>Editing · Motion</span>
              <em>07:08</em>
            </div>
          </div>
        </button>

        <button className="video-card video-card-button" type="button" onClick={() => alert("영상 준비 중입니다.")}>
          <img src="/images/LOGO.png" alt="비디오 목업" />

          <div className="play-btn">▶</div>

          <div className="video-card-info">
            <span className="video-label">02</span>
            <h3>Video Project 02</h3>
            <p>짧은 모션 그래픽 영상으로, 타이포 모션과 화면 전환을 중심으로 구성했습니다.</p>

            <div className="video-meta">
              <span>Motion · Design</span>
              <em>Coming Soon</em>
            </div>
          </div>
        </button>
      </div>
    </section>
  );
}

export default VideoSection;
