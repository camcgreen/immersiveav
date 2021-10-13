import React from "react"
import "../styles/styles.scss"

import Header from "../components/header"
import LowHero from "../components/lowHero"
import PhoneEmail from "../components/phoneEmail"
import ContactSection from "../components/contactSection"
import Footer from "../components/footer"
import NewFooter from "../components/footerNew"

const Contact = () => {
  return (
    <div className="wrapper">
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
      <NewFooter />
      <div className="empty">
        {/* <SubHero /> */}
        <h1 className="empty__title">Create with us.</h1>
      </div>
    </div>
  )
}

export default Contact
