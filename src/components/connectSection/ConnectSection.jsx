/* eslint-disable react/prop-types */
import "/src/App.css"
import "./connectSection.css"

export function ConnectSection() {
  return (
    <section className="connect-section">
      <div className="section__text">
        <h2 className="mobile">
          Not your average book
          <span>
            {" "}
            club
            <img
              src="assets/images/pattern-circle.png"
              alt="orange circle highlight"
              className="circle"
            />
          </span>
        </h2>
        <p>
          Connect with a community that speaks your language - from{" "}
          <b>Python</b> to <b>Typescript</b> and everything in between. Our
          discussions blend technical depth with practical applications.
        </p>
      </div>
      <picture>
        <img src="assets/images/image-not-average-mobile.webp" alt="" />
      </picture>
    </section>
  )
}
