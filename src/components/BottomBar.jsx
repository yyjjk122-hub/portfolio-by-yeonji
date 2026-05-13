function BottomBar() {
  return (
    <div className="bottom-bar">
      <div>
        <span>NOW VIEWING</span>
        <strong>WEB PROJECT 01</strong>
      </div>

      <div className="bottom-center">
        <button type="button">|‹</button>
        <p>01 / 05</p>
        <div className="progress">
          <span></span>
        </div>
        <button type="button">›|</button>
      </div>

      <div>
        <span>NEXT SECTION</span>
        <strong>VIDEO ARCHIVE</strong>
      </div>
    </div>
  );
}

export default BottomBar;
