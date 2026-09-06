import { FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";

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
            <ToolBadge
              key={tool.label}
              icon={tool.icon}
              label={tool.label}
            />
          ))}
        </div>
      </div>

      <div className="project-keyword">
        <span className="info-label">KEYWORD</span>
        <p>{keywords}</p>
      </div>

      <a
        className="view-btn"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
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
    { icon: <FaCss3Alt />, label: "CSS" },
    { icon: <FaJs />, label: "JS" },
  ];

  return (
    <section id="work">
      {/* WEB PROJECT 01-1 */}
      <section className="work-section" id="work01">
        <ProjectInfo
          number="01-1"
          title="HOME START"
          desc="처음 자취를 시작하는 사용자를 위한 반응형 라이프스타일 웹사이트입니다."
          detail="4인 팀 프로젝트로 진행했으며, 페이지 구조 설계부터 퍼블리싱, 반응형 구현, JavaScript 인터랙션 제작까지 전반적인 개발 과정에 참여했습니다. 팀원들과 기획 및 디자인 방향을 조율하고, 이를 실제 웹 화면으로 구현하며 반응형 UI와 인터랙션의 완성도를 높이는 데 기여했습니다."
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
          <img
            src={`${import.meta.env.BASE_URL}images/works/web01-mokup.png`}
            alt="HOME START 목업"
          />
        </a>
      </section>

      {/* WEB PROJECT 01-2 */}
      <section className="work-section" id="work02">
        <ProjectInfo
          number="01-2"
          title="차백도 Clone Coding"
          desc="차백도 공식 홈페이지 일부 화면을 참고해 구현한 클론코딩 프로젝트입니다."
          detail="기존 웹사이트의 레이아웃과 콘텐츠 구조를 분석한 뒤, HTML과 CSS를 중심으로 화면을 재구성했습니다. 이미지 배치, 여백, 타이포그래피 등 원본 사이트의 시각적 구성을 구현하는 데 중점을 두었으며, JavaScript를 활용해 필요한 기본 인터랙션을 적용했습니다."
          type="Clone Coding"
          year="2026"
          role="Publishing"
          contribution={[
            "기존 웹페이지 레이아웃 및 구조 분석",
            "HTML/CSS 기반 메인 화면 구현",
            "이미지 및 콘텐츠 배치 재현",
            "JavaScript 기반 기본 인터랙션 적용",
          ]}
          keywords="Clone Coding · Publishing · Layout · UI"
          tools={project02Tools}
          link="https://yyjjk122-hub.github.io/ChaPanda/"
        />

        <a
          className="home-mockup-preview"
          href="https://yyjjk122-hub.github.io/ChaPanda/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/works/web02-mokup.png`}
            alt="차백도 클론코딩 목업"
          />
        </a>
      </section>
    </section>
  );
}

export default WorkSection;