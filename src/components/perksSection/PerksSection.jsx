/* eslint-disable react/prop-types */
import "/src/App.css"
import "./perksSection.css"
export function PerksSection({ heading }) {
  return (
    <section className="perks-section">
      <div className="perks__description">
        <h2 className="mobile">{heading}</h2>
        <ul className="perks-list">
          <li className="perk">
            Monthly curated tech reads selected by industry experts
          </li>
          <li className="perk">
            Virtual and in-person meetups for deep-dive discussions
          </li>
          <li className="perk">Early access to new tech book releases</li>
          <li className="perk">
            Author Q&A sessions with tech thought leaders
          </li>
        </ul>
      </div>
      <picture>
        <img
          src="assets/images/image-read-together-mobile.webp"
          alt="A reading group enjoying their books"
        />
      </picture>
    </section>
  )
}
