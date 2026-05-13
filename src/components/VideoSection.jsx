function VideoSection() {
  return (
    <section className="video-section" id="video">
      <div className="section-info">
        <span className="section-num">03</span>
        <h2>VIDEO ARCHIVE</h2>
        <p>기획부터 편집까지 직접 작업한 영상입니다.</p>

        <dl>
          <div>
            <dt>TOOLS</dt>
            <dd>Premiere Pro, After Effects</dd>
          </div>
          <div>
            <dt>ROLE</dt>
            <dd>Planning, Editing, Motion</dd>
          </div>
        </dl>

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

        <div className="video-card">
          <div className="play-btn">▶</div>
          <span>Product Video</span>
          <em>00:56</em>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
