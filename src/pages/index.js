import * as React from "react"
import "../styles/styles.scss"

//Import components
import Header from "../components/header"
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

const IndexPage = () => (
  <div className="wrapper">
    <Header />
    <Hero />
    <main>
      <SectionBreak
        colour="lightblue"
        h1={breakText[0].h1}
        p={breakText[0].p}
      />
      <Services />
      <SectionBreak colour="white" h1={breakText[1].h1} />
      <Showcase />
      <SectionBreak
        colour="lightblue"
        h1={breakText[2].h1}
        p={breakText[2].p}
      />
      <Expo />
      <SectionBreak colour="white" h1={breakText[3].h1} />
      <News />
    </main>
    <Footer />
  </div>
)

export default IndexPage
