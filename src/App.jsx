import "./App.css"
import { HeroSection } from "./components/heroSection/HeroSection.jsx"
import { PerksSection } from "./components/perksSection/PerksSection.jsx"
import { ConnectSection } from "./components/connectSection/ConnectSection.jsx"
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
      </main>
    </div>
  )
}

export default App
