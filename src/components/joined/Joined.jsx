/* eslint-disable react/prop-types */
import "./joined.css"
import { Rating } from "/src/components/rating/Rating"
export function Joined() {
  return (
    <div className="card">
      <img
        className="avatar"
        src="assets/images/image-avatars.webp"
        alt="People who already joined"
        width="110px"
        height="40px"
      />
      <div className="joined">
        <Rating></Rating>
        <p>200+ developers joined already</p>
      </div>
    </div>
  )
}
