import "/src/App.css"
import "./stepsSection.css"
export function StepsSection() {
  return (
    <section className="steps-section">
      <div className="content">
        <h2 className="mobile">Your tech reading journey</h2>
        <ul className="steps-list">
          <li className="step">
            <div className="number">1</div>
            <p>Choose your membership tier</p>
          </li>
          <li className="step">
            <div className="number">2</div>
            <p>Get your monthly book selection</p>
          </li>
          <li className="step">
            <div className="number">3</div>
            <p>Join our discussion forums</p>
          </li>
          <li className="step">
            <div className="number">4</div>
            <p>Attend exclusive meetups</p>
          </li>
        </ul>
        <div className="glow"></div>
      </div>
    </section>
  )
}
