import HeroSection from "./pages/HeroSection"
import ShowcaseSection from "./pages/ShowcaseSection"
import AboutSection from "./pages/AboutSection"
import Footer from "./pages/FooterSection"
import "./index.css"

import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { BackToTopBtn, GitHubBtn } from "./components/elements/Buttons.jsx"
function App() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, []) // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return (
    <>
      
      <HeroSection />
      <ShowcaseSection />
      <AboutSection />
      <Footer />
      <div className={`fixed bottom-4 right-10 `}>
        {scrollPosition > 300 ? (
          <Link to="heroSection" spy={true} smooth={true}>
            <BackToTopBtn />
          </Link>
        ) : (
          <GitHubBtn />
        )}
        {/* <Link to="heroSection" spy={true} smooth={true}>
          <BackToTopBtn />
        </Link> */}
      </div>
    </>
  )
}

export default App
