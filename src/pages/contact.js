import React from "react"
import "../styles/styles.scss"

import Header from "../components/header"
import ContactSection from "../components/contactSection"
import Footer from "../components/footer"

const Contact = () => {
  return (
    <div className="wrapper">
      <Header />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Contact
