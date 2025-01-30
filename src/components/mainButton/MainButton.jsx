/* eslint-disable react/prop-types */
import "/src/App.css"
import "./mainButton.css"
export function MainButton({ text, img, href, theme }) {
  {
    if (text && img) {
      return (
        <a
          href={href ? href : "#"}
          className={theme ? "main-button " + theme : "main-button"}
        >
          {text}
          <img src={img} alt="icon" />
        </a>
      )
    }
    if (text) {
      return (
        <a
          href={href ? href : "#"}
          className={theme ? "main-button " + theme : "main-button"}
        >
          {text}
        </a>
      )
    }
  }
}
