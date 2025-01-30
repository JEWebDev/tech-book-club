import "/src/App.css"
import "./footer.css"
import { MainButton } from "../mainButton/MainButton.jsx"
import { Joined } from "../joined/Joined.jsx"
export function Footer() {
  return (
    <footer>
      <h2 className="mobile">Ready to debug your reading list?</h2>
      <div className="cta">
        <MainButton
          text="review membership options"
          href="#"
          img="assets/images/icon-arrow-up.svg"
          theme="dark"
        ></MainButton>
        <Joined number={200}></Joined>
      </div>
      <div className="socials">
        <p>&copy; 2024 - Tech book club</p>
        <div className="icons">
          <img src="assets/images/logo-bluesky.svg" alt="blue sky logo" />
          <img src="assets/images/logo-linkedin.svg" alt="linkedin logo" />
        </div>
      </div>
    </footer>
  )
}
