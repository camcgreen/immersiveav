import React from "react"
import "../styles/styles.scss"

import Header from "../components/header"
import SectionBreak from "../components/sectionBreak"
import ContactSection from "../components/contactSection"
import Footer from "../components/footer"

const Contact = () => {
  return (
    <div className="wrapper">
      <Header />
      {/* <SectionBreak
        // backgroundColour="#3061E0"
        backgroundColour="rgba(48, 97, 224, 0.9)"
        textColour="#f2f2f2"
        h1="Contact us"
      /> */}
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Contact
