export default function Aside() {
  return (
    <aside className="form-steps">
      <nav className="form-nav">
        <ul className="form-nav--list">
          <li className="form-nav--item">
            <a href="#" className="form-nav--link active">
              <span className="form-nav--link--number">1</span>
              <div className="step-text-container">
                <span className="form-nav--link--text">Step 1</span>
                <span className="form-nav--link--text">Your info</span>
              </div>
            </a>
          </li>
          <li className="form-nav--item">
            <a href="#" className="form-nav--link">
              <span className="form-nav--link--number">2</span>
              <div className="step-text-container">
                <span className="form-nav--link--text">Step 2</span>
                <span className="form-nav--link--text">Select Plan</span>
              </div>
            </a>
          </li>
          <li className="form-nav--item">
            <a href="#" className="form-nav--link">
              <span className="form-nav--link--number">3</span>
              <div className="step-text-container">
                <span className="form-nav--link--text">Step 3</span>
                <span className="form-nav--link--text">Add-ons</span>
              </div>
            </a>
          </li>
          <li className="form-nav--item">
            <a href="#" className="form-nav--link">
              <span className="form-nav--link--number">4</span>
              <div className="step-text-container">
                <span className="form-nav--link--text">Step 4</span>
                <span className="form-nav--link--text">Summary</span>
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
