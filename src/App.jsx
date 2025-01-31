import "./App.css"
import { HeroSection } from "./components/heroSection/HeroSection.jsx"
import { PerksSection } from "./components/perksSection/PerksSection.jsx"
import { ConnectSection } from "./components/connectSection/ConnectSection.jsx"
import { StepsSection } from "./components/stepsSection/StepsSection.jsx"
import { MembershipsSection } from "./components/membershipsSection/MembershipsSection.jsx"
import { TestimonialSection } from "./components/testimonialSection/TestimonialSection.jsx"
import { Footer } from "./components/footer/Footer.jsx"

function App() {
  return (
    <div className="page">
      <main>
        <HeroSection
          heading="Join the ultimate tech book club"
          description="Turn your reading time into learning time with fellow tech
          enthusiasts. Get curated recommendations, join vibrant discussions,
          and level up your skills one chapter at the time."
        ></HeroSection>
        <PerksSection heading="Read together, grow together"></PerksSection>
        <ConnectSection></ConnectSection>
        <StepsSection></StepsSection>
        <MembershipsSection></MembershipsSection>
        <TestimonialSection></TestimonialSection>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App
