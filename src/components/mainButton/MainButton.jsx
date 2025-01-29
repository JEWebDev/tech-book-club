/* eslint-disable react/prop-types */
import "/src/App.css"
import "./mainButton.css"
export function MainButton({ text, img, href }) {
  {
    if (text && img) {
      return (
        <a href={href ? href : "#"} className="main-button">
          {text}
          <img src={img} alt="icon" />
        </a>
      )
    }
    if (text) {
      return (
        <a href={href ? href : "#"} className="main-button">
          {text}
        </a>
      )
    }
  }
}
