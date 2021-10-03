import React, { useEffect, useState, useRef } from "react"
import "../styles/styles.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import { customMouse } from "../utils/customMouse"

//Import SVG
import AVLoader from "../svg/av-load.svg"

//Import components
import Header from "../components/header"
import Phone from "../components/phone"
import Hero from "../components/hero"
import SectionBreak from "../components/sectionBreak"
import Services from "../components/services"
import Showcase from "../components/showcase"
import Expo from "../components/expo"
import HireExpo from "../components/hire-expo"
import News from "../components/news"
import Footer from "../components/footer"

//Import helpers
import "../utils/helper"
import { breakText } from "../utils/helper"

const IndexPage = () => {
  const [loaded, setLoaded] = useState(false)
  // const setLoaded = () => {
  //   loaded = true
  // }
  // let loaded = false
  useEffect(async () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    })
    // customMouse()
    if (window.sessionStorage.getItem("firstLoadDone") === null) {
      // await this.setState({ loaded: false });
      //   await setLoaded();
      // window.sessionStorage.setItem('firstLoadDone', 1);
      //   // setTimeout(() => this.setState({ fade: true }), 1600);
      //   setTimeout(() => this.setState({ loaded: true }), 2200);
      // } else {
      //   this.setState({ loaded: true });
      window.sessionStorage.setItem("firstLoadDone", 1)
      setTimeout(() => setLoaded(true), 2000)
    } else {
      setLoaded(true)
    }
  }, [])
  // console.log(loaded)
  // setTimeout(() => console.log(loaded), 2300)
  const ref = useRef(null)
  return (
    <div className="wrapper">
      {/* <span className="circle"></span> */}
      <Header />
      <Phone />
      <Hero />
      <main>
        <SectionBreak
          ref={ref}
          // backgroundColour="#3061E0"
          backgroundColour="rgba(48, 97, 224, 0.9)"
          textColour="#f2f2f2"
          h1={breakText[0].h1}
          p={breakText[0].p}
        />
        <Services />
        <SectionBreak
          // backgroundColour="#f2f2f2"
          backgroundColour="rgba(255, 255, 255, 0.9)"
          textColour="black"
          h1={breakText[1].h1}
        />
        <Showcase />
        <SectionBreak
          // backgroundColour="#3061E0"
          backgroundColour="rgba(48, 97, 224, 0.9)"
          textColour="#f2f2f2"
          h1={breakText[2].h1}
        />
        <News />
        <SectionBreak
          // backgroundColour="white"
          backgroundColour="rgba(255, 255, 255, 0.9)"
          textColour="black"
          h1={breakText[3].h1}
          p={breakText[3].p}
        />
        {/* <Expo /> */}
        <HireExpo />
      </main>
      <Footer />
      <div className="empty">
        <h1 className="empty__title">Lorem ipsum.</h1>
      </div>
      {/* <div
        // className={`loading ${loaded ? "" : "loading__shown"}`}
        className="loading"
        style={loaded ? { opacity: 0 } : { opacity: 1 }}
      >
        <img src={AVLoader} alt="" className="loading__svg" />
      </div> */}
    </div>
  )
}

export default IndexPage
