import React, { useEffect } from "react"
import "../styles/styles.scss"
import { customMouse } from "../utils/customMouse"

//Import components
import Header from "../components/header"
import Phone from "../components/phone"
import Hero from "../components/hero"
import SectionBreak from "../components/sectionBreak"
import Services from "../components/services"
import Showcase from "../components/showcase"
import Expo from "../components/expo"
import News from "../components/news"
import Footer from "../components/footer"

//Import helpers
import "../utils/helper"
import { breakText } from "../utils/helper"

const IndexPage = () => {
  useEffect(() => {
    // customMouse()
  })
  return (
    <div className="wrapper">
      {/* <span className="circle"></span> */}
      <Header />
      {/* <Phone /> */}
      <Hero />
      <main>
        <SectionBreak
          backgroundColour="#3061E0"
          textColour="white"
          h1={breakText[0].h1}
          p={breakText[0].p}
        />
        <Services />
        <SectionBreak
          backgroundColour="#f2f2f2"
          textColour="black"
          h1={breakText[1].h1}
        />
        <Showcase />
        <SectionBreak
          backgroundColour="#3061E0"
          textColour="#f2f2f2"
          h1={breakText[2].h1}
        />
        <News />
        <SectionBreak
          backgroundColour="white"
          textColour="black"
          h1={breakText[3].h1}
          p={breakText[3].p}
        />
        <Expo />
      </main>
      <Footer />
    </div>
  )
}

export default IndexPage
