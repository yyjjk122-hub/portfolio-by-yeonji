import { useState } from "react";
import ArchiveModal from "./ArchiveModal";

function ToolBadge({ icon, label }) {
  return (
    <span className="tool-badge">
      {icon && icon}
      {label}
    </span>
  );
}

function DesignSection() {
  const [modalItem, setModalItem] = useState(null);

  const designTools = [
    { icon: null, label: "Photoshop" },
    { icon: null, label: "Illustrator" },
  ];

  const bannerItems = [
    {
      type: "series",
      title: "Dunkin Campaign",
      desc: "던킨도너츠 브랜드 무드를 활용해 구성한 2종 배너 시리즈입니다.",
      images: ["/images/design/dunkin01.jpg", "/images/design/dunkin02.jpg"],
    },
    {
      type: "image",
      title: "Banner Design A",
      desc: "브랜드 이미지와 문구 전달력을 고려한 배너 디자인입니다.",
      src: "/images/design/banner-a.jpg",
    },
    {
      type: "image",
      title: "Banner Design B",
      desc: "시각적 주목도와 레이아웃 균형을 중심으로 제작한 배너 디자인입니다.",
      src: "/images/design/banner-b.jpg",
    },
  ];

  const eventItems = [
    {
      type: "image",
      title: "Event Page",
      desc: "프로모션 흐름과 사용자 시선을 고려한 긴 이벤트 페이지 디자인입니다.",
      src: "/images/design/event01.jpg",
    },
  ];

  const artworkItems = [
    {
      type: "image",
      title: "Artwork",
      desc: "레퍼런스 이미지를 바탕으로 선과 색감을 재구성한 디지털 아트워크입니다.",
      src: "/images/design/artwork01-2.jpg",
      reference: true,
    },
  ];

  const renderCard = (item, index) => {
    return (
      <button
        className={`design-card design-card-button ${item.type === "series" ? "series-card" : ""}`}
        type="button"
        key={item.title}
        onClick={() => setModalItem(item)}
      >
        <div className={`design-thumbnail ${item.reference ? "artwork-thumbnail" : ""}`}>
          {item.type === "series" ? (
            <div className="series-preview">
              {item.images.map((image, idx) => (
                <img key={image} src={image} alt={`${item.title} ${idx + 1}`} />
              ))}
            </div>
          ) : (
            <img src={item.src} alt={item.title} />
          )}

          {item.type === "series" && <span className="reference-label">2 DESIGNS</span>}

          {item.reference && <span className="reference-label">REFERENCE BASED</span>}
        </div>

        <span>{String(index + 1).padStart(2, "0")}</span>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
      </button>
    );
  };

  return (
    <section className="design-section" id="design">
      <div className="section-info project-panel">
        <span className="section-num">04</span>

        <h2>DESIGN ARCHIVE</h2>

        <p className="project-desc">배너, 이벤트 페이지, 아트워크를 작업 유형별로 정리한 디자인 아카이브입니다.</p>

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

      <div className="design-archive">
        <div className="design-group">
          <div className="design-group-title">
            <span>01</span>
            <h3>BANNER DESIGN</h3>
          </div>

          <div className="design-list banner-list">{bannerItems.map((item, index) => renderCard(item, index))}</div>
        </div>

        <div className="design-group">
          <div className="design-group-title">
            <span>02</span>
            <h3>EVENT PAGE</h3>
          </div>

          <div className="design-list single-list">{eventItems.map((item, index) => renderCard(item, index))}</div>
        </div>

        <div className="design-group">
          <div className="design-group-title">
            <span>03</span>
            <h3>ARTWORK</h3>
          </div>

          <div className="design-list single-list">{artworkItems.map((item, index) => renderCard(item, index))}</div>
        </div>
      </div>

      <ArchiveModal item={modalItem} onClose={() => setModalItem(null)} />
    </section>
  );
}

export default DesignSection;
