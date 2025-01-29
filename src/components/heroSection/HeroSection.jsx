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
      <div className="hero__text">
        <h1 className="mobile gradient">{heading}</h1>
        <p>{description}</p>
        <div className="hero-cta">
          <MainButton
            text={"review membership options"}
            arrow={"assets/images/icon-arrow-down.svg"}
          ></MainButton>
          <Joined number={200}></Joined>
        </div>
      </div>

      <picture>
        <img src="assets/images/image-hero-mobile.webp" alt="" />
      </picture>
    </section>
  )
}
