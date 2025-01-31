/* eslint-disable react/prop-types */
import { Header } from "../header/Header.jsx"
import { Joined } from "../joined/Joined.jsx"
import { MainButton } from "../mainButton/MainButton.jsx"
import "./heroSection.css"
import "/src/App.css"
export function HeroSection({ heading, description }) {
  return (
    <section className="hero-section">
      <Header></Header>
      <div className="content">
        <div className="hero__text">
          <h1 className="gradient">{heading}</h1>
          <p className="hero__description">{description}</p>
          <div className="hero-cta">
            <MainButton
              text={"review membership options"}
              img={"assets/images/icon-arrow-down.svg"}
              href="#membership-section"
            ></MainButton>
            <Joined number={200}></Joined>
          </div>
        </div>

        <picture>
          <img src="assets/images/image-hero-mobile.webp" alt="" />
        </picture>
      </div>
      <div className="glow"></div>
    </section>
  )
}
