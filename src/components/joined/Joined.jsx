/* eslint-disable react/prop-types */
import "./joined.css"
export function Joined({ number }) {
  return (
    <div className="card">
      <img
        src="assets/images/image-avatars.webp"
        alt="People who already joined"
      />
      <div className="joined">
        <div className="rating">
          <img src="assets/images/icon-star.svg" alt="star" />
          <img src="assets/images/icon-star.svg" alt="star" />
          <img src="assets/images/icon-star.svg" alt="star" />
          <img src="assets/images/icon-star.svg" alt="star" />
          <img src="assets/images/icon-star.svg" alt="star" />
        </div>
        <p>
          <span>{number}</span>+ developers joined already
        </p>
      </div>
    </div>
  )
}
