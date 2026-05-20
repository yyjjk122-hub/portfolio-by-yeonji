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

function ProjectInfo({ number, title, desc, type, year, role, keywords, tools, link }) {
  return (
    <div className="section-info project-panel">
      <span className="section-num">{number}</span>

      <h2>{title}</h2>

      <p className="project-desc">{desc}</p>

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
      <section className="work-section" id="work">
        <ProjectInfo
          number="01"
          title="WEB PROJECT 01"
          desc="브랜드의 가치를 담은 반응형 웹사이트입니다."
          type="Responsive Web"
          year="2025"
          role="Publishing / Motion"
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

      <section className="work-section">
        <ProjectInfo
          number="02"
          title="HOME START"
          desc="귀엽고 따뜻한 라이프스타일 무드를 담은 반응형 홈퍼니싱 웹사이트입니다."
          type="Responsive Web"
          year="2026"
          role="Publishing · UI Motion"
          keywords="Lifestyle · Interaction · Responsive"
          tools={project02Tools}
          link="https://home-start-eight.vercel.app/index.html"
        />

        <a className="work-preview" href="https://home-start-eight.vercel.app/index.html" target="_blank" rel="noreferrer">
          <div className="big-preview">
            <img src="/images/works/web02-main.png" alt="WEB PROJECT 02 메인 화면" />
          </div>

          <div className="small-preview">
            <img src="/images/works/web02-sub01.png" alt="WEB PROJECT 02 서브 화면 1" />
          </div>

          <div className="small-preview">
            <img src="/images/works/web02-sub02.png" alt="WEB PROJECT 02 서브 화면 2" />
          </div>
        </a>
      </section>
    </>
  );
}

export default WorkSection;
