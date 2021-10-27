import React from "react"
import { Helmet } from "react-helmet"
import "../styles/styles.scss"

import Header from "../components/header"
import LowHero from "../components/lowHero"
import News from "../components/news"
import PhoneEmail from "../components/phoneEmail"
import ContactSection from "../components/contactSection"
import Footer from "../components/footer"
import NewFooter from "../components/footerNew"
import { footerText } from "../utils/helper"

const Contact = () => {
  return (
    <div className="wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact | ImmersiveAV</title>
      </Helmet>
      <Header />
      <LowHero />
      {/* <SectionBreak
        // backgroundColour="#3061E0"
        backgroundColour="rgba(48, 97, 224, 0.9)"
        textColour="#f2f2f2"
        h1="Contact us"
      /> */}
      <ContactSection />
      <PhoneEmail />
      {/* <Footer /> */}
      <News />
      <NewFooter />
      <div className="empty">
        {/* <SubHero /> */}
        <h1 className="empty__title">{footerText}</h1>
      </div>
    </div>
  )
}

export default Contact
