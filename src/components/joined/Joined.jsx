/* eslint-disable react/prop-types */
import "./joined.css"
import { Rating } from "/src/components/rating/Rating"
export function Joined({ number }) {
  return (
    <div className="card">
      <img
        src="assets/images/image-avatars.webp"
        alt="People who already joined"
      />
      <div className="joined">
        <Rating></Rating>
        <p>
          <span>{number}</span>+ developers joined already
        </p>
      </div>
    </div>
  )
}
