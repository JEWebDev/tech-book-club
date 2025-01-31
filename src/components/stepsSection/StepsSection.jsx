import "/src/App.css"
import "./stepsSection.css"
export function StepsSection() {
  return (
    <section className="steps-section">
      <div className="content">
        <h2>Your tech reading journey</h2>
        <ul className="steps-list">
          <li className="step">
            <div className="icons">
              <div className="number">1</div>
              <img
                className="arrow"
                src="assets/images/pattern-arrow.svg "
                alt=""
              />
            </div>
            <p>Choose your membership tier</p>
          </li>
          <li className="step">
            <div className="icons">
              <div className="number">2</div>
              <img
                className="arrow"
                src="assets/images/pattern-arrow.svg "
                alt=""
              />
            </div>
            <p>Get your monthly book selection</p>
          </li>
          <li className="step">
            <div className="icons">
              <div className="number">3</div>
              <img
                className="arrow"
                src="assets/images/pattern-arrow.svg "
                alt=""
              />
            </div>
            <p>Join our discussion forums</p>
          </li>
          <li className="step">
            <div className="icons">
              <div className="number">4</div>
            </div>
            <p>Attend exclusive meetups</p>
          </li>
        </ul>
        <div className="glow"></div>
      </div>
    </section>
  )
}
