import "/src/App.css"
import "./membershipsSection.css"
import { MainButton } from "../mainButton/MainButton"

export function MembershipsSection() {
  return (
    <section className="membership-options">
      <h2 className="mobile">Membership Options</h2>
      <ul className="plans-list">
        <li className="plan">
          <header>
            <h3>Starter</h3>
            <p>
              <span className="price">$19</span>/month
            </p>
          </header>
          <ul className="perks-list">
            <li className="perk">1 books/month</li>
            <li className="perk">Online forums</li>
          </ul>
          <MainButton text="subscribe now"></MainButton>
        </li>
        <li className="plan featured">
          <header>
            <h3>Pro</h3>
            <p>
              <span className="price">$29</span>/month
            </p>
          </header>
          <ul className="perks-list">
            <li className="perk">2 books/month</li>
            <li className="perk">Virtual meetups</li>
          </ul>
          <MainButton text="subscribe now"></MainButton>
          <div className="glow"></div>
        </li>
        <li className="plan">
          <header>
            <h3>Enterprise</h3>
            <p>
              <span className="price">Custom</span>
            </p>
          </header>
          <ul className="perks-list">
            <li className="perk">Team access</li>
            <li className="perk">Private sessions</li>
          </ul>
          <MainButton text="talk to us"></MainButton>
        </li>
      </ul>
    </section>
  )
}
