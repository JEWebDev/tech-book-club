/* eslint-disable react/prop-types */
import "/src/App.css"
import "./mainButton.css"
export function MainButton({ text, arrow }) {
  return (
    <a href="#" className="main-button">
      {text} <img src={arrow} alt="arrow" width="24px" height="24px" />
    </a>
  )
}
