import { FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiGreensock } from "react-icons/si";

function ToolBadge({ icon, label }) {
  return (
    <span className="tool-badge">
      {icon}
      {label}
    </span>
  );
}

function ProjectInfo({ number, title, desc, detail = "", type, year, role, contribution = [], keywords, tools, link }) {
  return (
    <div className="section-info project-panel">
      <span className="section-num">{number}</span>

      <h2>{title}</h2>

      <p className="project-desc">{desc}</p>

      {detail && <p className="project-detail">{detail}</p>}

      {contribution.length > 0 && (
        <ul className="project-contribution">
          {contribution.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      <div className="project-meta">
        <div>
          <span>TYPE</span>
          <strong>{type}</strong>
        </div>

        <div>
          <span>YEAR</span>
          <strong>{year}</strong>
        </div>

        <div>
          <span>ROLE</span>
          <strong>{role}</strong>
        </div>
      </div>

      <div className="project-tools">
        <span className="info-label">TOOLS</span>

        <div className="tool-list">
          {tools.map((tool) => (
            <ToolBadge key={tool.label} icon={tool.icon} label={tool.label} />
          ))}
        </div>
      </div>

      <div className="project-keyword">
        <span className="info-label">KEYWORD</span>
        <p>{keywords}</p>
      </div>

      <a className="view-btn" href={link} target="_blank" rel="noreferrer">
        VIEW PROJECT ↗
      </a>
    </div>
  );
}

function WorkSection() {
  const project01Tools = [
    { icon: <FaHtml5 />, label: "HTML" },
    { icon: <FaJs />, label: "JS" },
    { icon: <SiGreensock />, label: "GSAP" },
  ];

  const project02Tools = [
    { icon: <FaHtml5 />, label: "HTML" },
    { icon: <FaCss3Alt />, label: "CSS" },
    { icon: <FaJs />, label: "JS" },
  ];

  return (
    <>
      <section className="work-section" id="work01">
        <ProjectInfo
          number="01"
          title="WEB PROJECT 01"
          desc="브랜드의 가치를 담은 반응형 웹사이트입니다."
          detail="브랜드의 분위기를 시각적으로 전달하기 위해 레이아웃과 컬러, 인터랙션 흐름을 중심으로 구성했습니다. 사용자가 자연스럽게 콘텐츠를 탐색할 수 있도록 섹션 간 이동과 시각적 집중도를 고려했습니다."
          type="Responsive Web"
          year="2025"
          role="Publishing / Motion"
          contribution={[
            "메인 페이지 퍼블리싱 및 반응형 레이아웃 구현",
            "GSAP 기반 스크롤 모션 및 인터랙션 적용",
            "이미지, 버튼, 섹션 간 UI 흐름 정리",
          ]}
          keywords="UI/UX · Animation · Responsive"
          tools={project01Tools}
          link="#"
        />

        <a className="work-preview" href="#" target="_blank" rel="noreferrer">
          <div className="big-preview">
            <img src="/images/works/web01-main.png" alt="WEB PROJECT 01 메인 화면" />
          </div>

          <div className="small-preview">
            <img src="/images/works/web01-sub01.png" alt="WEB PROJECT 01 서브 화면 1" />
          </div>

          <div className="small-preview">
            <img src="/images/works/web01-sub02.png" alt="WEB PROJECT 01 서브 화면 2" />
          </div>
        </a>
      </section>

      <section className="work-section" id="work02">
        <ProjectInfo
          number="02"
          title="HOME START"
          desc="귀엽고 따뜻한 라이프스타일 무드를 담은 반응형 홈퍼니싱 웹사이트입니다."
          detail="사물과 캐릭터 요소를 활용해 브랜드의 따뜻한 분위기를 시각적으로 표현했습니다. 사용자의 시선 흐름과 인터랙션 경험을 고려해 아기자기한 UI와 모션 요소를 구성했습니다."
          type="Responsive Web"
          year="2026"
          role="Publishing · UI Motion"
          contribution={["메인 및 서브 페이지 퍼블리싱", "반응형 레이아웃 구현", "호버 인터랙션 및 스크롤 UI 제작"]}
          keywords="Lifestyle · Interaction · Responsive"
          tools={project02Tools}
          link="https://home-start-eight.vercel.app/index.html"
        />

        <a className="work-preview single-mockup" href="https://home-start-eight.vercel.app/index.html" target="_blank" rel="noreferrer">
          <img src="/images/works/web01-mokup.jpg" alt="HOME START 목업" />
        </a>
      </section>
    </>
  );
}

export default WorkSection;
