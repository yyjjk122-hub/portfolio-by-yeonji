import { useRef, useState } from "react";

function ToolBadge({ icon, label }) {
  return (
    <span className="tool-badge">
      {icon && icon}
      {label}
    </span>
  );
}

function VideoSection() {
  const modalVideoRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const videoTools = [
    {
      icon: null,
      label: "Premiere Pro",
    },
    {
      icon: null,
      label: "After Effects",
    },
  ];

  const openVideoModal = () => {
    setIsModalOpen(true);

    setTimeout(() => {
      modalVideoRef.current?.play();
    }, 100);
  };

  const closeVideoModal = () => {
    modalVideoRef.current?.pause();
    if (modalVideoRef.current) {
      modalVideoRef.current.currentTime = 0;
    }

    setIsModalOpen(false);
  };

  return (
    <section className="video-section" id="video">
      <div className="section-info project-panel">
        <span className="section-num">02</span>

        <h2>VIDEO ARCHIVE</h2>

        <p className="project-desc">기획부터 편집까지 직접 작업한 영상 아카이브입니다.</p>

        <div className="project-meta">
          <div>
            <span>TYPE</span>
            <strong>Motion Graphic</strong>
          </div>

          <div>
            <span>YEAR</span>
            <strong>2025</strong>
          </div>

          <div>
            <span>ROLE</span>
            <strong>Planning · Editing · Motion</strong>
          </div>
        </div>

        <div className="project-tools">
          <span className="info-label">TOOLS</span>

          <div className="tool-list">
            {videoTools.map((tool) => (
              <ToolBadge key={tool.label} icon={tool.icon} label={tool.label} />
            ))}
          </div>
        </div>

        <div className="project-keyword">
          <span className="info-label">KEYWORD</span>

          <p>Motion · Editing · Storytelling</p>
        </div>

        <button className="view-btn" type="button">
          VIEW ALL ↗
        </button>
      </div>

      <div className="video-list">
        <div className="video-card">
          <div className="play-btn">▶</div>

          <span>Brand Film</span>

          <em>01:28</em>
        </div>

        <button className="video-card video-card-button" type="button" onClick={openVideoModal}>
          <video src="/videos/인생전시회_둘둘짝짝.mp4" muted playsInline preload="metadata" />

          <div className="play-btn">▶</div>

          <span>인생전시회</span>

          <em>07:08</em>
        </button>
      </div>

      {isModalOpen && (
        <div className="video-modal" onClick={closeVideoModal}>
          <div className="video-modal-inner" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" type="button" onClick={closeVideoModal}>
              CLOSE ×
            </button>

            <video ref={modalVideoRef} src="/videos/인생전시회_둘둘짝짝.mp4" controls playsInline />
          </div>
        </div>
      )}
    </section>
  );
}

export default VideoSection;
