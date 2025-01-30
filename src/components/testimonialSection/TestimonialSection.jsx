import "/src/App.css"
import "./testimonialSection.css"
import { Rating } from "../rating/Rating.jsx"
export function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <Rating></Rating>
      <p className="quote">
        &quot;This book club transformed my technical reading from a solidary
        activity into an enriching community experience. The discussions are
        gold!&quot;
      </p>
      <p>Sarah Chen, Software Architect</p>
    </section>
  )
}
