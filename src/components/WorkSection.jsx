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

function ProjectInfo({
  number,
  title,
  desc,
  detail = "",
  type,
  year,
  role,
  contribution = [],
  keywords,
  tools,
  link,
}) {
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
  const homeStartTools = [
    { icon: <FaHtml5 />, label: "HTML" },
    { icon: <FaCss3Alt />, label: "CSS" },
    { icon: <FaJs />, label: "JS" },
  ];

  const project02Tools = [
    { icon: <FaHtml5 />, label: "HTML" },
    { icon: <FaJs />, label: "JS" },
    { icon: <SiGreensock />, label: "GSAP" },
  ];

  return (
    <section id="work">
      <section className="work-section">
        <ProjectInfo
          number="01"
          title="HOME START"
          desc="처음 자취를 시작하는 사용자를 위한 반응형 라이프스타일 웹사이트입니다."
          detail="4인 팀 프로젝트로 진행했으며, 페이지 구조 설계부터 퍼블리싱, 반응형 구현, JavaScript 인터랙션 제작까지 전반적인 개발 과정에 참여했습니다. 디자인 전공 팀원이 메인 캐릭터 일러스트와 비주얼 방향을 주도했고, 저는 디자인 요소를 제외한 페이지 구현과 인터랙션 완성도 향상에 높은 비중으로 기여했습니다."
          type="Responsive Web"
          year="2026"
          role="Frontend Publishing · Interaction"
          contribution={[
            "메인 및 서브 페이지 퍼블리싱 참여",
            "반응형 레이아웃 및 UI 구현",
            "JavaScript 기반 호버 인터랙션 제작",
            "AI 도구를 활용한 기능 구현 및 문제 해결",
            "팀원 간 코드 통합 및 수정 작업",
          ]}
          keywords="Team Project · Lifestyle · Interaction · Responsive"
          tools={homeStartTools}
          link="https://home-start-eight.vercel.app/index.html"
        />

        <a
          className="home-mockup-preview"
          href="https://home-start-eight.vercel.app/index.html"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/images/works/web01-mokup.png" alt="HOME START 목업" />
        </a>
      </section>

      <section className="work-section" id="work02">
        <ProjectInfo
          number="02"
          title="WEB PROJECT 02"
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
          tools={project02Tools}
          link="#"
        />

        <a className="work-preview" href="#" target="_blank" rel="noreferrer">
          <div className="big-preview">
            <img src="/images/works/web01-main.png" alt="WEB PROJECT 02 메인 화면" />
          </div>

          <div className="small-preview">
            <img src="/images/works/web01-sub01.png" alt="WEB PROJECT 02 서브 화면 1" />
          </div>

          <div className="small-preview">
            <img src="/images/works/web01-sub02.png" alt="WEB PROJECT 02 서브 화면 2" />
          </div>
        </a>
      </section>
    </section>
  );
}

export default WorkSection;