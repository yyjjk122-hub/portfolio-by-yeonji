function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-inner">
        <span className="about-label">ABOUT ME</span>

        <h2>
          화면의 작은 차이까지
          <br />
          이유를 생각하며 만듭니다.
        </h2>

        <div className="about-copy">
          <p>
            안녕하세요. 웹 퍼블리셔 김연지입니다.
            구조를 이해하고 정확하게 구현하는 것,
            사용자가 자연스럽게 움직일 수 있는 흐름을 중요하게 생각합니다.
          </p>

          <p>
            디자인과 퍼블리싱의 경계를 넘나들며,
            기획 의도가 실제 화면에서 잘 전달될 때까지
            꼼꼼하게 다듬겠습니다.
          </p>
        </div>

        <div className="about-contact">
          <span>CONTACT</span>

          <a href="mailto:yyjjk122@gmail.com">
            yyjjk122@gmail.com
            <em>↗</em>
          </a>
        </div>

        <div className="about-footer">
          <p>THANK YOU FOR VIEWING MY PORTFOLIO.</p>
          <span>© 2026 KIM YEONJI</span>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;